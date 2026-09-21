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

const stripFrontmatter = (text) => {
  if (!text.startsWith('---\n')) return text.trim();
  const end = text.indexOf('\n---\n', 4);
  return end === -1 ? text.trim() : text.slice(end + 5).trim();
};

test('public library contains exactly 25 master snapshots and 25 portable chat agents', () => {
  const sourceDir = join(root, 'src', 'content', 'public-guides');
  const masterDir = join(root, 'public', 'guias');
  const agentDir = join(root, 'public', 'agentes');
  const sourceGuides = existsSync(sourceDir)
    ? readdirSync(sourceDir).filter((name) => name.endsWith('.md')).sort()
    : [];
  const publicMasters = existsSync(masterDir)
    ? readdirSync(masterDir).filter((name) => name.endsWith('.md')).sort()
    : [];
  const publicAgents = existsSync(agentDir)
    ? readdirSync(agentDir).filter((name) => name.endsWith('.md')).sort()
    : [];

  assert.equal(expectedGuides.length, 25);
  assert.deepEqual(sourceGuides, expectedGuides);
  assert.deepEqual(publicMasters, expectedGuides);
  assert.deepEqual(publicAgents, expectedGuides);
});

test('master downloads stay byte-for-byte faithful to their source snapshots', () => {
  for (const name of expectedGuides) {
    const source = bytes(join('src', 'content', 'public-guides', name));
    const published = bytes(join('public', 'guias', name));
    const text = source.toString('utf8');

    assert.deepEqual(published, source, name + ' differs from its checked-in master-guide snapshot');
    assert.ok(source.length >= 3000, name + ' is unexpectedly short for a master guide');
    assert.match(text, /^---\n/);
    assert.match(text, /^shareable:\s*true$/m);
    assert.match(text, /^source_of_truth:\s*(?:personal_vault|public_repository)$/m);
    assert.match(text, /^#\s+.+/m);
    assert.doesNotMatch(text, /## Instruções para o assistente|Este Markdown é o \*\*guia em si\*\*/i,
      name + ' contains the former generic blog template');
  }
});

test('portable agents add execution discipline without rewriting the master method', () => {
  const provenance = JSON.parse(read('src/content/public-guides/PROVENANCE.json'));
  const portableStandard = stripFrontmatter(read('src/content/guide-contracts/portable-agent-standard.md'));
  const artifactContract = stripFrontmatter(read('src/content/guide-contracts/artifact-delivery-contract.md'));

  for (const mapping of provenance.mappings) {
    const master = read(join('src', 'content', 'public-guides', mapping.slug + '.md'));
    const agent = read(join('public', 'agentes', mapping.slug + '.md'));

    assert.match(agent, /^# Agente Portátil — /);
    assert.ok(agent.includes(portableStandard), mapping.slug + ': portable standard missing');
    assert.ok(agent.includes(stripFrontmatter(master)), mapping.slug + ': original master method was not preserved');

    if (mapping.requires_artifact_contract) {
      assert.ok(agent.includes(artifactContract), mapping.slug + ': artifact delivery contract missing');
      assert.match(agent, /# Contrato adicional para entrega de artefatos/);
    }
  }
});

test('provenance pins 25 entries, 24 unique source methods and reusable contract hashes', () => {
  const provenance = JSON.parse(read('src/content/public-guides/PROVENANCE.json'));
  assert.equal(provenance.source_repository, 'FilipeGCB/obsidian-notes');
  assert.equal(provenance.public_entries, 25);
  assert.equal(provenance.unique_source_methods, 24);
  assert.match(provenance.source_commit, /^[0-9a-f]{40}$/);
  assert.equal(provenance.mappings.length, 25);
  assert.match(provenance.portable_agent_rule, /portable agent standard/i);

  for (const mapping of provenance.mappings) {
    assert.match(mapping.source_method, /^(09_GUIAS_COPILOT_ARTEFATOS|11_GUIAS_OPERACIONAIS_COPILOT_CHAT)\/.+\.md$/);
    assert.equal(typeof mapping.requires_artifact_contract, 'boolean');
    const snapshot = bytes(join('src', 'content', 'public-guides', mapping.slug + '.md'));
    assert.equal(snapshot.length, mapping.bytes);
    assert.equal(sha256(snapshot), mapping.sha256);
  }

  assert.equal(
    sha256(bytes('src/content/guide-contracts/portable-agent-standard.md')),
    provenance.contracts.portable_agent_standard.sha256
  );
  assert.equal(
    sha256(bytes('src/content/guide-contracts/artifact-delivery-contract.md')),
    provenance.contracts.artifact_delivery_contract.sha256
  );

  const people = provenance.mappings.find((item) => item.slug === 'pessoas-rh');
  const support = provenance.mappings.find((item) => item.slug === 'atendimento-suporte');
  assert.equal(people.source_method, support.source_method, 'Pessoas/RH and Atendimento/Suporte must preserve their shared original guide');
});

test('Cognitive OS guide is public-source based and directly executable in basic chat', () => {
  const guide = read('src/content/public-guides/cognitive-os.md');
  assert.match(guide, /^origin:\s*cognitive-os-public$/m);
  assert.match(guide, /^source_project:\s*FilipeGCB\/cognitive-os$/m);
  assert.match(guide, /^source_version:\s*1\.4\.0$/m);
  assert.match(guide, /^source_commit:\s*fea0fa6ea765283288b835fec1a8ffc5195f29bb$/m);
  assert.match(guide, /Contexto antes do problema\. Problema antes da solução/i);
  assert.match(guide, /## Roteamento de pesquisa/);
  assert.match(guide, /## Capability Discovery/);
  assert.match(guide, /## Next Proof/);
  assert.match(guide, /## Stop Discipline/);
  assert.match(guide, /## Prompt operacional/);
  assert.match(guide, /## Uso no Copilot Chat básico/);
});

test('library presents two usage modes, 10 highlights and direct task-oriented specs', () => {
  const source = read('src/pages/biblioteca/index.astro');
  const card = read('src/components/GuideCard.astro');
  assert.match(source, /Modo Chat/i);
  assert.match(source, /Modo Skill/i);
  assert.match(source, /10 métodos que mais mudam a qualidade/i);
  assert.match(source, /25 métodos/i);
  assert.match(card, /O que faz/);
  assert.match(card, /Use quando/);
  assert.match(card, /Entrega/);
  assert.match(card, /Onde usar/);
  assert.match(card, /Ativar no Chat \(\.md\)/i);
  assert.match(card, /Guia mestre/i);
  assert.match(card, /Instalar Skill/i);
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
