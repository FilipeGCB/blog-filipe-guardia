import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { portableGuides } from '../src/data/guides.ts';

const sourceDir = join(process.cwd(), 'src', 'content', 'public-guides');
const outputDir = join(process.cwd(), 'public', 'guias');
const expected = portableGuides.map((guide) => guide.slug + '.md').sort();
const sourceFiles = (await readdir(sourceDir)).filter((name) => name.endsWith('.md')).sort();

if (JSON.stringify(sourceFiles) !== JSON.stringify(expected)) {
  throw new Error('Master-guide snapshots do not match the 24-guide public registry.');
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
for (const name of expected) await copyFile(join(sourceDir, name), join(outputDir, name));

const published = (await readdir(outputDir)).filter((name) => name.endsWith('.md')).sort();
if (JSON.stringify(published) !== JSON.stringify(expected)) {
  throw new Error('Published guide set does not match canonical master-guide snapshots.');
}

console.log('public-guides: published 24 master-guide downloads from Obsidian source_method snapshots');
