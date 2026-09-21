import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const bytes = (path) => readFileSync(join(root, path));
const sha256 = (buffer) => createHash('sha256').update(buffer).digest('hex');
const registry = read('src/data/guides.ts');
const expectedGuides = [...registry.matchAll(/slug:\s*'([^']+)'/g)]
  .map((match) => match[1] + '.md')
  .sort();

test('public library contains exactly 24 master-guide snapshots', () => {
  const sourceDir = join(root, 'src', 'content', 'public-guides');
  const publicDir = join(root, 'public', 'guias');
  const sourceGuides = existsSync(sourceDir)
    ? readdirSync(sourceDir).filter((name) => name.endsWith('.md')).sort()
    : [];
  const publicGuides = existsSync(publicDir)
    ? readdirSync(publicDir).filter((name) => name.endsWith('.md')).sort()
    : [];

  assert.equal(expectedGuides.length, 24);
  assert.deepEqual(sourceGuides, expectedGuides);
  assert.deepEqual(publicGuides, expectedGuides);
});

test('downloads are byte-for-byte master-guide snapshots, never compact or generic replacements', () => {
  for (const name of expectedGuides) {
    const source = bytes(join('src', 'content', 'public-guides', name));
    const published = bytes(join('public', 'guias', name));
    const text = source.toString('utf8');

    assert.deepEqual(published, source, name + ' differs from its checked-in master-guide snapshot');
    assert.ok(source.length >= 3000, name + ' is unexpectedly short for a master guide');
    assert.match(text, /^---\n/);
    assert.match(text, /^shareable:\s*true$/m);
    assert.match(text, /^source_of_truth:\s*personal_vault$/m);
    assert.match(text, /^#\s+.+/m);
    assert.doesNotMatch(text, /## Instruções para o assistente|Este Markdown é o \*\*guia em si\*\*/i,
      name + ' contains the former generic blog template');
  }
});

test('provenance pins every public entry to the original Obsidian source_method and checksum', () => {
  const provenance = JSON.parse(read('src/content/public-guides/PROVENANCE.json'));
  assert.equal(provenance.source_repository, 'FilipeGCB/obsidian-notes');
  assert.equal(provenance.public_entries, 24);
  assert.equal(provenance.unique_source_methods, 23);
  assert.match(provenance.source_commit, /^[0-9a-f]{40}$/);
  assert.equal(provenance.mappings.length, 24);

  for (const mapping of provenance.mappings) {
    assert.match(mapping.source_method, /^(09_GUIAS_COPILOT_ARTEFATOS|11_GUIAS_OPERACIONAIS_COPILOT_CHAT)\/.+\.md$/);
    const snapshot = bytes(join('src', 'content', 'public-guides', mapping.slug + '.md'));
    assert.equal(snapshot.length, mapping.bytes);
    assert.equal(sha256(snapshot), mapping.sha256);
  }

  const people = provenance.mappings.find((item) => item.slug === 'pessoas-rh');
  const support = provenance.mappings.find((item) => item.slug === 'atendimento-suporte');
  assert.equal(people.source_method, support.source_method, 'Pessoas/RH and Atendimento/Suporte must preserve their shared original guide');
});

test('library identifies the downloads as original master guides', () => {
  const source = read('src/pages/biblioteca/index.astro');
  assert.match(source, /guias mestres originais/i);
  assert.match(source, /23 guias mestres únicos/i);
  assert.match(source, /ChatGPT/i);
  assert.match(source, /Copilot/i);
  assert.match(source, /Claude/i);
  assert.match(source, /Baixar guia \(\.md\)/i);
  assert.doesNotMatch(source, /00-KERNEL-EXECUCAO\.md/);
  assert.doesNotMatch(source, /PageAgentLauncher/);
});

test('legacy habilidades surface stays deployable but leaves editorial sitemap', () => {
  const preserve = read('scripts/preserve-legacy.mjs');
  const sitemap = read('src/pages/sitemap.xml.ts');
  assert.match(preserve, /habilidades/);
  assert.doesNotMatch(sitemap, /['\"]\/habilidades\//);
});

test('contact exposes confirmed direct channels with no placeholders', () => {
  const source = read('src/pages/contato.astro');
  assert.match(source, /filipeguardia@gmail\.com/i);
  assert.match(source, /mailto:filipeguardia@gmail\.com/i);
  assert.match(source, /wa\.me\/5511970641955/i);
  assert.match(source, /t\.me\/\+5511970641955\?profile/i);
  assert.match(source, /tel:\+5511970641955/i);
  assert.match(source, /\+55 11 97064-1955/i);
  assert.doesNotMatch(source, /wa\.me\/0+|t\.me\/(?:placeholder|username|seu)/i);
});
