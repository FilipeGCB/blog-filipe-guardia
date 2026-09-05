import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const siteRoot = join(scriptDir, '..');

const decode = (value) => Buffer.from(value.replace(/\s+/g, ''), 'base64');
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');

const homeSource = join(siteRoot, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.base64.txt');
const homeTarget = join(siteRoot, 'assets-source/editorial/portraits/filipe/home/hero-approved-master.webp');
const homeBytes = decode(await readFile(homeSource, 'utf8'));

const aboutDir = join(siteRoot, 'assets-source/editorial/portraits/filipe/about');
const aboutParts = Array.from({ length: 7 }, (_, index) =>
  join(aboutDir, `about-approved-master.part${String(index + 1).padStart(2, '0')}.b64`)
);
const aboutEncoded = (await Promise.all(aboutParts.map((part) => readFile(part, 'utf8')))).join('');
const aboutBytes = decode(aboutEncoded);
const expectedAboutSha = '38e7d01b5e0e54be464f186a5a0add9d3ee18821de82ebedb19419750346a459';
const actualAboutSha = sha256(aboutBytes);

if (actualAboutSha !== expectedAboutSha) {
  throw new Error(`about master SHA-256 mismatch: expected ${expectedAboutSha}, got ${actualAboutSha}`);
}

await mkdir(dirname(homeTarget), { recursive: true });
await writeFile(homeTarget, homeBytes);
await writeFile(join(aboutDir, 'about-approved-master.webp'), aboutBytes);

console.log(`home master: ${homeBytes.length} bytes sha256=${sha256(homeBytes)}`);
console.log(`about master: ${aboutBytes.length} bytes sha256=${actualAboutSha}`);
