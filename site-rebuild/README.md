# Reformulação editorial — Filipe Guardia

Esta pasta contém a nova camada estática do site: Astro, HTML semântico, CSS local e SVGs editoriais autorais. O conteúdo dos artigos é mantido em `src/content/articles/` como HTML integral; metadados, séries e estratégia visual ficam em `src/data/articles.ts`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run check
npm run build
npm run preserve:legacy
npm run audit:routes
```

O build usa `format: file` para preservar as URLs dos artigos em `/artigos/*.html` e as páginas institucionais em `.html`. A navegação do arquivo e da biblioteca também usa arquivos explícitos (`artigos.html` e `biblioteca.html`) por compatibilidade com GitHub Pages estático.

## Publicação editorial

Cada artigo é uma unidade atômica de publicação. O fragmento HTML, o bloco correspondente em `src/data/articles.ts`, a capa e a figura interna devem entrar no **mesmo commit**.

Não publique essas quatro partes em commits separados. `npm run check` valida deliberadamente a paridade entre fragmentos e metadados, a existência dos assets e a âncora de `figureAfterHeading`; portanto, um commit parcial deve falhar e nunca chegar ao deploy.

Antes de enviar para `main`, valide o conjunto completo com os quatro comandos da seção anterior.

## Princípios

- leitura e conteúdo não dependem de JavaScript;
- imagens são SVGs locais com função narrativa, não decoração genérica;
- cada artigo possui capa e figura interna;
- o catálogo público de habilidades permanece separado do blog;
- o PageAgent experimental não é carregado globalmente;
- o site respeita foco visível, HTML semântico e `prefers-reduced-motion`.


## Contrato canônico para artigos novos

A arquitetura em `site-rebuild/` é a única fonte de verdade para publicação editorial. Qualquer pessoa, automação ou agente que crie um artigo deve seguir estas regras:

1. criar o corpo em `src/content/articles/<slug>.html`;
2. registrar o artigo em `src/data/articles.ts`;
3. incluir capa e figura interna locais em `public/assets/editorial/`;
4. garantir `alt`, `figureAfterHeading`, data, série, categoria, tags e tempo de leitura;
5. nunca editar os HTML legados da raiz como fonte principal;
6. nunca depender de imagem externa;
7. preservar responsividade: nenhuma imagem, figura, SVG ou bloco pode gerar overflow horizontal;
8. no mobile, retratos não podem perder o assunto principal; figuras técnicas devem mostrar o conteúdo inteiro;
9. executar `npm run check`, `npm run build`, `npm run preserve:legacy`, `npm run audit:routes` e `npm run test:visual`;
10. só considerar publicado após o workflow `Build and deploy editorial site` concluir com sucesso e a rota pública responder.

Os testes Playwright descobrem automaticamente o artigo mais recente e todos os artigos registrados em `articles.ts`. Portanto, artigo novo não deve exigir atualização manual de listas de QA.

## Publicação automatizada de sábado

A tarefa semanal do ChatGPT publica direto em `main`. Por isso, o workflow de push é uma barreira obrigatória: ele executa validações de conteúdo, build, auditoria de rotas e QA visual multi-viewport antes do deploy.

A automação deve ler, nesta ordem, antes de produzir:
- este `README.md`;
- `docs/AUTOMATED_ARTICLE_PUBLICATION.md`;
- `src/data/articles.ts`;
- `src/components/ArticleLayout.astro`;
- `src/components/EditorialVisual.astro`;
- o artigo mais recente;
- os testes em `tests/` relacionados a publicação e responsividade.

Se qualquer gate falhar, não tratar o artigo como publicado. Corrigir no mesmo ciclo quando a correção for segura.
