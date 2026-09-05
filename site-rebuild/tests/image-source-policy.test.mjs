import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const manifestUrl = new URL('../src/data/editorialImageManifest.json', import.meta.url);
const heroCssUrl = new URL('../src/styles/hero-system.css', import.meta.url);
const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));
const heroCss = await readFile(heroCssUrl, 'utf8');

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

test('home hero desktop derivatives never exceed the approved source resolution', () => {
  const home = manifest['portrait:filipe:home'];
  assert.ok(home, 'portrait:filipe:home must exist');
  assert.equal(home.source, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.webp');
  assert.equal(home.allowUpscale, false);
  assert.equal(home.sourceSha256, '12266b14dce58b50c1606c0d4d8a22944f691c8ca538e29566a0d41b654d3713');
  assert.deepEqual(home.widths, [768, 960, 1152]);
  assert.ok(Math.max(...home.widths) <= 1152, 'desktop derivative must not exceed the 1152 px source width');
});

test('desktop hero constrains the approved portrait instead of stretching it across the viewport', () => {
  assert.match(heroCss, /@media \(min-width: 1001px\)/);
  assert.match(heroCss, /width:\s*min\(60vw, 1152px\)/);
  assert.match(heroCss, /right:\s*max\(var\(--gutter\), calc\(\(100vw - var\(--visual-max\)\) \/ 2\)\)/);
  assert.match(heroCss, /aspect-ratio:\s*16\s*\/\s*9/);
});
