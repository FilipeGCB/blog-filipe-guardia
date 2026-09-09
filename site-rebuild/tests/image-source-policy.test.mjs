import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import sharp from 'sharp';

const manifestUrl = new URL('../src/data/editorialImageManifest.json', import.meta.url);
const heroCssUrl = new URL('../src/styles/hero-system.css', import.meta.url);
const heroMasterUrl = new URL('../assets-source/editorial/portraits/filipe/home/hero-approved-master.webp', import.meta.url);
const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));
const heroCss = await readFile(heroCssUrl, 'utf8');
const expectedHeroSha = 'd61311519543dbc1774d49746d0a10b3f83b9eede45ce1fa0e6fe96321bde88e';
const expectedHeroBytes = 218440;

test('approved raster masters use real binary source files instead of base64 transport wrappers', () => {
  const violations = [];

  for (const [id, entry] of Object.entries(manifest)) {
    if (entry.status !== 'approved') continue;

    if (entry.sourceEncoding === 'base64-text' || entry.sourceEncoding === 'base64-parts') {
      violations.push(`${id}: sourceEncoding=${entry.sourceEncoding}`);
    }
    if (Array.isArray(entry.sourceParts) && entry.sourceParts.length > 0) {
      violations.push(`${id}: sourceParts`);
    }
    if (typeof entry.source === 'string' && /(?:\.base64\.txt|\.b64)$/i.test(entry.source)) {
      violations.push(`${id}: ${entry.source}`);
    }
  }

  assert.deepEqual(violations, []);
});

test('home hero preserves the authoritative source normalization and never fabricates higher source density', async () => {
  const home = manifest['portrait:filipe:home'];
  assert.ok(home, 'portrait:filipe:home must exist');
  assert.equal(home.source, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.webp');
  assert.equal(home.allowUpscale, false, 'responsive derivatives must only downscale deterministic crops of the authoritative source');
  assert.deepEqual(home.widths, [960, 1440, 1536]);
  assert.deepEqual(home.mobile?.widths, [480, 768, 819]);
  assert.equal(home.sourceSha256, expectedHeroSha);

  const master = await readFile(heroMasterUrl);
  const metadata = await sharp(master).metadata();
  const sha256 = createHash('sha256').update(master).digest('hex');

  assert.equal(metadata.width, 1536, 'canonical hero must remain 1536 px wide');
  assert.equal(metadata.height, 1024, 'canonical hero must remain 1024 px high');
  assert.equal(master.byteLength, expectedHeroBytes, 'canonical hero byte size must match the normalized authoritative source');
  assert.equal(sha256, expectedHeroSha, 'canonical hero SHA-256 must match the normalized authoritative source');
});

test('desktop hero stays within the authoritative source density and the visual shell', () => {
  assert.match(heroCss, /@media \(min-width: 1001px\)/);
  assert.match(heroCss, /width:\s*min\(60vw, 1536px\)/);
  assert.match(heroCss, /right:\s*max\(var\(--gutter\), calc\(\(100vw - var\(--visual-max\)\) \/ 2\)\)/);
  assert.match(heroCss, /aspect-ratio:\s*16\s*\/\s*9/);
});
