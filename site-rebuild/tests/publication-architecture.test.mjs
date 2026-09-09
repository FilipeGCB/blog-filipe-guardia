import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const packageUrl = new URL('../package.json', import.meta.url);
const workflowUrl = new URL('../../.github/workflows/deploy-editorial-site.yml', import.meta.url);
const publishScriptUrl = new URL('../scripts/publish-public-site.sh', import.meta.url);
const migrateScriptUrl = new URL('../scripts/migrate-private-source-public-deploy.sh', import.meta.url);
const architectureDocUrl = new URL('../docs/editorial/deployment-architecture.md', import.meta.url);

const packageJson = JSON.parse(await readFile(packageUrl, 'utf8'));
const workflow = await readFile(workflowUrl, 'utf8');

test('temporary public-source hotfix keeps the Astro dist deploy authoritative until private cutover', () => {
  assert.match(workflow, /workflow_dispatch:/);
  assert.match(workflow, /\n\s+push:/);
  assert.match(workflow, /branches:\s*\[main\]/);
  assert.match(workflow, /\n\s+pull_request:/);
  assert.match(workflow, /path:\s*site-rebuild\/dist/);
  assert.match(workflow, /actions\/deploy-pages@/);
});

test('local public release runs the full release gates before publishing generated dist only', async () => {
  assert.equal(packageJson.scripts['release:public'], 'bash scripts/publish-public-site.sh');
  const script = await readFile(publishScriptUrl, 'utf8');
  for (const command of [
    'npm run check',
    'npm run build:ci',
    'npm run preserve:legacy',
    'npm run audit:routes',
    'npm run test:visual'
  ]) {
    assert.ok(script.includes(command), `publish script must run: ${command}`);
  }
  assert.match(script, /site-rebuild\/dist|\$DIST_DIR/);
  assert.match(script, /FilipeGCB\/blog-filipe-guardia/);
  assert.match(script, /\.deploy-meta\.json/);
});

test('one-time migration stages the generated public repository before renaming or privatizing source', async () => {
  assert.equal(packageJson.scripts['release:migrate-private'], 'bash scripts/migrate-private-source-public-deploy.sh');
  const script = await readFile(migrateScriptUrl, 'utf8');
  assert.match(script, /blog-filipe-guardia-public-stage/);
  assert.match(script, /blog-filipe-guardia-source/);
  assert.match(script, /visibility private/);
  assert.match(script, /deploy-meta/);
  assert.match(script, /rollback/i);

  const stageIndex = script.indexOf('blog-filipe-guardia-public-stage');
  const privateIndex = script.lastIndexOf('visibility private');
  assert.ok(stageIndex >= 0 && privateIndex > stageIndex, 'public staging must happen before source privacy cutover');
});

test('deployment architecture documents private source, public generated output and zero automatic private CI', async () => {
  const doc = await readFile(architectureDocUrl, 'utf8');
  assert.match(doc, /private source/i);
  assert.match(doc, /public.*generated/i);
  assert.match(doc, /GitHub Actions/i);
  assert.match(doc, /local/i);
});
