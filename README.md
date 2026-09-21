# Filipe Guardia — Transformação Digital, Sistemas e IA

Este repositório mantém o blog e portfólio profissional público de Filipe Guardia.

Site público: https://filipegcb.github.io/blog-filipe-guardia/

## Arquitetura atual

A fonte canônica do site é `site-rebuild/`, construída com Astro, TypeScript, HTML semântico, CSS local, assets editoriais locais e GitHub Pages.

Os HTML antigos na raiz e a pasta raiz `artigos/` existem apenas para compatibilidade e preservação de URLs. Não devem ser usados como fonte principal para novas mudanças editoriais.

Principais áreas:

```text
site-rebuild/src/pages/              páginas Astro
site-rebuild/src/content/articles/  corpo semântico dos artigos
site-rebuild/src/data/articles.ts   metadados e ordem editorial
site-rebuild/src/components/        componentes compartilhados
site-rebuild/src/styles/            sistema visual e responsividade
site-rebuild/public/assets/         imagens e figuras locais
site-rebuild/tests/                 contratos e QA Playwright
.github/workflows/                  validação e deploy
```

## Editar ou publicar

Leia primeiro:
- `site-rebuild/README.md`
- `site-rebuild/docs/AUTOMATED_ARTICLE_PUBLICATION.md`

Validação completa:

```bash
cd site-rebuild
npm ci
npm run check
npm run build
npm run preserve:legacy
npm run audit:routes
npm run test:visual
```

O workflow `Build and deploy editorial site` bloqueia o deploy se os contratos editoriais, build, rotas ou QA visual multi-viewport falharem.

## Artigo semanal automático

Existe uma automação do ChatGPT aos sábados. Ela publica na arquitetura Astro atual e deve obedecer ao contrato canônico do repositório. Um artigo novo não exige edição manual das listas de QA: os testes descobrem automaticamente o artigo mais recente e todos os artigos registrados em `articles.ts`.

## Princípios

- conteúdo público e útil;
- nenhuma dependência de imagem externa para o editorial;
- nenhuma informação confidencial ou credencial;
- leitura principal funciona sem JavaScript;
- acessibilidade, foco visível e reduced motion;
- responsividade validada de mobile até 4K;
- figuras técnicas nunca podem perder conteúdo lateral;
- retratos mobile devem preservar o assunto principal;
- GitHub Pages é o destino canônico.
