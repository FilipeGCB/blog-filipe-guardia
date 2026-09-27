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
tags: [copilot, operacoes, processos, runbook, riscos, compliance, incidente, governanca]
---

# Guia Mestre para Operações, Processos, Riscos e Compliance

## Finalidade

Transformar conhecimento operacional disperso em processo executável, capacidade mensurável, runbook, controle, plano de mudança, avaliação de risco e evidência de governança.

## Fontes consolidadas

- `plugins/negocio/operations.md`;
- componentes de ADR, incidente, documentação, teste e deploy de `plugins/negocio/engineering.md`;
- triagem de risco e compliance de `plugins/negocio/legal.md`;
- escalonamento e base de conhecimento de `plugins/negocio/customer-support.md`.

## Modos

- documentar processo;
- criar procedimento ou runbook;
- mapear capacidade e demanda;
- avaliar risco;
- planejar mudança;
- preparar auditoria;
- avaliar fornecedor;
- responder incidente;
- produzir post-mortem;
- otimizar operação;
- criar relatório de status operacional.

## Processo-base

### 1. Definir fronteira

Identificar início, fim, cliente, produto, evento disparador, entradas, saídas, sistemas, papéis e exceções.

### 2. Reconstruir o trabalho real

Não documentar apenas o processo ideal. Capturar:

- caminho normal;
- variações;
- retrabalho;
- filas;
- controles paralelos;
- decisões manuais;
- dependências;
- regras implícitas;
- pontos de falha;
- conhecimento concentrado.

### 3. Modelar

Para cada etapa:

- responsável;
- entrada;
- ação;
- regra;
- sistema;
- evidência;
- prazo;
- saída;
- exceção;
- escalonamento.

### 4. Medir

Definir volume, tempo, capacidade, produtividade, qualidade, erro, fila, SLA, disponibilidade e custo quando aplicável. Distinguir capacidade teórica, planejada e real.

### 5. Avaliar risco

Registrar:

- evento;
- causa;
- consequência;
- probabilidade;
- impacto;
- controles atuais;
- eficácia;
- risco residual;
- proprietário;
- ação;
- prazo;
- evidência de conclusão.

### 6. Desenhar controle e governança

Controles devem ser verificáveis. Definir frequência, responsável, evidência, tolerância, reação e revisão.

### 7. Produzir artefato operacional

Escolher o artefato adequado:

- SOP;
- runbook;
- matriz RACI;
- fluxo;
- registro de risco;
- plano de capacidade;
- requisição de mudança;
- checklist de deploy;
- pacote de auditoria;
- relatório de incidente;
- post-mortem;
- painel de status.

## Runbook mínimo

1. objetivo e escopo;
2. pré-requisitos;
3. acessos;
4. entradas;
5. passo a passo;
6. critérios de decisão;
7. validações;
8. exceções;
9. rollback ou recuperação;
10. escalonamento;
11. evidências;
12. revisão e proprietário.

Uma pessoa habilitada deve conseguir executar sem depender de explicação oral.

## Incidente

Separar:

- detecção;
- severidade;
- impacto;
- contenção;
- recuperação;
- comunicação;
- causa raiz;
- fatores contribuintes;
- ações corretivas;
- ações preventivas;
- validação posterior.

Post-mortem não deve procurar culpado; deve identificar condição sistêmica e ação verificável.

## Compliance e jurídico

O Copilot pode organizar, comparar com playbook e sinalizar riscos, mas não deve representar parecer jurídico definitivo. Marcar cláusulas, obrigações, exposição, exceções e pontos para revisão autorizada.

## Antipadrões

- fluxo sem exceção;
- runbook que depende de “bom senso”;
- RACI com múltiplos accountable;
- risco sem proprietário;
- controle sem evidência;
- mudança sem rollback;
- capacidade baseada apenas em média;
- post-mortem com ação vaga;
- auditoria preparada apenas na véspera;
- documento que descreve política, mas não execução.

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
