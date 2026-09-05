import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), 'utf8');

test('every editorial technical SVG has a responsive viewBox', () => {
  const dir = join(root, 'public', 'assets', 'editorial', 'figures');
  const files = readdirSync(dir).filter((name) => name.endsWith('.svg'));
  assert.ok(files.length > 0, 'expected editorial SVG figures');

  for (const file of files) {
    const svg = readFileSync(join(dir, file), 'utf8');
    assert.match(svg, /<svg[^>]+viewBox=["'][^"']+["']/i, `${file} must define viewBox`);
  }
});

test('MCP connector lines are painted behind the central MCP node', () => {
  const paths = [
    'public/assets/editorial/figures/mcp-usb-c-inteligencia-artificial.svg',
    'public/assets/editorial/mcp-usb-c-inteligencia-artificial.svg'
  ];

  for (const path of paths) {
    const svg = read(path);
    const centralNode = svg.indexOf('<circle cx="600" cy="360" r="85"');
    const centralLabel = svg.indexOf('>MCP</text>', centralNode);
    const connectors = [...svg.matchAll(/<path class="mcp-connector"/g)].map((match) => match.index ?? -1);

    assert.equal(connectors.length, 4, `${path} must keep exactly four MCP connectors`);
    assert.ok(centralNode > -1 && centralLabel > centralNode, `${path} must keep the central MCP node and label`);
    assert.ok(Math.max(...connectors) < centralNode, `${path} connectors must be behind, not painted over, the MCP label`);
  }
});
