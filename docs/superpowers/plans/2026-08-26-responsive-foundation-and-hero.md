# Responsive Foundation and Approved Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the layout foundation and homepage hero so the site scales professionally from 390 px to 4K/ultrawide while using the approved Filipe portrait without distortion or silent regeneration.

**Architecture:** Replace the single global content width with three responsive shells (`visual`, `editorial`, `reading`) and fluid spacing/type tokens. Refactor `EditorialVisual.astro` into a real responsive image renderer backed by versioned assets, then migrate the homepage hero to the canonical approved image and remove the base64 workaround.

**Tech Stack:** Astro 7, TypeScript 6, CSS Grid/Flexbox, `<picture>`, AVIF/WebP, Node validation scripts.

**Spec:** `docs/superpowers/specs/2026-08-26-blog-visual-system-design.md`

## Global Constraints

- Mobile-first and fluid; do not design for one monitor model.
- Validate at 390×844, 768×1024, 1366×768, 1440×900, 1920×1080, 2560×1440 and 3840×2160.
- Night for impact/entry areas; Editorial for long-form reading.
- Approved homepage portrait is immutable in face, pose, expression, central composition and environment.
- No stretch resize; only aspect-preserving resize, crop or background extension.
- Do not ship a 4K master to mobile.
- Preserve `prefers-reduced-motion`, keyboard focus and current route behavior.

---

## File Structure

**Create**
- `site-rebuild/src/data/editorialImages.ts` — typed responsive image metadata and helper lookup.
- `site-rebuild/scripts/verify-responsive-images.mjs` — validation of required variants and metadata.
- `site-rebuild/public/assets/editorial/portraits/filipe/home/` — deployable responsive derivatives only.
- `site-rebuild/assets-source/editorial/portraits/filipe/home/` — approved master and generation notes; not deployed by Astro.

**Modify**
- `site-rebuild/src/styles/global.css` — responsive shells, fluid spacing/type, Night tokens and hero layout.
- `site-rebuild/src/components/EditorialVisual.astro` — `<picture>` renderer with responsive variants and focal point.
- `site-rebuild/src/pages/index.astro` — canonical approved hero asset and new shell classes.
- `site-rebuild/src/layouts/BaseLayout.astro` — theme-color and image preload hook if needed.
- `site-rebuild/package.json` — add responsive image verification to `check`.

**Delete after migration**
- `site-rebuild/public/assets/editorial/generated/filipe-guardia-hero-base64.txt`
- `site-rebuild/public/assets/editorial/generated/filipe-guardia-hero-fixed.webp`
- `site-rebuild/public/assets/editorial/generated/filipe-guardia-hero.webp`

---

### Task 1: Add responsive layout tokens and shells

**Files:**
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Produces CSS classes `.visual-shell`, `.editorial-shell`, `.reading-shell` and fluid tokens consumed by all later tasks.

- [ ] **Step 1: Add the new root tokens next to the existing palette**

Use these values as the initial implementation baseline:

```css
:root {
  --night-950: #09090c;
  --night-900: #121118;
  --night-800: #1b1822;
  --night-text: #f7f3ec;
  --night-muted: #b8b0bd;
  --violet: #7956e8;
  --violet-deep: #4c2d86;
  --amber: #b98758;

  --gutter: clamp(16px, 3vw, 64px);
  --visual-max: 1760px;
  --editorial-max: 1480px;
  --reading-max: 800px;
  --section-space: clamp(56px, 8vw, 124px);
  --section-space-tight: clamp(36px, 5vw, 80px);
}
```

- [ ] **Step 2: Replace the single-width `.page-shell` contract with explicit shells**

```css
.visual-shell,
.editorial-shell,
.reading-shell,
.page-shell {
  width: calc(100% - (2 * var(--gutter)));
  margin-inline: auto;
}

.visual-shell { max-width: var(--visual-max); }
.editorial-shell,
.page-shell { max-width: var(--editorial-max); }
.reading-shell { max-width: var(--reading-max); }
```

Keep `.page-shell` as an alias to the editorial shell during migration so untouched routes do not break.

- [ ] **Step 3: Make section spacing fluid**

Replace repeated fixed 70–90 px vertical section paddings with `var(--section-space)` or `var(--section-space-tight)` where semantically equivalent. Do not change article paragraph spacing in this step.

- [ ] **Step 4: Make major headings fluid**

Use bounded values such as:

```css
.hero h1 { font-size: clamp(3rem, 6.2vw, 7.2rem); }
.page-intro h1 { font-size: clamp(2.8rem, 5vw, 5.8rem); }
.article-title { font-size: clamp(2.7rem, 5.2vw, 6.2rem); }
```

- [ ] **Step 5: Run the existing static checks**

Run:
```bash
cd site-rebuild
npm run check
```
Expected: PASS. No missing asset or Astro type errors.

- [ ] **Step 6: Commit**

```bash
git add site-rebuild/src/styles/global.css
git commit -m "feat: add fluid responsive layout shells"
```

---

### Task 2: Introduce typed responsive image metadata

**Files:**
- Create: `site-rebuild/src/data/editorialImages.ts`
- Create: `site-rebuild/scripts/verify-responsive-images.mjs`
- Modify: `site-rebuild/package.json`

**Interfaces:**
- Produces `EditorialImageAsset`, `editorialImages`, and `getEditorialImage(id)`.
- Later tasks pass `assetId` to `EditorialVisual.astro`.

- [ ] **Step 1: Create the metadata type and canonical home asset entry**

Create `site-rebuild/src/data/editorialImages.ts` with this contract:

```ts
export interface EditorialImageVariant {
  width: number;
  avif: string;
  webp: string;
}

export interface EditorialImageAsset {
  id: string;
  alt: string;
  width: number;
  height: number;
  focalPoint: string;
  sizes: string;
  variants: EditorialImageVariant[];
  mobile?: {
    media: string;
    focalPoint: string;
    variants: EditorialImageVariant[];
  };
}

export const editorialImages: Record<string, EditorialImageAsset> = {
  'portrait:filipe:home': {
    id: 'portrait:filipe:home',
    alt: 'Filipe em um ambiente contemporâneo de trabalho, sentado diante de um caderno e laptop, com monitores e a cidade ao fundo.',
    width: 3840,
    height: 2160,
    focalPoint: '64% 48%',
    sizes: '(min-width: 1600px) 1760px, (min-width: 900px) 100vw, 100vw',
    variants: [960, 1440, 1920, 2560, 3840].map((width) => ({
      width,
      avif: `/assets/editorial/portraits/filipe/home/hero-${width}.avif`,
      webp: `/assets/editorial/portraits/filipe/home/hero-${width}.webp`
    })),
    mobile: {
      media: '(max-width: 767px)',
      focalPoint: '68% 46%',
      variants: [480, 768, 960].map((width) => ({
        width,
        avif: `/assets/editorial/portraits/filipe/home/hero-mobile-${width}.avif`,
        webp: `/assets/editorial/portraits/filipe/home/hero-mobile-${width}.webp`
      }))
    }
  }
};

export function getEditorialImage(id: string): EditorialImageAsset {
  const asset = editorialImages[id];
  if (!asset) throw new Error(`Editorial image not found: ${id}`);
  return asset;
}
```

- [ ] **Step 2: Create a verifier that checks metadata and referenced files**

`verify-responsive-images.mjs` must import/read the metadata source and fail when a variant path is missing, a width is non-positive, `alt` is empty, or `focalPoint` is missing. The script must print one line per error and exit 1.

- [ ] **Step 3: Add the verifier to `check`**

Change:

```json
"check": "node scripts/verify-content.mjs && node scripts/asset-audit.mjs && node scripts/verify-responsive-images.mjs && astro check"
```

- [ ] **Step 4: Run the verifier and confirm it fails before image variants exist**

Run:
```bash
cd site-rebuild
node scripts/verify-responsive-images.mjs
```
Expected: FAIL listing missing `hero-*.avif/webp` files.

- [ ] **Step 5: Commit the failing contract**

```bash
git add site-rebuild/src/data/editorialImages.ts site-rebuild/scripts/verify-responsive-images.mjs site-rebuild/package.json
git commit -m "test: define responsive editorial image contract"
```

---

### Task 3: Create approved hero derivatives without altering identity

**Files:**
- Create: `site-rebuild/assets-source/editorial/portraits/filipe/home/hero-approved-master.webp`
- Create: `site-rebuild/assets-source/editorial/portraits/filipe/home/README.md`
- Create: responsive AVIF/WebP files under `site-rebuild/public/assets/editorial/portraits/filipe/home/`

**Interfaces:**
- Satisfies `portrait:filipe:home` variants defined in Task 2.

- [ ] **Step 1: Copy the exact approved image into the source tree**

The source must be the approved image showing Filipe seated with one hand on the chin, laptop at right, open notebook, monitors behind and city through the window. Do not regenerate it.

- [ ] **Step 2: Create the high-resolution master with aspect-preserving upscale**

Target 3840×2160. If the approved source is not exactly 16:9, extend background or crop outside the subject; never non-uniform scale the subject.

- [ ] **Step 3: Generate desktop variants**

Create AVIF and WebP widths: `960, 1440, 1920, 2560, 3840`, preserving 16:9.

- [ ] **Step 4: Generate mobile crops**

Create `hero-mobile-{480,768,960}.avif/webp` using a mobile crop that keeps face, hand and working context visible. The crop must not cover the face with overlay text.

- [ ] **Step 5: Document provenance**

In `README.md`, record:

```md
Status: approved-canonical
Source: user-approved second cinematic portrait from 2026-08-26
Allowed: upscale, format conversion, compression, responsive crop, background extension
Forbidden: face regeneration, pose change, expression change, scenario replacement, non-uniform scaling
Desktop focal point: 64% 48%
Mobile focal point: 68% 46%
```

- [ ] **Step 6: Run verification**

```bash
cd site-rebuild
node scripts/verify-responsive-images.mjs
```
Expected: PASS for `portrait:filipe:home`.

- [ ] **Step 7: Commit**

```bash
git add site-rebuild/assets-source/editorial/portraits/filipe/home site-rebuild/public/assets/editorial/portraits/filipe/home
git commit -m "feat: add canonical responsive homepage portrait"
```

---

### Task 4: Refactor `EditorialVisual` to render responsive images

**Files:**
- Modify: `site-rebuild/src/components/EditorialVisual.astro`

**Interfaces:**
- Consumes `assetId?: string`, legacy `src?: string`, `alt?: string`, `className`, `loading`.
- Produces a `<picture>` with AVIF/WebP when `assetId` is provided; preserves legacy `src` mode during migration.

- [ ] **Step 1: Replace the homepage-specific base64 behavior with a general renderer**

Required prop shape:

```ts
interface Props {
  assetId?: string;
  src?: string;
  alt?: string;
  caption?: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}
```

When `assetId` exists, call `getEditorialImage(assetId)` and render mobile `<source media>` first, then desktop AVIF/WebP sources, then a WebP `<img>` fallback.

- [ ] **Step 2: Build `srcset` values from variants**

Use:

```ts
const srcset = (items, key) => items.map((item) => `${base}${item[key].replace(/^\//, '')} ${item.width}w`).join(', ');
```

- [ ] **Step 3: Set dimensions and focal point explicitly**

The fallback `<img>` must have `width`, `height`, `sizes`, `loading`, `decoding`, and style variable `--image-focal-point`.

- [ ] **Step 4: Remove all `fetch(base64)` and `data-homepage-portrait` code**

There must be no runtime fetch for the hero image.

- [ ] **Step 5: Run checks**

```bash
cd site-rebuild
npm run check
npm run build
```
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add site-rebuild/src/components/EditorialVisual.astro
git commit -m "feat: render responsive editorial images with picture"
```

---

### Task 5: Migrate the homepage hero and remove broken assets

**Files:**
- Modify: `site-rebuild/src/pages/index.astro`
- Modify: `site-rebuild/src/styles/global.css`
- Delete: three obsolete hero files listed in File Structure.

**Interfaces:**
- Consumes `assetId="portrait:filipe:home"`.

- [ ] **Step 1: Replace the hero call**

Use:

```astro
<EditorialVisual
  assetId="portrait:filipe:home"
  loading="eager"
  className="hero-photo scroll-hero-media"
/>
```

Do not pass the old generated hero path.

- [ ] **Step 2: Move hero content to the visual shell**

The hero media spans the viewport; the copy/layout wrapper uses `.visual-shell`. Preserve the existing semantic content and CTA links.

- [ ] **Step 3: Add Night hero CSS**

Ensure:
- minimum height uses `clamp(680px, 88svh, 980px)` on desktop;
- `object-fit: cover`;
- `object-position: var(--image-focal-point, 50% 50%)`;
- left-to-right overlay gives copy contrast without obscuring Filipe;
- mobile layout moves copy below or above the face-safe region instead of overlaying the face.

- [ ] **Step 4: Delete obsolete corrupted/base64 assets**

Delete only after `index.astro` and `EditorialVisual.astro` no longer reference them.

- [ ] **Step 5: Run a repository search for obsolete names**

Run:
```bash
git grep -n "filipe-guardia-hero-base64\|filipe-guardia-hero-fixed\|filipe-guardia-hero.webp"
```
Expected: no results.

- [ ] **Step 6: Run full build gates**

```bash
cd site-rebuild
npm ci
npm run check
npm run build
npm run preserve:legacy
npm run audit:routes
```
Expected: all PASS.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: publish approved responsive cinematic hero"
```

---

## Self-Review Checklist

- Spec coverage: responsive shells, Night palette, canonical approved portrait, no distortion, responsive image delivery and base64 removal are all represented.
- Placeholder scan: no TBD/TODO steps.
- Interface consistency: `assetId` and `getEditorialImage()` names are consistent across Tasks 2–5.
- Scope boundary: this plan does not redesign article covers, projects, library or About; those belong to subsequent plans.
