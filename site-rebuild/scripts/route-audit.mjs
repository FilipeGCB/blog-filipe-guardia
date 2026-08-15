import { access, readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const dist = new URL('./dist/', root);
const data = await readFile(new URL('./src/data/articles.ts', root), 'utf8');
const expectedSlugs = [...data.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const errors = [];

const required = [
  'index.html',
  'artigos.html',
  'biblioteca.html',
  'sobre.html',
  'projetos.html',
  'contato.html',
  '404.html',
  'sitemap.xml',
  'assets/editorial/home-system.svg'
];

for (const path of required) {
  try {
    await access(join(new URL('.', dist).pathname, path));
  } catch {
    errors.push(`Rota ou asset de build ausente: ${path}`);
  }
}

const articlesDir = new URL('./dist/artigos/', root);
const articleRoutes = (await readdir(articlesDir)).filter((file) => file.endsWith('.html')).sort();
const expectedRoutes = expectedSlugs.map((slug) => `${slug}.html`).sort();

if (articleRoutes.length !== expectedRoutes.length) {
  errors.push(`Quantidade divergente de rotas: ${articleRoutes.length} geradas para ${expectedRoutes.length} artigos.`);
}

for (const route of expectedRoutes) {
  if (!articleRoutes.includes(route)) errors.push(`Rota de artigo ausente no build: ${route}`);
}

for (const route of articleRoutes) {
  if (!expectedRoutes.includes(route)) errors.push(`Rota de artigo sem metadado correspondente: ${route}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Rotas verificadas: ${articleRoutes.length} artigos e páginas institucionais principais.`);
