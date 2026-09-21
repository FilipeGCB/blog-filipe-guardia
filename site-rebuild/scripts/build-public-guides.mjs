import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { portableGuides } from '../src/data/guides.ts';

const sourceDir = join(process.cwd(), 'src', 'content', 'public-guides');
const outputDir = join(process.cwd(), 'public', 'guias');
const expected = portableGuides.map((guide) => guide.slug + '.md').sort();
const sourceFiles = (await readdir(sourceDir)).filter((name) => name.endsWith('.md') && name !== '00-KERNEL-EXECUCAO.md').sort();

if (JSON.stringify(sourceFiles) !== JSON.stringify(expected)) {
  throw new Error('Canonical public guide snapshots do not match the 24-guide registry.');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const name of expected) {
  await copyFile(join(sourceDir, name), join(outputDir, name));
}
await copyFile(join(sourceDir, '00-KERNEL-EXECUCAO.md'), join(outputDir, '00-KERNEL-EXECUCAO.md'));

const published = (await readdir(outputDir)).filter((name) => name.endsWith('.md')).sort();
if (published.length !== expected.length + 1) {
  throw new Error('Expected 24 canonical guides plus the execution kernel, found ' + published.length);
}

console.log('public-guides: published 24 canonical Obsidian guides + execution kernel');
