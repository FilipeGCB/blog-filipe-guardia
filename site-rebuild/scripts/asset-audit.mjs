import { access, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const data = await readFile(new URL('./src/data/articles.ts', root), 'utf8');
const publicDir = new URL('./public/', root);
const errors = [];
const references = [...data.matchAll(/(?:cover|figure):\s*'([^']+)'/g)].map((match) => match[1]);

for (const reference of references) {
  try {
    await access(join(new URL('.', publicDir).pathname, reference.replace(/^\//, '')));
  } catch {
    errors.push(`Asset ausente: ${reference}`);
  }
}

const editorialDir = new URL('./public/assets/editorial/', root);
const figuresDir = new URL('./public/assets/editorial/figures/', root);
const covers = (await readdir(editorialDir)).filter((file) => file.endsWith('.svg') && file !== 'home-system.svg');
const figures = (await readdir(figuresDir)).filter((file) => file.endsWith('.svg'));

if (covers.length !== 15) errors.push(`Esperava 15 capas editoriais; encontrei ${covers.length}.`);
if (figures.length !== 15) errors.push(`Esperava 15 figuras internas; encontrei ${figures.length}.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Assets verificados: ${covers.length} capas, ${figures.length} figuras internas e referências completas.`);
