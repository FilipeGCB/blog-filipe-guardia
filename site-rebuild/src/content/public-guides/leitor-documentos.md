---
origin: chatgpt
origem: chatgpt
date: 2026-07-30
data: 2026-07-30
updated: 2026-07-30
atualizado: 2026-07-30
type: master_guide
tipo: guia-mestre
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
catalog_id: 15
version: v1.2
versao: v1.2
tags: [copilot, leitor-universal, documentos, leitura, tipografia, markdown, html, sandbox, docx, pages, txt, pdf, acessibilidade, navegacao, pastas, qa, independente]
---

# Guia Mestre para Leitor Universal de Documentos e Experiência de Leitura

## 0. Declaração de independência

Este guia é completo, independente e reutilizável. Ele deve ser suficiente para orientar o Copilot a receber fontes, formatos, identidade, restrições de segurança e necessidades de leitura e entregar um leitor universal final, funcional, navegável, responsivo, acessível, testado, corrigido e pronto para uso ou publicação.

O leitor pode existir como aplicação independente, módulo de intranet, componente de um grafo de conhecimento, plataforma de aprendizagem, aplicação local ou frontend conectado a SharePoint, Git, APIs e repositórios.

Aplicar também o [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]]. Outros guias podem ser associados por prompt externo, mas não são necessários para executar este documento.

## 1. Contrato de execução

O Copilot não deve encerrar em estudo tipográfico, moodboard, wireframe, parser, conversor isolado, prova de conceito, recomendação de biblioteca, código parcial ou backlog.

> O resultado obrigatório é um leitor universal final, seguro, acessível, testado e pronto para uso no escopo solicitado.

Quando um formato não puder ser interpretado com fidelidade suficiente, o produto deve detectar o formato, informar a limitação, oferecer a melhor visualização segura, preservar o original, declarar o nível de fidelidade e nunca apresentar extração parcial como reprodução fiel.

## 2. Finalidade

Transformar arquivos heterogêneos em conteúdo confortável, pesquisável e navegável, preservando contexto e transparência.

O usuário deve conseguir:

- abrir documentos reais;
- ler por longos períodos;
- navegar por títulos, seções, pastas e documentos;
- pesquisar dentro do documento;
- consultar resumo, metadados, backlinks e relacionados;
- voltar ao contexto anterior;
- alternar entre Home, grafo ou biblioteca e leitor;
- usar modos expandidos;
- preservar posição de leitura;
- usar teclado e tecnologias assistivas;
- distinguir leitura semântica, fidelidade visual, fonte e conversão.

## 3. Base metodológica e referências

Este guia é uma síntese própria baseada em padrões normativos, especificações e documentação oficial.

| Fonte | Uso | Status |
|---|---|---|
| WCAG 2.2 — W3C | contraste, reflow, resize, espaçamento, teclado e foco | normativa |
| Understanding WCAG 2.2 — W3C | interpretação dos critérios | oficial informativa |
| CommonMark 0.31.2 | estrutura e parsing de Markdown | especificação |
| ISO/IEC 29500 / Office Open XML | estrutura de DOCX | padrão |
| Microsoft Learn — WordprocessingML | implementação de DOCX | oficial |
| Apple Support — Pages | conversão e limitações | oficial |
| File API / File System API — MDN | leitura local e permissões | documentação técnica |
| HTML Living Standard / CSP / sandbox | isolamento e conteúdo ativo | padrões web |
| Carbon Design System — Typography | tipografia produtiva e expressiva | prática industrial |

Regras:

- WCAG define requisitos de acessibilidade, não uma estética única;
- 18 px, 62–74ch e line-height próxima de 1.7 são defaults de produto, não leis universais;
- o usuário deve poder alterar família, tamanho, largura e espaçamento;
- legibilidade deve ser validada com documentos reais;
- fontes externas exigem licença e hospedagem autorizadas;
- arquivos de fonte não devem ser distribuídos como artefatos separados.

## 4. Princípios obrigatórios

1. **Leitura antes de decoração.** Nenhum efeito compete com o documento.
2. **Semântica antes de aparência.** Títulos, listas, tabelas, notas, links e imagens são reconhecidos estruturalmente.
3. **Fidelidade declarada.** Todo documento informa se o modo é semântico, fiel, fonte ou conversão.
4. **Original preservado.** O padrão é read-only.
5. **Progressive enhancement.** Texto legível → estrutura → navegação → busca → tipografia → recursos avançados.
6. **Portabilidade.** A interface não depende de um único formato.
7. **Segurança acima da fidelidade.** Macros, scripts e conteúdo ativo não são executados automaticamente.
8. **Estado navegável.** Toda tela possui retorno, título e foco coerente.
9. **Transparência.** Mostrar parser, formato, fidelidade, avisos e conteúdo omitido.
10. **QA antes de release.** Abrir um arquivo não basta para considerar o produto concluído.

## 5. Entradas mínimas

```yaml
reader_brief:
  product_name:
  objective:
  users:
  environments:
  sources:
  formats:
  expected_volume:
  largest_file:
  languages:
  privacy:
  permissions:
  fidelity_priority:
  reading_priority:
  offline_requirement:
  publication:
  authentication:
  integrations:
  visual_identity:
  accessibility:
  performance:
```

## 6. Resultado obrigatório

A entrega deve conter aplicação executável, Home, biblioteca ou grafo, explorador de pastas quando houver hierarquia, leitor, modo imersivo, voltar e início consistentes, adaptadores, modelo canônico, renderers, tipografia configurável, busca, outline, metadados, relacionados, estado de leitura, segurança, acessibilidade, testes, build, documentação, relatório de formatos, fidelidade e QA.

## 7. Arquitetura

```text
Fonte
→ adaptador de repositório
→ detector de formato
→ política de segurança
→ parser ou conversor
→ normalizador
→ modelo canônico
→ renderer semântico, fiel ou fonte
→ shell do leitor
→ busca e navegação
→ estado de leitura
→ observabilidade
```

```ts
interface DocumentAdapter {
  id: string;
  label: string;
  extensions: string[];
  mimeTypes: string[];
  canOpen(input: DocumentInput): Promise<DetectionResult>;
  parse(input: DocumentInput, options: ParseOptions): Promise<CanonicalDocument>;
  renderFidelity?(input: DocumentInput, options: FidelityOptions): Promise<FidelityArtifact>;
  extractText?(input: DocumentInput, options: ExtractionOptions): Promise<TextExtraction>;
  dispose?(): Promise<void>;
}
```

## 8. Modelo canônico

```yaml
canonical_document:
  document_id:
  source_id:
  source_item_id:
  title:
  subtitle:
  author:
  language:
  format:
  mime_type:
  size:
  created_at:
  modified_at:
  revision:
  classification:
  fidelity_level:
  parser:
  parser_version:
  warnings:
  metadata:
  outline:
  blocks:
  resources:
  links:
  annotations:
  source_evidence:
```

Blocos iniciais: heading, paragraph, list, list_item, table, row, cell, blockquote, callout, code, image, figure, caption, footnote, separator, embed, page_break e unsupported.

## 9. Estratégia por formato

### 9.1 Markdown

Suportar CommonMark, frontmatter YAML, headings, listas, tabelas, task lists, code fences, links, wikilinks, embeds, tags, aliases, block references e callouts do Obsidian. Sanitizar HTML, não executar JavaScript e mostrar frontmatter em painel separado.

### 9.2 TXT e formatos textuais

Suportar TXT, LOG, CSV, TSV, JSON, XML, YAML e código-fonte. Detectar encoding, permitir quebra de linha, usar monoespaçada somente quando necessário e oferecer visualização estruturada para JSON, XML e CSV.

### 9.3 DOCX

Tratar DOCX como pacote Office Open XML. Considerar corpo, parágrafos, runs, estilos, headings, listas, tabelas, hyperlinks, imagens, cabeçalhos, rodapés, notas, comentários, quebras, relações e propriedades no escopo definido. Não executar macros. Bloquear `.docm` ou abrir sem execução. Registrar elementos omitidos.

### 9.4 Pages

Não prometer renderização plena no navegador. Detectar pacote, procurar preview PDF ou imagens, extrair apenas conteúdo validável e oferecer conversão autorizada para DOCX, PDF, EPUB ou TXT. Preservar original e nunca inventar conteúdo ausente.

### 9.5 PDF

Separar fidelidade visual de leitura semântica. Informar se há texto pesquisável, OCR ou apenas imagem. OCR somente mediante solicitação e autorização.

### 9.6 HTML

HTML possui quatro modos separados:

```text
prévia segura
→ padrão dentro do leitor

fonte
→ código exibido como texto

original em nova guia
→ ação explícita com aviso

download
→ preservação do original
```

A prévia segura deve usar `iframe` sandboxed ou renderer sanitizado equivalente.

Bloquear por padrão:

- scripts e event handlers;
- formulários;
- iframes, objetos e embeds;
- pop-ups e navegação do contexto superior;
- `javascript:`, `vbscript:` e `file:`;
- meta refresh;
- conexões e recursos externos não autorizados.

Política recomendada:

```text
default-src 'none'
img-src data: blob:
style-src 'unsafe-inline'
font-src data:
media-src data: blob:
connect-src 'none'
frame-src 'none'
```

A prévia deve preservar HTML e CSS estático quando seguro, informar bloqueios, manter o original intacto, permitir alternar entre visualização e fonte e impedir acesso ao shell, grafo ou dados do usuário.

Abrir o original em nova guia exige aviso explícito:

> O HTML original pode executar scripts, abrir conexões externas ou alterar a navegação.

Usar nova guia, `noopener` e `noreferrer` quando possível. Não abrir automaticamente. Informar que recursos relativos podem falhar fora da pasta original.

### 9.7 EPUB e imagens

Sanitizar EPUB, remover scripts, controlar recursos externos, preservar headings e navegação. Para imagens, usar preview, alt, metadados autorizados e OCR somente quando solicitado.

## 10. Navegação de pastas e documentos

Quando a fonte possuir hierarquia, oferecer um explorador persistente ou facilmente recuperável:

```text
fonte
→ pastas expansíveis
→ subpastas
→ documentos
→ seleção
→ resumo
→ leitura
```

Requisitos:

- árvore ordenada com pastas antes dos arquivos;
- expandir e recolher;
- filtro local;
- destaque do item selecionado;
- revelar automaticamente seu caminho;
- clique simples seleciona e mostra o resumo;
- ação explícita ou duplo clique abre o documento;
- retorno do detalhe para as pastas;
- estado de expansão preservado na sessão;
- navegação por teclado;
- nenhum arquivo abre inesperadamente durante a navegação.

Explorador e detalhes são painéis separados. Selecionar um documento pode abrir o resumo, mas deve existir ação clara para voltar às pastas.

## 11. Tipografia de leitura

```css
--font-ui: Aptos, "Segoe UI", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif;
--font-reading-serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Charter, Georgia, serif;
--font-reading-sans: Aptos, "Segoe UI", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif;
--font-code: ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", monospace;
```

Perfil padrão:

```css
.reader-content {
  max-width: 70ch;
  margin-inline: auto;
  font-size: clamp(17px, 1rem + 0.2vw, 20px);
  line-height: 1.7;
  text-align: start;
  overflow-wrap: anywhere;
  hyphens: auto;
}
```

Regras: largura padrão de 62–74ch, ajustável aproximadamente entre 52–80ch; corpo padrão de 18px; line-height de 1.68–1.75; texto não justificado; hierarquia clara; laterais discretas e recolhíveis; nenhuma rolagem horizontal no corpo a 200% de zoom; nenhum efeito sobre a superfície de leitura.

## 12. Temas e tokens

Cada tema define todos os tokens; é proibido herdar texto escuro em fundo escuro ou texto claro em fundo claro.

```css
.reader-view {
  --reader-canvas:
  --reader-surface:
  --reader-text:
  --reader-muted:
  --reader-heading:
  --reader-link:
  --reader-border:
  --reader-code:
  --reader-selection:
  --reader-focus:
}
```

Temas obrigatórios: claro, escuro, sépia e alto contraste. Contraste mínimo: 4.5:1 para texto normal e 3:1 para texto grande e componentes necessários.

## 13. Navegação e modos

```text
Home
→ Grafo, biblioteca ou pastas
→ Documento
→ Leitura imersiva
```

Toda tela possui voltar, início, título de contexto e foco correto.

### Grafo ou biblioteca expandida

Ocupa a área disponível, recolhe laterais, mantém controles essenciais, possui botão de saída, responde a `Esc` e preserva zoom, filtros e seleção.

### Leitor normal

Possui título, metadados, outline, conteúdo, busca, formato, fidelidade, voltar, início e modo imersivo.

### Leitor imersivo

Mantém documento e controles de leitura, recolhe laterais, preserva largura e posição e responde a botão e `Esc`.

## 14. Busca e estado

Busca dentro do documento deve possuir termo, quantidade, próximo, anterior, destaque, anúncio acessível e limpeza. O estado pode guardar documento, revisão, bloco, scroll, tema, fonte, largura, outline e modo imersivo. Não usar caminho absoluto como ID público nem sincronizar sem consentimento.

## 15. Integração com fontes

### Pasta local

Ação explícita, read-only, File API ou File System Access, fallback por seleção, sem envio, sem seguir symlinks por padrão e respeitando exclusões.

### SharePoint

Microsoft Graph, identidade oficial, privilégio mínimo, DriveItem, revisão, download autorizado, cache controlado, nenhum token no frontend público e respeito às permissões e classificação.

### Git e manifesto

Usar blob ou versão, branch ou commit, links relativos, cache por SHA e nenhum token exposto. Manifestos devem registrar fonte, data, ID, caminho lógico, formato, tamanho, revisão e classificação.

## 16. Segurança

Bloquear ou sanitizar scripts, macros, iframes, eventos HTML, URLs perigosas, objetos, SVG ativo, recursos remotos e documentos malformados. Aplicar allowlist, CSP, URLs validadas, `rel` seguro, limites de tamanho e profundidade, parsers atualizados e nenhum `innerHTML` com conteúdo não sanitizado.

Não enviar arquivos sem autorização, registrar conteúdo em logs, expor caminhos físicos, armazenar tokens ou indexar segredos. Conversores externos devem informar destino, retenção, segurança, versão, limitações e se o arquivo sai do ambiente.

## 17. Acessibilidade

Obrigatório: landmarks, heading order, língua, foco visível, teclado, ausência de armadilhas, contraste, zoom, reflow, espaçamento, labels, status anunciados, outline navegável, busca acessível, alternativa textual, tabelas identificadas, imagens com alt, reduced motion e nenhum conteúdo somente por hover ou cor.

## 18. Performance e observabilidade

Usar workers para parsing pesado, lazy loading, render progressivo, cancelamento, limites, cache por revisão e liberação de recursos. Não carregar todos os documentos ao abrir. Registrar sem conteúdo sensível: formato, tamanho, parser, versão, duração, blocos, recursos, avisos, fidelidade, falhas, render, busca, navegação e cache.

## 19. Processo obrigatório

1. descobrir usuários, fontes, formatos, segurança, dispositivos e critérios;
2. definir modelo canônico, adaptadores, renderers, fidelidade e estado;
3. construir shell, Home, explorador, leitor, voltar, início, busca e outline;
4. implementar Markdown, TXT, DOCX, HTML seguro e demais formatos prioritários;
5. criar tipografia, temas, responsividade, acessibilidade e performance;
6. integrar fontes, backlinks, rotas e histórico;
7. testar, corrigir, gerar build, documentação e relatório.

## 20. QA obrigatório

### Funcional

Abrir, selecionar, navegar por pastas, voltar, início, imersivo, `Esc`, busca, outline, temas, tamanho, largura, retomar, links e relacionados.

### Formatos

Markdown simples e complexo, frontmatter, wikilinks, tabelas, TXT, JSON, CSV, DOCX simples e complexo, Pages com e sem preview, PDF texto e imagem, HTML seguro, arquivo corrompido e arquivo grande.

### HTML

Testar script tentando alterar a página pai, `javascript:`, evento inline, formulário, iframe, imagem externa, meta refresh, CSS inline, fonte, confirmação de abertura original, arquivo malformado e arquivo grande.

### Acessibilidade

Teclado, leitor de tela, contraste, zoom, reflow, espaçamento, língua, foco e reduced motion.

### Segurança

XSS, macro, URL perigosa, SVG, ZIP bomb, path traversal, recurso remoto, arquivo enorme e token em log.

### Visual

Claro, escuro, sépia, alto contraste, 320px, celular, tablet, notebook, monitor amplo e leitor imersivo.

Nenhum release é aprovado com texto ilegível, conteúdo cortado, erro de tema, script executado ou navegação sem retorno.

## 21. Gates de qualidade

1. objetivo e usuários;
2. fontes e permissões;
3. formatos;
4. modelo canônico;
5. adaptadores;
6. segurança;
7. explorador de pastas;
8. leitor;
9. HTML seguro;
10. fidelidade;
11. navegação e voltar;
12. modos expandidos;
13. tipografia e temas;
14. busca e outline;
15. acessibilidade;
16. performance;
17. testes;
18. documentação;
19. release.

## 22. Definição de concluído

Somente concluir quando arquivos reais abrirem; formatos prioritários funcionarem; formatos não suportados forem tratados honestamente; o original não for alterado; Home, pastas, voltar e modos imersivos funcionarem; Markdown, TXT, DOCX e HTML seguro passarem; Pages possuir preview ou conversão honesta; busca, outline, temas e tipografia funcionarem; teclado e acessibilidade forem validados; arquivos grandes não travarem silenciosamente; testes passarem; build e documentação existirem; limitações estiverem registradas.

## 23. Formato da resposta final do Copilot

1. produto construído;
2. formatos suportados;
3. fidelidade;
4. fontes;
5. arquitetura;
6. arquivos;
7. execução;
8. abertura e navegação;
9. HTML seguro e abertura original;
10. tipografia e temas;
11. segurança;
12. acessibilidade;
13. testes e resultados;
14. performance;
15. limitações;
16. novo adaptador;
17. publicação.

## 24. Prompt operacional

```text
Use este Guia Mestre e o Contrato Obrigatório de Entrega de Artefato Final.

Construa o leitor final, não um protótipo.

Requisitos mínimos:
- Home;
- explorador de pastas ou biblioteca;
- resumo antes da leitura;
- leitor;
- voltar e início;
- histórico coerente;
- modos expandidos;
- preservação de estado;
- Markdown, TXT e DOCX;
- HTML em prévia segura sandboxed;
- código-fonte, download e abertura original com aviso;
- tratamento honesto de Pages;
- busca, outline e metadados;
- fidelidade declarada;
- tipografia configurável;
- temas claro, escuro, sépia e alto contraste;
- acessibilidade, segurança e QA;
- build e documentação.

Não execute macros, scripts ou conteúdo ativo.
Não envie arquivos sem autorização.
Não descreva extração parcial como reprodução fiel.
Não encerre em arquitetura, parser isolado ou código parcial.
```

## 25. Decisões para o primeiro produto

Para o `VIVO Constellation`:

- Markdown e TXT são formatos nativos prioritários;
- DOCX usa leitura semântica;
- Pages usa preview ou conversão com aviso;
- HTML abre por padrão em prévia segura, com fonte, download e abertura original opcional;
- a lateral direita separa navegação de pastas e resumo;
- clique simples seleciona; abrir é ação explícita;
- Home permanece limpa;
- grafo e leitor possuem modos expandidos;
- seleção local permanece read-only;
- conteúdo permanece no navegador;
- estado do grafo é preservado ao abrir e fechar documentos.

## 26. Referências verificáveis

- W3C. Web Content Accessibility Guidelines (WCAG) 2.2 — https://www.w3.org/TR/WCAG22/
- W3C WAI. Understanding WCAG 2.2 — https://www.w3.org/WAI/WCAG22/Understanding/
- CommonMark 0.31.2 — https://spec.commonmark.org/0.31.2/
- WHATWG. HTML Living Standard — https://html.spec.whatwg.org/
- MDN. iframe sandbox — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#sandbox
- MDN. Content Security Policy — https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
- Microsoft Learn. WordprocessingML — https://learn.microsoft.com/en-us/office/open-xml/word/structure-of-a-wordprocessingml-document
- Apple Support. Convert Pages — https://support.apple.com/guide/pages/tance1161f26/mac
- MDN. File API — https://developer.mozilla.org/en-US/docs/Web/API/File_API
- MDN. File System API — https://developer.mozilla.org/en-US/docs/Web/API/File_System_API
- IBM Carbon Design System. Typography — https://carbondesignsystem.com/elements/typography/style-strategies/

## 27. Changelog

### v1.2 — 2026-07-30

- definida estratégia completa para HTML;
- criada prévia segura sandboxed;
- definidos fonte, download e abertura original mediante aviso;
- adicionada navegação hierárquica de pastas;
- separado explorador de pastas do resumo;
- ampliado QA de HTML ativo e navegação documental;
- atualizado o primeiro perfil para `VIVO Constellation`.

### v1.1 — 2026-07-30

- adicionadas referências e tokens tipográficos;
- definidos temas e contraste;
- criado QA obrigatório de release.

### v1.0 — 2026-07-30

- criado guia independente para leitor universal;
- definidos adaptadores, formatos, navegação e integração com grafo.
