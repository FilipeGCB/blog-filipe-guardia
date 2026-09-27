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
catalog_id: 9
version: v1.1
versao: v1.1
tags: [copilot, grafo, cerebro-organizacional, repositorios, obsidian, sharepoint, knowledge-graph, filesystem, microsoft-graph, site, independente]
---

# Guia Mestre para Construção do Grafo do Cérebro Organizacional

## 0. Declaração de independência

Este guia é completo, independente e reutilizável.

Ele deve ser suficiente para orientar o Copilot a construir, sem depender de outro guia, um site funcional para explorar um cérebro organizacional formado por repositórios, pastas, documentos, relações, decisões, regras, evidências, projetos e demais entidades autorizadas.

Outros guias podem ser associados posteriormente por um prompt externo para acrescentar estilos, animações ou experiências específicas. Essa associação não faz parte deste documento e não é necessária para executar o produto definido aqui.

Aplicar também o contrato transversal da biblioteca:

- [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]].

## 1. Contrato de execução

O Copilot não deve encerrar o trabalho em:

- diagnóstico;
- arquitetura;
- wireframe;
- storyboard;
- prova de conceito;
- script de varredura sem interface;
- grafo com dados fictícios apresentado como real;
- lista de bibliotecas;
- backlog;
- recomendação de implementação futura.

> O resultado obrigatório é uma aplicação web final, funcional, navegável, responsiva, acessível, testada, corrigida, documentada e pronta para uso com a fonte autorizada.

Quando a fonte real não estiver acessível no ambiente de execução, o Copilot deve entregar:

- aplicação completa;
- adaptador executável disponível naquele ambiente;
- contrato real para os demais adaptadores;
- dados de demonstração claramente identificados;
- testes;
- instruções de conexão;
- registro explícito da limitação.

Nenhum mock pode ser descrito como leitura real.

## 2. Finalidade

Construir um site capaz de transformar acervos dispersos em uma rede explorável de conhecimento.

O produto deve conectar, quando autorizados:

- repositórios;
- pastas;
- arquivos;
- notas;
- documentos;
- páginas;
- propriedades;
- tags;
- links;
- anexos;
- pessoas e papéis;
- atividades;
- processos;
- regras;
- decisões;
- evidências;
- fontes;
- sistemas;
- capacidades;
- projetos;
- métricas;
- artefatos;
- versões;
- dependências.

## 3. Perguntas que o produto deve responder

- O que existe no repositório?
- Como os documentos se relacionam?
- Quais arquivos são mais centrais?
- Que notas estão isoladas?
- Que links estão quebrados?
- Que regras aparecem em vários documentos?
- Que decisões usam quais evidências?
- Que documentos substituem versões anteriores?
- O que está desatualizado?
- Onde existem duplicidades ou conflitos?
- Que caminho conecta um problema a uma decisão?
- Quais ativos podem ser reutilizados?
- Que conteúdo não possui owner?
- Que relações são explícitas e quais foram inferidas?
- Qual é a origem e a confiança de cada relação?

## 4. Primeiro caso de uso obrigatório

A primeira validação será realizada com a pasta local:

```text
obsidian-notes
```

no computador do trabalho.

O primeiro teste deve:

- operar em leitura somente;
- exigir seleção ou autorização explícita da pasta;
- ler a estrutura de diretórios;
- reconhecer Markdown;
- extrair frontmatter YAML;
- extrair wikilinks;
- extrair links Markdown;
- reconhecer embeds;
- reconhecer anexos;
- identificar tags, aliases, títulos e headings;
- identificar links não resolvidos;
- ignorar `.git`;
- respeitar `.gitignore` quando disponível;
- permitir exclusões adicionais;
- usar caminhos relativos ao vault;
- não publicar caminhos absolutos;
- não enviar conteúdo a serviços externos sem autorização;
- não alterar o vault;
- preservar IDs estáveis entre varreduras;
- permitir reindexação incremental;
- mostrar o que foi lido, ignorado, bloqueado ou não suportado.

## 5. Natureza metodológica e referências

Este guia é uma síntese de engenharia de produto, gestão do conhecimento, grafos, arquitetura de informação e segurança. Não representa um framework único existente.

Referências maduras que devem orientar decisões:

- fundamentos de knowledge graphs e property graphs;
- conceitos de graph databases;
- modelos de nós, arestas, propriedades e proveniência;
- File System Access API e APIs de arquivos;
- Microsoft Graph para SharePoint e OneDrive;
- padrões Markdown, YAML e links do Obsidian;
- WCAG 2.2;
- Core Web Vitals;
- princípios de segurança por desenho, privilégio mínimo e minimização;
- práticas de observabilidade, indexação incremental e rastreabilidade.

## 6. Quando usar

Usar quando houver:

- muitos documentos conectados;
- conhecimento disperso;
- necessidade de descobrir dependências;
- múltiplas fontes;
- links e referências relevantes;
- necessidade de onboarding;
- análise de cobertura;
- identificação de órfãos;
- preservação de decisões e evidências;
- investigação de mudança ao longo do tempo.

## 7. Quando não usar

Não usar como solução principal quando:

- uma busca simples resolver;
- uma tabela for mais clara;
- as relações não tiverem significado;
- a fonte não estiver autorizada;
- o conteúdo não puder ser processado com segurança;
- a visualização gerar mais confusão que entendimento;
- o custo operacional superar o valor.

## 8. Usuários e tarefas

```yaml
user_role:
  id:
  name:
  context:
  permissions:
  questions:
  tasks:
  decisions:
  risks:
  preferred_views:
```

Papéis possíveis:

- proprietário do repositório;
- pesquisador;
- gestor;
- analista;
- curador;
- arquiteto;
- auditor;
- novo integrante;
- administrador da fonte;
- responsável por segurança.

## 9. Princípios obrigatórios

### 9.1 Utilidade antes do espetáculo

A visualização deve apoiar investigação, compreensão ou decisão.

### 9.2 Fonte desacoplada

Frontend, busca e motor do grafo não podem depender de uma única origem.

### 9.3 Read-only por padrão

Todo adaptador começa sem permissão de escrita.

### 9.4 Metadata-first

Começar por estrutura e metadados. Conteúdo integral somente quando necessário e autorizado.

### 9.5 IDs estáveis

Caminho não deve ser a única identidade.

### 9.6 Permissões fazem parte do dado

A aplicação não pode mostrar conteúdo ao qual o usuário não tenha acesso.

### 9.7 Proveniência

Toda relação deve possuir origem, método de extração e confiança.

### 9.8 Transparência de inferência

Relações inferidas devem ser visualmente e semanticamente diferentes das explícitas.

### 9.9 Atualização incremental

Reindexar apenas mudanças quando a fonte permitir.

### 9.10 Site completo sem efeitos avançados

A experiência base deve ser profissional, clara e utilizável sem animações sofisticadas ou 3D.

## 10. Escopo funcional mínimo

A aplicação final deve possuir:

- conexão de fonte;
- inventário;
- indexação;
- normalização;
- construção do grafo;
- busca;
- filtros;
- árvore de pastas;
- lista e tabela;
- grafo 2D;
- seleção e foco;
- vizinhança;
- caminhos entre nós;
- backlinks;
- painel de detalhes;
- preview autorizado;
- visões por pasta, tipo, tag, status e data;
- detecção de órfãos;
- links quebrados;
- duplicidade potencial;
- relatório de cobertura;
- exportação de manifesto;
- atualização incremental;
- logs;
- limpeza de cache;
- estados vazios;
- tratamento de erros.

Uma visão 3D pode ser adicionada, mas não é requisito para o produto base deste guia.

## 11. Arquitetura do produto

```text
Fonte
→ Adaptador
→ Scanner
→ Extratores
→ Normalizador
→ Política de classificação
→ Índice
→ Motor de relações
→ Grafo canônico
→ API de consulta
→ Busca e análises
→ Views
→ Interface
→ Observabilidade
```

Camadas recomendadas:

1. connectors;
2. ingestion;
3. parsers;
4. normalization;
5. policy;
6. graph;
7. search;
8. analytics;
9. renderers;
10. interface;
11. observability.

## 12. Contrato de adaptador

```ts
interface RepositoryAdapter {
  id: string;
  label: string;
  kind: string;
  capabilities(): AdapterCapabilities;
  connect(config: unknown): Promise<ConnectionResult>;
  scan(options: ScanOptions): AsyncIterable<RepositoryItem>;
  readMetadata(itemId: string): Promise<RepositoryMetadata>;
  readContent?(itemId: string, policy: ContentPolicy): Promise<ContentResult>;
  search?(query: SourceQuery): Promise<SourceSearchResult>;
  delta?(cursor?: string): AsyncIterable<RepositoryChange>;
  watch?(callback: ChangeCallback): Promise<Unsubscribe>;
  disconnect(): Promise<void>;
}
```

```yaml
adapter_capabilities:
  list: true
  metadata: true
  content: conditional
  search: optional
  delta: optional
  watch: optional
  write: false
  permissions: true
```

## 13. Modelo canônico de item

```yaml
canonical_item:
  canonical_id:
  source_id:
  source_adapter:
  source_item_id:
  source_revision:
  type:
  name:
  logical_path:
  parent_id:
  mime_type:
  extension:
  size:
  created_at:
  modified_at:
  hash:
  tags:
  properties:
  headings:
  links:
  embeds:
  permissions_summary:
  classification:
  content_status:
  excerpt:
  url:
  source_evidence:
```

## 14. Modelo canônico de relação

```yaml
canonical_edge:
  edge_id:
  source_id:
  target_id:
  relation_type:
  direction:
  explicit:
  confidence:
  evidence:
  extractor:
  created_at:
  updated_at:
```

Relações iniciais:

- contém;
- referencia;
- incorpora;
- depende;
- define;
- usa;
- produz;
- valida;
- substitui;
- deriva;
- menciona;
- pertence;
- mede;
- implementa;
- documenta;
- contradiz;
- relaciona-se.

## 15. Evidência e confiança

```yaml
edge_evidence:
  kind: [explicit_link, property, path, heading, citation, semantic_inference, manual]
  source_item:
  source_location:
  excerpt:
  confidence:
  review_status:
```

Regras:

- link explícito não é igual a inferência;
- similaridade não é dependência;
- proximidade em pasta não é causalidade;
- menção de nome não prova ownership;
- inferências devem ser desligáveis;
- confiança deve ser exibida quando relevante.

## 16. Adaptador de pasta local

Modos suportados:

1. File System Access API;
2. seleção de diretório como fallback;
3. aplicação desktop ou agente local;
4. CLI geradora de manifesto;
5. plugin Obsidian, quando justificado.

```yaml
local_directory_config:
  root_label:
  include_extensions:
  exclude_patterns:
  max_file_size:
  content_mode: [none, metadata, excerpts, full]
  follow_symlinks: false
  respect_gitignore: true
  hashing: metadata
  watch: optional
```

Regras:

- exigir ação explícita;
- não seguir symlinks por padrão;
- bloquear `.git`, `.env`, chaves e credenciais;
- não exibir caminho físico em página pública;
- permitir apagar cache;
- registrar exclusões;
- não escrever na pasta na versão inicial.

## 17. Perfil Obsidian

Itens reconhecidos:

- Markdown;
- Canvas;
- Bases;
- anexos;
- templates;
- propriedades;
- tags;
- aliases;
- wikilinks;
- links Markdown;
- embeds;
- headings;
- block references.

Relações iniciais:

```text
pasta → contém → arquivo
nota → referencia → nota
nota → incorpora → anexo
nota → possui_tag → tag
nota → possui_propriedade → valor
documento → substitui → documento
decisão → usa → evidência
```

Regras do primeiro teste:

- ignorar `.git`;
- tratar `.obsidian` como configuração e ler somente quando solicitado;
- excluir plugins, caches e temporários por padrão;
- usar caminhos relativos;
- separar conteúdo privado de metadados publicáveis;
- mostrar links não resolvidos;
- manter usabilidade com milhares de notas.

## 18. Adaptador SharePoint

Usar Microsoft Graph em produção.

Objetos:

- Site;
- Drive;
- DriveItem;
- List;
- ListItem;
- Permission.

Requisitos:

- autenticação oficial;
- privilégio mínimo;
- permissões delegadas quando apropriado;
- paginação;
- IDs como identidade;
- eTag/cTag quando disponíveis;
- delta query;
- retry com backoff;
- tratamento de throttling;
- cache;
- logs sem tokens;
- nenhum token no frontend estático;
- API segura para página pública;
- respeito a DLP, classificação e acesso.

```text
frontend
→ API segura
→ identidade e política
→ Microsoft Graph
→ SharePoint
```

## 19. Outros adaptadores

- GitHub;
- GitLab;
- Git local;
- OneDrive;
- Google Drive;
- S3;
- REST;
- GraphQL;
- banco;
- JSON;
- CSV;
- ZIP;
- manifesto CLI.

Todos devem produzir o mesmo modelo canônico.

## 20. Extração de conteúdo

```text
detecção de tipo
→ leitura autorizada
→ parsing
→ limpeza
→ metadados
→ referências
→ entidades
→ relações
→ evidência
→ classificação
```

Regras:

- não executar scripts ou macros encontrados;
- limitar tamanho;
- usar parsers seguros;
- preservar origem;
- não confundir extração com validação;
- não enviar conteúdo restrito a modelos externos sem autorização.

## 21. Busca

Combinar, quando permitido:

- nome;
- caminho lógico;
- propriedades;
- tags;
- headings;
- texto;
- relações;
- filtros;
- busca semântica opcional.

Busca semântica deve ser desligável, indicar modelo e versão, respeitar classificação e explicar o resultado.

## 22. Métricas e análises

- grau;
- indegree;
- outdegree;
- centralidade;
- componentes;
- clusters;
- órfãos;
- links quebrados;
- duplicidade potencial;
- cobertura de frontmatter;
- idade do conteúdo;
- nós sem owner;
- decisões sem evidência;
- regras sem fonte;
- hubs excessivos.

Métrica não é conclusão.

## 23. Layouts e visões

- árvore;
- tabela;
- lista;
- hierárquico;
- force-directed;
- radial;
- cluster;
- timeline;
- matriz;
- híbrido.

Regras:

- seed determinístico;
- preservar posição;
- processar layout pesado fora da thread principal;
- permitir congelamento;
- explicar distância;
- limitar labels;
- usar progressive disclosure.

## 24. Arquitetura de interface

```text
App shell
├── seletor de fonte
├── busca
├── filtros
├── seletor de visão
├── árvore
├── grafo 2D
├── tabela ou lista
├── inspector
├── explorador de caminhos
├── painel de cobertura
├── painel de problemas
└── configurações e privacidade
```

## 25. Interações

- clique seleciona;
- Enter abre detalhe;
- Escape limpa foco;
- zoom e pan com limites;
- expandir vizinhança;
- fixar, ocultar ou isolar;
- comparar;
- encontrar caminho;
- voltar no histórico;
- compartilhar estado sem expor dados.

## 26. Experiência visual base

O site produzido somente com este guia deve possuir:

- identidade visual coerente;
- tipografia legível;
- hierarquia clara;
- transições curtas e funcionais;
- feedback de carregamento;
- estados de seleção;
- responsividade;
- contraste;
- foco visível;
- ausência de efeitos decorativos excessivos.

O guia não exige experiência cinematográfica nem 3D para considerar o produto concluído.

## 27. Persistência

Persistir apenas:

- preferências;
- layout;
- filtros;
- IDs;
- cache permitido;
- cursor de atualização;
- estado de interface.

Não persistir tokens, segredos, conteúdo restrito desnecessário ou caminhos absolutos em telemetria.

## 28. Escalabilidade

```text
L0 — fontes
L1 — áreas e pastas
L2 — categorias
L3 — arquivos e entidades
L4 — relações e conteúdo
```

Técnicas:

- agregação;
- clustering;
- virtualização;
- lazy loading;
- vizinhança sob demanda;
- busca antes de render;
- limite de arestas;
- workers;
- indexação incremental;
- cancelamento.

## 29. Performance

```yaml
performance_budget:
  initial_js_kb:
  initial_css_kb:
  first_graph_nodes:
  first_graph_edges:
  max_visible_labels:
  max_layout_ms:
  memory_warning_mb:
```

Não renderizar tudo; medir long tasks; limitar labels; pausar processos; usar workers; adaptar densidade; cancelar tarefas obsoletas.

## 30. Acessibilidade

- teclado;
- lista equivalente;
- descrição textual da seleção;
- foco visível;
- contraste;
- labels;
- nenhuma informação somente por cor;
- `aria-live` quando necessário;
- leitura linear;
- zoom;
- não exigir precisão motora elevada.

## 31. Segurança e privacidade

```yaml
classification:
  public:
  internal:
  professional_personal:
  corporate_restricted:
  personal_data:
  secret:
```

Gates:

- fonte autorizada;
- escopo autorizado;
- exclusões aprovadas;
- conteúdo autorizado;
- destino autorizado;
- telemetria aprovada;
- publicação aprovada.

Proibido:

- indexar segredos;
- expor tokens;
- publicar caminhos físicos;
- quebrar permissões;
- inferir acesso;
- enviar arquivos silenciosamente;
- permitir escrita por padrão;
- renderizar HTML não sanitizado.

## 32. Observabilidade

Registrar:

- adaptador;
- início e fim;
- quantidade de itens;
- exclusões;
- falhas;
- duração;
- alterações;
- parser e versão;
- relações e confiança;
- erros de busca;
- erros de render;
- performance.

Não registrar conteúdo sensível desnecessário.

## 33. Testes

### Unidade

Parsers, normalização, IDs, relações, filtros e classificação.

### Integração

Pasta local, manifesto, SharePoint mock, delta, cache e permissões.

### Funcional

Conectar, indexar, pesquisar, filtrar, selecionar, abrir detalhe, encontrar caminho, trocar visão, atualizar e limpar cache.

### Performance

1 mil, 10 mil e 50 mil itens quando o ambiente permitir; muitas arestas; CPU limitada e mobile.

### Acessibilidade

Teclado, leitor de tela, contraste, zoom e lista equivalente.

### Segurança

Exclusões, path traversal, symlink, arquivos enormes, conteúdo malformado, tokens, logs e XSS.

## 34. Gates de qualidade

1. objetivo e usuários;
2. fonte e autorização;
3. modelo canônico;
4. adaptador;
5. segurança;
6. extração;
7. relações;
8. busca;
9. experiência 2D;
10. performance;
11. acessibilidade;
12. testes;
13. documentação;
14. publicação.

## 35. Estrutura recomendada

```text
organizational-brain-graph/
├── apps/
│   ├── web/
│   └── local-agent/
├── packages/
│   ├── adapters/
│   ├── canonical-model/
│   ├── parsers/
│   ├── graph-engine/
│   ├── search/
│   ├── renderers-2d/
│   ├── interface/
│   └── observability/
├── tests/
├── docs/
├── examples/
├── scripts/
├── README.md
├── SECURITY.md
└── TEST-REPORT.md
```

## 36. Resultado obrigatório do primeiro teste

Ao aplicar à pasta `obsidian-notes`, entregar:

- aplicação executável;
- seleção da pasta;
- perfil de exclusão;
- inventário;
- parsing de Markdown;
- frontmatter;
- wikilinks e backlinks;
- árvore;
- tabela ou lista;
- grafo 2D;
- busca e filtros;
- preview seguro;
- links quebrados;
- órfãos e clusters;
- relatório de cobertura;
- reindexação;
- README;
- testes;
- relatório de testes;
- build;
- instruções de publicação;
- instruções para conectar SharePoint futuramente.

## 37. Métricas de sucesso

- porcentagem de arquivos indexados;
- links resolvidos;
- tempo para encontrar informação;
- tempo de indexação;
- estabilidade dos IDs;
- precisão das relações explícitas;
- quantidade de problemas encontrados;
- sucesso de tarefas de usuário;
- uso das visões;
- erros de permissão;
- desempenho percebido.

## 38. Definição de concluído

Somente concluir quando:

- o repositório real puder ser selecionado;
- a fonte não for alterada;
- itens e relações forem rastreáveis;
- busca e filtros funcionarem;
- árvore, lista e grafo 2D funcionarem;
- dados privados não forem expostos;
- acessibilidade mínima estiver validada;
- testes passarem;
- build existir;
- documentação existir;
- limitações estiverem declaradas.

## 39. Formato obrigatório da resposta do Copilot

1. produto construído;
2. fonte conectada;
3. arquivos criados;
4. como executar;
5. como selecionar o repositório;
6. exclusões aplicadas;
7. conteúdo indexado;
8. testes e resultados;
9. performance;
10. acessibilidade;
11. segurança;
12. limitações;
13. como adicionar SharePoint;
14. como criar outro adaptador.

## 40. Checklist de kickoff

- [ ] objetivo definido;
- [ ] fonte autorizada;
- [ ] modo de acesso escolhido;
- [ ] leitura somente confirmada;
- [ ] exclusões definidas;
- [ ] tipos de arquivo definidos;
- [ ] classificação definida;
- [ ] usuários e perguntas definidos;
- [ ] volume estimado;
- [ ] destino de publicação definido;
- [ ] navegador-alvo definido;
- [ ] critérios de aceite definidos.

## 41. Prompt operacional

```text
Use o Guia Mestre para Construção do Grafo do Cérebro Organizacional e o Contrato Obrigatório de Entrega de Artefato Final.

Construa a aplicação final do grafo.

Primeira fonte:
pasta local obsidian-notes no computador do trabalho.

Requisitos:
- leitura somente;
- seleção explícita da pasta;
- metadata-first;
- Markdown, frontmatter, wikilinks, links, tags, headings, aliases e anexos;
- exclusão de .git, segredos, caches e padrões configuráveis;
- caminhos lógicos relativos;
- IDs estáveis;
- árvore, lista, tabela e grafo 2D;
- busca, filtros, foco, vizinhança, caminhos, backlinks, órfãos e links quebrados;
- painel de detalhes e preview seguro;
- acessibilidade por teclado;
- desempenho adaptativo;
- testes;
- build;
- documentação;
- nenhum conteúdo fictício apresentado como leitura real.

Prepare adaptadores para SharePoint, Git, APIs, JSON, CSV e outras pastas sem acoplar o produto à fonte inicial.

Não encerre em arquitetura ou protótipo. Execute, teste, corrija e entregue o produto pronto.
```

## 42. Changelog

### v1.1 — 2026-07-30

- declarado como guia completo e independente;
- removida dependência de outros guias;
- consolidado site funcional 2D como entrega autônoma;
- preservada a possibilidade de associação posterior por prompt externo;
- mantido o primeiro teste com `obsidian-notes`;
- mantida a arquitetura de adaptadores para pasta local, SharePoint e outras fontes.
