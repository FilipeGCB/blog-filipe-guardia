import { createHash } from 'node:crypto';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');
const decode = (value) => Buffer.from(value.replace(/\s+/g, ''), 'base64');

const homeDir = join(siteRoot, 'assets-source/editorial/portraits/filipe/home');
const homeTextPath = join(homeDir, 'hero-approved-master.base64.txt');
const homeOutputPath = join(homeDir, 'hero-approved-master.webp');
const homeBytes = decode(await readFile(homeTextPath, 'utf8'));
const homeSha = sha256(homeBytes);
const expectedHomeSha = '12266b14dce58b50c1606c0d4d8a22944f691c8ca538e29566a0d41b654d3713';
const homeMetadata = await sharp(homeBytes).metadata();

if (homeSha !== expectedHomeSha) {
  throw new Error(`home master SHA-256 mismatch: expected ${expectedHomeSha}, got ${homeSha}`);
}
if (homeMetadata.format !== 'webp' || homeMetadata.width !== 1152 || homeMetadata.height !== 648) {
  throw new Error(`home master must be the approved 1152x648 WebP; got ${homeMetadata.width}x${homeMetadata.height} ${homeMetadata.format}`);
}

const aboutDir = join(siteRoot, 'assets-source/editorial/portraits/filipe/about');
const aboutParts = Array.from({ length: 7 }, (_, index) =>
  join(aboutDir, `about-approved-master.part${String(index + 1).padStart(2, '0')}.b64`)
);
const aboutEncoded = (await Promise.all(aboutParts.map((path) => readFile(path, 'utf8')))).join('');
const aboutBytes = decode(aboutEncoded);
const aboutSha = sha256(aboutBytes);
const expectedAboutSha = '38e7d01b5e0e54be464f186a5a0add9d3ee18821de82ebedb19419750346a459';
const aboutMetadata = await sharp(aboutBytes).metadata();

if (aboutSha !== expectedAboutSha) {
  throw new Error(`about master SHA-256 mismatch: expected ${expectedAboutSha}, got ${aboutSha}`);
}
if (aboutMetadata.format !== 'webp' || aboutMetadata.width !== 1122 || aboutMetadata.height !== 1402) {
  throw new Error(`about master must be the approved 1122x1402 WebP; got ${aboutMetadata.width}x${aboutMetadata.height} ${aboutMetadata.format}`);
}

await writeFile(homeOutputPath, homeBytes);
await writeFile(join(aboutDir, 'about-approved-master.webp'), aboutBytes);
await rm(homeTextPath);
await Promise.all(aboutParts.map((path) => rm(path)));

console.log(`materialized-home: ${homeMetadata.width}x${homeMetadata.height} sha256=${homeSha}`);
console.log(`materialized-about: ${aboutMetadata.width}x${aboutMetadata.height} sha256=${aboutSha}`);
console.log('base64-master-wrappers-removed');
