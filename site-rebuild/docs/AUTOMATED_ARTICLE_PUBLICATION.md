# Publicação automática de artigos — contrato operacional

Este documento é canônico para o artigo semanal gerado pelo ChatGPT.

## Escopo

- Repositório: `FilipeGCB/blog-filipe-guardia`
- Branch de publicação: `main`
- Arquitetura válida: `site-rebuild/`
- Destino: GitHub Pages
- HTML antigo na raiz e `artigos/` legado: somente compatibilidade, nunca fonte editorial.

## Antes de escrever

1. sincronizar com o estado atual da `main`;
2. ler `site-rebuild/README.md`;
3. ler `src/data/articles.ts`;
4. ler `src/components/ArticleLayout.astro` e `EditorialVisual.astro`;
5. ler o artigo mais recente;
6. verificar temas e datas para não duplicar assunto, slug ou publicação;
7. consultar os testes atuais em `tests/` para respeitar os contratos vigentes.

## Pacote atômico do artigo

Cada publicação deve incluir no mesmo conjunto lógico:
- `src/content/articles/<slug>.html`;
- entrada completa em `src/data/articles.ts`;
- capa local;
- figura interna local;
- metadados e alt text válidos.

O corpo do artigo deve ser HTML semântico e não deve duplicar layout, header, footer ou navegação.

## Regras visuais

- Sem imagens externas.
- Sem robôs, hologramas ou decoração genérica de IA.
- A imagem deve ter função narrativa.
- Nenhum viewport pode ter overflow horizontal.
- Retratos no mobile devem preservar o assunto principal sem crop destrutivo.
- Figuras técnicas e SVGs devem caber integralmente no frame.
- SVG técnico precisa de `viewBox` e não pode cortar nós, labels ou conectores.
- Capas e figuras devem funcionar de 390 px até 4K.
- Não criar exceção visual específica para um único artigo quando uma regra geral resolve.

## Conteúdo e segurança

- Linguagem simples e progressiva.
- Não expor informações confidenciais, dados corporativos internos, clientes, colegas, credenciais ou detalhes pessoais sensíveis.
- Para fatos atuais, regulação, política, produtos ou tecnologia recente, pesquisar fontes primárias/oficiais.
- Diferenciar fato, análise e opinião.
- Política e religião podem ser temas editoriais, mas sem propaganda partidária, persuasão eleitoral ou ataque a grupos.

## Gates obrigatórios

Antes do push:
```bash
npm run check
npm run build
npm run preserve:legacy
npm run audit:routes
npm run test:visual
```

Após o push:
- acompanhar `Build and deploy editorial site`;
- o job de push roda novamente os gates e o Playwright multi-viewport;
- só declarar publicado quando build, QA visual, deploy e smoke da rota pública estiverem verdes.

## Regra de falha

Se qualquer gate falhar:
- não declarar sucesso;
- não contornar o teste;
- corrigir a causa;
- repetir os gates;
- se o GitHub estiver indisponível, registrar que o artigo ficou preparado mas não publicado.

## Manutenção

Quando o site mudar, atualizar este documento e o prompt da automação semanal no mesmo ciclo. O prompt não deve carregar regras divergentes das regras do repositório.
