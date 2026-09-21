import { execFileSync } from 'node:child_process';
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { portableGuides } from '../src/data/guides.ts';

const supplied = process.argv[2] || process.env.OBSIDIAN_PUBLIC_GUIDES_DIR;
if (!supplied) {
  throw new Error('Provide the Obsidian prompts directory as an argument or OBSIDIAN_PUBLIC_GUIDES_DIR.');
}

const sourceDir = resolve(supplied);
const libraryDir = dirname(sourceDir);
const outputDir = join(process.cwd(), 'src', 'content', 'public-guides');
const expected = portableGuides.map((guide) => guide.slug + '.md').sort();
const sourceFiles = (await readdir(sourceDir)).filter((name) => name.endsWith('.md')).sort();

if (JSON.stringify(sourceFiles) !== JSON.stringify(expected)) {
  throw new Error('Obsidian guide set does not match the 24-guide public registry.');
}

const privateSection = /\n## Bloco obrigatório para HTML do agente Vivo Habilidades\n[\s\S]*?(?=\n## |$)/g;
const privateLine = /Vivo Habilidades|00-PERFIL-PRIVADO-MARCA-VIVO-HTML\.md|perfil corporativo privado/i;
const privateAny = /Vivo Habilidades|PERFIL-PRIVADO|data:image|vivo-logo/i;
const genericAny = /## Instruções para o assistente|Este Markdown é o \*\*guia em si\*\*|## Gate final/i;
const backtick = String.fromCharCode(96);
const oldKernel = 'Aplicar ' + backtick + '../00-KERNEL-EXECUCAO.md' + backtick + '.';
const newKernel = 'Aplicar também [' + backtick + '00-KERNEL-EXECUCAO.md' + backtick + '](./00-KERNEL-EXECUCAO.md).';

const headings = [
  '## Quando ativar',
  '## Quando não ativar',
  '## Entradas mínimas',
  '## Processo obrigatório',
  '## Entrega esperada',
  '## QA e limites',
  '## Regra de execução',
  '## Exemplos de pedidos',
  '## Ajuste da auditoria'
];

const sanitize = (markdown, name) => {
  let text = markdown.replace(/\r\n/g, '\n');
  text = text.replace(privateSection, '\n');
  text = text.split('\n').filter((line) => !privateLine.test(line)).join('\n');
  text = text.replace(oldKernel, newKernel);
  text = text.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';

  if (privateAny.test(text)) throw new Error(name + ': private corporate overlay leaked');
  if (genericAny.test(text)) throw new Error(name + ': generic blog boilerplate detected');
  for (const heading of headings) {
    if (!text.includes(heading)) throw new Error(name + ': missing canonical heading ' + heading);
  }
  return text;
};

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const name of expected) {
  const source = await readFile(join(sourceDir, name), 'utf8');
  await writeFile(join(outputDir, name), sanitize(source, name), 'utf8');
}

const kernel = (await readFile(join(libraryDir, '00-KERNEL-EXECUCAO.md'), 'utf8'))
  .replace(/\r\n/g, '\n')
  .trimEnd() + '\n';
if (privateAny.test(kernel)) throw new Error('Execution kernel contains private corporate material');
await writeFile(join(outputDir, '00-KERNEL-EXECUCAO.md'), kernel, 'utf8');

let sourceCommit = 'unknown';
let sourceBranch = 'unknown';
let sourceRoot = 'unknown';
try {
  sourceCommit = execFileSync('git', ['-C', sourceDir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  sourceBranch = execFileSync('git', ['-C', sourceDir, 'branch', '--show-current'], { encoding: 'utf8' }).trim();
  const repoRoot = execFileSync('git', ['-C', sourceDir, 'rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
  sourceRoot = relative(repoRoot, libraryDir);
} catch {}

const provenance = {
  source_repository: 'FilipeGCB/obsidian-notes',
  source_branch: sourceBranch,
  source_commit: sourceCommit,
  source_root: sourceRoot,
  public_guides: expected.length,
  transformation: [
    'remove explicitly private Vivo HTML/profile overlay',
    'rewrite kernel link for the standalone public directory',
    'preserve all remaining canonical guide content'
  ]
};

await writeFile(join(outputDir, 'PROVENANCE.json'), JSON.stringify(provenance, null, 2) + '\n', 'utf8');
console.log('public-guides-import: imported 24 canonical Obsidian guides + execution kernel');
