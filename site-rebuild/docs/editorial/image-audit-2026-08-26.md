# Editorial image audit — 2026-08-26

Status: implementation register for Visual & Image System v1
Article source of truth: `src/data/articles.ts`
Article count checked: **17** (`slug:` entries = 17)
Decision vocabulary: `KEEP`, `ADJUST`, `REGENERATE`, `REDESIGN`, `KEEP_TECHNICAL_SVG`, `DISCARD`, `ARCHIVE`.

## Articles

| Slug | Current cover | Cover decision | Current figure | Figure decision | Reason / target |
|---|---|---|---|---|---|
| `antes-do-agente-de-dados-vem-o-dicionario` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Current cover behaves like an explanatory diagram. Preserve the technical figure and create a conceptual publication cover. Target `cover:antes-do-agente-de-dados-vem-o-dicionario`. |
| `o-modelo-pode-mudar-a-memoria-precisa-ficar` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Strong system idea, but cover and figure currently share diagram language. Target `cover:o-modelo-pode-mudar-a-memoria-precisa-ficar`. |
| `a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing material metaphor already fits the approved editorial direction; add source provenance, responsive crops and family calibration. Target `cover:a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas`. |
| `documento-nao-e-base-de-conhecimento` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Explanatory cover duplicates the figure role. Target `cover:documento-nao-e-base-de-conhecimento`. |
| `sem-vocabulario-comum-a-ia-nao-entende-a-empresa` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing material cover is concept-led and can remain after responsive/family treatment. Target `cover:sem-vocabulario-comum-a-ia-nao-entende-a-empresa`. |
| `curso-nao-transforma-empresa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Cycle is useful as figure, but the cover should carry an emotional/conceptual transformation metaphor. Target `cover:curso-nao-transforma-empresa`. |
| `a-ia-que-sabe-quando-parar` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing boundary/gate metaphor matches governance and the new material system. Target `cover:a-ia-que-sabe-quando-parar`. |
| `copilot-studio` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Keep the process diagram as explanation; redesign the cover without fake product UI. Target `cover:copilot-studio`. |
| `da-planilha-ao-agente` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Existing flow belongs in-body. Cover should communicate transition from operational artifact to governed automation. Target `cover:da-planilha-ao-agente`. |
| `ia-nao-comeca-no-prompt` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Six-field structure is a figure, not a publication cover. Target `cover:ia-nao-comeca-no-prompt`. |
| `mcp-usb-c-inteligencia-artificial` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Preserve the protocol diagram; create a physical connection/contract metaphor for the cover, without literal USB-C gimmickry. Target `cover:mcp-usb-c-inteligencia-artificial`. |
| `o-modelo-nao-e-o-sistema` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing layered-system metaphor fits the visual system. Target `cover:o-modelo-nao-e-o-sistema`. |
| `pix-parcelado` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing timing/liquidation metaphor is concept-led and distinct from the explanatory flow. Target `cover:pix-parcelado`. |
| `quando-a-ia-vira-colega-de-trabalho` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Swimlane logic is useful as a figure; cover should show shared work/context without stock-office or robot clichés. Target `cover:quando-a-ia-vira-colega-de-trabalho`. |
| `quando-relatorios-viram-sistemas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | Existing paper-to-system metaphor matches the approved material direction. Target `cover:quando-relatorios-viram-sistemas`. |
| `software-em-torno-de-agentes` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Architecture diagram stays explanatory; cover needs a concept-led system/intention composition. Target `cover:software-em-torno-de-agentes`. |
| `uma-ia-para-cada-tarefa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Routing map remains a useful figure; cover should communicate routing/choice through a physical editorial metaphor. Target `cover:uma-ia-para-cada-tarefa`. |

### Article audit totals

- 17 article covers inventoried.
- 6 existing raster/material covers: **ADJUST**, not discard/regenerate blindly.
- 11 explanatory SVG covers: **REDESIGN** as conceptual covers.
- 17 technical SVG figures: **KEEP_TECHNICAL_SVG** unless later mobile QA exposes a concrete readability defect.

## Home story

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Story 01 — Operação | Material WebP | ADJUST | `story:home:operacao` |
| Story 02 — Estrutura | Material WebP | ADJUST | `story:home:estrutura` |
| Story 03 — Sistema | Material WebP | ADJUST | `story:home:sistema` |
| Story 04 — Agente governado | Material WebP | ADJUST | `story:home:agente-governado` |

The four scenes already use related paper/glass/metal language. Treat them as one series: normalize crop, contrast, dimensions and responsive delivery before deciding that regeneration is necessary.

## Portraits

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Home portrait | Approved second cinematic portrait | KEEP | `portrait:filipe:home` — identity locked; only deterministic derivatives/crops allowed. |
| About portrait | Missing | REGENERATE | `portrait:filipe:about` — dedicated natural-light portrait required; cannot reuse/regenerate the locked home composition. |

## Projects

| Project | Current visual | Decision | Target |
|---|---|---|---|
| Transformação digital em cobrança e planejamento | None | REDESIGN | `project:transformacao-cobranca` — editorial representation of operational transformation, no confidential screens/data. |
| CFO-IA | None | REDESIGN | `project:cfo-ia` — conceptual product/system representation, never presented as a real screenshot. |
| Hermes | None | REDESIGN | `project:hermes` — agent routing/governance representation, no private infrastructure disclosure. |
| Presentation Intelligence System | None | REDESIGN | `project:presentation-intelligence-system` — narrative/storyboard system representation, explicitly editorial if conceptual. |

## Library

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Library hero | No dedicated visual | REDESIGN | `library:hero` — structured knowledge/archive/method visual; avoid stock photography. |

## Release rules from this audit

1. A technical SVG marked `KEEP_TECHNICAL_SVG` is not redrawn merely to make it prettier.
2. An existing raster marked `ADJUST` keeps its concept unless QA proves a concrete failure.
3. A `REDESIGN`/`REGENERATE` asset does not become `approved` in the manifest until a human-selected master exists.
4. The locked home portrait can never be regenerated by an image model.
5. No new article may publish without an approved cover, alt text, focal point, responsive derivatives and mobile/desktop QA.
