import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';
import manifest from '../src/data/editorialImageManifest.json' with { type: 'json' };

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const errors = [];

const parseRatio = (value) => {
  if (!value) return undefined;
  const [w, h] = String(value).split(':').map(Number);
  if (!w || !h || w <= 0 || h <= 0) throw new Error(`Invalid aspect ratio: ${value}`);
  return w / h;
};

const readSource = async (entry) => {
  const sourcePath = join(siteRoot, entry.source);
  if (entry.sourceEncoding === 'base64-text') {
    const encoded = (await readFile(sourcePath, 'utf8')).replace(/\s+/g, '');
    return Buffer.from(encoded, 'base64');
  }
  return sourcePath;
};

const buildEntry = async (id, entry) => {
  if (!entry.source || !entry.outputBase || !Array.isArray(entry.widths)) return;
  const source = await readSource(entry);
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`${id}: unreadable raster source`);

  const ratio = parseRatio(entry.aspectRatio);
  const formats = entry.formats ?? ['avif', 'webp'];
  const avifQuality = entry.quality?.avif ?? 55;
  const webpQuality = entry.quality?.webp ?? 82;

  for (const width of entry.widths) {
    const outputBase = join(siteRoot, `${entry.outputBase}-${width}`);
    await mkdir(dirname(outputBase), { recursive: true });
    const height = ratio ? Math.round(width / ratio) : undefined;
    const resized = sharp(source, { failOn: 'error' }).resize({
      width,
      height,
      fit: ratio ? 'cover' : 'inside',
      position: entry.sharpPosition ?? 'centre',
      withoutEnlargement: !entry.allowUpscale,
      kernel: sharp.kernel.lanczos3
    });

    for (const format of formats) {
      const output = `${outputBase}.${format}`;
      if (format === 'avif') await resized.clone().avif({ quality: avifQuality, effort: 5 }).toFile(output);
      else if (format === 'webp') await resized.clone().webp({ quality: webpQuality, effort: 5, smartSubsample: true }).toFile(output);
      else throw new Error(`${id}: unsupported format ${format}`);
      console.log(`image-variant: ${output.replace(`${siteRoot}/`, '')}`);
    }
  }
};

for (const [id, entry] of Object.entries(manifest)) {
  try {
    await buildEntry(id, entry);
  } catch (error) {
    errors.push(`${id}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (errors.length) {
  for (const error of errors) console.error(`image-build-error: ${error}`);
  process.exit(1);
}
