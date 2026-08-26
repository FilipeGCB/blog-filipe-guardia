# Page Visual Rebuild and Responsive QA Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the approved Night/Editorial visual system to every primary route, add missing page-specific visuals, and prove that all major pages work without broken images, overflow or awkward empty space from mobile through 4K.

**Architecture:** Reuse the responsive shells and image system from Plan 1, and the audited/generated assets from Plan 2. Rebuild page composition route-by-route with a shared page-intro pattern, visual project/library variants, Night article headers and Editorial reading bodies, then add Playwright-based viewport checks for layout, image loading and horizontal overflow.

**Tech Stack:** Astro 7, TypeScript 6, CSS Grid/Flexbox, Playwright, AVIF/WebP/SVG.

**Spec:** `docs/superpowers/specs/2026-08-26-blog-visual-system-design.md`

## Global Constraints

- Do not change article meaning or rewrite long-form content except layout-related copy/alt corrections.
- Night for hero/entry moments; Editorial for reading/content density.
- No image should be added merely to fill space.
- Projects must not expose private implementation or present fictional UI as a real screenshot.
- Text reading width remains approximately 760–820 px even on 4K.
- No horizontal overflow at any required viewport.
- Respect reduced motion and keyboard navigation.

---

## File Structure

**Create**
- `site-rebuild/src/components/PageIntroVisual.astro` — reusable Night/Editorial page-entry layout.
- `site-rebuild/src/components/ProjectVisualCard.astro` — project card with optional editorial visual.
- `site-rebuild/tests/responsive-visual.spec.ts` — viewport and image smoke tests.
- `site-rebuild/playwright.config.ts` — local preview test configuration.

**Modify**
- `site-rebuild/src/pages/index.astro`
- `site-rebuild/src/pages/artigos/index.astro`
- `site-rebuild/src/components/ArticleLayout.astro`
- `site-rebuild/src/pages/sobre.astro`
- `site-rebuild/src/pages/projetos.astro`
- `site-rebuild/src/pages/biblioteca/index.astro`
- `site-rebuild/src/pages/contato.astro`
- `site-rebuild/src/pages/obrigado.astro`
- `site-rebuild/src/pages/404.astro`
- `site-rebuild/src/components/ProjectCase.astro` or replace with `ProjectVisualCard.astro`
- `site-rebuild/src/data/projects.ts`
- `site-rebuild/src/styles/global.css`
- `site-rebuild/package.json`
- `.github/workflows/deploy-editorial-site.yml`

---

### Task 1: Build a reusable page-intro component

**Files:**
- Create: `site-rebuild/src/components/PageIntroVisual.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes `eyebrow`, `title`, `deck`, `theme`, optional `assetId`, optional `actions` slot.
- Produces consistent Night or Editorial intros for Articles, About, Projects and Library.

- [ ] **Step 1: Create the component contract**

```ts
interface Props {
  eyebrow: string;
  title: string;
  deck: string;
  theme?: 'night' | 'editorial';
  assetId?: string;
  currentLabel?: string;
}
```

- [ ] **Step 2: Render visual and copy in separate regions**

For `theme='night'`, wrap in `.page-intro-night` and use `.visual-shell`. If `assetId` exists, render `EditorialVisual` beside/behind copy with an overlay. If absent, render a typographic composition rather than an empty placeholder.

- [ ] **Step 3: Add responsive CSS**

Desktop: two-column or layered composition depending on visual. Mobile: one-column; image and title must not overlap unpredictably.

- [ ] **Step 4: Run Astro checks**

```bash
cd site-rebuild
npm run check
npm run build
```
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add site-rebuild/src/components/PageIntroVisual.astro site-rebuild/src/styles/global.css
git commit -m "feat: add reusable cinematic page intro"
```

---

### Task 2: Rebuild the article archive and article header/body transition

**Files:**
- Modify: `site-rebuild/src/pages/artigos/index.astro`
- Modify: `site-rebuild/src/components/ArticleLayout.astro`
- Modify: `site-rebuild/src/components/ArticleCard.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes responsive `cover:<slug>` assets from Plan 2.

- [ ] **Step 1: Convert archive intro to Night**

Use `PageIntroVisual` without a personal portrait. Keep the archive filters and article count.

- [ ] **Step 2: Let the archive grid use editorial shell width**

Cards should grow on 1440p/4K rather than staying constrained to the old 1180 px page shell. Keep metadata readable and cap text line lengths inside cards.

- [ ] **Step 3: Convert article hero to Night**

In `ArticleLayout.astro`, keep title, deck, meta, tags and cover. Use `.visual-shell article-hero-grid` and responsive cover asset.

- [ ] **Step 4: Keep reading body Editorial**

Structure the body as:

```astro
<div class="editorial-shell article-body-shell">
  <aside class="article-aside">...</aside>
  <article class="article-content reading-shell">...</article>
</div>
```

Do not make paragraph text span the whole editorial shell.

- [ ] **Step 5: Make technical figures optionally wide**

`.inline-figure.is-wide` may extend to the editorial shell; ordinary figures remain aligned with reading flow.

- [ ] **Step 6: Run build gates**

```bash
cd site-rebuild
npm run check
npm run build
npm run audit:routes
```
Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add site-rebuild/src/pages/artigos/index.astro site-rebuild/src/components/ArticleLayout.astro site-rebuild/src/components/ArticleCard.astro site-rebuild/src/styles/global.css
git commit -m "feat: apply night editorial article experience"
```

---

### Task 3: Rebuild About with a dedicated editorial portrait

**Files:**
- Modify: `site-rebuild/src/pages/sobre.astro`
- Modify: `site-rebuild/src/styles/global.css`
- Consume: approved `portrait:filipe:about` asset from Plan 2 audit/generation.

**Interfaces:**
- Uses `PageIntroVisual` with `assetId='portrait:filipe:about'`.

- [ ] **Step 1: Generate/select the About portrait before coding the page**

Direction: natural professional light, casual clothing, contemporary environment, faithful face, no suit, no influencer pose, no reuse of the home composition.

- [ ] **Step 2: Add the portrait to the About intro**

The image should support the text, not dominate the page as strongly as the homepage hero.

- [ ] **Step 3: Reflow the timeline responsively**

Desktop: horizontal/2-column rhythm where useful. Tablet/mobile: single-column chronological flow with clear period hierarchy.

- [ ] **Step 4: Preserve all existing career copy unless a line must move for layout**

No substantive biography rewrite in this task.

- [ ] **Step 5: Run checks and commit**

```bash
cd site-rebuild
npm run check
npm run build
git add site-rebuild/src/pages/sobre.astro site-rebuild/src/styles/global.css
git commit -m "feat: rebuild about page with editorial portrait"
```

---

### Task 4: Turn Projects into a visual proof-of-work page

**Files:**
- Create: `site-rebuild/src/components/ProjectVisualCard.astro`
- Modify: `site-rebuild/src/pages/projetos.astro`
- Modify: `site-rebuild/src/data/projects.ts`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Extend `Project` with `visualAsset: string` and `visualAlt: string`.

- [ ] **Step 1: Extend the Project interface**

```ts
export interface Project {
  label: string;
  title: string;
  description: string;
  details: string[];
  proof: string;
  tone: 'warm' | 'violet' | 'green' | 'ink';
  visualAsset: string;
  visualAlt: string;
}
```

Use these IDs:

```text
project:transformacao-cobranca
project:cfo-ia
project:hermes
project:presentation-intelligence-system
```

- [ ] **Step 2: Build `ProjectVisualCard`**

Each card renders responsive editorial visual + current text/details/proof. Do not label conceptual visuals as screenshots.

- [ ] **Step 3: Add disclosure language when visual is conceptual**

Use a small label such as `Representação editorial do sistema` when needed.

- [ ] **Step 4: Use alternating wide project rows on desktop**

Avoid four identical small cards. Each project should have enough space to feel like proof of work while remaining scannable.

- [ ] **Step 5: Run checks and commit**

```bash
cd site-rebuild
npm run check
npm run build
git add site-rebuild/src/components/ProjectVisualCard.astro site-rebuild/src/pages/projetos.astro site-rebuild/src/data/projects.ts site-rebuild/src/styles/global.css
git commit -m "feat: turn projects into visual proof of work"
```

---

### Task 5: Rebuild Library as a technical premium entry

**Files:**
- Modify: `site-rebuild/src/pages/biblioteca/index.astro`
- Modify: `site-rebuild/src/components/LibraryCard.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes `library:hero` from image manifest.

- [ ] **Step 1: Add a concept-led Library intro**

Use `PageIntroVisual` with `library:hero`. Visual language: structured knowledge, archive, systems and method; avoid stock photography.

- [ ] **Step 2: Give collection cards a restrained visual code**

Use small icons/patterns/diagram motifs or semantic tone bars, not full photographic cards.

- [ ] **Step 3: Preserve the Page Agent launcher and public catalog CTA**

Do not regress existing functionality.

- [ ] **Step 4: Run checks and commit**

```bash
cd site-rebuild
npm run check
npm run build
git add site-rebuild/src/pages/biblioteca/index.astro site-rebuild/src/components/LibraryCard.astro site-rebuild/src/styles/global.css
git commit -m "feat: rebuild library as technical editorial hub"
```

---

### Task 6: Polish utility routes without gratuitous imagery

**Files:**
- Modify: `site-rebuild/src/pages/contato.astro`
- Modify: `site-rebuild/src/pages/obrigado.astro`
- Modify: `site-rebuild/src/pages/404.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- No new image assets required unless a later review proves one materially improves the route.

- [ ] **Step 1: Contact**

Use a strong typographic intro, clear CTA/form hierarchy, responsive editorial shell and no decorative stock image.

- [ ] **Step 2: Obrigado**

Use compact confirmation, one primary next action and brand-consistent Night/Editorial transition.

- [ ] **Step 3: 404**

Use a typography-led composition and clear navigation back to Home/Articles. No gratuitous generated image.

- [ ] **Step 4: Run checks and commit**

```bash
cd site-rebuild
npm run check
npm run build
git add site-rebuild/src/pages/contato.astro site-rebuild/src/pages/obrigado.astro site-rebuild/src/pages/404.astro site-rebuild/src/styles/global.css
git commit -m "style: polish utility routes with editorial system"
```

---

### Task 7: Add responsive visual regression smoke tests

**Files:**
- Create: `site-rebuild/playwright.config.ts`
- Create: `site-rebuild/tests/responsive-visual.spec.ts`
- Modify: `site-rebuild/package.json`

**Interfaces:**
- Produces `npm run test:visual`.

- [ ] **Step 1: Add Playwright**

Add dev dependency:

```json
"@playwright/test": "^1.55.0"
```

Add script:

```json
"test:visual": "playwright test"
```

- [ ] **Step 2: Configure web server against Astro preview**

Use:

```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  webServer: {
    command: 'npm run preview -- --host 127.0.0.1',
    port: 4321,
    reuseExistingServer: !process.env.CI
  },
  use: {
    baseURL: 'http://127.0.0.1:4321/blog-filipe-guardia/'
  }
});
```

- [ ] **Step 3: Add the viewport matrix**

Test these dimensions:

```ts
const viewports = [
  [390, 844],
  [768, 1024],
  [1366, 768],
  [1440, 900],
  [1920, 1080],
  [2560, 1440],
  [3840, 2160]
] as const;
```

- [ ] **Step 4: Add route smoke coverage**

At minimum:

```text
/
/artigos.html
/artigos/<latest>.html
/artigos/<representative-technical>.html
/artigos/<representative-visual>.html
/sobre.html
/projetos.html
/biblioteca.html
/contato.html
/404.html
```

- [ ] **Step 5: Assert no horizontal overflow**

For every route/viewport:

```ts
const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
expect(overflow).toBeLessThanOrEqual(1);
```

- [ ] **Step 6: Assert every meaningful image loads**

```ts
const broken = await page.locator('img').evaluateAll((images) => images
  .filter((img) => img.getAttribute('alt') !== '')
  .filter((img) => !(img.complete && img.naturalWidth > 0))
  .map((img) => img.getAttribute('src')));
expect(broken).toEqual([]);
```

- [ ] **Step 7: Assert hero subject is not stretched**

For the homepage hero, compare rendered aspect ratio against image container strategy and ensure CSS uses `object-fit: cover`; do not compare pixel dimensions because crop is expected.

- [ ] **Step 8: Build then run visual smoke tests**

```bash
cd site-rebuild
npm run build
npx playwright install chromium
npm run test:visual
```
Expected: PASS all routes × viewports.

- [ ] **Step 9: Commit**

```bash
git add site-rebuild/playwright.config.ts site-rebuild/tests/responsive-visual.spec.ts site-rebuild/package.json site-rebuild/package-lock.json
git commit -m "test: add multi-viewport visual smoke gates"
```

---

### Task 8: Integrate QA into the editorial deployment workflow

**Files:**
- Modify: `.github/workflows/deploy-editorial-site.yml`

**Interfaces:**
- PR validation checks static/content/image contracts.
- Full visual matrix remains efficient by running once per ready PR or manually, not on every draft synchronization.

- [ ] **Step 1: Keep existing `npm run check` in PR validation**

This includes content and image-manifest validation from prior plans.

- [ ] **Step 2: Add a visual QA job for non-draft PRs**

The job should:
- checkout;
- setup Node 24;
- `npm ci` in `site-rebuild`;
- `npx playwright install --with-deps chromium`;
- `npm run build`;
- `npm run test:visual`.

- [ ] **Step 3: Do not duplicate the visual matrix in the deploy job**

Main deployment keeps `check + build + preserve:legacy + audit:routes`; the PR gate proves visual responsiveness before merge.

- [ ] **Step 4: Run YAML sanity and local commands**

```bash
cd site-rebuild
npm run check
npm run build
npm run test:visual
npm run preserve:legacy
npm run audit:routes
```
Expected: all PASS.

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/deploy-editorial-site.yml
git commit -m "ci: gate editorial redesign with responsive visual tests"
```

---

### Task 9: Final acceptance pass

**Files:**
- Update: `site-rebuild/docs/editorial/image-audit-2026-08-26.md` statuses.
- Optional create: `site-rebuild/docs/editorial/visual-release-checklist.md` if a short operational checklist is useful after execution.

**Interfaces:**
- Produces an auditable release decision.

- [ ] **Step 1: Confirm every audit row has a final state**

No row may remain undecided.

- [ ] **Step 2: Confirm no deprecated/broken hero references remain**

```bash
git grep -n "filipe-guardia-hero-base64\|filipe-guardia-hero-fixed\|generated/filipe-guardia-hero.webp"
```
Expected: no results.

- [ ] **Step 3: Run complete release gates**

```bash
cd site-rebuild
npm ci
npm run images:verify
npm run check
npm run build
npm run test:visual
npm run preserve:legacy
npm run audit:routes
```
Expected: all PASS.

- [ ] **Step 4: Review screenshots at all seven viewports**

Specifically inspect:
- empty lateral space;
- hero crop and face;
- article readability;
- project visual truthfulness;
- library consistency;
- card crops;
- technical figure legibility;
- image compression artifacts;
- header/footer behavior.

- [ ] **Step 5: Commit final audit state**

```bash
git add site-rebuild/docs/editorial/image-audit-2026-08-26.md
git commit -m "docs: close visual redesign acceptance audit"
```

---

## Self-Review Checklist

- Spec coverage: Articles, About, Projects, Library, utility routes, responsive layout, Night/Editorial transitions, 4K/mobile gates, image loading and accessibility checks are covered.
- Placeholder scan: no TBD/TODO steps.
- Interface consistency: page intro uses `assetId`; project records use `visualAsset`; tests target the same route structure currently built by Astro.
- Scope boundary: this plan assumes responsive foundation and audited assets already exist; it does not regenerate the entire image library itself.
