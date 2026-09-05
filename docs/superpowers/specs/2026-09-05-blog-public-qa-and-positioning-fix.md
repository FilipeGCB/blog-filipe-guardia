# Blog public QA and positioning fix

## Scope

This corrective block addresses three production defects found after the public-readiness release:

1. Public guide downloads are summaries rather than self-contained executable prompts.
2. Professional positioning still reduces the current scope to B2B, while the current remit spans B2B + B2C (B2X) and Transformation Digital is the umbrella for data, automation, systems and AI.
3. Visual QA passes figures that are visibly broken: connector/text collisions inside technical diagrams and clipped project-flow nodes on desktop.

## Required outcomes

- Every downloadable Markdown guide must be self-contained enough to activate its method in a generic assistant without depending on private files, corporate branding, local paths or hidden kernels.
- Public positioning must use B2X where the current professional scope is described; historic B2B references remain only where historically accurate.
- The Sobre page must make Transformação Digital the current umbrella, explicitly including IA, dados, automação, produtos/sistemas e agentes.
- Project diagrams must adapt without clipping on desktop, tablet or mobile.
- Technical SVG connectors must not pass through labels or nodes; representative diagrams need safe-zone contracts.
- QA must test internal visual integrity, not only outer viewport overflow.

## Validation

- RED/GREEN contract for guide completeness.
- RED/GREEN contract for B2X + Transformação Digital narrative.
- RED/GREEN contract for project-flow clipping and technical-diagram label safety.
- Playwright at 390x844, 768x1024, 1366x768, 1440x900, 1920x1080, 2560x1440 and 3840x2160.
- Build, routes, image audit and deploy must remain green.
