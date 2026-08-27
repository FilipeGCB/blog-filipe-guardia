import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { editorialImages } from '../src/data/editorialImages.ts';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const publicRoot = join(siteRoot, 'public');
const errors = [];

const checkVariant = (assetId, scope, variant) => {
  if (!Number.isFinite(variant.width) || variant.width <= 0) {
    errors.push(`${assetId} ${scope}: invalid width ${variant.width}`);
  }

  for (const format of ['avif', 'webp']) {
    const publicPath = variant[format];
    if (!publicPath || typeof publicPath !== 'string') {
      errors.push(`${assetId} ${scope}: missing ${format} path for ${variant.width}w`);
      continue;
    }

    const filePath = join(publicRoot, publicPath.replace(/^\//, ''));
    if (!existsSync(filePath)) {
      errors.push(`${assetId} ${scope}: missing ${publicPath}`);
    }
  }
};

for (const [assetId, asset] of Object.entries(editorialImages)) {
  if (!asset.alt?.trim()) errors.push(`${assetId}: alt text is required`);
  if (!asset.focalPoint?.trim()) errors.push(`${assetId}: focalPoint is required`);
  if (!asset.sizes?.trim()) errors.push(`${assetId}: sizes is required`);
  if (!Number.isFinite(asset.width) || asset.width <= 0) errors.push(`${assetId}: invalid source width`);
  if (!Number.isFinite(asset.height) || asset.height <= 0) errors.push(`${assetId}: invalid source height`);
  if (!Array.isArray(asset.variants) || asset.variants.length === 0) {
    errors.push(`${assetId}: at least one desktop variant is required`);
  } else {
    for (const variant of asset.variants) checkVariant(assetId, 'desktop', variant);
  }

  if (asset.mobile) {
    if (!asset.mobile.media?.trim()) errors.push(`${assetId} mobile: media is required`);
    if (!asset.mobile.focalPoint?.trim()) errors.push(`${assetId} mobile: focalPoint is required`);
    if (!Array.isArray(asset.mobile.variants) || asset.mobile.variants.length === 0) {
      errors.push(`${assetId} mobile: at least one variant is required`);
    } else {
      for (const variant of asset.mobile.variants) checkVariant(assetId, 'mobile', variant);
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error(`responsive-image-error: ${error}`);
  process.exit(1);
}

console.log(`responsive-image-check: ${Object.keys(editorialImages).length} asset(s) valid`);
