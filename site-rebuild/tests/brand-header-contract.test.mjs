import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const headerPath = path.join(root, 'src/components/SiteHeader.astro');
const assetPath = path.join(root, 'public/assets/brand/guardia-g.jpg');
const introPath = path.join(root, 'public/assets/brand/guardia-lockup-intro.webm');

function jpegSize(buffer) {
  assert.equal(buffer[0], 0xff, 'missing JPEG SOI');
  assert.equal(buffer[1], 0xd8, 'missing JPEG SOI');
  assert.equal(buffer.at(-2), 0xff, 'missing JPEG EOI');
  assert.equal(buffer.at(-1), 0xd9, 'missing JPEG EOI');

  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    while (buffer[offset] === 0xff) offset += 1;
    const marker = buffer[offset++];
    if (marker === 0xd9 || marker === 0xda) break;
    if (marker >= 0xd0 && marker <= 0xd7) continue;
    const length = buffer.readUInt16BE(offset);
    const sof = [0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker);
    if (sof) return { height: buffer.readUInt16BE(offset + 3), width: buffer.readUInt16BE(offset + 5) };
    offset += length;
  }
  throw new Error('JPEG dimensions not found');
}

test('Guard.IA brand intro is transparent, motion-safe and settles into the readable 3D G', () => {
  const asset = fs.readFileSync(assetPath);
  const { width, height } = jpegSize(asset);
  assert.equal(width, 192);
  assert.equal(height, 216);

  const intro = fs.readFileSync(introPath);
  assert.equal(intro.length, 14_806, 'transparent WebM intro size changed unexpectedly');
  assert.equal(intro.subarray(0, 4).toString('hex'), '1a45dfa3', 'missing WebM EBML signature');

  const header = fs.readFileSync(headerPath, 'utf8');
  assert.match(header, /guardia-g\.jpg/);
  assert.match(header, /<video[\s\S]*class="guardia-brand-intro"[\s\S]*autoplay[\s\S]*muted[\s\S]*playsinline/s);
  assert.match(header, /guardia-lockup-intro\.webm/);
  assert.match(header, /currentTime\s*>=\s*1\.65/);
  assert.match(header, /brand-intro-settling/);
  assert.match(header, /brand-intro-settled/);
  assert.match(header, /translate3d\(-70px,\s*-50%,\s*0\)/);
  assert.match(header, /translate3d\(-65px,\s*-50%,\s*0\)/);
  assert.match(header, /prefers-reduced-motion:\s*reduce/);
  assert.match(header, /\.guardia-brand-mark\s*\{[^}]*width:\s*64px;[^}]*height:\s*72px;/s);
  assert.match(header, /\.guardia-brand-static\s*\{[^}]*width:\s*64px;[^}]*height:\s*72px;/s);
  assert.match(header, /@media \(max-width:\s*720px\)[\s\S]*?\.guardia-brand-mark\s*\{[^}]*width:\s*54px;[^}]*height:\s*60px;/s);
});
