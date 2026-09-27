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
tags: [copilot, projetos, pagina-viva, briefing, status, governanca, decisoes, produtividade]
---

# Guia Mestre para Páginas Vivas, Briefings e Governança de Projetos

## Finalidade

Manter uma visão viva e confiável de projetos, prioridades e compromissos, conectando fontes, decisões, riscos, progresso, próximos passos e comunicação executiva.

## Fontes consolidadas

- `plugins/dev/project-artifact.md`;
- `plugins/negocio/productivity.md`;
- `skills/morning.md`;
- componentes de status de `skills/internal-comms.md`;
- busca e atribuição de `plugins/negocio/enterprise-search.md`;
- rituais de `plugins/negocio/small-business.md`.

## Tipos de artefato

- página viva de projeto;
- briefing diário;
- resumo semanal;
- one-page executivo;
- registro de decisões;
- painel de riscos;
- mapa de dependências;
- atualização por delta;
- checkpoint;
- preparação para reunião;
- retomada depois de ausência.

## Regra central

> Uma página viva não é uma ata acumulada. É uma representação atual, atribuída e orientada à decisão, com histórico preservado fora do estado corrente quando necessário.

## Modelo de informação

### Identidade

- objetivo;
- patrocinador;
- responsável;
- público;
- escopo;
- não escopo;
- resultado esperado.

### Estado

- saúde geral;
- progresso por frente;
- marco atual;
- entregas concluídas;
- trabalho em andamento;
- bloqueios;
- riscos;
- dependências;
- decisões pendentes;
- próximos passos.

### Evidência

Cada item relevante deve ter fonte, data, responsável e nível de confiança.

### Histórico

Decisão substituída, risco encerrado e marco concluído devem permanecer rastreáveis sem poluir a leitura atual.

## Processo de criação

1. coletar fontes autorizadas;
2. identificar versões e datas;
3. extrair fatos e decisões;
4. resolver conflitos;
5. definir estado atual;
6. separar pendência de hipótese;
7. priorizar o que exige ação;
8. produzir página;
9. revisar com os responsáveis;
10. registrar data de corte.

## Atualização por delta

Em atualizações posteriores:

- comparar com a versão anterior;
- identificar mudança real;
- atualizar somente campos afetados;
- preservar decisão ainda vigente;
- encerrar item concluído;
- sinalizar conteúdo sem confirmação recente;
- atualizar data de corte e fontes.

Não reescrever toda a página sem necessidade.

## Briefing diário

Consolidar:

- calendário;
- mensagens que exigem resposta;
- prazo;
- conflito;
- compromisso prometido;
- três prioridades;
- preparação necessária;
- risco de esquecimento.

Não listar toda a caixa de entrada.

## Resumo semanal

Mostrar:

- principais entregas;
- mudança de marco;
- bloqueios;
- decisões;
- riscos;
- responsáveis;
- próximos três focos;
- itens que precisam de intervenção.

## Confiança e frescor

Marcar informação como:

- confirmada e atual;
- confirmada, mas antiga;
- inferida;
- conflitante;
- não localizada.

Uma página sem data de corte e fonte não deve ser tratada como estado oficial.

## Formato visual

Pode ser Markdown, Page, HTML ou documento executivo. A forma deve permitir leitura rápida, aprofundamento e atualização. HTML deve adicionar filtro, navegação ou visualização útil; não apenas decoração.

## Antipadrões

- status “verde” sem evidência;
- misturar concluído e planejado;
- apagar decisão anterior;
- listar atividade sem resultado;
- copiar e-mail inteiro;
- prioridade sem responsável;
- risco sem ação;
- página que não mostra data de corte;
- briefing que resume tudo e não prioriza nada;
- atualização que reescreve o passado.

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
