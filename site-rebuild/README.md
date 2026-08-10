# Reformulação editorial — Filipe Guardia

Esta pasta contém a nova camada estática do site: Astro, HTML semântico, CSS local e SVGs editoriais autorais. O conteúdo dos 15 artigos é mantido em `src/content/articles/` como HTML integral; metadados, séries e estratégia visual ficam em `src/data/articles.ts`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm run check
npm run build
npm run audit:routes
```

O build usa `format: file` para preservar as URLs dos artigos em `/artigos/*.html` e as páginas institucionais em `.html`. A navegação do arquivo e da biblioteca também usa arquivos explícitos (`artigos.html` e `biblioteca.html`) por compatibilidade com GitHub Pages estático.

## Princípios

- leitura e conteúdo não dependem de JavaScript;
- imagens são SVGs locais com função narrativa, não decoração genérica;
- cada artigo possui capa e figura interna;
- o catálogo público de habilidades permanece separado do blog;
- o PageAgent experimental não é carregado globalmente;
- o site respeita foco visível, HTML semântico e `prefers-reduced-motion`.
