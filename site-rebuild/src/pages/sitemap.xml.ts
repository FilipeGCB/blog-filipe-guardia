import { getSortedArticles } from '../data/articles';
import { libraryCollections } from '../data/library';
import { portableGuides } from '../data/guides';

const site = 'https://filipegcb.github.io/blog-filipe-guardia';

export function GET() {
  const pages = [
    '/',
    '/artigos.html',
    '/biblioteca.html',
    '/sobre.html',
    '/projetos.html',
    '/contato.html',
    ...libraryCollections.map((collection) => `/biblioteca/${collection.slug}.html`),
    ...portableGuides.map((guide) => `/guias/${guide.slug}.html`),
    ...getSortedArticles().map((article) => `/artigos/${article.slug}.html`)
  ];
  const body = pages.map((path) => `  <url><loc>${site}${path}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
