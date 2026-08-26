# Editorial image generation workflow

This repository treats imagery as part of the editorial product, not as decoration added at the end.

## Mandatory publication gate

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

No article may skip a step by silently substituting a generic image, a temporary base64 payload or an unreviewed AI generation.

## Cover versus figure

**Cover** is emotional/conceptual. It should communicate the subject at a glance and remain strong at thumbnail size. It may be photographic or a premium conceptual composition.

**Figure** is explanatory. Diagrams, flows, matrices, architecture and taxonomies should remain technical when that explains more than a decorative image would.

## Prompt brief

Every generated visual brief must define:

- subject and editorial metaphor;
- environment and materiality;
- plausible lighting;
- composition, focal point and negative space;
- palette relationship to Night/Editorial themes;
- intended aspect ratio and responsive crop behavior;
- what must remain physically coherent;
- prohibited clichés and failure modes;
- whether personal identity is locked.

### Prohibited defaults

Do not use glowing brains, generic robots, hologram hands, random floating UI, cyberpunk/Matrix styling, RGB gamer lighting, stock executives, meaningless text inside images or violet as a dominant fill merely to signal “AI”.

For personal imagery, an approved identity-locked image may not have face, expression, pose or central composition regenerated without explicit new approval.

## Metadata template

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

## Master rules

- Approved masters live under `assets-source/editorial/` and are not deployed directly.
- Web derivatives live under `public/assets/editorial/`.
- Preserve source aspect ratio unless a crop is explicitly documented.
- Do not upscale unless the manifest explicitly permits it.
- Never stretch an image non-uniformly.
- Preserve the approved master even after new derivatives are made.

## Responsive delivery

Raster images intended for publication require:

- AVIF and WebP derivatives;
- width variants appropriate to the actual component;
- explicit width/height or predictable aspect ratio;
- `srcset` and `sizes`;
- focal point metadata;
- mobile crop when the desktop composition does not survive a narrow viewport;
- eager/high priority only for LCP assets; lazy loading otherwise.

## Accessibility

Every meaningful image requires useful alt text. Decorative imagery must use an empty alt intentionally. Technical figures must remain understandable without relying on color alone and SVGs must include a valid `viewBox`.

## Publication rejection rules

Reject publication when any of the following is true:

- cover asset is missing;
- manifest status is not `approved`;
- human master selection is missing for a generated/redesigned asset;
- alt text is missing;
- mobile crop breaks the subject or obscures a face;
- responsive derivative is missing;
- the asset is visibly broken/incomplete;
- the image audit or repository checks fail.

The repository validator is a gate, not a substitute for visual review at the required viewports.
