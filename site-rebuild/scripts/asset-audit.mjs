import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const data = await readFile(new URL('./src/data/articles.ts', root), 'utf8');
const publicDir = new URL('./public/', root);
const errors = [];

const slugs = [...data.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const covers = [...data.matchAll(/cover:\s*'([^']+)'/g)].map((match) => match[1]);
const figures = [...data.matchAll(/figure:\s*'([^']+)'/g)].map((match) => match[1]);

if (covers.length !== slugs.length) {
  errors.push(`Quantidade divergente de capas: ${covers.length} referências para ${slugs.length} artigos.`);
}

if (figures.length !== slugs.length) {
  errors.push(`Quantidade divergente de figuras: ${figures.length} referências para ${slugs.length} artigos.`);
}

for (const reference of [...covers, ...figures]) {
  try {
    await access(join(new URL('.', publicDir).pathname, reference.replace(/^\//, '')));
  } catch {
    errors.push(`Asset ausente: ${reference}`);
  }
}

for (const cover of covers) {
  if (!cover.startsWith('/assets/editorial/')) {
    errors.push(`Capa fora da árvore editorial: ${cover}`);
  }
}

for (const figure of figures) {
  if (!figure.startsWith('/assets/editorial/figures/')) {
    errors.push(`Figura fora da pasta editorial de figuras: ${figure}`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Assets verificados: ${covers.length} capas e ${figures.length} figuras referenciadas, todos os arquivos presentes.`);
