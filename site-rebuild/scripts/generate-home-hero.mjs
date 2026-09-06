import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const sourcePath = join(
  siteRoot,
  'assets-source/editorial/portraits/filipe/home/hero-approved-master.webp'
);
const outputDir = join(siteRoot, 'public/assets/editorial/portraits/filipe/home');
const desktopWidths = [960, 1440, 1920, 2560, 3840];
const mobileWidths = [480, 768, 960];

const metadata = await sharp(sourcePath, { failOn: 'error' }).metadata();

if (!metadata.width || !metadata.height) {
  throw new Error('Approved hero source has no readable dimensions.');
}

if (metadata.width !== 3840 || metadata.height !== 2160) {
  throw new Error(`Approved hero source must be the canonical 3840x2160 master; received ${metadata.width}x${metadata.height}.`);
}

const sourceRatio = metadata.width / metadata.height;
if (Math.abs(sourceRatio - 16 / 9) > 0.005) {
  throw new Error(`Approved hero source must remain 16:9; received ${metadata.width}x${metadata.height}.`);
}

await mkdir(outputDir, { recursive: true });

const desktop = async (width, format) => {
  const height = Math.round(width * 9 / 16);
  const pipeline = sharp(sourcePath, { failOn: 'error' })
    .resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 0.35, m1: 0.45, m2: 0.2 });

  const file = join(outputDir, `hero-${width}.${format}`);
  if (format === 'avif') await pipeline.avif({ quality: 76, effort: 6 }).toFile(file);
  else await pipeline.webp({ quality: 94, effort: 6, smartSubsample: true }).toFile(file);
};

const cropHeight = metadata.height;
const cropWidth = Math.round(cropHeight * 4 / 5);
const focalX = Math.round(metadata.width * 0.68);
const cropLeft = Math.max(0, Math.min(metadata.width - cropWidth, focalX - Math.round(cropWidth * 0.5)));

const mobile = async (width, format) => {
  const height = Math.round(width * 5 / 4);
  const pipeline = sharp(sourcePath, { failOn: 'error' })
    .extract({ left: cropLeft, top: 0, width: cropWidth, height: cropHeight })
    .resize(width, height, {
      fit: 'fill',
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 0.3, m1: 0.4, m2: 0.18 });

  const file = join(outputDir, `hero-mobile-${width}.${format}`);
  if (format === 'avif') await pipeline.avif({ quality: 72, effort: 6 }).toFile(file);
  else await pipeline.webp({ quality: 92, effort: 6, smartSubsample: true }).toFile(file);
};

for (const width of desktopWidths) {
  await desktop(width, 'avif');
  await desktop(width, 'webp');
}

for (const width of mobileWidths) {
  await mobile(width, 'avif');
  await mobile(width, 'webp');
}

console.log(
  `responsive-hero-generated: source ${metadata.width}x${metadata.height}; desktop up to ${Math.max(...desktopWidths)}px; ${desktopWidths.length * 2 + mobileWidths.length * 2} derivatives`
);
