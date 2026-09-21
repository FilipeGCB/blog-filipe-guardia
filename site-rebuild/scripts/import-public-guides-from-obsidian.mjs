import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { portableGuides } from '../src/data/guides.ts';

const supplied = process.argv[2] || process.env.OBSIDIAN_GUIDES_ROOT;
if (!supplied) throw new Error('Provide the formacao-transformacao-digital-ia root via argument or OBSIDIAN_GUIDES_ROOT.');

const root = resolve(supplied);
const promptsDir = join(root, '12_BIBLIOTECA_HABILIDADES_COPILOT', 'prompts');
const outputDir = join(process.cwd(), 'src', 'content', 'public-guides');
const contractsDir = join(process.cwd(), 'src', 'content', 'guide-contracts');
const expectedSlugs = portableGuides.map((guide) => guide.slug).sort();
const promptFiles = (await readdir(promptsDir)).filter((name) => name.endsWith('.md')).sort();
const promptSlugs = promptFiles.map((name) => name.replace(/\.md$/, '')).sort();

if (JSON.stringify(expectedSlugs) !== JSON.stringify(promptSlugs)) {
  throw new Error('Obsidian prompt index does not match the public guide slugs.');
}

const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');
const secretPatterns = [
  /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}/,
  /\bgh[psou]_[A-Za-z0-9]{20,}/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /Bearer\s+[A-Za-z0-9._-]{20,}/i
];

const assertPublicSafe = (label, text) => {
  for (const pattern of secretPatterns) {
    if (pattern.test(text)) throw new Error(label + ': credential-like material detected');
  }
};

await rm(outputDir, { recursive: true, force: true });
await rm(contractsDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
await mkdir(contractsDir, { recursive: true });

const portableStandardPath = join(root, '12_BIBLIOTECA_HABILIDADES_COPILOT', '00-PADRAO-AGENTE-PORTATIL.md');
const artifactContractPath = join(root, '09_GUIAS_COPILOT_ARTEFATOS', '00-CONTRATO-ENTREGA-ARTEFATO-FINAL.md');

const portableStandard = await readFile(portableStandardPath);
const artifactContract = await readFile(artifactContractPath);
assertPublicSafe('portable-agent-standard', portableStandard.toString('utf8'));
assertPublicSafe('artifact-delivery-contract', artifactContract.toString('utf8'));
if (!/^shareable:\s*true$/m.test(portableStandard.toString('utf8'))) throw new Error('portable agent standard is not explicitly shareable');
if (!/^shareable:\s*true$/m.test(artifactContract.toString('utf8'))) throw new Error('artifact delivery contract is not explicitly shareable');

await writeFile(join(contractsDir, 'portable-agent-standard.md'), portableStandard);
await writeFile(join(contractsDir, 'artifact-delivery-contract.md'), artifactContract);

const mappings = [];
for (const slug of expectedSlugs) {
  const compact = await readFile(join(promptsDir, slug + '.md'), 'utf8');
  const match = compact.match(/^source_method:\s*(.+)$/m);
  if (!match) throw new Error(slug + ': source_method missing in Obsidian index');

  const sourcePath = resolve(root, match[1].trim());
  const source = await readFile(sourcePath);
  const text = source.toString('utf8');

  if (!/^shareable:\s*true$/m.test(text)) throw new Error(slug + ': source guide is not explicitly shareable');
  if (!/^type:\s*master_guide$/m.test(text) && !/^tipo:\s*guia-mestre$/m.test(text)) {
    throw new Error(slug + ': source is not marked as a master guide');
  }
  assertPublicSafe(slug, text);

  await writeFile(join(outputDir, slug + '.md'), source);
  mappings.push({
    slug,
    source_method: relative(root, sourcePath),
    bytes: source.length,
    sha256: sha256(source),
    requires_artifact_contract: text.includes('00-CONTRATO-ENTREGA-ARTEFATO-FINAL')
  });
}

let sourceCommit = 'unknown';
let sourceBranch = 'unknown';
try {
  sourceCommit = execFileSync('git', ['-C', root, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  sourceBranch = execFileSync('git', ['-C', root, 'branch', '--show-current'], { encoding: 'utf8' }).trim();
} catch {}

const provenance = {
  source_repository: 'FilipeGCB/obsidian-notes',
  source_branch: sourceBranch,
  source_commit: sourceCommit,
  source_root: relative(resolve(root, '..', '..'), root),
  public_entries: mappings.length,
  unique_source_methods: new Set(mappings.map((item) => item.source_method)).size,
  publication_rule: 'byte-for-byte copy of each shareable master guide referenced by source_method',
  portable_agent_rule: 'generated chat bundle = portable agent standard + optional artifact delivery contract + untouched master guide',
  contracts: {
    portable_agent_standard: {
      source: relative(root, portableStandardPath),
      sha256: sha256(portableStandard)
    },
    artifact_delivery_contract: {
      source: relative(root, artifactContractPath),
      sha256: sha256(artifactContract)
    }
  },
  mappings
};

await writeFile(join(outputDir, 'PROVENANCE.json'), JSON.stringify(provenance, null, 2) + '\n', 'utf8');
console.log('public-guides-import: copied ' + mappings.length + ' entries from ' + provenance.unique_source_methods + ' unique master guides + portable contracts');
