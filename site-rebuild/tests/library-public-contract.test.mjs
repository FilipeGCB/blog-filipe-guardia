import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');
const registry = read('src/data/guides.ts');
const expectedGuides = [...registry.matchAll(/slug:\s*'([^']+)'/g)]
  .map((match) => match[1] + '.md')
  .sort();

test('public library is backed by exactly 24 canonical Obsidian guide snapshots', () => {
  const sourceDir = join(root, 'src', 'content', 'public-guides');
  const publicDir = join(root, 'public', 'guias');
  const sourceGuides = existsSync(sourceDir)
    ? readdirSync(sourceDir).filter((name) => name.endsWith('.md') && name !== '00-KERNEL-EXECUCAO.md').sort()
    : [];
  const publicGuides = existsSync(publicDir)
    ? readdirSync(publicDir).filter((name) => name.endsWith('.md') && name !== '00-KERNEL-EXECUCAO.md').sort()
    : [];

  assert.equal(expectedGuides.length, 24);
  assert.deepEqual(sourceGuides, expectedGuides);
  assert.deepEqual(publicGuides, expectedGuides);
  assert.ok(existsSync(join(sourceDir, '00-KERNEL-EXECUCAO.md')));
  assert.ok(existsSync(join(publicDir, '00-KERNEL-EXECUCAO.md')));
});

test('downloadable guides are byte-for-byte canonical public snapshots, not generated boilerplate', () => {
  for (const name of expectedGuides) {
    const source = readFileSync(join(root, 'src', 'content', 'public-guides', name), 'utf8');
    const published = readFileSync(join(root, 'public', 'guias', name), 'utf8');

    assert.equal(published, source, name + ' differs from its canonical public snapshot');
    assert.match(source, /^---\nid:\s*[A-Z0-9]+\ntitle:/);
    assert.match(source, /\nversion:\s*v\d/);
    assert.match(source, /## Quando ativar/i);
    assert.match(source, /## Quando não ativar/i);
    assert.match(source, /## Entradas mínimas/i);
    assert.match(source, /## Processo obrigatório/i);
    assert.match(source, /## Entrega esperada/i);
    assert.match(source, /## QA e limites/i);
    assert.match(source, /## Regra de execução/i);
    assert.match(source, /00-KERNEL-EXECUCAO\.md/);
    assert.match(source, /## Exemplos de pedidos/i);
    assert.match(source, /## Ajuste da auditoria/i);

    assert.doesNotMatch(source, /## Instruções para o assistente|Este Markdown é o \*\*guia em si\*\*|## Gate final/i,
      name + ' still contains the generic blog-generated template');
    assert.doesNotMatch(source, /Vivo Habilidades|PERFIL-PRIVADO|data:image|vivo-logo/i,
      name + ' leaked the explicitly private corporate overlay');
  }
});

test('public execution kernel matches the checked-in canonical snapshot and is public-safe', () => {
  const source = read('src/content/public-guides/00-KERNEL-EXECUCAO.md');
  const published = read('public/guias/00-KERNEL-EXECUCAO.md');
  assert.equal(published, source);
  assert.match(source, /# Kernel Transversal de Execução/);
  assert.match(source, /Handshake silencioso de capacidade/);
  assert.match(source, /Evidência de teste/);
  assert.doesNotMatch(source, /Vivo Habilidades|PERFIL-PRIVADO|data:image|vivo-logo/i);
});

test('guide provenance pins the Obsidian source used for public snapshots', () => {
  const provenance = JSON.parse(read('src/content/public-guides/PROVENANCE.json'));
  assert.equal(provenance.source_repository, 'FilipeGCB/obsidian-notes');
  assert.equal(provenance.public_guides, 24);
  assert.match(provenance.source_commit, /^[0-9a-f]{40}$/);
  assert.match(provenance.source_root, /12_BIBLIOTECA_HABILIDADES_COPILOT/);
});

test('library explains portable-skill usage and offers Markdown downloads', () => {
  const source = read('src/pages/biblioteca/index.astro');

  assert.match(source, /skill port[aá]til/i);
  assert.match(source, /ChatGPT/i);
  assert.match(source, /Copilot/i);
  assert.match(source, /Claude/i);
  assert.match(source, /Baixar guia \(\.md\)/i);
  assert.match(source, /00-KERNEL-EXECUCAO\.md/);
  assert.doesNotMatch(source, /PageAgentLauncher/);
  assert.doesNotMatch(source, /habilidades\/index\.html/);
  assert.doesNotMatch(source, /habilidades\/biblioteca-completa\.html/);
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
