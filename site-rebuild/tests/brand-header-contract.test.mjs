import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const headerPath = path.join(root, 'src/components/SiteHeader.astro');
const assetPath = path.join(root, 'public/assets/brand/guardia-g.png');

function pngSize(buffer) {
  assert.equal(buffer.toString('ascii', 1, 4), 'PNG');
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

test('Guard.IA 3D mark keeps enough source density and rendered presence', () => {
  const asset = fs.readFileSync(assetPath);
  const { width, height } = pngSize(asset);
  assert.ok(width >= 180 && height >= 180, `brand source too small: ${width}x${height}`);

  const header = fs.readFileSync(headerPath, 'utf8');
  assert.match(header, /\.guardia-brand-mark\s*\{[^}]*width:\s*64px;[^}]*height:\s*72px;/s);
  assert.match(header, /\.guardia-brand-mark img\s*\{[^}]*width:\s*64px;[^}]*height:\s*72px;/s);
  assert.match(header, /@media \(max-width:\s*720px\)[\s\S]*?\.guardia-brand-mark\s*\{[^}]*width:\s*54px;[^}]*height:\s*60px;/s);
});
