# Guard.IA Header HQ Fix Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir o cabeçalho para animar somente o símbolo Guard.IA, preservar sempre o texto existente e terminar em um G 3D nítido e transparente, com QA completo antes da publicação.

**Architecture:** O texto editorial do cabeçalho permanece fora de qualquer estado visual da animação. O slot do símbolo expande temporariamente para mostrar o lockup Guard.IA em WebM VP9 com alpha e volta ao tamanho final quando restar o G; o fallback final é WebP RGBA em alta qualidade. Binários são materializados em branch isolada, sem transporte/base64 no estado final.

**Tech Stack:** Astro 7, TypeScript/JavaScript, CSS, WebM VP9 alpha, WebP RGBA, Node test runner, Playwright, GitHub Actions/Pages.

**Spec:** Solicitação aprovada nesta conversa em 2026-09-16.

## Global Constraints

- Preservar visíveis `Filipe Guardia` e `B2X · Transformação Digital · IA`; a animação substitui somente o símbolo G.
- Não usar JPG no G final; o fundo deve ser transparente.
- Não ampliar o vídeo acima da resolução codificada.
- Respeitar `prefers-reduced-motion` com entrada direta no G estático.
- Não alterar navegação, conteúdo editorial ou comportamento do menu.
- Não deixar `.transport`, base64 ou workflow temporário no commit final.
- Não atualizar `main` antes dos gates de contrato e Playwright passarem na PR.

---

### Task 1: Contrato de regressão do cabeçalho

**Files:**
- Modify: `site-rebuild/tests/brand-header-contract.test.mjs`
- Create: `site-rebuild/tests/brand-header-visual.spec.ts`

- [ ] **Step 1:** Escrever testes que exijam WebP transparente de alta resolução, WebM alpha, texto editorial permanente, ausência de regra que esconda `.brand-copy`, dimensões finais legíveis e fallback de movimento reduzido.
- [ ] **Step 2:** Executar o contrato contra a implementação atual e confirmar falha pelos motivos esperados.

### Task 2: Assets de marca em alta qualidade

**Files:**
- Create: `site-rebuild/public/assets/brand/guardia-g-hq.webp`
- Create: `site-rebuild/public/assets/brand/guardia-lockup-intro-hq.webm`
- Remove from use: `site-rebuild/public/assets/brand/guardia-g.jpg`
- Remove from use: `site-rebuild/public/assets/brand/guardia-lockup-intro.webm`

- [ ] **Step 1:** Materializar `guardia-g-hq.webp` 160×211 RGBA e validar SHA-256 `a3d3cfa213d91fd8d904885dc4017554125e7635ac1f10410989cf02c72f517d`.
- [ ] **Step 2:** Materializar `guardia-lockup-intro-hq.webm` 240×90, 15 fps, VP9 alpha e validar SHA-256 `e933ef915fa36390eaf9a2316da455099faaab494d83430a7cd8a558c04e307d`.
- [ ] **Step 3:** Remover integralmente qualquer transporte temporário antes do commit candidato.

### Task 3: Implementação mínima do header

**Files:**
- Modify: `site-rebuild/src/components/SiteHeader.astro`

- [ ] **Step 1:** Manter `.brand-copy` independente da animação e sem alteração de opacidade/transform.
- [ ] **Step 2:** Colocar vídeo e G estático dentro do slot `.guardia-brand-mark`, expandindo apenas o slot durante a entrada e recolhendo-o quando o lockup terminar.
- [ ] **Step 3:** Executar `npm run test:brand` e confirmar verde.

### Task 4: QA visual e integração

**Files:**
- Test: `site-rebuild/tests/brand-header-visual.spec.ts`
- Test: suíte existente em `site-rebuild/tests/*.spec.ts`

- [ ] **Step 1:** Abrir PR para disparar os gates reais do repositório.
- [ ] **Step 2:** Confirmar `npm run check`, build, auditoria de rotas e Playwright multi-viewport verdes.
- [ ] **Step 3:** Validar no Playwright desktop e mobile que o texto permanece visível durante a animação, não há overflow horizontal, o vídeo não é ampliado além de 240 px e o G final tem dimensão legível.
- [ ] **Step 4:** Validar `prefers-reduced-motion` e falha do vídeo com fallback estático.

### Task 5: Publicação e QA do artefato real

**Files:** nenhum arquivo novo.

- [ ] **Step 1:** Atualizar `main` somente com o commit que passou na PR.
- [ ] **Step 2:** Confirmar workflow de deploy concluído com sucesso.
- [ ] **Step 3:** Baixar o artefato do Pages e verificar hashes/tamanhos dos dois assets, HTML apontando para os arquivos HQ e ausência de `.transport`/workflow temporário/JPG antigo referenciado.
- [ ] **Step 4:** Só então declarar a correção concluída.