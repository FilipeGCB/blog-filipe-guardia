# Public Portfolio README System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Padronizar os cinco repositórios públicos para que cada projeto seja entendido em até 10 segundos, em PT-BR e inglês, sem perder documentação técnica nem introduzir mudanças funcionais.

**Architecture:** Cada repositório recebe uma branch dedicada baseada em `main`, com uma camada de entrada editorial curta e bilíngue sobre a documentação existente. O conteúdo técnico permanece abaixo dessa camada; o Cognitive OS preserva sua convenção histórica de `README.md` em inglês + `README.pt-BR.md`, enquanto os demais passam a usar `README.md` em PT-BR + `README.en.md` em inglês.

**Tech Stack:** Markdown, GitHub branches/PRs, validação de links e comandos já existentes; sem alteração de código funcional.

**Spec:** `docs/superpowers/specs/2026-09-05-public-portfolio-readme-system-design.md`

## Global Constraints

- Escopo público: `blog-filipe-guardia`, `visual-presentation-studio-public`, `guardia-live`, `cognitive-os`, `fil-harness`.
- Repositórios privados ficam fora do trabalho.
- Não alterar arquitetura, comportamento, licença ou código funcional dos produtos.
- Não introduzir dados privados, dados operacionais, segredos, credenciais, endpoints privados ou informação corporativa sensível.
- A primeira tela deve responder: o que é, por que existe, diferencial, estado atual e como explorar/testar.
- PT-BR é a entrada principal, exceto Cognitive OS, que preserva a estrutura histórica por compatibilidade.
- A tradução deve ser semanticamente equivalente, não literal.
- Conteúdo técnico atual relevante deve ser preservado, apenas reorganizado.
- Nenhum merge em `main` antes da validação final de cada branch.

---

### Task 1: Blog Filipe — README bilíngue e narrativa pública atual

**Files:**
- Modify: `README.md`
- Create: `README.en.md`

**Interfaces:**
- Consumes: estado real de `main` e lista atual de projetos públicos.
- Produces: porta de entrada pública que conecta blog, artigos e portfólio atual.

- [ ] **Step 1: Criar branch** `docs/readme-bilingual-v1` a partir de `main`.
- [ ] **Step 2: Reescrever `README.md`** com abertura curta em PT-BR, resumo em inglês e link para `README.en.md`.
- [ ] **Step 3: Substituir nomes antigos de projetos públicos** por Cognitive OS, Fil-Harness, Visual Presentation Studio e Guard.IA Live; marcar projetos privados apenas quando forem contexto adicional.
- [ ] **Step 4: Criar `README.en.md`** semanticamente equivalente.
- [ ] **Step 5: Validar** links do site, links de idioma, nomes dos projetos e ausência de afirmações não sustentadas.
- [ ] **Step 6: Commit** com mensagem `docs: clarify bilingual public portfolio entry`.

### Task 2: Visual Presentation Studio — valor primeiro, método depois

**Files:**
- Modify: `README.md`
- Create: `README.en.md`

**Interfaces:**
- Consumes: README técnico atual e estrutura real do repositório.
- Produces: entrada PT-BR curta + versão inglesa completa, preservando metodologia, gates, QA e fronteira pública.

- [ ] **Step 1: Criar branch** `docs/readme-bilingual-v1` a partir de `main`.
- [ ] **Step 2: Reestruturar `README.md`** para começar com: o que é, problema, diferencial, estado atual e como validar.
- [ ] **Step 3: Preservar abaixo** lifecycle de dois gates, quality system, public-safety boundary, validação e direitos.
- [ ] **Step 4: Criar `README.en.md`** com conteúdo equivalente e natural em inglês.
- [ ] **Step 5: Validar** comandos atuais (`unittest`, `validate_repo.py`, `public_safety_check.py`, build React) sem alterá-los.
- [ ] **Step 6: Commit** com mensagem `docs: add bilingual product-first README`.

### Task 3: Guard.IA Live — produto primeiro, browser depois

**Files:**
- Modify: `README.md`
- Create: `README.en.md`

**Interfaces:**
- Consumes: capacidades reais atuais da extensão.
- Produces: explicação rápida do copiloto local-first, com limitações de Teams/Firefox/Whisper preservadas.

- [ ] **Step 1: Criar branch** `docs/readme-bilingual-v1` a partir de `main`.
- [ ] **Step 2: Reescrever abertura em PT-BR** para explicar o produto antes dos detalhes de WebExtension.
- [ ] **Step 3: Preservar estado real**: Teams captions, transcript, storage local, streaming chat, Ollama padrão, Whisper opcional, Firefox parcial.
- [ ] **Step 4: Criar `README.en.md`** com a mesma fronteira de capacidade.
- [ ] **Step 5: Validar** comandos de teste e instruções de carregamento Chrome/Firefox.
- [ ] **Step 6: Commit** com mensagem `docs: clarify Guard.IA Live in two languages`.

### Task 4: Cognitive OS — simplificar a primeira tela sem quebrar compatibilidade

**Files:**
- Modify: `README.md`
- Modify: `README.pt-BR.md`

**Interfaces:**
- Consumes: convenção existente de idioma, release v1.4.0, instalação e documentação de capabilities.
- Produces: top section mais curta em ambos os idiomas, mantendo evidências, adapters e documentação completa abaixo.

- [ ] **Step 1: Criar branch** `docs/readme-entry-v1` a partir de `main`.
- [ ] **Step 2: Simplificar topo do `README.md`** para: o que é, quando usar, resultado esperado, instalação e uso em 60 segundos.
- [ ] **Step 3: Aplicar a mesma hierarquia ao `README.pt-BR.md`**.
- [ ] **Step 4: Preservar** release evidence, NotebookLM, zero-config, artefatos, runtime truth, layout, conformance e licença nas seções posteriores.
- [ ] **Step 5: Validar** links de idioma, link da release v1.4.0 e comando `npx skills add`.
- [ ] **Step 6: Commit** com mensagem `docs: simplify bilingual Cognitive OS entry`.

### Task 5: Fil-Harness — autoridade explicada antes da arquitetura

**Files:**
- Modify: `README.md`
- Create: `README.en.md`

**Interfaces:**
- Consumes: README técnico publicado e trust model real.
- Produces: entrada PT-BR direta que explica execução sem autoaprovação, com arquitetura e guarantees preservadas abaixo.

- [ ] **Step 1: Criar branch** `docs/readme-bilingual-v1` a partir de `main`.
- [ ] **Step 2: Reescrever `README.md` em PT-BR** com tagline, resumo inglês e link para versão completa em inglês.
- [ ] **Step 3: Preservar** pipeline Task Intake → Provider → candidate → detached verification → TrustedRunner → Evidence → GateEngine → policy.
- [ ] **Step 4: Preservar** ALLOW/HUMAN/DENY, fail-closed, retry conservador, SQLite e limites do projeto.
- [ ] **Step 5: Criar `README.en.md`** com o conteúdo equivalente.
- [ ] **Step 6: Validar** quick start, exemplos, links para SECURITY e docs de trust/architecture.
- [ ] **Step 7: Commit** com mensagem `docs: add bilingual Fil-Harness README`.

### Task 6: Revisão cruzada do portfólio

**Files:**
- Review only across all five README pairs.

**Interfaces:**
- Consumes: Tasks 1–5.
- Produces: portfólio consistente e pronto para integração.

- [ ] **Step 1: Confirmar inventário público** e que nenhum repositório privado foi alterado.
- [ ] **Step 2: Verificar consistência de naming**: Cognitive OS, Fil-Harness, Visual Presentation Studio, Guard.IA Live, Blog Filipe.
- [ ] **Step 3: Verificar primeira tela**: visitante entende cada projeto sem atravessar arquitetura ou histórico.
- [ ] **Step 4: Verificar PT-BR ↔ EN** em todos os repos.
- [ ] **Step 5: Verificar limites e estado real**; remover qualquer capacidade exagerada.
- [ ] **Step 6: Verificar links e comandos** por inspeção e, quando CI existir, aguardar status verde.
- [ ] **Step 7: Criar PR individual por repositório** contra `main`.

### Task 7: Retomar Blog Filipe — Bloco 1 visual já aprovado

**Files:**
- Read: `docs/superpowers/specs/2026-08-26-blog-visual-system-design.md`
- Read: `docs/superpowers/plans/2026-08-26-responsive-foundation-and-hero.md`
- Modify: apenas arquivos definidos nesse plano, na branch `design/visual-system-v1`.

**Interfaces:**
- Consumes: sistema visual aprovado e estado real atualizado do GitHub.
- Produces: fundação responsiva + hero definitivo, sem alterar a imagem aprovada.

- [ ] **Step 1: Revalidar `main` e `design/visual-system-v1`** antes de qualquer mudança.
- [ ] **Step 2: Ler o plano responsivo/hero completo** e conferir commits recentes da branch.
- [ ] **Step 3: Executar somente o Bloco 1**: visual/editorial/reading shells, imagens responsivas, remoção de base64 workaround, hero definitivo.
- [ ] **Step 4: Preservar imagem aprovada** sem regenerar rosto, pose, expressão ou composição central.
- [ ] **Step 5: Rodar testes e QA** nos viewports obrigatórios definidos na spec.
- [ ] **Step 6: Não publicar em `main`** até gates visuais e técnicos estarem verdes.

### Task 8: Página Projetos — alinhar Blog e GitHub

**Files:**
- Modify: arquivos da página Projetos somente depois do Bloco 1 aprovado tecnicamente.

**Interfaces:**
- Consumes: portfólio público já padronizado e sistema visual do Blog.
- Produces: página Projetos coerente com os produtos públicos reais.

- [ ] **Step 1: Substituir cards/narrativa antiga** pelos projetos públicos reais e atuais.
- [ ] **Step 2: Explicar o papel de cada projeto** na evolução profissional/técnica, não apenas listar features.
- [ ] **Step 3: Distinguir claramente** projetos públicos de projetos privados citados apenas como contexto.
- [ ] **Step 4: Aplicar visual editorial aprovado** e peças visuais próprias sem inventar screenshots reais.
- [ ] **Step 5: Validar responsividade, links externos e consistência PT-BR/EN quando aplicável ao site.
- [ ] **Step 6: Rodar QA final da página Projetos** antes de qualquer merge.

## Self-Review

- Spec coverage: todos os cinco repositórios, bilinguismo, primeira tela, preservação técnica, coerência Blog↔GitHub e retomada do Blog estão cobertos.
- Placeholder scan: nenhum `TBD`, `TODO` ou etapa vaga intencional permanece.
- Scope check: alterações de README são documentais; Bloco 1 do Blog continua separado pelo plano visual já aprovado.
- Safety check: repositórios privados explicitamente fora de escopo; nenhuma licença ou comportamento funcional será alterado.
