# Agente Portátil — Leitor de Documentos e Experiência de Leitura

> **Como usar:** anexe este único arquivo ao Copilot Chat, ChatGPT, Claude ou outro assistente com contexto Markdown e faça seu pedido normalmente.
>
> Este arquivo não instala ferramentas. Ele combina um contrato de execução reutilizável com o método de domínio original, preservado sem reescrita.

# Padrão de Engenharia para Agentes Portáteis em Markdown

## Finalidade

Este padrão extrai a engenharia de instrução observada nos guias mais consistentes da biblioteca, especialmente os guias de artefatos e Data Stories.

Ele não substitui nenhum método de domínio. Sua função é definir **como empacotar um método para que um chat de IA limitado consiga executá-lo de forma previsível**, sem transformar todos os guias no mesmo conteúdo.

A regra central é:

> Padronizar a engenharia da execução, não o conhecimento do domínio.

## Problema que o padrão resolve

Em um chat básico, o modelo não possui necessariamente:

- agente persistente;
- skill instalável;
- workflow;
- memória estruturada;
- executor externo;
- testes automáticos;
- ferramentas especiais.

O Markdown precisa carregar contexto operacional suficiente para reduzir improvisação e conduzir a IA até um resultado utilizável.

## O que um agente portátil precisa conter

### 1. Missão

Definir em uma frase o problema que o método resolve e qual transformação produz.

### 2. Quando ativar e quando não ativar

O modelo precisa saber reconhecer o caso certo e também evitar ativação indevida.

### 3. Entradas mínimas

Declarar o que é indispensável, o que é desejável e o que fazer quando faltar informação.

### 4. Contratos intermediários

Quando a tarefa for complexa, definir estruturas explícitas para organizar o trabalho antes da entrega.

Exemplos:

- DecisionSpec;
- EvidenceSpec;
- SceneSpec;
- matriz de comparação;
- esquema de dados;
- checklist de requisitos;
- mapa de riscos.

O contrato deve reduzir ambiguidade, não gerar burocracia.

### 5. Processo obrigatório

Definir a sequência causal mínima do método.

Exemplo abstrato:

```text
insumos
→ enquadramento
→ validação
→ construção
→ teste
→ correção
→ entrega
```

A sequência pode possuir branches, mas o modelo não deve pular diretamente para a aparência ou para a resposta final quando uma etapa anterior sustenta a qualidade.

### 6. Regras específicas do domínio

Esta é a parte que deve continuar diferente em cada guia.

Exemplos:

- Storytelling with Data em Data Stories;
- backward design em aprendizagem;
- reconciliação em finanças;
- source authority em pesquisa;
- least privilege em integrações;
- equivalência em modernização.

### 7. Antipadrões

Incluir comportamentos comuns de LLM que devem ser evitados.

Antipadrão bom é específico e observável.

### 8. Contrato de entrega

Definir exatamente o artefato final esperado.

Não aceitar automaticamente plano, wireframe, pseudocódigo, arquitetura ou exemplo parcial quando o pedido exige resultado executável.

### 9. QA e gates

Converter qualidade abstrata em verificações observáveis.

Um gate só deve existir se sua falha puder mudar materialmente a confiança na entrega.

### 10. Definition of Done

Explicitar quando o agente pode afirmar que terminou.

### 11. Formato de fechamento

A resposta final deve informar o que foi produzido, evidências relevantes, como usar e limitações reais.

### 12. Prompt operacional

Encerrar o guia com uma versão compacta que reforce:

- ordem de execução;
- invariantes;
- resultado final;
- proibições materiais.

A repetição deliberada das invariantes é permitida quando ajuda modelos limitados a preservá-las durante contexto longo.

## Princípios derivados do Data Stories

### Reduzir o espaço de decisão desnecessário

O agente deve escolher onde a escolha agrega valor. O restante deve receber uma gramática clara.

### Transformar princípios em regras operacionais

Evitar:

> faça um bom dashboard.

Preferir regras como:

- cada visual responde a uma pergunta;
- cada cena possui uma mensagem principal;
- títulos comunicam a mensagem quando ela estiver validada;
- mobile é redesenhado, não apenas reduzido;
- interação sem utilidade é removida;
- funcionalidade visível precisa funcionar.

### Menor stack suficiente

Complexidade técnica não é sinal de qualidade.

Escolher a menor tecnologia capaz de cumprir o resultado e os critérios de aceite.

### Reforço de invariantes

Resultado obrigatório, gates, testes e Definition of Done podem repetir a mesma regra em contextos diferentes. Isso é útil quando a repetição reduz regressões do modelo.

### Evidência antes de claim

Nunca declarar execução, teste, acesso, validação ou pesquisa que não ocorreu de forma observável.

## Dois modos de distribuição

### Modo Chat

Para Copilot Chat básico e outros chats sem skills/agentes instaláveis.

Um único Markdown deve ser autocontido o suficiente para:

1. explicar o método;
2. instruir a execução;
3. orientar o uso das capacidades realmente disponíveis;
4. declarar limitações;
5. produzir o resultado pedido.

### Modo Skill

Para hosts compatíveis com Agent Skills.

Estrutura recomendada:

```text
skill/
├── SKILL.md
├── references/
│   └── metodo-completo.md
├── schemas/
├── tests/
└── resources/ quando necessário
```

O `SKILL.md` deve ser curto e roteável. O método completo permanece em `references/`.

## Regra de fonte única

Não manter dois métodos divergentes.

```text
método canônico
├── bundle autocontido para Chat
└── skill modular para hosts compatíveis
```

As duas distribuições devem declarar a mesma missão, limites e Definition of Done.

## Critério de publicação

Uma habilidade só deve ganhar destaque público quando houver evidência de que ela melhora materialmente pelo menos um destes pontos:

- qualidade;
- consistência;
- completude;
- redução de erro;
- rastreabilidade;
- tempo para chegar ao resultado;
- capacidade de execução em um host mais limitado.

Quantidade de texto não é critério de qualidade.

## Teste recomendado

Para métodos importantes, executar comparação com entradas diferentes:

1. sem guia;
2. com método completo;
3. quando relevante, sem contrato de entrega;
4. quando relevante, sem gates/Definition of Done;
5. versão compacta.

Avaliar:

- aderência ao método;
- consistência estrutural;
- erros;
- completude;
- estabilidade do artefato;
- qualidade do resultado;
- claims sem evidência.

O objetivo é descobrir quais partes realmente produzem ganho antes de replicá-las pela biblioteca.

---

# Contrato adicional para entrega de artefatos

# Contrato Obrigatório de Entrega de Artefato Final pelo Copilot

## 1. Finalidade

Este contrato aplica-se a todos os guias da Biblioteca de Guias Mestres para Produção de Artefatos com o Copilot.

A finalidade da biblioteca não é fazer o Copilot apenas explicar como um especialista trabalharia. Sua finalidade é fazer o Copilot **executar o método e entregar o artefato final pronto**, dentro dos limites técnicos do ambiente disponível.

A regra central é:

> O guia deve conduzir o Copilot da inspeção dos insumos até um artefato funcional, testado, corrigido, empacotado e pronto para uso ou publicação.

---

## 2. Precedência

Este contrato tem precedência sobre qualquer trecho de outro guia que possa ser interpretado como autorização para encerrar o trabalho em:

- diagnóstico;
- recomendação;
- planejamento;
- arquitetura isolada;
- wireframe;
- storyboard;
- mockup;
- prova de conceito;
- protótipo descartável;
- MVP incompleto;
- pseudocódigo;
- código ilustrativo;
- primeira tela;
- exemplo parcial;
- backlog;
- lista de próximos passos.

Esses materiais podem existir como etapas intermediárias ou documentação, mas não substituem a entrega final solicitada.

Quando um guia utilizar os termos `piloto`, `protótipo`, `MVP`, `primeira versão` ou `fatia vertical`, interpretar como:

> produto final, utilizável e testado dentro do escopo delimitado, construído de modo reutilizável e sem funcionalidades fictícias.

---

## 3. Resultado obrigatório

Ao receber os insumos necessários, o Copilot deve entregar o artefato solicitado em sua forma utilizável.

Exemplos:

- guia solicitado → documento final completo em Markdown;
- dashboard solicitado → dashboard HTML funcional;
- apresentação solicitada → apresentação HTML pronta para exibição;
- site solicitado → site completo pronto para publicação;
- data story solicitada → experiência narrativa navegável e funcional;
- simulador solicitado → aplicação executável com regras e testes;
- plataforma de aprendizagem solicitada → aplicação web educacional completa dentro do escopo fornecido;
- explorador solicitado → interface interativa funcional;
- design system solicitado → documentação e componentes executáveis;
- explicador animado solicitado → experiência visual pronta e responsiva.

A documentação metodológica deve apoiar a construção do resultado, não ocupar o lugar do resultado.

---

## 4. Processo obrigatório de execução

O Copilot deve seguir este encadeamento:

```text
inspecionar os insumos
→ compreender o objetivo e o público
→ identificar o que preservar
→ definir somente a arquitetura necessária
→ implementar o artefato completo
→ executar
→ testar
→ identificar falhas
→ corrigir
→ repetir os testes afetados
→ gerar a versão final
→ empacotar
→ entregar instruções de uso e publicação
```

O Copilot não deve interromper a execução apenas porque já produziu um plano convincente.

---

## 5. Regra de completude

O Copilot deve implementar todo o escopo solicitado e sustentado pelos materiais fornecidos.

Não deve reduzir silenciosamente:

- uma formação a uma tela de exemplo;
- um site a uma hero section;
- um dashboard a cards estáticos;
- um simulador a campos sem cálculo;
- uma apresentação a um storyboard;
- um explorador a um diagrama;
- uma plataforma a uma arquitetura;
- uma animação a um efeito isolado.

Uma redução de escopo somente é permitida quando:

1. o usuário a solicitar explicitamente;
2. faltar uma entrada indispensável;
3. o ambiente não permitir executar um requisito essencial;
4. houver risco de segurança, privacidade ou exposição;
5. a limitação for informada de maneira objetiva.

Mesmo quando o escopo for reduzido, a parte entregue deve estar concluída e utilizável.

---

## 6. Regra tecnológica para artefatos web

Salvo pedido explícito por um sistema com backend, o padrão deve ser uma aplicação web pronta para hospedagem estática.

O Copilot deve escolher a menor stack capaz de entregar o resultado integralmente:

### Opção A — HTML autocontido

Adequada quando um único arquivo consegue preservar:

- conteúdo;
- estilos;
- interações;
- responsividade;
- acessibilidade;
- persistência necessária.

### Opção B — HTML, CSS e JavaScript modular

Adequada quando a separação melhora manutenção sem exigir framework.

### Opção C — Vite, React e TypeScript

Adequada quando houver:

- muitos componentes;
- estado relevante;
- múltiplas rotas ou visões;
- testes estruturados;
- conteúdo modular;
- evolução planejada.

No modo estático:

- usar persistência local quando necessário;
- oferecer exportação e importação quando houver risco relevante de perda;
- não simular autenticação real;
- não simular banco remoto;
- não apresentar sincronização fictícia;
- não depender de APIs inexistentes;
- não criar botões sem ação;
- não apresentar funcionalidades futuras como concluídas.

---

## 7. Contrato de funcionamento

Todo componente visível deve possuir comportamento verdadeiro e coerente.

É proibido apresentar como funcional:

- botão que não executa ação;
- filtro que não altera o resultado;
- formulário que não salva nem produz saída;
- gráfico sem relação com os dados;
- progresso que não corresponde ao estado;
- login apenas decorativo;
- download que não gera arquivo;
- importação que não interpreta o conteúdo;
- atividade que não oferece feedback previsto;
- navegação sem destino;
- integração inexistente;
- resultado aleatório apresentado como regra de negócio.

Itens ainda não implementados devem ser removidos da interface final ou identificados separadamente como evolução futura, sem aparentar disponibilidade.

---

## 8. Contrato de testes

Antes de entregar, o Copilot deve executar todos os testes possíveis no ambiente disponível.

Para artefatos web, verificar no mínimo:

- instalação de dependências;
- build de produção;
- carregamento inicial;
- ausência de erros relevantes no console;
- navegação;
- links;
- formulários;
- filtros;
- cálculos;
- persistência;
- importação e exportação, quando existentes;
- estados vazios;
- estados de erro;
- desktop;
- celular;
- teclado;
- foco visível;
- contraste e acessibilidade aplicável;
- preferência por movimento reduzido;
- conteúdo essencial sem hover;
- ausência de overflow indevido.

Quando um teste não puder ser executado, registrar exatamente qual teste não foi realizado. Não declarar aprovação sem evidência.

---

## 9. Pacote mínimo de entrega

O pacote final deve conter, conforme a tecnologia:

```text
/projeto
  /src ou arquivos-fonte
  /assets
  /tests
  /docs, quando necessário
  /dist ou versão de produção, quando aplicável
  README.md
  registro-de-decisoes.md ou seção equivalente
  relatorio-de-testes.md ou seção equivalente
```

O `README` deve explicar:

- o que foi construído;
- como executar;
- como gerar o build;
- como publicar;
- onde editar conteúdo;
- onde editar identidade visual;
- quais dependências existem;
- quais limitações reais permanecem.

---

## 10. Formato da resposta final do Copilot

A resposta deve priorizar o resultado e informar:

1. artefato construído;
2. arquivos criados ou alterados;
3. como abrir ou executar;
4. como publicar;
5. testes executados;
6. resultado dos testes;
7. premissas adotadas;
8. limitações reais;
9. evoluções opcionais claramente separadas.

Não usar a resposta final para substituir arquivos que deveriam ter sido criados.

---

## 11. Definição de concluído

Um artefato somente pode ser declarado concluído quando:

- cumpre o objetivo solicitado;
- cobre o escopo informado;
- utiliza os insumos fornecidos;
- possui conteúdo real ou dados permitidos;
- possui interface e comportamento completos;
- não contém funcionalidades fictícias;
- executa sem falha impeditiva;
- passou pelos testes possíveis;
- teve falhas encontradas corrigidas ou registradas;
- possui pacote final utilizável;
- possui instruções de execução;
- possui instruções de publicação quando aplicável;
- distingue claramente conclusão de evolução futura.

---

## 12. Prompt transversal obrigatório

Adicionar o bloco abaixo ao pedido operacional de qualquer guia:

```text
CONTRATO DE ENTREGA FINAL

Execute o método e entregue o artefato final pronto. Não encerre o trabalho em diagnóstico, arquitetura, wireframe, storyboard, protótipo, MVP parcial, pseudocódigo ou recomendações.

Implemente todo o escopo solicitado, crie os arquivos, execute o artefato, teste os fluxos e estados, corrija os erros encontrados, gere a versão final e entregue instruções objetivas de uso e publicação.

Não apresente funcionalidades simuladas como concluídas. Todo botão, filtro, cálculo, formulário, navegação, download, persistência ou interação visível deve funcionar de verdade. Separe claramente o que está concluído de qualquer evolução futura.

Quando houver uma limitação objetiva do ambiente ou dos insumos, entregue a maior parte funcional possível e registre a limitação com precisão, sem substituir a execução por um plano.
```

---

## 13. Aplicação à plataforma de aprendizagem

Para o Guia Mestre de Plataforma de Aprendizagem Interativa, o resultado padrão é:

> uma aplicação web educacional final, executada no navegador, responsiva, acessível, com conteúdo, prática, feedback, artefato, progresso local, salvamento, retomada, testes e pacote pronto para publicação.

Não é obrigatório possuir:

- backend;
- autenticação real;
- banco remoto;
- sincronização entre dispositivos;
- painel administrativo;
- analytics remoto.

Esses recursos somente entram quando o usuário solicitar explicitamente um sistema multiusuário.

Mesmo quando a primeira aplicação cobrir apenas um capítulo, ela deve ser final dentro desse escopo e reutilizável para incorporar capítulos posteriores.

---

## 14. Síntese operacional

```text
guia maduro
+ insumos reais
+ contrato de entrega final
→ Copilot executa o método
→ constrói o artefato
→ testa
→ corrige
→ empacota
→ entrega pronto
```

A qualidade da biblioteca será medida pelos artefatos que qualquer pessoa consegue reproduzir, e não pela sofisticação textual dos prompts.

---

# Método de domínio original

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
