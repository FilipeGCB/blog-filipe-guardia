import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const repoRoot = join(siteRoot, '..');
const outputDir = join(siteRoot, '.hero-inspection');

const decode = (value) => Buffer.from(value.replace(/\s+/g, ''), 'base64');
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const readJoinedBase64 = async (paths) => {
  const encoded = (await Promise.all(paths.map((path) => readFile(path, 'utf8')))).join('');
  return decode(encoded);
};

const describe = async (label, bytes) => {
  const metadata = await sharp(bytes).metadata();
  console.log(`${label}: ${bytes.length} bytes sha256=${sha256(bytes)} ${metadata.width}x${metadata.height} format=${metadata.format}`);
};

const currentHomeBytes = decode(
  await readFile(
    join(siteRoot, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.base64.txt'),
    'utf8'
  )
);

const legacyHomeParts = Array.from({ length: 6 }, (_, index) =>
  join(repoRoot, 'assets/hero', `filipe-home-${String(index + 1).padStart(2, '0')}.txt`)
);
const legacyHomeBytes = await readJoinedBase64(legacyHomeParts);

const aboutDir = join(siteRoot, 'assets-source/editorial/portraits/filipe/about');
const aboutParts = Array.from({ length: 7 }, (_, index) =>
  join(aboutDir, `about-approved-master.part${String(index + 1).padStart(2, '0')}.b64`)
);
const aboutBytes = await readJoinedBase64(aboutParts);
const expectedAboutSha = '38e7d01b5e0e54be464f186a5a0add9d3ee18821de82ebedb19419750346a459';
const actualAboutSha = sha256(aboutBytes);

if (actualAboutSha !== expectedAboutSha) {
  throw new Error(`about master SHA-256 mismatch: expected ${expectedAboutSha}, got ${actualAboutSha}`);
}

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'current-home.webp'), currentHomeBytes);
await writeFile(join(outputDir, 'legacy-home.webp'), legacyHomeBytes);
await writeFile(join(outputDir, 'about-master.webp'), aboutBytes);

await describe('current-home', currentHomeBytes);
await describe('legacy-home', legacyHomeBytes);
await describe('about-master', aboutBytes);
