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
tags: [copilot, instrucoes, skills, contexto, automacao, prompts, governanca, ia]
---

# Guia Mestre para Contexto, Instruções, Automação e Skills de IA

## Finalidade

Criar e manter instruções de projeto, guias operacionais, bibliotecas de skills, regras reutilizáveis e automações de trabalho para diferentes assistentes de IA.

## Fontes consolidadas

- `skills/skill-creator.md` e seu ponteiro em `plugins/dev/`;
- `plugins/dev/claude-md-management.md`;
- `plugins/dev/claude-code-setup.md`;
- `plugins/dev/hookify.md`;
- `plugins/dev/plugin-dev.md`, aproveitado como referência de empacotamento e não como dependência de Claude Code.

## Regra central

> Uma boa instrução reduz ambiguidade em situações recorrentes. Ela não deve virar um manual universal que tenta antecipar todos os casos.

## Tipos de artefato

- guia para colar no chat;
- arquivo de instruções de projeto;
- checklist;
- modificador de comportamento;
- template;
- política;
- regra acionada por padrão de erro;
- biblioteca com índice e governança;
- pacote específico de uma plataforma, quando realmente necessário.

## Processo para criar uma skill

### 1. Identificar o trabalho recorrente

Definir gatilho, usuário, entrada, resultado, risco e falhas frequentes. Não criar skill para tarefa única sem valor de reutilização.

### 2. Coletar exemplos

Reunir pedidos reais, resultados bons, resultados ruins, correções e critérios de aceitação.

### 3. Escolher a forma

- guia independente;
- modificador curto;
- checklist;
- template;
- instrução de repositório;
- automação externa.

Não transformar tudo em “agente”.

### 4. Escrever regras acionáveis

Cada regra deve dizer o que fazer, quando, com qual evidência e qual resultado. Remover conselho genérico.

### 5. Definir entradas e saída

Especificar o mínimo necessário, como tratar lacunas e qual formato final deve ser entregue.

### 6. Incluir método e QA

O guia deve conduzir o trabalho, conter critérios de qualidade, antipadrões e condição de parada.

### 7. Testar com casos

Testar caso normal, incompleto, contraditório e fora de escopo. Verificar se a skill ajuda sem bloquear.

### 8. Revisar e versionar

Registrar mudança, motivo e impacto. Arquivar regra obsoleta em vez de acumular contradição.

## Auditoria de arquivo de contexto

Avaliar:

- especificidade ao projeto;
- instruções acionáveis;
- contradições;
- duplicação;
- referências inexistentes;
- informação desatualizada;
- prioridade;
- tamanho;
- separação entre regra global e local;
- exemplos úteis;
- segurança e dados sensíveis.

## Automação por atrito

Observar correções repetidas, passos manuais, validações esquecidas, formatos recorrentes e erros previsíveis. Para cada candidato, avaliar frequência, impacto, estabilidade, risco e custo de manutenção.

## Regra derivada de falha

Quando um erro se repetir:

1. descrever o padrão;
2. identificar causa;
3. definir gatilho observável;
4. criar regra preventiva;
5. adicionar exemplo positivo e negativo;
6. testar se a regra gera efeito colateral;
7. registrar versão.

## Biblioteca

Uma biblioteca madura deve possuir:

- índice;
- finalidade de cada guia;
- fonte;
- status;
- versão;
- dependências;
- mapa de sobreposição;
- política de inclusão;
- casos de teste;
- changelog;
- processo de arquivamento.

## Antipadrões

- copiar skill de outra plataforma sem adaptar capacidade;
- repetir o mesmo harness em todos os arquivos;
- criar prompt enorme para dezenas de trabalhos;
- obrigar perguntas desnecessárias;
- usar comandos com barra como se fossem instalados;
- manter regra contraditória;
- incluir segredo ou dado sensível;
- confundir exemplo com obrigação;
- avaliar qualidade apenas pelo tamanho;
- criar automação sem proprietário.

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
