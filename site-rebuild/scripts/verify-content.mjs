import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url);
const contentDir = new URL('./src/content/articles/', root);
const dataFile = await readFile(new URL('./src/data/articles.ts', root), 'utf8');
const files = (await readdir(contentDir)).filter((file) => file.endsWith('.html')).sort();
const expectedSlugs = [...dataFile.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1]);
const articleMarkers = [...dataFile.matchAll(/\{\s*slug:\s*'([^']+)'[\s\S]*?figureAfterHeading:\s*'([^']+)'[\s\S]*?tags:\s*\[[^\]]*\]\s*\}/g)]
  .map((match) => ({ slug: match[1], figureAfterHeading: match[2] }));

const errors = [];
const uniqueSlugs = new Set(expectedSlugs);

if (uniqueSlugs.size !== expectedSlugs.length) {
  errors.push(`Existem slugs duplicados em articles.ts: ${expectedSlugs.length - uniqueSlugs.size}.`);
}

if (files.length !== expectedSlugs.length) {
  errors.push(`Quantidade divergente: ${files.length} fragmentos de artigo e ${expectedSlugs.length} metadados.`);
}

if (articleMarkers.length !== expectedSlugs.length) {
  errors.push(`Nem todos os artigos possuem figureAfterHeading válido: ${articleMarkers.length}/${expectedSlugs.length}.`);
}

for (const slug of expectedSlugs) {
  const file = `${slug}.html`;
  if (!files.includes(file)) {
    errors.push(`Metadado sem fragmento: ${slug}`);
    continue;
  }

  const content = await readFile(join(new URL('.', contentDir).pathname, file), 'utf8');
  const headings = content.match(/<h2\b/gi) ?? [];
  const marker = articleMarkers.find((item) => item.slug === slug)?.figureAfterHeading;

  if (content.length < 2500) errors.push(`Conteúdo muito curto ou incompleto: ${slug}`);
  if (headings.length < 5) errors.push(`Poucas seções no artigo: ${slug}`);
  if (/<nav class="article-nav"/i.test(content)) errors.push(`Navegação legada permaneceu no artigo: ${slug}`);
  if (marker && !new RegExp(`<h2\\s+id=["']${marker}["']`, 'i').test(content)) {
    errors.push(`figureAfterHeading aponta para heading inexistente em ${slug}: ${marker}`);
  }
}

for (const file of files) {
  const slug = file.replace(/\.html$/i, '');
  if (!uniqueSlugs.has(slug)) errors.push(`Fragmento sem metadado: ${slug}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Conteúdo verificado: ${files.length} artigos integrais, metadados consistentes e âncoras editoriais válidas.`);
