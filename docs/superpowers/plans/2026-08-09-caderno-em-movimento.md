# Caderno em Movimento Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the approved editorial redesign into a premium, image-led reading experience with scroll-linked depth, sticky narrative chapters, magazine-like archive rhythm, and intentional article interludes.

**Architecture:** Keep the Astro site static and dependency-light. Add one reusable sticky-story component for the home narrative, use native CSS scroll-driven animations where supported, and provide small IntersectionObserver/scroll fallbacks without hijacking scrolling. Reuse the approved local image and article figure assets; do not introduce decorative imagery without a narrative role.

**Tech Stack:** Astro, TypeScript in `.astro` frontmatter, semantic HTML, existing CSS system, native CSS `animation-timeline` with progressive enhancement, IntersectionObserver fallback, Playwright/Chrome visual inspection.

## Global Constraints

- Preserve the approved thesis: the work real deserves structure.
- Preserve static generation and the existing URL/legacy-route compatibility.
- Do not add Lenis, GSAP, or another runtime motion dependency in this pass.
- Do not hijack native scrolling or reduce accessibility for motion.
- Respect `prefers-reduced-motion`, keyboard navigation, alt text, captions, and mobile stacking.
- Every image must carry a narrative, editorial, or comprehension function.
- Keep the pull request draft and avoid changes to `main`.

---

### Task 1: Add the sticky system narrative component

**Files:**
- Create: `site-rebuild/src/components/StickySystemStory.astro`
- Modify: `site-rebuild/src/pages/index.astro`

**Interfaces:**
- Consumes: an array of `{ id, number, title, description, image, alt, caption? }` scenes from the home page.
- Produces: a semantic two-column story with accessible chapter text, a sticky media stage, active scene state, and a no-JavaScript linear fallback.

- [ ] **Step 1: Create the component contract and semantic markup.**
  Render each chapter as an `article[data-story-step]` and each media state as a `figure[data-story-frame]`; the first frame is active and all non-active frames are `aria-hidden="true"`.
- [ ] **Step 2: Add IntersectionObserver state synchronization.**
  Observe chapters with `rootMargin: '-35% 0px -45% 0px'`; when a chapter enters the reading band, toggle `.is-active` on the matching frame, update the progress label, and keep the current chapter readable if JavaScript is unavailable.
- [ ] **Step 3: Replace the home `ReadingPath` map with four meaningful scenes.**
  Use the approved local visual assets for Operação real, Estrutura, Sistema, and Agente governado. Keep the existing copy as the conceptual spine while giving each stage a visual state.
- [ ] **Step 4: Run Astro type/content checks.**
  Run `cd site-rebuild && ASTRO_TELEMETRY_DISABLED=1 npm run check`; expected result: zero errors, warnings, or hints.

### Task 2: Implement scroll-linked depth and motion-safe fallbacks

**Files:**
- Modify: `site-rebuild/src/pages/index.astro`
- Modify: `site-rebuild/src/components/ArticleLayout.astro`
- Modify: `site-rebuild/src/layouts/BaseLayout.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes: existing hero and article cover figures.
- Produces: continuous but subtle image depth, view-based article hero reveal, and in-view fallback classes.

- [ ] **Step 1: Mark hero and article media as progressive motion surfaces.**
  Add `data-scroll-hero` to the home hero and `data-scroll-article` to article heroes; add stable classes for the media frame and its image so CSS and fallback scripts can target them without selectors tied to layout order.
- [ ] **Step 2: Add native CSS scroll/view timelines.**
  Animate only transform, opacity, clip-path, and border-radius. Use `@supports` blocks with short ranges so the hero crops gently as the reader moves and article media opens from its editorial crop into the reading flow.
- [ ] **Step 3: Add small fallback behavior.**
  Use one passive scroll listener with `requestAnimationFrame` for the home hero only when `animation-timeline` is unavailable. Add a shared `IntersectionObserver` in `BaseLayout` for `[data-motion-reveal]`; when reduced motion is requested, mark all elements visible and remove transitions.
- [ ] **Step 4: Add `prefers-reduced-motion` overrides.**
  Disable timeline animations, transforms, reveal transitions, and sticky-stage transitions under reduced motion while retaining the same content order and active-state swapping.

### Task 3: Restructure archive rhythm and card behavior

**Files:**
- Modify: `site-rebuild/src/pages/artigos/index.astro`
- Modify: `site-rebuild/src/components/ArticleCard.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes: the existing sorted articles and series filter.
- Produces: a magazine-like archive list with a lead article, alternating editorial rows, preserved series filtering, and responsive mobile flow.

- [ ] **Step 1: Wrap cards in `data-archive-row` rows.**
  Keep the first article as the lead and alternate the visual side for subsequent articles; do not change article URLs or metadata.
- [ ] **Step 2: Update the filter script to hide rows with their cards.**
  Count visible cards while toggling the nearest archive row, preventing blank separators after a filter is applied.
- [ ] **Step 3: Add row-specific typography and image proportions.**
  Use asymmetric columns, generous horizontal rules, one strong image per row, and a restrained hover zoom; collapse to a readable single column on small screens.
- [ ] **Step 4: Mark card media for in-view reveal.**
  Add the shared reveal hook without changing the card’s accessible link structure.

### Task 4: Add selected article visual interludes

**Files:**
- Create: `site-rebuild/src/components/ArticleVisualInterlude.astro`
- Modify: `site-rebuild/src/components/ArticleLayout.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes: article figure, caption, title, series, and a small slug-keyed editorial annotation map.
- Produces: a distinct two-column interlude for six selected articles; all other articles retain the simpler inline figure treatment.

- [ ] **Step 1: Define the six selected article annotations.**
  Use only meaningful article-specific phrases: memory as shared structure, Pix risk changing place, model versus system, governed autonomy, naming/taxonomy, and reports as operational cycles.
- [ ] **Step 2: Render the interlude at the existing figure insertion point.**
  Keep the article figure and caption as the visual anchor; add the annotation as editorial context, not duplicate article prose.
- [ ] **Step 3: Add sticky/expanding desktop composition and linear mobile fallback.**
  The copy can remain in view beside the figure on desktop, but the figure must return to normal flow on mobile and under reduced motion.

### Task 5: Build, inspect, and correct the visual result

**Files:**
- Create/update: `visual-inspection/home-caderno-desktop.png`
- Create/update: `visual-inspection/home-caderno-mobile.png`
- Create/update: `visual-inspection/archive-caderno-desktop.png`
- Create/update: `visual-inspection/article-caderno-desktop.png`
- Create/update: `visual-inspection/article-caderno-mobile.png`

- [ ] **Step 1: Build the static site and run route audits.**
  Run `ASTRO_TELEMETRY_DISABLED=1 npm run build`, `npm run audit:routes`, and `npm run preserve:legacy`; expected result: all pass and 29 routes remain generated.
- [ ] **Step 2: Serve `dist` and capture desktop/mobile screenshots with Chrome.**
  Inspect the home hero at top and mid-scroll, the sticky chapters, archive rows, and one selected article interlude at both breakpoints.
- [ ] **Step 3: Correct visual blockers found in screenshots.**
  Check crop focal points, sticky overlap, whitespace rhythm, focus states, hidden filter rows, image loading, and mobile overflow; rerender after corrections.
- [ ] **Step 4: Verify reduced-motion and no-JavaScript fallbacks.**
  Use Playwright emulation or CSS inspection to confirm content remains visible and scroll remains native.

### Task 6: Publish the implementation to the existing draft PR

**Files:**
- Modify on branch: the implementation files above and `docs/reformulacao/reference-research-v2.md` only if the final technical notes need a correction.

- [ ] **Step 1: Upload the verified files to `reformulacao/editorial-systems-v1`.**
  Use sequential GitHub content updates and preserve the draft status of PR #5.
- [ ] **Step 2: Add a concise PR comment with verification evidence.**
  Record the build, route audit, legacy preservation result, visual inspection pages, and any known non-blocking compatibility note.
- [ ] **Step 3: Recheck PR metadata and changed files.**
  Confirm base `main`, head branch, draft state, and that no unrelated files were changed.

