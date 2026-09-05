# Library, Contact and Mobile Visual Cleanup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the confusing public Library with a portable-guide catalog, restore direct personal contact, and eliminate mobile clipping/overlap in technical figures while preserving legacy agent routes.

**Architecture:** Keep `/habilidades/` as a legacy integration surface copied unchanged into deploy artifacts, but remove it from editorial navigation and sitemap. Publish sanitized Markdown guide copies under `site-rebuild/public/guias/`, drive `/biblioteca.html` from typed guide metadata, add responsive figure QA inspired by VPS, and fix offending SVG/layout rules under TDD.

**Tech Stack:** Astro 7, TypeScript 6, CSS, Node.js, Playwright, SVG, Markdown.

**Spec:** `docs/superpowers/specs/2026-09-05-library-contact-mobile-visual-cleanup-design.md`

## Global Constraints

- Preserve `/habilidades/` paths and legacy files.
- Do not expose private source paths or private operational data.
- A guide is described as a portable Markdown instruction/prompt, not a native installed skill.
- Publish only exact authorized contact values.
- No figure may overflow/clamp the left side at 390 px.
- Keep all existing build/route/image gates green.
- Merge only after the full Playwright matrix passes.

---

### Task 1: Lock public-library behavior with failing tests

**Files:**
- Modify: `site-rebuild/tests/responsive-visual.spec.ts`
- Create: `site-rebuild/tests/library-public-contract.test.mjs`

**Interfaces:**
- Produces repository contracts for 24 Markdown guides, no editorial `/habilidades/` links, and legacy preservation.

- [ ] Add tests asserting exactly 24 guide metadata entries and 24 `.md` files.
- [ ] Assert `/biblioteca.html` contains the portable-skill explanation and Markdown download links.
- [ ] Assert `site-rebuild/src/pages/biblioteca/**`, `BaseLayout`, and sitemap contain no public navigation links to `/habilidades/`.
- [ ] Assert `preserve-legacy.mjs` still copies `habilidades/`.
- [ ] Run the targeted tests and confirm RED.

### Task 2: Publish sanitized canonical Markdown guides

**Files:**
- Create: `site-rebuild/public/guias/*.md` (24 files)
- Create: `site-rebuild/src/data/guides.ts`

**Interfaces:**
- `Guide` contains `id`, `slug`, `title`, `summary`, `solves`, `useWhen`, `downloadPath`, `category`.
- `/biblioteca.html` consumes `guides`.

- [ ] Read the 24 compact prompt files from `FilipeGCB/obsidian-notes/.../prompts/`.
- [ ] Scan for private identifiers/secrets and copy only safe content.
- [ ] Create public Markdown files with original method text preserved and a short public header explaining portable use.
- [ ] Build typed metadata from the existing `habilidades/catalogo.json` plus each guide frontmatter.
- [ ] Run Task 1 contract tests until guide count/download checks pass.

### Task 3: Rebuild `/biblioteca.html` as one clear guide page

**Files:**
- Modify: `site-rebuild/src/pages/biblioteca/index.astro`
- Remove public use of: `site-rebuild/src/components/PageAgentLauncher.astro`
- Modify: `site-rebuild/src/styles/global.css`
- Modify or retire editorial collection UI as needed: `site-rebuild/src/data/library.ts`, `LibraryCard.astro`

**Interfaces:**
- One page explains what guides are, how to activate them, then lists all 24 guides with direct `.md` download.

- [ ] Add an explanatory hero with a 3-step usage model: baixar/anexar → pedir tarefa → assistente segue método.
- [ ] Render compact guide cards with problem solved, activation examples, compatibility and download button.
- [ ] Remove PageAgentLauncher and all links from the blog UI to the legacy catalog.
- [ ] Remove `/habilidades/` from the editorial sitemap while keeping legacy copy in deploy.
- [ ] Run library contract + route tests.

### Task 4: Restore direct contact

**Files:**
- Modify: `site-rebuild/src/pages/contato.astro`
- Create or modify: `site-rebuild/src/data/contact.ts`
- Modify: `site-rebuild/src/styles/global.css`
- Modify legacy `site-config.js` only for confirmed public email compatibility.

**Interfaces:**
- `contactChannels` hides any channel without an exact authorized value.

- [ ] Add `filipeguardia@gmail.com` as primary email action.
- [ ] Keep GitHub and form as secondary routes.
- [ ] Add typed optional WhatsApp/phone/Telegram fields but do not fabricate absent values.
- [ ] Render only configured channels.
- [ ] Add tests for valid `mailto:` and absence of placeholder contact URLs.

### Task 5: Add VPS-inspired mobile figure QA

**Files:**
- Modify: `site-rebuild/tests/responsive-visual.spec.ts`
- Modify: relevant figure wrapper CSS.

**Interfaces:**
- Adds deterministic assertions for figure bounds/clipping and explicitly tagged overlap regions.

- [ ] Add mobile assertions that every `.inline-figure`/technical visual bounding box stays within the viewport/container.
- [ ] Fail if an image/SVG has zero dimensions or left edge outside viewport.
- [ ] Add targeted MCP checks at 390×844 and 768×1024.
- [ ] Run tests and confirm current failures before SVG/CSS fixes.

### Task 6: Fix MCP and all detected technical-figure regressions

**Files:**
- Modify: `site-rebuild/public/assets/editorial/figures/mcp-usb-c-inteligencia-artificial.svg`
- Modify other failing SVGs under `site-rebuild/public/assets/editorial/figures/` only when detected by the gate.
- Modify: article/figure CSS as required.

**Interfaces:**
- SVGs remain semantic, with valid `viewBox` and responsive dimensions.

- [ ] Reposition MCP arrows/labels so `MCP` is never obscured.
- [ ] Remove fixed/min widths that clip figures on the left.
- [ ] Preserve information; do not replace diagrams with decorative imagery.
- [ ] Re-run mobile figure tests until GREEN.

### Task 7: Revalidate the 2026-08-26 visual-system backlog

**Files:**
- Create: `docs/verification/2026-09-05-visual-system-backlog-revalidation.md`
- Modify directly related incomplete files only.

**Interfaces:**
- Matrix with `DONE`, `PARTIAL`, `OPEN` for Home, Articles, About, Projects, Library, Contact/utility routes, image pipeline, technical figures, QA.

- [ ] Compare current `main` + branch state to all three 2026-08-26 plans.
- [ ] Fix directly related gaps in Library/Contact/figures.
- [ ] Record unrelated remaining work explicitly for the next implementation block.

### Task 8: Full verification, PR and merge

**Files:**
- `.github/workflows/deploy-editorial-site.yml` only if QA wiring needs correction.

- [ ] Run `npm run check`, `npm run build:ci`, `npm run preserve:legacy`, `npm run audit:routes`.
- [ ] Run the Playwright matrix at 390×844, 768×1024, 1366×768, 1440×900, 1920×1080, 2560×1440 and 3840×2160.
- [ ] Confirm direct `/habilidades/` URLs still exist in build artifact but are absent from editorial navigation/sitemap.
- [ ] Open PR, run CI on exact head, fix any failures.
- [ ] Squash merge only when all gates are green.
- [ ] Verify production build/deploy on `main`.
