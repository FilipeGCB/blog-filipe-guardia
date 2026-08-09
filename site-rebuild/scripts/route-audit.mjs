import { access, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const dist = new URL('./dist/', root);
const errors = [];
const required = [
  'index.html',
  'artigos.html',
  'biblioteca.html',
  'sobre.html',
  'projetos.html',
  'contato.html',
  '404.html',
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
const articleRoutes = (await readdir(articlesDir)).filter((file) => file.endsWith('.html'));
if (articleRoutes.length !== 15) errors.push(`Esperava 15 rotas de artigo; encontrei ${articleRoutes.length}.`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Rotas verificadas: ${articleRoutes.length} artigos e páginas institucionais principais.`);
