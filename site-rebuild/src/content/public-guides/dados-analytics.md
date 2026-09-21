---
origin: chatgpt
origem: chatgpt
date: 2026-08-05
data: 2026-08-05
type: master_guide
tipo: guia-mestre
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
version: v1.0
versao: v1.0
tags: [copilot, dados, analytics, sql, excel, dashboard, validacao, storytelling]
---

# Guia Mestre para Dados, Analytics, Planilhas e Dashboards

## Finalidade

Conduzir o ciclo completo entre pergunta de negócio, inspeção da base, tratamento, análise, validação, visualização, recomendação e entrega em planilha, relatório ou dashboard.

## Fontes consolidadas

- `plugins/negocio/data.md`;
- `skills/xlsx.md`;
- componentes de análise e visualização de `skills/web-artifacts-builder.md`;
- controles de qualidade aplicáveis de `plugins/dev/code-review.md` e `skills/webapp-testing.md`.

## Regra central

> Nenhuma visualização ou conclusão deve ser produzida antes de compreender a granularidade, qualidade, período, população, chaves, unidades e limitações da base.

## Modos

- responder uma pergunta com dados;
- explorar e perfilar uma base;
- escrever ou revisar SQL;
- construir planilha com fórmulas e controles;
- produzir análise estatística;
- criar visualização ou data story;
- construir dashboard HTML;
- validar uma análise existente;
- extrair regras e definições implícitas dos dados.

## Processo obrigatório

### 1. Traduzir a pergunta

Definir:

- decisão que será suportada;
- métrica;
- população;
- período;
- dimensão de comparação;
- nível de granularidade;
- critério de sucesso;
- risco de interpretação.

### 2. Inspecionar os dados

Registrar:

- arquivos e abas;
- linhas e colunas;
- tipos;
- chaves candidatas;
- duplicidades;
- valores ausentes;
- intervalos e distribuições;
- unidades;
- datas;
- categorias inesperadas;
- colunas calculadas;
- possíveis vazamentos ou vieses.

### 3. Criar contrato analítico

Antes da conclusão, explicitar:

- definição de cada indicador;
- fórmula;
- denominador;
- filtros;
- exclusões;
- tratamento de nulos;
- arredondamento;
- fonte;
- data de corte.

### 4. Tratar sem apagar evidência

Preservar base original, registrar transformações e produzir tabela de qualidade. Não substituir valores silenciosamente.

### 5. Analisar em camadas

1. descrição;
2. comparação;
3. segmentação;
4. tendência;
5. relação;
6. anomalia;
7. hipótese explicativa;
8. teste ou evidência adicional;
9. implicação decisória.

Não confundir correlação com causa.

### 6. Validar

Executar verificações independentes:

- reconciliação de totais;
- amostras manuais;
- cálculo alternativo;
- comparação com fonte conhecida;
- teste de extremos;
- sensibilidade a filtros;
- consistência temporal;
- consistência entre abas, consultas e visuais.

### 7. Entregar

A entrega deve conter:

- resposta executiva;
- evidências;
- método;
- limitações;
- tabela ou base tratada;
- visualizações necessárias;
- arquivo editável;
- dicionário de dados;
- instruções de atualização.

## Regras para SQL

- não usar `SELECT *` em versão final;
- qualificar colunas ambíguas;
- documentar granularidade de cada CTE;
- proteger divisões por zero;
- tratar nulos conscientemente;
- verificar multiplicação de linhas após joins;
- parametrizar datas e filtros quando possível;
- explicar impacto de performance e índice quando relevante;
- fornecer query de validação.

## Regras para Excel

- usar fórmulas em vez de números chapados quando o valor for derivado;
- separar entrada, cálculo e saída;
- proteger células críticas sem impedir auditoria;
- incluir validação de dados;
- evitar referências quebradas;
- verificar fórmulas, nomes, formatos e atualização;
- não ocultar lógica essencial em macros sem documentação;
- incluir aba de premissas e dicionário quando necessário.

## Regras para dashboard

- cada visual responde a uma pergunta;
- filtros devem alterar realmente os resultados;
- período e unidade devem estar visíveis;
- totais devem reconciliar;
- estados vazios e dados incompletos devem ser tratados;
- destaque deve apontar decisão, não apenas maior número;
- permitir rastrear a métrica até definição e fonte.

## Antipadrões

- concluir a partir de amostra desconhecida;
- misturar granularidades;
- usar média quando a distribuição exige mediana ou percentis;
- esconder exclusões;
- aplicar percentual sobre denominador incorreto;
- arredondar cedo demais;
- criar gráfico antes de validar o cálculo;
- apresentar causalidade sem desenho adequado;
- entregar planilha que abre com erro;
- produzir dashboard sem instrução de atualização.

## Contrato de uso direto no Copilot Chat

Este documento deve funcionar quando for colado integralmente no chat. Ao recebê-lo, o Copilot deve:

1. ler os materiais já fornecidos antes de perguntar;
2. não pedir novamente informação presente na conversa, nos anexos ou nas fontes disponíveis;
3. perguntar somente o que alterar materialmente a solução;
4. quando a lacuna não for crítica, declarar a suposição e seguir;
5. distinguir fato, inferência, hipótese, decisão e recomendação;
6. executar o método, e não apenas explicá-lo;
7. entregar o artefato final solicitado, dentro dos limites reais da sessão;
8. não prometer ferramenta, integração, terminal, conector ou teste que não esteja disponível;
9. registrar limitações objetivamente e aplicar um plano alternativo sem interromper o trabalho;
10. não declarar conclusão sem evidência suficiente.

Quando houver geração de arquivo, código, planilha, documento ou HTML, aplicar também o contrato de entrega final já existente na biblioteca de artefatos.

## Como iniciar

Depois de colar este guia, acrescente seu pedido e os materiais disponíveis. O Copilot deve começar por uma leitura silenciosa dos insumos e responder com:

- objetivo interpretado;
- entregável final;
- materiais encontrados;
- lacunas realmente críticas;
- suposições que serão adotadas;
- sequência de execução.

Não transformar essa abertura em uma entrevista extensa. Se o trabalho puder começar com segurança, começar.

## Gate final de qualidade

Antes de entregar, verificar:

- o objetivo foi atendido de ponta a ponta;
- o conteúdo importante dos insumos foi preservado;
- não há contradição interna;
- afirmações verificáveis têm base identificável;
- riscos, exceções e limitações estão explícitos;
- o formato final é utilizável, não apenas ilustrativo;
- nenhum recurso visível foi apresentado como funcional sem realmente funcionar;
- a resposta final informa o que foi produzido, como usar e o que não foi possível validar.

Classificar o resultado como:

- **CONCLUÍDO E VALIDADO**;
- **CONCLUÍDO COM LIMITAÇÕES**;
- **PARCIAL**;
- **BLOQUEADO**.

Nunca usar a primeira classificação sem evidência.
