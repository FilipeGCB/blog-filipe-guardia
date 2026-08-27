import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, normalize } from 'node:path';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const manifestPath = join(siteRoot, 'src/data/editorialImageManifest.json');
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
const errors = [];

const clean = (value) => typeof value === 'string' && value.trim().length > 0;
const inside = (path, root) => normalize(path).replaceAll('\\', '/').startsWith(root);
const sortedUniquePositive = (widths) => {
  if (!Array.isArray(widths) || widths.length === 0) return false;
  if (widths.some((width) => !Number.isInteger(width) || width <= 0)) return false;
  if (new Set(widths).size !== widths.length) return false;
  return widths.every((width, index) => index === 0 || width > widths[index - 1]);
};

const checkDerivatives = (id, entry, outputBase, widths) => {
  const formats = entry.formats ?? ['avif', 'webp'];
  for (const width of widths) {
    for (const format of formats) {
      const relative = `${outputBase}-${width}.${format}`;
      if (!existsSync(join(siteRoot, relative))) {
        errors.push(`${id}: missing derivative ${relative}`);
      }
    }
  }
};

const sourceDigest = (entry, sourcePath) => {
  const raw = readFileSync(sourcePath);
  const bytes = entry.sourceEncoding === 'base64-text'
    ? Buffer.from(raw.toString('utf8').replace(/\s+/g, ''), 'base64')
    : raw;
  return createHash('sha256').update(bytes).digest('hex');
};

for (const [id, entry] of Object.entries(manifest)) {
  if (!clean(entry.kind)) errors.push(`${id}: kind is required`);
  if (!clean(entry.status)) errors.push(`${id}: status is required`);

  if (entry.status === 'approved' && !clean(entry.alt)) {
    errors.push(`${id}: approved meaningful image requires alt text`);
  }

  if (entry.identityLocked && entry.status === 'approved' && !clean(entry.source)) {
    errors.push(`${id}: approved identity-locked image requires source`);
  }

  if (entry.source) {
    if (!inside(entry.source, 'assets-source/editorial/')) {
      errors.push(`${id}: source must stay under assets-source/editorial/`);
    }
    const sourcePath = join(siteRoot, entry.source);
    if (!existsSync(sourcePath)) {
      errors.push(`${id}: missing source ${entry.source}`);
    } else if (entry.sourceSha256) {
      const digest = sourceDigest(entry, sourcePath);
      if (digest !== entry.sourceSha256) {
        errors.push(`${id}: source SHA-256 mismatch (expected ${entry.sourceSha256}, got ${digest})`);
      }
    }
  }

  if (entry.outputBase) {
    if (!inside(entry.outputBase, 'public/assets/editorial/')) {
      errors.push(`${id}: outputBase must stay under public/assets/editorial/`);
    }
    if (!sortedUniquePositive(entry.widths)) {
      errors.push(`${id}: raster widths must be positive, unique and strictly ascending`);
    }
  }

  if (entry.publicPath && !inside(entry.publicPath, 'public/assets/editorial/')) {
    errors.push(`${id}: publicPath must stay under public/assets/editorial/`);
  }

  if (entry.status === 'approved' && entry.outputBase && Array.isArray(entry.widths)) {
    checkDerivatives(id, entry, entry.outputBase, entry.widths);
  }

  if (entry.mobile) {
    if (!inside(entry.mobile.outputBase ?? '', 'public/assets/editorial/')) {
      errors.push(`${id}: mobile outputBase must stay under public/assets/editorial/`);
    }
    if (!sortedUniquePositive(entry.mobile.widths)) {
      errors.push(`${id}: mobile widths must be positive, unique and strictly ascending`);
    }
    if (entry.status === 'approved') {
      checkDerivatives(id, entry, entry.mobile.outputBase, entry.mobile.widths);
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error(`image-manifest-error: ${error}`);
  process.exit(1);
}

console.log(`image-manifest-check: ${Object.keys(manifest).length} entries valid`);
