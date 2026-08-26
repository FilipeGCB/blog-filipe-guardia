# Editorial Image Pipeline and Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a reproducible image production system, audit every published cover/figure, regenerate inconsistent assets, and make “image before publish” an enforceable repository rule.

**Architecture:** Add a source/master tree separate from deployable web derivatives, a metadata manifest consumed by the site and validators, and an image-variant build script. Audit every article asset into an explicit decision register, regenerate only assets that fail the visual system, preserve useful technical SVGs, and validate that all published images have metadata, variants and accessible alt text.

**Tech Stack:** Astro 7, TypeScript 6, Node.js, Sharp, AVIF/WebP, SVG, repository documentation.

**Spec:** `docs/superpowers/specs/2026-08-26-blog-visual-system-design.md`

## Global Constraints

- Cover = emotional/conceptual; figure = explanatory/technical.
- Preserve useful diagrams; do not replace explanatory graphics with decorative photos.
- Avoid AI clichés: glowing brains, generic robots, hologram hands, excessive neon, fake UIs and random text inside generated images.
- Approved images are immutable in content unless re-approved.
- Every new post must have visual concept, prompt, selected master, derivatives, alt text, focal point and QA before publication.
- Masters must not be deployed to the public site.

---

## File Structure

**Create**
- `site-rebuild/assets-source/editorial/` — approved masters and generation notes.
- `site-rebuild/src/data/editorialImageManifest.json` — metadata source of truth.
- `site-rebuild/scripts/build-image-variants.mjs` — deterministic AVIF/WebP derivative generator.
- `site-rebuild/scripts/verify-image-manifest.mjs` — manifest validation.
- `site-rebuild/docs/editorial/image-generation-workflow.md` — publishing workflow and prompt rules.
- `site-rebuild/docs/editorial/image-audit-2026-08-26.md` — explicit decision for every current image.

**Modify**
- `site-rebuild/package.json` — add `sharp`, `images:build`, `images:verify`.
- `site-rebuild/src/data/articles.ts` — migrate covers to approved responsive assets while retaining technical figures.
- `site-rebuild/scripts/asset-audit.mjs` — validate manifest-backed covers and figures.
- `site-rebuild/src/data/editorialImages.ts` — load/bridge manifest entries if Plan 1 introduced typed metadata there.

---

### Task 1: Add deterministic image derivative tooling

**Files:**
- Modify: `site-rebuild/package.json`
- Create: `site-rebuild/scripts/build-image-variants.mjs`

**Interfaces:**
- Consumes entries in `src/data/editorialImageManifest.json` containing `source`, `outputBase`, `kind`, `widths`, `formats`, `aspectRatio`, `focalPoint`.
- Produces AVIF/WebP variants under `public/assets/editorial/**/web/`.

- [ ] **Step 1: Add Sharp and scripts**

Update `package.json`:

```json
"scripts": {
  "images:build": "node scripts/build-image-variants.mjs",
  "images:verify": "node scripts/verify-image-manifest.mjs"
},
"devDependencies": {
  "sharp": "^0.34.0"
}
```

Keep existing scripts unchanged except later `check` integration.

- [ ] **Step 2: Implement derivative generation**

The script must:
- read `src/data/editorialImageManifest.json`;
- process only raster entries with `source` and `widths`;
- use `fit: 'cover'` only when a target aspect ratio is explicitly declared;
- otherwise preserve source aspect ratio;
- output AVIF quality 55 and WebP quality 82 as initial defaults;
- never upscale beyond the approved master width unless `allowUpscale: true` is explicitly set;
- create output directories recursively;
- print every generated path.

Core transformation shape:

```js
const pipeline = sharp(sourcePath).resize({
  width,
  fit: entry.aspectRatio ? 'cover' : 'inside',
  position: entry.sharpPosition ?? 'centre',
  withoutEnlargement: !entry.allowUpscale
});

await pipeline.clone().avif({ quality: 55 }).toFile(`${base}-${width}.avif`);
await pipeline.clone().webp({ quality: 82 }).toFile(`${base}-${width}.webp`);
```

- [ ] **Step 3: Fail on missing source masters**

If a manifest entry references a missing source, collect the error and exit 1 after processing all entries.

- [ ] **Step 4: Run the script against an empty/minimal manifest**

Run:
```bash
cd site-rebuild
npm install
npm run images:build
```
Expected: PASS with no generated outputs when no raster entries are marked for generation.

- [ ] **Step 5: Commit**

```bash
git add site-rebuild/package.json site-rebuild/package-lock.json site-rebuild/scripts/build-image-variants.mjs
git commit -m "feat: add deterministic editorial image pipeline"
```

---

### Task 2: Create the image manifest and validator

**Files:**
- Create: `site-rebuild/src/data/editorialImageManifest.json`
- Create: `site-rebuild/scripts/verify-image-manifest.mjs`
- Modify: `site-rebuild/package.json`

**Interfaces:**
- Produces one metadata record per published cover/portrait/project/library raster asset.

- [ ] **Step 1: Define manifest schema by example**

Use this shape:

```json
{
  "portrait:filipe:home": {
    "kind": "portrait",
    "status": "approved",
    "source": "assets-source/editorial/portraits/filipe/home/hero-approved-master.webp",
    "outputBase": "public/assets/editorial/portraits/filipe/home/web/hero",
    "widths": [960, 1440, 1920, 2560, 3840],
    "formats": ["avif", "webp"],
    "aspectRatio": "16:9",
    "focalPoint": "64% 48%",
    "alt": "Filipe em um ambiente contemporâneo de trabalho, sentado diante de um caderno e laptop, com monitores e a cidade ao fundo.",
    "approvedOn": "2026-08-26",
    "identityLocked": true
  }
}
```

Article covers use IDs `cover:<slug>`. Project visuals use `project:<slug>`. Library hero uses `library:hero`.

- [ ] **Step 2: Implement manifest validation**

The validator must fail when:
- `status=approved` and `alt` is empty for a meaningful image;
- `identityLocked=true` without `source`;
- widths are missing/unsorted/duplicated for raster entries;
- output paths escape `public/assets/editorial/`;
- master paths escape `assets-source/editorial/`;
- approved raster derivatives are missing after `images:build`;
- duplicate IDs exist.

- [ ] **Step 3: Integrate into `npm run check`**

Append:

```text
node scripts/verify-image-manifest.mjs
```

before `astro check`.

- [ ] **Step 4: Run check and capture failures**

Run:
```bash
cd site-rebuild
npm run check
```
Expected: any approved manifest entry lacking derivatives causes FAIL.

- [ ] **Step 5: Commit**

```bash
git add site-rebuild/src/data/editorialImageManifest.json site-rebuild/scripts/verify-image-manifest.mjs site-rebuild/package.json
git commit -m "test: enforce editorial image metadata and variants"
```

---

### Task 3: Audit every existing article cover and figure

**Files:**
- Create: `site-rebuild/docs/editorial/image-audit-2026-08-26.md`
- Read: `site-rebuild/src/data/articles.ts`
- Read: `site-rebuild/public/assets/editorial/`

**Interfaces:**
- Produces a decision table consumed by Tasks 4–6.

- [ ] **Step 1: Enumerate every article**

For each article, record:
- slug;
- current cover path;
- current figure path;
- cover format;
- figure format;
- decision for cover;
- decision for figure;
- reason;
- target asset ID.

- [ ] **Step 2: Use only these decisions**

```text
KEEP
ADJUST
REGENERATE
REDESIGN
KEEP_TECHNICAL_SVG
DISCARD
ARCHIVE
```

- [ ] **Step 3: Apply explicit evaluation criteria**

Mark `REGENERATE` when a cover is broken, incomplete, compositionally weak, visually unrelated to its article, stylistically incompatible with the new publication, or visibly generic AI art.

Mark `KEEP_TECHNICAL_SVG` when a figure clearly explains architecture/flow/taxonomy/process and remains readable.

Mark `REDESIGN` when the information is correct but the visual language/colors/typography need alignment.

- [ ] **Step 4: Add the home story, About, Projects and Library inventory**

Include rows for:
- home story 01–04;
- About portrait;
- project visuals 01–04;
- library hero.

- [ ] **Step 5: Self-check completeness**

The count of article rows must equal the number of `slug:` entries in `articles.ts`.

- [ ] **Step 6: Commit**

```bash
git add site-rebuild/docs/editorial/image-audit-2026-08-26.md
git commit -m "docs: audit every editorial image"
```

---

### Task 4: Document the mandatory visual publishing workflow

**Files:**
- Create: `site-rebuild/docs/editorial/image-generation-workflow.md`

**Interfaces:**
- Defines the process future authors/agents must follow before publish.

- [ ] **Step 1: Document the required order**

The file must state this exact gate:

```text
TEXT STABLE
→ VISUAL CONCEPT
→ PROMPT
→ GENERATE OPTIONS
→ HUMAN SELECTS
→ APPROVED MASTER
→ RESPONSIVE CROPS
→ AVIF/WEBP DERIVATIVES
→ ALT + FOCAL POINT
→ MOBILE/DESKTOP QA
→ PUBLISH
```

- [ ] **Step 2: Add prompt guidance**

Include:
- subject and editorial metaphor;
- environment/materiality;
- lighting;
- composition and negative space;
- palette guidance;
- prohibited clichés;
- aspect ratio and intended crop;
- no random text in generated image;
- personal identity lock rules.

- [ ] **Step 3: Add a copyable metadata template**

```json
{
  "kind": "cover",
  "status": "draft",
  "concept": "",
  "prompt": "",
  "negativePrompt": "",
  "source": "assets-source/editorial/covers/<slug>/cover-master.webp",
  "outputBase": "public/assets/editorial/covers/<slug>/web/cover",
  "widths": [640, 960, 1440, 1920],
  "formats": ["avif", "webp"],
  "aspectRatio": "16:9",
  "focalPoint": "50% 50%",
  "alt": "",
  "identityLocked": false
}
```

- [ ] **Step 4: Add publication rejection rules**

A post cannot publish if:
- cover asset is missing;
- manifest status is not `approved`;
- alt text is missing;
- mobile crop breaks the subject;
- any responsive derivative is missing;
- asset audit/check fails.

- [ ] **Step 5: Commit**

```bash
git add site-rebuild/docs/editorial/image-generation-workflow.md
git commit -m "docs: define image-before-publish workflow"
```

---

### Task 5: Regenerate the cover family as one publication

**Files:**
- Create masters under `site-rebuild/assets-source/editorial/covers/<slug>/`
- Create derivatives under `site-rebuild/public/assets/editorial/covers/<slug>/web/`
- Modify `site-rebuild/src/data/editorialImageManifest.json`
- Modify `site-rebuild/src/data/articles.ts`

**Interfaces:**
- Produces approved `cover:<slug>` IDs for all rows marked `REGENERATE` or `ADJUST` in the audit.

- [ ] **Step 1: Generate 3 candidate covers per affected article**

Use the article title/deck plus the visual system rules. Keep a single family direction across all covers: editorial realism/materiality, controlled violet accent, warm light, no cyberpunk/AI clichés.

- [ ] **Step 2: Select one master per article**

Selection criteria:
- concept communicates article without requiring embedded text;
- strong thumbnail readability;
- enough negative space for responsive crops;
- same publication family;
- no obvious generation defects.

- [ ] **Step 3: Save master and metadata**

Set manifest `status: approved` only after human selection.

- [ ] **Step 4: Generate derivatives**

For covers use widths:
```text
640, 960, 1440, 1920
```
Use 16:9 unless the article layout requires a documented exception.

- [ ] **Step 5: Update article cover references**

Migrate article metadata to use the manifest-backed responsive cover mechanism introduced in Plan 1. Preserve `coverAlt` until the component/data migration is fully complete.

- [ ] **Step 6: Run checks**

```bash
cd site-rebuild
npm run images:build
npm run images:verify
npm run check
npm run build
```
Expected: PASS.

- [ ] **Step 7: Commit in small batches**

Commit no more than 4–6 article cover migrations per commit, e.g.:

```bash
git commit -m "feat: refresh knowledge-series article covers"
```

---

### Task 6: Standardize technical figures without losing information

**Files:**
- Modify SVGs under `site-rebuild/public/assets/editorial/figures/`
- Modify manifest only for raster figures if any.

**Interfaces:**
- Keeps existing figure paths for SVGs whenever possible, minimizing article-content churn.

- [ ] **Step 1: Preserve all `KEEP_TECHNICAL_SVG` figures unchanged**

Do not redraw merely for novelty.

- [ ] **Step 2: Redesign only figures marked `REDESIGN`**

Use:
- paper/light background;
- graphite structure;
- violet primary path;
- amber decision/attention;
- green only for positive/approved state;
- labels readable at 390 px without zoom where feasible.

- [ ] **Step 3: Validate SVG accessibility and viewBox**

Each SVG must have a `viewBox`, no clipped labels, and no dependency on color alone for meaning.

- [ ] **Step 4: Run asset checks**

```bash
cd site-rebuild
npm run check
npm run build
```
Expected: PASS.

- [ ] **Step 5: Commit by thematic family**

```bash
git commit -m "style: unify technical figure language"
```

---

## Self-Review Checklist

- Spec coverage: master/derivative separation, manifest metadata, audit, generation-before-publish, cover/figure distinction, no AI clichés, preservation of useful diagrams and responsive derivatives are covered.
- Placeholder scan: no TBD/TODO steps.
- Interface consistency: manifest IDs use `portrait:`, `cover:`, `project:` and `library:` namespaces throughout.
- Scope boundary: this plan produces and validates assets; page composition changes live in the page-rebuild plan.
