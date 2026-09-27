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
tags: [copilot, engenharia, software, feature, code-review, debug, pr, testes]
---

# Guia Mestre para Engenharia de Software, Entrega e Qualidade

## Finalidade

Conduzir desenvolvimento de funcionalidade, revisão, simplificação, depuração, decisão arquitetural, testes, documentação, commit, PR e iteração até uma entrega tecnicamente confiável.

## Fontes consolidadas

- `plugins/dev/feature-dev.md`;
- `plugins/dev/code-review.md`;
- `plugins/dev/code-simplifier.md`;
- `plugins/dev/pr-review-toolkit.md`;
- `plugins/dev/commit-commands.md`;
- `plugins/dev/ralph-loop.md`;
- componentes técnicos de `plugins/negocio/engineering.md`;
- QA aplicável de `skills/webapp-testing.md`.

## Processo de feature

### 1. Compreender o sistema

Ler instruções, arquitetura, código relacionado, testes, convenções, dependências e histórico disponível. Não propor padrão novo antes de entender o padrão vigente.

### 2. Definir comportamento

Especificar entrada, saída, estados, erros, compatibilidade, segurança, observabilidade e critérios de aceite.

### 3. Planejar a menor mudança coerente

Identificar arquivos afetados, interfaces, migrações, testes e rollback. Evitar refatoração ampla não necessária.

### 4. Implementar

Seguir convenções, preservar contratos e tratar erros. Código novo deve ser legível sem comentário excessivo.

### 5. Testar

Combinar teste unitário, integração, contrato, interface e regressão conforme risco. Testar caminho feliz, limites, erro e dados inesperados.

### 6. Revisar com filtro de confiança

Cada achado deve conter:

- local;
- comportamento observado;
- impacto;
- condição de reprodução;
- evidência;
- correção proposta;
- confiança.

Descartar comentário estilístico sem base no padrão do projeto. Priorizar poucos achados de alto valor.

### 7. Simplificar

Depois de correto, remover complexidade acidental, duplicação, abstração prematura, comentário redundante e ramificação desnecessária. Não sacrificar clareza por concisão.

### 8. Preparar entrega

Produzir commit e PR que expliquem problema, solução, teste, risco, migração e impacto. Não usar mensagem genérica como “fix” ou “updates”.

## ADR

Registrar:

- contexto;
- decisão;
- opções;
- critérios;
- trade-offs;
- consequências;
- reversibilidade;
- gatilho de revisão.

## Debug

1. tornar o erro reproduzível;
2. reduzir o espaço de hipótese;
3. observar estado e logs;
4. formular hipóteses concorrentes;
5. testar uma variável por vez;
6. corrigir a causa, não apenas o sintoma;
7. adicionar prevenção de regressão.

## Iteração disciplinada

Usar ciclos curtos:

```text
objetivo verificável
→ mudança pequena
→ teste
→ leitura do resultado
→ correção
→ novo teste
```

Definir condição de parada. Não iterar indefinidamente nem continuar alterando depois de os critérios serem satisfeitos.

## Revisão profunda de PR

Avaliar:

- corretude;
- segurança;
- compatibilidade;
- dados;
- concorrência;
- performance;
- observabilidade;
- testes;
- documentação;
- manutenção;
- escopo acidental.

## Antipadrões

- reescrever sem necessidade;
- revisar apenas estilo;
- corrigir sem teste de regressão;
- criar abstração para um único caso;
- ignorar convenção existente;
- comentário que descreve o óbvio;
- PR sem contexto;
- commit misturando mudanças independentes;
- declarar teste que não foi executado;
- loop de melhoria sem critério de parada.

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
