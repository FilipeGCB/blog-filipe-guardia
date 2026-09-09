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
const approvedHeroSha256 = '74b294fba656ee17f29824ff17b33d5d90887fb12e38953e17d8cfb2ff74097b';
const approvedHeroBytes = 341_816;

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

test('home hero preserves the exact approved 4K source instead of a degraded or substituted master', async () => {
  const home = manifest['portrait:filipe:home'];
  assert.ok(home, 'portrait:filipe:home must exist');
  assert.equal(home.source, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.webp');
  assert.equal(home.allowUpscale, false, 'responsive derivatives must only downscale the canonical master');
  assert.deepEqual(home.widths, [960, 1440, 1920, 2560, 3840]);
  assert.equal(home.sourceSha256, approvedHeroSha256, 'manifest must pin the approved canonical hero SHA-256');

  const master = await readFile(heroMasterUrl);
  const metadata = await sharp(master).metadata();
  const sha256 = createHash('sha256').update(master).digest('hex');

  assert.equal(metadata.width, 3840, 'canonical desktop master must be 3840 px wide');
  assert.equal(metadata.height, 2160, 'canonical desktop master must be 2160 px high');
  assert.equal(master.byteLength, approvedHeroBytes, 'canonical desktop master byte size must match the approved source exactly');
  assert.equal(sha256, approvedHeroSha256, 'canonical desktop master SHA-256 must match the approved source exactly');
});

test('desktop hero can use the high-resolution master without stretching beyond the visual shell', () => {
  assert.match(heroCss, /@media \(min-width: 1001px\)/);
  assert.match(heroCss, /width:\s*min\(60vw, 1760px\)/);
  assert.match(heroCss, /right:\s*max\(var\(--gutter\), calc\(\(100vw - var\(--visual-max\)\) \/ 2\)\)/);
  assert.match(heroCss, /aspect-ratio:\s*16\s*\/\s*9/);
});
