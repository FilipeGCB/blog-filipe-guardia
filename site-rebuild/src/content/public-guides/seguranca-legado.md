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
tags: [copilot, seguranca, modernizacao, legado, regras-de-negocio, equivalencia, vulnerabilidade]
---

# Guia Mestre para Segurança e Modernização de Sistemas Legados

## Finalidade

Avaliar segurança com baixo ruído e modernizar sistemas sem perder regras de negócio, comportamento, controles e evidência operacional.

## Fontes consolidadas

- `plugins/dev/claude-security.md`;
- `plugins/dev/code-modernization.md`;
- mecanismos de confiança e revisão de `plugins/dev/code-review.md` e `plugins/dev/math-olympiad.md`.

## Parte A — Segurança

### Inventário

Identificar ativos, superfícies, dados, fronteiras de confiança, autenticação, autorização, segredos, dependências, entradas externas, logs e operações privilegiadas.

### Pesquisa de achados

Avaliar pelo menos:

- injeção;
- controle de acesso;
- exposição de segredo;
- validação de entrada;
- criptografia;
- sessão;
- dependência vulnerável;
- SSRF e acesso a rede;
- desserialização;
- upload;
- path traversal;
- logging sensível;
- configuração insegura;
- abuso de lógica de negócio.

### Contestação obrigatória

Antes de incluir um achado, responder:

1. o caminho é realmente alcançável?
2. a entrada é controlável por atacante?
3. existe mitigação anterior?
4. o impacto é concreto?
5. há evidência no código fornecido?
6. existe interpretação alternativa plausível?

Somente manter achado com evidência, condição e impacto.

### Relatório

Para cada achado:

- severidade;
- confiança;
- localização;
- pré-condição;
- exploração conceitual segura;
- impacto;
- evidência;
- correção;
- teste de regressão.

Não produzir instrução ofensiva operacional desnecessária.

## Parte B — Modernização

### Fase 1 — Prontidão

Avaliar objetivos, patrocinador, risco, equipe, cobertura de teste, dados, integrações, operação, janela e tolerância à mudança.

### Fase 2 — Inventário

Mapear módulos, linguagens, frameworks, dados, interfaces, jobs, relatórios, usuários, frequência, criticidade e dependências.

### Fase 3 — Mapa de dependência

Identificar chamadas, fluxo de dados, acoplamento, ciclos, sistemas externos e pontos de corte possíveis.

### Fase 4 — Extração de regras

Para cada regra:

- ID;
- nome;
- fonte no código ou documento;
- condição;
- ação;
- exceção;
- prioridade;
- dados usados;
- exemplo;
- teste de caracterização;
- confiança;
- responsável por validação.

Não confundir implementação acidental com regra de negócio.

### Fase 5 — Segurança e estabilização

Corrigir riscos impeditivos, criar observabilidade, testes de caracterização, backup, rollback e baseline de performance.

### Fase 6 — Brief aprovado

Definir estratégia: manter, elevar versão, encapsular, extrair, substituir ou reconstruir. Registrar trade-offs e sequência.

### Fase 7 — Transformação incremental

Migrar por módulo ou capacidade, com contrato explícito e convivência controlada.

### Fase 8 — Prova de equivalência

Comparar:

- saída;
- regras;
- casos extremos;
- performance;
- segurança;
- reconciliação de dados;
- operação;
- auditoria.

## Antipadrões

- começar pela reescrita;
- assumir que código antigo está errado;
- migrar sem teste de caracterização;
- confundir tela com regra;
- aceitar centenas de alertas sem contestação;
- classificar severidade sem condição de exploração;
- cortar sistema antigo antes de reconciliar;
- esconder exceção operacional;
- escolher stack por moda;
- declarar equivalência apenas porque o caminho feliz funciona.

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
