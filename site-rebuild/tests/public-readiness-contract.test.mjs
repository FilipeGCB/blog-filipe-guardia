import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

const publicProjects = [
  ['Cognitive OS', 'https://github.com/FilipeGCB/cognitive-os'],
  ['Fil-Harness', 'https://github.com/FilipeGCB/fil-harness'],
  ['Visual Presentation Studio', 'https://github.com/FilipeGCB/visual-presentation-studio-public'],
  ['Guard.IA Live', 'https://github.com/FilipeGCB/guardia-live']
];

test('projects page is a public proof-of-work surface with direct repository links', () => {
  const projects = read('src/data/projects.ts');
  const card = read('src/components/ProjectVisualCard.astro');
  const page = read('src/pages/projetos.astro');

  for (const [name, url] of publicProjects) {
    assert.match(projects, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(projects, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }

  assert.doesNotMatch(projects, /title:\s*['"](?:CFO-IA|Hermes|Transformação digital em cobrança e planejamento|Presentation Intelligence System)['"]/i);
  assert.match(card, /project\.repoUrl/);
  assert.match(card, /Abrir repositório/i);
  assert.match(page, /repositórios públicos/i);
});

test('current positioning says B2X and places AI inside Digital Transformation', () => {
  const home = read('src/pages/index.astro');
  const about = read('src/pages/sobre.astro');

  assert.match(home, /B2X/i, 'home must reflect the current B2B + B2C scope');
  assert.match(home, /Transformação Digital/i, 'home must surface Digital Transformation');

  assert.match(about, /B2X/i, 'about must reflect the current B2X scope');
  assert.match(about, /Transformação Digital/i, 'about must make Digital Transformation explicit');
  assert.match(about, /inteligência artificial|\bIA\b/i);
  assert.match(about, /dados/i);
  assert.match(about, /automaç/i);
  assert.match(about, /sistemas|produtos/i);
  assert.match(about, /agentes/i);
  assert.doesNotMatch(about, /Atuo como consultor de planejamento e inteligência de cobrança B2B/i,
    'about must not describe the current role as B2B-only');
});

test('editorial image audit covers all 19 current articles and the two newest slugs', () => {
  const audit = read('docs/editorial/image-audit-2026-08-26.md');

  assert.match(audit, /Article count checked:\s*\*\*19\*\*/i);
  assert.match(audit, /`ia-nao-se-testa-no-feeling`/);
  assert.match(audit, /`local-first-nao-e-apenas-offline`/);
  assert.match(audit, /19 article covers inventoried/i);
  assert.match(audit, /19 technical SVG figures/i);
});

test('legacy public config no longer advertises private project names', () => {
  const config = read('../site-config.js');

  for (const [name, url] of publicProjects) {
    assert.match(config, new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(config, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  }
  assert.doesNotMatch(config, /['"](?:CFO-IA|Hermes|Transformação digital em cobrança e planejamento|Presentation Intelligence System)['"]\s*:/i);
});
