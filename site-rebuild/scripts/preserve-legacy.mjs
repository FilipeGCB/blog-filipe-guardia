import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const siteRoot = new URL('..', import.meta.url);
const repositoryRoot = new URL('../', siteRoot);
const dist = new URL('./dist/', siteRoot);
const rootPath = new URL('.', repositoryRoot).pathname;
const distPath = new URL('.', dist).pathname;
const copied = [];

const assetExtensions = new Set(['.css', '.js', '.json', '.svg', '.png', '.jpg', '.jpeg', '.webp', '.gif', '.ico', '.txt']);
const staticHtml = /^(copilot-.+|fmh-oauth-consent|design-system.*)\.html$/;

try {
  await cp(join(rootPath, 'habilidades'), join(distPath, 'habilidades'), { recursive: true, force: true });
  copied.push('habilidades/');
} catch {
  // The isolated local build does not include the original repository root.
}

const entries = await readdir(rootPath, { withFileTypes: true });
for (const entry of entries) {
  if (!entry.isFile()) continue;
  const extension = entry.name.slice(entry.name.lastIndexOf('.')).toLowerCase();
  const shouldCopy = assetExtensions.has(extension) || staticHtml.test(entry.name);
  if (!shouldCopy) continue;
  await cp(join(rootPath, entry.name), join(distPath, entry.name), { force: true });
  copied.push(entry.name);
}

await mkdir(join(distPath, 'legacy'), { recursive: true });
console.log(copied.length ? `Legado preservado no artifact: ${copied.join(', ')}` : 'Nenhum arquivo legado encontrado no build local isolado.');
