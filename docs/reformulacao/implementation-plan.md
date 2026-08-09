# Reformulação editorial do site Filipe Guardia — Implementation Plan

> For agentic workers: REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

Goal: transformar o site estático do Filipe em uma publicação editorial visual, com fonte única de conteúdo, capas/diagramas por artigo, arquivo navegável e páginas internas coerentes, preservando URLs e publicação no GitHub Pages.

Architecture: usar Astro em modo static output. O conteúdo original dos 15 artigos será extraído para uma coleção local de fragments HTML, os metadados ficarão em uma fonte única TypeScript e os layouts/renderizadores gerarão home, arquivo, artigos, projetos, sobre, contato e biblioteca. O output será publicado por GitHub Actions, sem runtime no cliente além de menu, filtros e progressão de leitura.

Tech Stack: Node 24, npm, Astro, TypeScript, HTML semântico, CSS próprio, SVG local e GitHub Pages via Actions.

## Global Constraints

- Preservar o conteúdo textual atual dos 15 artigos nesta primeira implementação.
- Preservar rotas existentes em /artigos/*.html e páginas institucionais ou criar redirects equivalentes.
- Nenhuma imagem externa ou screenshot confidencial.
- Cada artigo deve possuir um asset visual com função narrativa e alt text.
- Nenhum visual genérico de robô, holograma ou “cérebro de IA”.
- O site deve funcionar sem JavaScript para leitura principal.
- Respeitar teclado, foco, contraste, zoom e prefers-reduced-motion.
- GitHub Pages é o destino canônico; Vercel não é dependência.
- PageAgent não deve ser carregado globalmente na leitura editorial.
- Não alterar a main diretamente; usar a branch reformulacao/editorial-systems-v1.
- Nenhum conhecido BLOCKER ou MAJOR pode permanecer antes do handoff.

---

## Workspace e arquivos

O build local ficará em /workspace/scratch/6ff436e3c197/site-rebuild.

Arquivos novos principais:

- package.json: scripts e dependências.
- astro.config.mjs: output estático, base URL e site canônico.
- tsconfig.json: configuração TypeScript.
- src/data/articles.ts: fonte única dos 15 artigos e campos de capa.
- src/data/projects.ts: fonte única dos projetos.
- src/data/library.ts: fonte única da Biblioteca pública.
- src/content/articles/*.html: fragmentos HTML do corpo original dos artigos.
- src/layouts/BaseLayout.astro: HTML global, SEO, header e footer.
- src/layouts/ArticleLayout.astro: abertura, hero, progresso, leitura, fontes e navegação.
- src/components/SiteHeader.astro: navegação responsiva.
- src/components/SiteFooter.astro: encerramento e links.
- src/components/EditorialVisual.astro: renderização de capas e diagramas.
- src/components/ArticleCard.astro: card editorial acessível.
- src/components/ReadingPath.astro: trilhas de leitura.
- src/components/ArticleToc.astro: sumário e progresso.
- src/components/ProjectCase.astro: caso de projeto.
- src/components/LibraryCard.astro: cartão da Biblioteca.
- src/components/PageAgentLauncher.astro: launcher opcional somente na Biblioteca.
- src/pages/index.astro: home.
- src/pages/artigos/index.astro: arquivo de artigos.
- src/pages/artigos/[slug].astro: páginas dos 15 artigos.
- src/pages/sobre.astro: página Sobre.
- src/pages/projetos.astro: página Projetos.
- src/pages/contato.astro: página Contato.
- src/pages/biblioteca/index.astro: índice público.
- src/pages/biblioteca/[slug].astro: páginas temáticas públicas.
- src/pages/404.astro: erro.
- src/styles/global.css: tokens, layout, tipografia, componentes e responsividade.
- public/assets/editorial/*.svg: capas e diagramas locais.
- public/og/*.svg: imagens sociais derivadas das capas.
- public/favicon.svg: marca.
- public/robots.txt e public/sitemap.xml: publicação gerada/estática.
- .github/workflows/deploy-site.yml: build e deploy para GitHub Pages.
- docs/superpowers/plans/2026-08-09-blog-filipe-guardia-reformulation.md: este plano.
- storyboard.md: storyboard aprovado.

Arquivos legados que serão mantidos temporariamente ou redirecionados:

- home.html.
- artigos/*.html antigos, caso a preservação de URL precise de fallback.
- fmh-oauth-consent.html.
- páginas antigas de design systems.

---

## Task 1: scaffold Astro e baseline

Files:
- Create: site-rebuild/package.json
- Create: site-rebuild/astro.config.mjs
- Create: site-rebuild/tsconfig.json
- Create: site-rebuild/src/styles/global.css
- Create: site-rebuild/src/layouts/BaseLayout.astro
- Create: site-rebuild/src/components/SiteHeader.astro
- Create: site-rebuild/src/components/SiteFooter.astro
- Test: site-rebuild/npm run build

Interfaces:
- BaseLayout recebe title, description, canonicalPath, image, type e slots.
- SiteHeader recebe currentPath e navegação renderizada.
- SiteFooter recebe ano e links de configuração.

Steps:
- [ ] Criar package.json com scripts start, dev, build, preview e check; usar Astro estável compatível com Node 24.
- [ ] Configurar astro.config.mjs com site https://filipegcb.github.io/blog-filipe-guardia/ e base /blog-filipe-guardia/.
- [ ] Criar BaseLayout com lang pt-BR, canonical, OG, Twitter, viewport, skip-link e slots para head/body.
- [ ] Criar SiteHeader com links Início, Artigos, Projetos, Biblioteca, Sobre e Contato; marcar aria-current por pathname.
- [ ] Criar SiteFooter sem depender de JavaScript para conteúdo essencial.
- [ ] Criar tokens de cor, tipografia, grid, espaçamento, foco, reduced motion e breakpoints em global.css.
- [ ] Rodar npm install e npm run build.
- [ ] Confirmar que o build gera dist/index.html e não contém erro de TypeScript ou Astro.

---

## Task 2: fonte única e migração textual

Files:
- Create: src/data/articles.ts
- Create: src/content/articles/*.html para os 15 slugs
- Create: src/data/projects.ts
- Create: src/data/library.ts
- Create: scripts/verify-content.mjs
- Test: node scripts/verify-content.mjs

Interfaces:
- Article: { slug, title, deck, category, series, date, dateLabel, readingTime, cover, coverAlt, figure, tags, sourceLinks, contentPath }.
- getArticle(slug): Article.
- listArticles(): Article[] em ordem decrescente de publicação.
- verify-content.mjs deve sair com status 0 quando houver 15 artigos, 15 fragments, títulos únicos, links de artigo válidos e nenhum fragment vazio.

Steps:
- [ ] Extrair somente o conteúdo de article-content dos 15 HTML atuais, removendo article-nav e aside, e salvar cada fragment em src/content/articles/<slug>.html.
- [ ] Copiar títulos, decks, categorias, datas, tempos de leitura e categorias da home para src/data/articles.ts.
- [ ] Adicionar series, tags, cover, coverAlt, figure e figureAlt para cada artigo conforme a tabela de assets do Gate 1.
- [ ] Criar projects.ts com CFO-IA, Hermes, Presentation Intelligence System e Transformação digital em cobrança e planejamento, mantendo status de privacidade.
- [ ] Criar library.ts com as seis famílias públicas e seus caminhos de origem.
- [ ] Implementar verify-content.mjs para comparar a coleção com os slugs esperados.
- [ ] Rodar node scripts/verify-content.mjs e corrigir qualquer divergência antes das páginas.
- [ ] Rodar npm run build e confirmar que a fonte única pode ser importada pelo Astro.

---

## Task 3: sistema visual e assets narrativos

Files:
- Create: public/assets/editorial/home-system.svg
- Create: public/assets/editorial/*.svg para as 15 capas
- Create: public/assets/editorial/*.inner.svg para figuras internas
- Create: src/components/EditorialVisual.astro
- Modify: src/styles/global.css
- Test: npm run build; validação de SVG e alt text por verify-content.mjs

Interfaces:
- EditorialVisual recebe { src, alt, kind, caption, loading, priority }.
- Artigo não pode renderizar uma capa sem alt text.
- SVGs devem usar viewBox, não depender de fontes externas e possuir contraste suficiente.

Steps:
- [ ] Criar home-system.svg como composição de processo, regra, decisão e agente.
- [ ] Criar capas SVG únicas para os 15 artigos, usando a linguagem comum e o assunto específico.
- [ ] Criar figuras internas para memória, camadas da base de conhecimento, taxonomia, ciclo de transformação, harness, roteamento, governança e Pix Parcelado.
- [ ] Usar SVG acessível: title/desc quando a composição exigir, alt textual no componente e fallback textual visível quando imagem falhar.
- [ ] Implementar EditorialVisual com figure, img, loading, decoding, width/height, caption opcional e classe por kind.
- [ ] Criar og cards locais derivados das capas sem texto ilegível incorporado.
- [ ] Rodar um script que valide que cada Article.cover, coverAlt e figure referenciam arquivo existente.
- [ ] Rodar npm run build e confirmar que nenhum asset aponta para URL externa.

---

## Task 4: home, arquivo e cards

Files:
- Create: src/components/ArticleCard.astro
- Create: src/components/ReadingPath.astro
- Create: src/pages/index.astro
- Create: src/pages/artigos/index.astro
- Modify: src/styles/global.css
- Test: npm run build; verificação de links gerados

Interfaces:
- ArticleCard recebe Article e variant feature|standard|compact.
- ReadingPath recebe { slug, title, description, accent, href }.
- Home usa listArticles() e não mantém metadados duplicados.
- O artigo em destaque não pode aparecer novamente na seleção inicial.
- Arquivo deve exibir todos os 15 artigos no HTML inicial, mesmo que filtros usem JavaScript depois.

Steps:
- [ ] Implementar home com hero, prova de autoridade, destaque, trilhas, seleção, projetos, biblioteca e contato.
- [ ] Implementar arquivo editorial com todos os artigos, filtros sem dependência de servidor e estado empty acessível.
- [ ] Renderizar capas como assets funcionais dos cards.
- [ ] Adicionar filtros por série e ano com data attributes e JavaScript progressivo mínimo.
- [ ] Adicionar links textuais “Ver todos os artigos” e “Limpar filtros”.
- [ ] Rodar npm run build e um teste que verifica os 15 slugs no HTML do arquivo e ausência de duplicação do destaque na seleção da home.
- [ ] Inspecionar desktop e mobile pelo servidor local antes de seguir.

---

## Task 5: template e rotas dos artigos

Files:
- Create: src/components/ArticleToc.astro
- Create: src/layouts/ArticleLayout.astro
- Create: src/pages/artigos/[slug].astro
- Modify: src/styles/global.css
- Test: npm run build; node scripts/verify-content.mjs

Interfaces:
- ArticleToc recebe headings [{id, label}] e retorna nav semântico.
- ArticleLayout recebe Article e conteúdo HTML confiável dos fragments.
- Cada rota /artigos/<slug>.html deve existir no output.
- Cada página deve conter title, deck, date, hero, alt, h1 único, toc, fontes e navegação.

Steps:
- [ ] Gerar static paths para os 15 slugs.
- [ ] Renderizar a abertura editorial com capa específica e metadados.
- [ ] Renderizar o fragment textual original sem reescrita.
- [ ] Inserir a figura interna no ponto definido por Article.figureAfterHeading, sem duplicar conteúdo.
- [ ] Gerar TOC a partir dos h2 presentes no fragment.
- [ ] Renderizar progresso e navegação anterior/próximo sem hard-code em site.js.
- [ ] Garantir que a leitura funcione sem JavaScript.
- [ ] Rodar npm run build e verificar que os 15 HTML foram gerados.
- [ ] Comparar títulos e número de h2 do output com os fragments de origem.

---

## Task 6: páginas institucionais, biblioteca e recursos auxiliares

Files:
- Create: src/components/ProjectCase.astro
- Create: src/components/LibraryCard.astro
- Create: src/components/PageAgentLauncher.astro
- Create: src/pages/sobre.astro
- Create: src/pages/projetos.astro
- Create: src/pages/contato.astro
- Create: src/pages/biblioteca/index.astro
- Create: src/pages/biblioteca/[slug].astro
- Create: src/pages/404.astro
- Create: src/pages/obrigado.astro
- Modify: src/styles/global.css
- Test: npm run build; link checker

Interfaces:
- ProjectCase recebe Project e exibe status de privacidade.
- LibraryCard recebe LibrarySource.
- PageAgentLauncher só é importado nas páginas de biblioteca e apresenta aviso explícito.
- Rotas de biblioteca devem gerar os seis caminhos temáticos.

Steps:
- [ ] Reorganizar Sobre em trajetória, capacidades, método e direção.
- [ ] Reorganizar Projetos em quatro casos com proteção de escopo.
- [ ] Manter Contato funcional com o endpoint Formspree configurado, honeypot e redirect para obrigado.
- [ ] Criar índice e seis páginas de Biblioteca a partir de library.ts.
- [ ] Retirar PageAgent da home e dos artigos; manter launcher apenas onde houver aprovação contextual.
- [ ] Preservar fmh-oauth-consent.html e páginas de design system antigas sem incorporá-las à navegação principal.
- [ ] Rodar npm run build e validar links internos, assets e páginas auxiliares.

---

## Task 7: SEO, deploy e compatibilidade de URLs

Files:
- Create: public/robots.txt
- Create: public/sitemap.xml
- Create: .github/workflows/deploy-site.yml
- Modify: astro.config.mjs
- Test: npm run build; script de route audit

Interfaces:
- route audit recebe dist e lista qualquer link interno quebrado.
- sitemap contém home, arquivo, páginas institucionais, biblioteca e 15 artigos.
- workflow executa npm ci, npm run build e deploy-pages.

Steps:
- [ ] Configurar build estático com base correta para GitHub Pages.
- [ ] Gerar sitemap com URLs públicas reais e lastmod derivado dos artigos.
- [ ] Manter caminhos legados necessários com redirects ou cópias estáticas.
- [ ] Não incluir OAuth, páginas de obrigado ou material privado no sitemap.
- [ ] Criar workflow com permissões pages:write e id-token:write, build artifact e deploy.
- [ ] Rodar route audit e confirmar zero links internos quebrados.
- [ ] Registrar no README a forma de desenvolvimento local e a necessidade de habilitar GitHub Pages por Actions, sem remover instruções de restauração.

---

## Task 8: verificação, renderização e handoff

Files:
- Create: scripts/route-audit.mjs
- Create: scripts/asset-audit.mjs
- Create: docs/visual-inspection.md
- Modify: README.md
- Test: npm run check; npm run build; node scripts/route-audit.mjs; node scripts/asset-audit.mjs

Interfaces:
- check deve executar verificação de conteúdo, assets, rotas e build.
- visual-inspection.md registra viewport, superfície, observação, severidade, correção e status.
- O handoff só pode ser READY FOR USER REVIEW com zero BLOCKER e zero MAJOR conhecidos.

Steps:
- [ ] Implementar route-audit para verificar todos os href/src locais no dist.
- [ ] Implementar asset-audit para verificar assets, alt, dimensões e ausência de URLs externas não autorizadas.
- [ ] Rodar npm run check em uma cópia limpa do build.
- [ ] Iniciar servidor local e inspecionar home, arquivo, artigo mais recente, artigo com diagrama de governança, Sobre, Projetos, Contato e Biblioteca em desktop e mobile.
- [ ] Registrar cada issue em docs/visual-inspection.md e corrigir BLOCKER/MAJOR.
- [ ] Renderizar novamente após cada correção relevante.
- [ ] Preparar branch remota e PR draft somente depois de build, audits e inspeção.
- [ ] Não marcar FINAL; a etapa seguinte é READY FOR USER REVIEW e Gate 2.

