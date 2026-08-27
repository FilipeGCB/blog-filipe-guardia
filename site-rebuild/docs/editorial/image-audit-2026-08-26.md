# Editorial image audit — 2026-08-26

Status: acceptance register for Visual & Image System v1  
Article source of truth: `src/data/articles.ts`  
Article count checked: **17** (`slug:` entries = 17)  
Decision vocabulary: `KEEP`, `ADJUST`, `REGENERATE`, `REDESIGN`, `KEEP_TECHNICAL_SVG`, `DISCARD`, `ARCHIVE`.

## Release implementation status

- The six existing raster/material covers marked `ADJUST` are now preserved as approved masters and delivered through manifest-backed AVIF/WebP responsive variants.
- The dedicated About portrait was human-selected and approved on 2026-08-27, identity-locked, checksum-protected and delivered through responsive AVIF/WebP variants.
- The approved Home portrait remains identity-locked and unchanged in content; only deterministic derivatives/crops are allowed.
- The eleven article covers marked `REDESIGN` remain on their current truthful SVG fallback until a future human-selected conceptual master is approved. They are **not** falsely marked approved.
- Project visuals and the Library hero remain `REDESIGN`/planned. Current pages use explicit typographic/editorial representations rather than fake screenshots or unapproved generated images.
- Technical article figures remain unchanged where marked `KEEP_TECHNICAL_SVG`.

## Articles

| Slug | Current cover | Cover decision | Current figure | Figure decision | Reason / target |
|---|---|---|---|---|---|
| `antes-do-agente-de-dados-vem-o-dicionario` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Current cover behaves like an explanatory diagram. Preserve the technical figure and create a conceptual publication cover in a future human-selection pass. Target `cover:antes-do-agente-de-dados-vem-o-dicionario`. |
| `o-modelo-pode-mudar-a-memoria-precisa-ficar` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Strong system idea, but cover and figure currently share diagram language. Target `cover:o-modelo-pode-mudar-a-memoria-precisa-ficar`. |
| `a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** source provenance + responsive AVIF/WebP family. Target `cover:a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas`. |
| `documento-nao-e-base-de-conhecimento` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Explanatory cover duplicates the figure role. Target `cover:documento-nao-e-base-de-conhecimento`. |
| `sem-vocabulario-comum-a-ia-nao-entende-a-empresa` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** existing material cover preserved with responsive AVIF/WebP delivery. Target `cover:sem-vocabulario-comum-a-ia-nao-entende-a-empresa`. |
| `curso-nao-transforma-empresa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Cycle is useful as figure, but the cover should eventually carry an emotional/conceptual transformation metaphor. Target `cover:curso-nao-transforma-empresa`. |
| `a-ia-que-sabe-quando-parar` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** boundary/gate master preserved with responsive AVIF/WebP delivery. Target `cover:a-ia-que-sabe-quando-parar`. |
| `copilot-studio` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Keep the process diagram as explanation; future cover must avoid fake product UI. Target `cover:copilot-studio`. |
| `da-planilha-ao-agente` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Existing flow belongs in-body. Future cover should communicate transition from operational artifact to governed automation. Target `cover:da-planilha-ao-agente`. |
| `ia-nao-comeca-no-prompt` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Six-field structure is a figure, not a publication cover. Target `cover:ia-nao-comeca-no-prompt`. |
| `mcp-usb-c-inteligencia-artificial` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Preserve the protocol diagram; future cover should use a connection/contract metaphor without literal gimmickry. Target `cover:mcp-usb-c-inteligencia-artificial`. |
| `o-modelo-nao-e-o-sistema` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** layered-system master preserved with responsive AVIF/WebP delivery. Target `cover:o-modelo-nao-e-o-sistema`. |
| `pix-parcelado` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** timing/liquidation master preserved with responsive AVIF/WebP delivery. Target `cover:pix-parcelado`. |
| `quando-a-ia-vira-colega-de-trabalho` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Swimlane logic is useful as a figure; future cover should show shared work/context without robot or stock-office clichés. Target `cover:quando-a-ia-vira-colega-de-trabalho`. |
| `quando-relatorios-viram-sistemas` | WebP material | ADJUST | SVG | KEEP_TECHNICAL_SVG | **Implemented:** paper-to-system master preserved with responsive AVIF/WebP delivery. Target `cover:quando-relatorios-viram-sistemas`. |
| `software-em-torno-de-agentes` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Architecture diagram stays explanatory; future cover needs a concept-led system/intention composition. Target `cover:software-em-torno-de-agentes`. |
| `uma-ia-para-cada-tarefa` | SVG | REDESIGN | SVG | KEEP_TECHNICAL_SVG | Routing map remains a useful figure; future cover should communicate routing/choice through an editorial metaphor. Target `cover:uma-ia-para-cada-tarefa`. |

### Article audit totals

- 17 article covers inventoried.
- 6 existing raster/material covers: **ADJUST implemented** with responsive derivatives.
- 11 explanatory SVG covers: **REDESIGN decided**, retained as truthful fallback until human selection of new masters.
- 17 technical SVG figures: **KEEP_TECHNICAL_SVG** unless later QA exposes a concrete readability defect.

## Home story

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Story 01 — Operação | Material WebP | ADJUST | `story:home:operacao` |
| Story 02 — Estrutura | Material WebP | ADJUST | `story:home:estrutura` |
| Story 03 — Sistema | Material WebP | ADJUST | `story:home:sistema` |
| Story 04 — Agente governado | Material WebP | ADJUST | `story:home:agente-governado` |

The four scenes already use related paper/glass/metal language and remain one coherent series. No regeneration is authorized without a concrete QA failure and a new human selection.

## Portraits

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Home portrait | Approved second cinematic portrait | KEEP | `portrait:filipe:home` — identity locked; only deterministic derivatives/crops allowed. |
| About portrait | Human-selected dedicated portrait | KEEP | `portrait:filipe:about` — approved 2026-08-27; identity locked; exact source protected by SHA-256 and responsive derivatives. |

## Projects

| Project | Current visual | Decision | Target |
|---|---|---|---|
| Transformação digital em cobrança e planejamento | Explicit editorial flow | REDESIGN | `project:transformacao-cobranca` — current truthful CSS representation stays until an approved master exists. |
| CFO-IA | Explicit editorial flow | REDESIGN | `project:cfo-ia` — conceptual representation only; never presented as a real screenshot. |
| Hermes | Explicit editorial flow | REDESIGN | `project:hermes` — no private infrastructure disclosure. |
| Presentation Intelligence System | Explicit editorial flow | REDESIGN | `project:presentation-intelligence-system` — explicitly editorial while conceptual. |

## Library

| Asset | Current state | Decision | Target |
|---|---|---|---|
| Library hero | Typographic/system composition | REDESIGN | `library:hero` — current honest fallback remains until a selected knowledge/archive visual exists. |

## Release rules from this audit

1. A technical SVG marked `KEEP_TECHNICAL_SVG` is not redrawn merely to make it prettier.
2. An existing raster marked `ADJUST` keeps its concept unless QA proves a concrete failure.
3. A `REDESIGN`/`REGENERATE` asset does not become `approved` in the manifest until a human-selected master exists.
4. Identity-locked portraits can never be regenerated or silently replaced by an image model.
5. No newly published article may ship without an approved cover, alt text, focal point, responsive derivatives and mobile/desktop QA.
6. A truthful existing fallback may remain for legacy content while its future `REDESIGN` master is still awaiting human selection; it must not be mislabeled as approved.
