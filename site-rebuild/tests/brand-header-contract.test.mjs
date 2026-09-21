import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const headerPath = path.join(root, 'src/components/SiteHeader.astro');
const assetPath = path.join(root, 'public/assets/brand/guardia-g-hq.webp');
const introPath = path.join(root, 'public/assets/brand/guardia-lockup-intro-hq.webm');

const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');

function webpCanvas(buffer) {
  assert.equal(buffer.subarray(0, 4).toString('ascii'), 'RIFF', 'missing WebP RIFF signature');
  assert.equal(buffer.subarray(8, 12).toString('ascii'), 'WEBP', 'missing WEBP signature');
  assert.equal(buffer.subarray(12, 16).toString('ascii'), 'VP8X', 'expected extended WebP with alpha');
  const flags = buffer[20];
  const width = buffer.readUIntLE(24, 3) + 1;
  const height = buffer.readUIntLE(27, 3) + 1;
  return { width, height, hasAlpha: Boolean(flags & 0x10) };
}

test('Guard.IA header assets keep exact HQ transparent masters', () => {
  const asset = fs.readFileSync(assetPath);
  const canvas = webpCanvas(asset);
  assert.deepEqual(canvas, { width: 299, height: 395, hasAlpha: true });
  assert.equal(asset.length, 54_258);
  assert.equal(sha256(asset), '1b3961dfb3d73e546651979f5dc143073812c48552d71521711ed3bf43b25fd3');

  const intro = fs.readFileSync(introPath);
  assert.equal(intro.length, 175_379, 'HQ transparent WebM intro size changed unexpectedly');
  assert.equal(intro.subarray(0, 4).toString('hex'), '1a45dfa3', 'missing WebM EBML signature');
  assert.equal(sha256(intro), '0e97b3d4808e8b537360bf6beab56c134befad8267c8d6922c4960bf1b91a4ca');
});

test('Guard.IA intro animates only the mark and never hides Filipe header copy', () => {
  const header = fs.readFileSync(headerPath, 'utf8');

  assert.match(header, /guardia-g-hq\.webp/);
  assert.match(header, /guardia-lockup-intro-hq\.webm/);
  assert.match(header, /<span>Filipe Guardia<\/span>/);
  assert.match(header, /<small>B2X · Transformação Digital · IA<\/small>/);
  assert.match(header, /<video[\s\S]*class="guardia-brand-intro"[\s\S]*autoplay[\s\S]*muted[\s\S]*playsinline/s);
  assert.doesNotMatch(header, /brand-intro-active\s+\.brand-copy/);
  assert.doesNotMatch(header, /brand-intro-settling\s+\.brand-copy/);
  assert.doesNotMatch(header, /brand-intro-settled\s+\.brand-copy/);
  assert.match(header, /currentTime\s*>=\s*3\.3/);
  assert.match(header, /brand-intro-settling/);
  assert.match(header, /brand-intro-settled/);
  assert.match(header, /prefers-reduced-motion:\s*reduce/);

  assert.match(header, /\.guardia-brand-mark\s*\{[^}]*width:\s*64px;[^}]*height:\s*72px;[^}]*background:\s*transparent;/s);
  assert.match(header, /\.brand-intro-active\s+\.guardia-brand-mark\s*\{[^}]*width:\s*240px;/s);
  assert.match(header, /\.guardia-brand-intro\s*\{[^}]*width:\s*240px;[^}]*height:\s*90px;/s);
  assert.match(header, /@media \(max-width:\s*660px\)[\s\S]*?\.guardia-brand-mark\s*\{[^}]*width:\s*54px;[^}]*height:\s*60px;/s);
});
