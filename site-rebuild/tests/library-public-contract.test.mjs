import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('public library ships exactly 24 portable Markdown guides', () => {
  const dir = join(root, 'public', 'guias');
  const guides = existsSync(dir)
    ? readdirSync(dir).filter((name) => name.endsWith('.md')).sort()
    : [];

  assert.equal(guides.length, 24, `expected 24 Markdown guides, found ${guides.length}`);
});

test('library explains portable-skill usage and offers Markdown downloads', () => {
  const source = read('src/pages/biblioteca/index.astro');

  assert.match(source, /skill port[aá]til/i);
  assert.match(source, /ChatGPT/i);
  assert.match(source, /Copilot/i);
  assert.match(source, /Claude/i);
  assert.match(source, /Baixar guia \(\.md\)/i);
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
