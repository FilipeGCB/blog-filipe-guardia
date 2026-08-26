# Blog Visual Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir o hero aprovado, eliminar imagens/crops quebrados, ampliar o layout em monitores grandes e consolidar um sistema visual editorial reutilizável para todo o blog.

**Architecture:** O site Astro continua sendo a fonte publicada. O hero pessoal usa um master 16:9 aprovado, sem regeneração de identidade. Capas de artigos deixam de depender de crops frágeis de SVG e passam a usar um componente editorial previsível; figuras técnicas continuam vetoriais e sempre usam `contain`. O CSS ganha largura fluida para monitores grandes e tokens de paleta canônicos.

**Tech Stack:** Astro, TypeScript, CSS, GitHub Pages, WebP/SVG.

**Spec:** `docs/reformulacao/editorial-visual-system-2026.md`

## Global Constraints

- Não alterar a identidade facial da fotografia aprovada.
- Nenhuma imagem pode ser esticada.
- Diagramas explicativos devem aparecer inteiros.
- Hero desktop alvo: 16:9 e até 3840×2160.
- Shell editorial desktop pode crescer até ~1840 px; largura de leitura permanece ~720–760 px.
- Paleta canônica: carvão + marfim + plum + brass; violeta como acento.
- Novo post exige imagem preparada e validada antes do deploy.
- Build e auditorias devem ficar verdes antes de atualizar `main`.

---

### Task 1: Corrigir o hero pessoal aprovado

**Files:**
- Modify: `site-rebuild/src/components/EditorialVisual.astro`
- Create: `site-rebuild/public/assets/editorial/generated/filipe-guardia-hero-approved.partNN.txt`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes: asset 4K 16:9 aprovado.
- Produces: hero carregado sem distorção, com fallback editorial e área negativa para copy.

- [ ] Dividir o WebP aprovado em chunks base64 para contornar a limitação de upload binário do conector.
- [ ] Fazer `EditorialVisual` carregar os chunks somente para `hero-photo scroll-hero-media`.
- [ ] Manter fallback que não quebra o layout quando JS ou asset falhar.
- [ ] Definir `object-fit: cover`, `object-position` por breakpoint e impedir qualquer `width/height` deformante.
- [ ] Validar que o hero mantém 16:9 e que o rosto não é recortado em desktop/mobile.

### Task 2: Criar capa editorial resiliente para artigos

**Files:**
- Create: `site-rebuild/src/components/ArticleCover.astro`
- Modify: `site-rebuild/src/components/ArticleCard.astro`
- Modify: `site-rebuild/src/components/ArticleLayout.astro`
- Modify: `site-rebuild/src/pages/index.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Consumes: `Article` (`slug`, `series`, `category`, `title`, `tags`).
- Produces: visual 16:9 coerente por tema, sem depender de crop de arquivo externo.

- [ ] Mapear cada slug para uma metáfora e 2–4 labels curtos.
- [ ] Criar cinco famílias visuais alinhadas às séries editoriais.
- [ ] Renderizar capa com composição abstrata/material, sem texto longo dentro do visual.
- [ ] Trocar cards, hero de artigo e destaque da home para `ArticleCover`.
- [ ] Manter `article.cover` apenas para OpenGraph/fallback enquanto a experiência visual usa o componente resiliente.

### Task 3: Corrigir figuras e imagens existentes

**Files:**
- Modify: `site-rebuild/src/components/EditorialVisual.astro`
- Modify: `site-rebuild/src/styles/global.css`
- Modify: `site-rebuild/scripts/asset-audit.mjs`

**Interfaces:**
- Consumes: SVGs/WEBPs atuais.
- Produces: raster com `cover`; diagramas com `contain`; auditoria que acusa referências inexistentes.

- [ ] Detectar SVG como `is-diagram`.
- [ ] Aplicar `contain` e padding a diagramas em artigo.
- [ ] Garantir proporção e overflow corretos em cards, hero e inline figures.
- [ ] Expandir auditoria para detectar referências quebradas e assets hero inválidos/pequenos.

### Task 4: Corrigir layout para monitor grande e revisar paleta

**Files:**
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Produces: layout amplo em 1440/1920/2560+, mantendo leitura confortável.

- [ ] Ampliar `--content` para shell fluido até ~1840 px.
- [ ] Manter `--reading` em ~740 px.
- [ ] Ajustar grids de hero/cards/projetos para usar largura extra sem criar colunas vazias.
- [ ] Adicionar tokens `night`, `night-soft`, `graphite`, `violet-electric`, `brass`.
- [ ] Reequilibrar backgrounds e borders para conversar com o hero escuro sem transformar o site inteiro em dark mode.
- [ ] Validar breakpoints 900/660 px.

### Task 5: Levar fotografia e impacto para páginas institucionais

**Files:**
- Modify: `site-rebuild/src/pages/sobre.astro`
- Modify: `site-rebuild/src/pages/projetos.astro`
- Modify: `site-rebuild/src/styles/global.css`

**Interfaces:**
- Produces: páginas institucionais com hierarquia visual compatível com a home.

- [ ] Inserir retrato aprovado de forma secundária na página Sobre, sem duplicar o hero da home literalmente.
- [ ] Criar faixa/visual de abertura para Projetos usando linguagem de sistemas, não stock photography.
- [ ] Preservar conteúdo e navegação existentes.

### Task 6: Documentar e automatizar o padrão de novos posts

**Files:**
- Modify: `site-rebuild/README.md`
- Modify: `site-rebuild/scripts/asset-audit.mjs`
- Modify: `site-rebuild/package.json`
- Reference: `docs/reformulacao/editorial-visual-system-2026.md`

**Interfaces:**
- Produces: workflow repetível para próximos artigos.

- [ ] Documentar sequência texto → metáfora → geração de imagens → QA → artigo → build → deploy.
- [ ] Expor comando `npm run audit:assets`.
- [ ] Fazer `npm run check` incluir validação de conteúdo/assets quando seguro.
- [ ] Explicar resolução, aspect ratio, alt text, crop e critérios de rejeição.

### Task 7: Verificação, CI e publicação

**Files:**
- No new source file expected.

**Interfaces:**
- Produces: branch validada e `main` publicado.

- [ ] Rodar CI da branch/PR via workflow existente.
- [ ] Corrigir qualquer falha de TypeScript, asset, rota ou build.
- [ ] Confirmar que o workflow editorial é o único responsável pelo Pages.
- [ ] Atualizar `main` apenas após gates verdes.
- [ ] Confirmar deploy do GitHub Pages no commit final.
