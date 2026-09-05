import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('project diagrams must not rely on a single unbreakable horizontal flow', () => {
  const card = read('src/components/ProjectVisualCard.astro');
  const css = read('src/styles/project-system.css');

  assert.match(card, /project-flow/);
  assert.match(css, /flex-wrap\s*:\s*wrap|grid-template-columns\s*:\s*repeat\(/i,
    'project flow needs an adaptive layout that cannot clip its last node');
});

test('technical SVG figures must explicitly protect central labels from connectors', () => {
  const candidates = [
    '../assets/editorial/uma-ia-para-cada-tarefa.svg',
    '../assets/editorial/mcp.svg',
    '../assets/editorial/por-que-a-proxima-geracao-de-software-sera-construida-em-torno-de-agentes.svg'
  ];

  const existing = candidates.filter((path) => {
    try { read(path); return true; } catch { return false; }
  });

  assert.ok(existing.length > 0, 'expected at least one representative technical SVG fixture');

  for (const path of existing) {
    const svg = read(path);
    assert.match(svg, /data-label-safe-zone|class=["'][^"']*label-safe-zone/i,
      `${path} must declare a protected label safe zone so connectors cannot cross text`);
  }
});
