import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { portableGuides } from '../src/data/guides.ts';

const sourceDir = join(process.cwd(), 'src', 'content', 'public-guides');
const contractsDir = join(process.cwd(), 'src', 'content', 'guide-contracts');
const masterOutputDir = join(process.cwd(), 'public', 'guias');
const agentOutputDir = join(process.cwd(), 'public', 'agentes');
const expected = portableGuides.map((guide) => guide.slug + '.md').sort();
const sourceFiles = (await readdir(sourceDir)).filter((name) => name.endsWith('.md')).sort();

if (JSON.stringify(sourceFiles) !== JSON.stringify(expected)) {
  throw new Error('Master-guide snapshots do not match the public guide registry.');
}

const provenance = JSON.parse(await readFile(join(sourceDir, 'PROVENANCE.json'), 'utf8'));
const mappingBySlug = new Map(provenance.mappings.map((item) => [item.slug, item]));

const stripFrontmatter = (text) => {
  if (!text.startsWith('---\n')) return text.trim();
  const end = text.indexOf('\n---\n', 4);
  return end === -1 ? text.trim() : text.slice(end + 5).trim();
};

const portableStandard = stripFrontmatter(await readFile(join(contractsDir, 'portable-agent-standard.md'), 'utf8'));
const artifactContract = stripFrontmatter(await readFile(join(contractsDir, 'artifact-delivery-contract.md'), 'utf8'));

await rm(masterOutputDir, { recursive: true, force: true });
await rm(agentOutputDir, { recursive: true, force: true });
await mkdir(masterOutputDir, { recursive: true });
await mkdir(agentOutputDir, { recursive: true });

for (const guide of portableGuides) {
  const name = guide.slug + '.md';
  const master = await readFile(join(sourceDir, name), 'utf8');
  const mapping = mappingBySlug.get(guide.slug);
  if (!mapping) throw new Error(guide.slug + ': missing provenance mapping');

  await copyFile(join(sourceDir, name), join(masterOutputDir, name));

  const parts = [
    '# Agente Portátil — ' + guide.title,
    '',
    '> **Como usar:** anexe este único arquivo ao Copilot Chat, ChatGPT, Claude ou outro assistente com contexto Markdown e faça seu pedido normalmente.',
    '>',
    '> Este arquivo não instala ferramentas. Ele combina um contrato de execução reutilizável com o método de domínio original, preservado sem reescrita.',
    '',
    portableStandard
  ];

  if (mapping.requires_artifact_contract) {
    parts.push(
      '',
      '---',
      '',
      '# Contrato adicional para entrega de artefatos',
      '',
      artifactContract
    );
  }

  parts.push(
    '',
    '---',
    '',
    '# Método de domínio original',
    '',
    stripFrontmatter(master)
  );

  await writeFile(join(agentOutputDir, name), parts.join('\n').trimEnd() + '\n', 'utf8');
}

const publishedMasters = (await readdir(masterOutputDir)).filter((name) => name.endsWith('.md')).sort();
const publishedAgents = (await readdir(agentOutputDir)).filter((name) => name.endsWith('.md')).sort();
if (JSON.stringify(publishedMasters) !== JSON.stringify(expected)) throw new Error('Published master guide set is incomplete.');
if (JSON.stringify(publishedAgents) !== JSON.stringify(expected)) throw new Error('Published portable-agent set is incomplete.');

console.log('public-guides: published ' + expected.length + ' original master guides + ' + expected.length + ' portable chat agents');
