import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const sourcePath = join(
  siteRoot,
  'assets-source/editorial/portraits/filipe/home/hero-approved-master.png'
);
const outputDir = join(siteRoot, 'public/assets/editorial/portraits/filipe/home');

// The uploaded authoritative source is 1536x1024 (3:2). Derivatives are only
// downscaled from deterministic crops; the pipeline never invents source detail.
const desktopWidths = [960, 1440, 1536];
const mobileWidths = [480, 768, 819];

const metadata = await sharp(sourcePath, { failOn: 'error' }).metadata();

if (!metadata.width || !metadata.height) {
  throw new Error('Approved hero source has no readable dimensions.');
}

if (metadata.width !== 1536 || metadata.height !== 1024) {
  throw new Error(`Approved hero source must be the authoritative 1536x1024 upload; received ${metadata.width}x${metadata.height}.`);
}

await mkdir(outputDir, { recursive: true });

// Desktop keeps a 16:9 presentation crop around the approved focal point while
// preserving the original face, pose and central composition.
const desktopCropWidth = metadata.width;
const desktopCropHeight = Math.round(desktopCropWidth * 9 / 16);
const focalY = Math.round(metadata.height * 0.48);
const desktopCropTop = Math.max(
  0,
  Math.min(metadata.height - desktopCropHeight, focalY - Math.round(desktopCropHeight * 0.5))
);

const desktop = async (width, format) => {
  const height = Math.round(width * 9 / 16);
  const pipeline = sharp(sourcePath, { failOn: 'error' })
    .extract({ left: 0, top: desktopCropTop, width: desktopCropWidth, height: desktopCropHeight })
    .resize(width, height, {
      fit: 'fill',
      withoutEnlargement: true,
      kernel: sharp.kernel.lanczos3
    })
    .sharpen({ sigma: 0.35, m1: 0.45, m2: 0.2 });

  const file = join(outputDir, `hero-${width}.${format}`);
  if (format === 'avif') await pipeline.avif({ quality: 76, effort: 6 }).toFile(file);
  else await pipeline.webp({ quality: 94, effort: 6, smartSubsample: true }).toFile(file);
};

const mobileCropHeight = metadata.height;
const mobileCropWidth = Math.round(mobileCropHeight * 4 / 5);
const focalX = Math.round(metadata.width * 0.68);
const mobileCropLeft = Math.max(
  0,
  Math.min(metadata.width - mobileCropWidth, focalX - Math.round(mobileCropWidth * 0.5))
);

const mobile = async (width, format) => {
  const height = Math.round(width * 5 / 4);
  const pipeline = sharp(sourcePath, { failOn: 'error' })
    .extract({ left: mobileCropLeft, top: 0, width: mobileCropWidth, height: mobileCropHeight })
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
  `responsive-hero-generated: source ${metadata.width}x${metadata.height}; desktop ${desktopWidths.join(',')}; mobile ${mobileWidths.join(',')}; ${desktopWidths.length * 2 + mobileWidths.length * 2} derivatives`
);
