import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const contentDir = new URL('./src/content/articles/', root);
const dataFile = await readFile(new URL('./src/data/articles.ts', root), 'utf8');
const files = (await readdir(contentDir)).filter((file) => file.endsWith('.html')).sort();
const expectedSlugs = [...dataFile.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);

const errors = [];
if (files.length !== 15) errors.push(`Esperava 15 fragmentos de artigo; encontrei ${files.length}.`);
if (expectedSlugs.length !== 15) errors.push(`Esperava 15 metadados; encontrei ${expectedSlugs.length}.`);

for (const slug of expectedSlugs) {
  const file = `${slug}.html`;
  if (!files.includes(file)) {
    errors.push(`Metadado sem fragmento: ${slug}`);
    continue;
  }
  const content = await readFile(join(new URL('.', contentDir).pathname, file), 'utf8');
  const headings = content.match(/<h2\b/gi) ?? [];
  if (content.length < 2500) errors.push(`Conteúdo muito curto ou incompleto: ${slug}`);
  if (headings.length < 5) errors.push(`Poucas seções no artigo: ${slug}`);
  if (/<nav class="article-nav"/i.test(content)) errors.push(`Navegação legada permaneceu no artigo: ${slug}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Conteúdo verificado: ${files.length} artigos integrais, ${expectedSlugs.length} metadados.`);
