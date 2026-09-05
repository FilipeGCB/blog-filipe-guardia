# Blog public QA and positioning fix

## Scope

Correct three production defects found after the public-readiness release:

1. Public guide downloads are summaries rather than self-contained executable prompts.
2. Current professional positioning still reduces the scope to B2B instead of B2B + B2C (B2X), and the Sobre page does not make Transformação Digital the umbrella for data, automation, systems and AI.
3. Visual QA passes visibly broken diagrams: connector/text collisions inside technical SVGs and clipped project-flow nodes on desktop.

## Required outcomes

- Every downloadable Markdown guide is self-contained enough to activate its method in a generic assistant without private files, corporate branding, local paths or hidden kernels.
- Current-scope copy uses B2X; historic B2B references remain only where historically accurate.
- Sobre makes Transformação Digital the current umbrella and explicitly positions IA, dados, automação, produtos/sistemas e agentes inside it.
- Project diagrams adapt without clipping on desktop, tablet or mobile.
- Technical SVG connectors never cross readable labels.
- QA inspects rendered internal geometry, not only outer viewport bounds.

## Validation

- RED/GREEN contract for guide completeness.
- RED/GREEN contract for B2X + Transformação Digital narrative.
- Rendered project-flow clipping checks.
- Rendered SVG connector/text collision checks across all current article figures.
- Playwright at mobile, tablet, desktop, Full HD, QHD and 4K.
- Build, routes, image audit and deploy stay green.
