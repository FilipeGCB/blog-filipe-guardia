# Editorial image audit — current register

Updated: **2026-09-05**  
Status: acceptance register for Visual & Image System v1  
Article source of truth: `src/data/articles.ts`  
Article count checked: **19** (`slug:` entries = 19)  
Decision vocabulary: `KEEP`, `ADJUST`, `REGENERATE`, `REDESIGN`, `KEEP_TECHNICAL_SVG`, `DISCARD`, `ARCHIVE`.

## Release implementation status

- The six existing raster/material covers marked `ADJUST` are preserved as approved masters and delivered through manifest-backed AVIF/WebP responsive variants.
- The dedicated About portrait is human-selected, identity-locked, checksum-protected and delivered through responsive AVIF/WebP variants.
- The approved Home portrait remains identity-locked; only deterministic derivatives/crops are allowed. The desktop renderer never enlarges it beyond its 1152 px source width.
- Thirteen article covers currently use truthful explanatory/editorial SVG fallbacks. They remain `REDESIGN` candidates for a future conceptual-cover pass, but are not mislabeled as selected raster masters.
- All 19 article figures are technical SVGs with responsive `viewBox` and are kept where they explain the content better than a decorative replacement.
- The MCP figure received a concrete readability fix on 2026-09-05: connector lines now terminate at the central-node boundary and are painted behind the `MCP` label.
- Mobile figure QA now visits every article at 390×844 and 768×1024, scrolls lazy figures into view, waits for load, and checks clipping/overflow/container bounds.
- Project visuals remain explicit editorial representations; the public Projects page links directly to the real public repositories rather than pretending conceptual diagrams are screenshots.
- The Library intentionally uses a typographic/system interface rather than a decorative generated hero. Its primary job is explaining and distributing portable Markdown guides.

## Articles

| Slug | Current cover | Cover decision | Current figure | Figure decision | Reason / target |
|---|---|---|---|---|---|
| `ia-nao-se-testa-no-feeling` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Current evals structure is truthful and readable; future cover may use a concept-led evidence/testing metaphor. |
| `local-first-nao-e-apenas-offline` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Current local/cloud structure remains a truthful fallback; future cover may separate emotional concept from explanatory figure. |
| `antes-do-agente-de-dados-vem-o-dicionario` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Preserve the useful technical figure; future cover should be conceptual rather than another diagram. |
| `o-modelo-pode-mudar-a-memoria-precisa-ficar` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Strong system idea, but cover and figure still share explanatory language. |
| `a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved source provenance + responsive AVIF/WebP family. |
| `documento-nao-e-base-de-conhecimento` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Current explanatory cover is valid but can later gain a distinct conceptual publication cover. |
| `sem-vocabulario-comum-a-ia-nao-entende-a-empresa` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved material cover with responsive delivery. |
| `curso-nao-transforma-empresa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Cycle remains useful as explanation; future cover can carry the transformation metaphor. |
| `a-ia-que-sabe-quando-parar` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved boundary/gate master with responsive delivery. |
| `copilot-studio` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Keep the process explanation; avoid fake product UI in a future conceptual cover. |
| `da-planilha-ao-agente` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Existing flow remains useful in-body; future cover should communicate transition without duplicating the diagram. |
| `ia-nao-comeca-no-prompt` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Six-field structure is explanatory; future cover should be concept-led. |
| `mcp-usb-c-inteligencia-artificial` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Protocol diagram preserved and readability defect fixed; future cover can use a connection/contract metaphor. |
| `o-modelo-nao-e-o-sistema` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved layered-system master with responsive delivery. |
| `pix-parcelado` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved timing/liquidation master with responsive delivery. |
| `quando-a-ia-vira-colega-de-trabalho` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Swimlane remains explanatory; future cover should show shared work/context without generic robot imagery. |
| `quando-relatorios-viram-sistemas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** approved paper-to-system master with responsive delivery. |
| `software-em-torno-de-agentes` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Architecture diagram stays explanatory; future cover can carry a distinct system/intention concept. |
| `uma-ia-para-cada-tarefa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Routing map remains useful as figure; future cover can communicate choice/routing editorially. |

### Article audit totals

- **19 article covers inventoried.**
- 6 existing raster/material covers: **ADJUST implemented** with approved masters and responsive derivatives.
- 13 explanatory/editorial SVG covers: **REDESIGN candidates**, retained as truthful, QA-checked fallbacks until a selected conceptual master exists.
- **19 technical SVG figures:** `KEEP_TECHNICAL_SVG` unless concrete QA exposes a readability defect.

## Home story

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Story 01 — Operação | Material WebP | KEEP | `story:home:operacao` |
| Story 02 — Estrutura | Material WebP | KEEP | `story:home:estrutura` |
| Story 03 — Sistema | Material WebP | KEEP | `story:home:sistema` |
| Story 04 — Agente governado | Material WebP | KEEP | `story:home:agente-governado` |

The four scenes use one paper/glass/metal language and remain a coherent series. No regeneration is authorized without a concrete QA failure and a new selection.

## Portraits

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Home portrait | Approved cinematic portrait | KEEP | `portrait:filipe:home` — identity locked; deterministic derivatives/crops only. |
| About portrait | Human-selected dedicated portrait | KEEP | `portrait:filipe:about` — identity locked; exact source protected and responsive. |

## Public projects

| Project | Current visual | Decision | Public destination |
|---|---|---|---|
| Cognitive OS | Explicit editorial flow | KEEP | `https://github.com/FilipeGCB/cognitive-os` |
| Fil-Harness | Explicit editorial flow | KEEP | `https://github.com/FilipeGCB/fil-harness` |
| Visual Presentation Studio | Explicit editorial flow | KEEP | `https://github.com/FilipeGCB/visual-presentation-studio-public` |
| Guard.IA Live | Explicit editorial flow | KEEP | `https://github.com/FilipeGCB/guardia-live` |

These visuals are explanatory, not fake screenshots. The real proof surface is the linked public repository.

## Library

| Asset | Current state | Decision | Reason |
|---|---|---|---|
| Library entry | Typographic/system composition | KEEP | Clarity and direct Markdown distribution are more useful here than a decorative hero image. |

## Release rules

1. A technical SVG marked `KEEP_TECHNICAL_SVG` is not redrawn merely to make it prettier.
2. An approved raster marked `ADJUST` keeps its concept unless QA proves a concrete failure.
3. A `REDESIGN`/`REGENERATE` asset does not become `approved` until a selected master exists.
4. Identity-locked portraits can never be regenerated or silently replaced by an image model.
5. Every published article must have a truthful cover, alt text, a valid figure when used, and mobile/desktop QA. Responsive raster derivatives are mandatory when the source is raster; a deliberately authored responsive SVG does not need fake raster derivatives.
6. A truthful SVG fallback may remain while a future conceptual cover is pending; publication readiness depends on correctness, readability and QA, not on pretending an unselected image is final.
