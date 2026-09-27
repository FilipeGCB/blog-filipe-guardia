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
tags: [copilot, agentes, api, mcp, integracoes, ferramentas, autenticacao, implantacao]
---

# Guia Mestre para Agentes, APIs, MCP e Integrações

## Finalidade

Projetar integrações de IA, ferramentas, servidores MCP, aplicações de agentes e formas seguras de exposição e implantação, sem pressupor que o Copilot Chat executará infraestrutura externa.

## Fontes consolidadas

- `plugins/dev/agent-sdk-dev.md`;
- `skills/claude-api.md`;
- `skills/mcp-builder.md`;
- `plugins/dev/mcp-server-dev.md`;
- `plugins/dev/mcp-tunnels.md`;
- partes de empacotamento de `plugins/dev/plugin-dev.md`.

## Limite de execução

Este guia é principalmente de desenho, geração de código, revisão e roteiro de validação. Chaves, serviços, rede, certificados, containers e clientes MCP devem ser executados em ambiente autorizado pelo usuário.

## Processo

### 1. Definir caso de uso

Identificar usuário, tarefa, sistema conectado, ações, dados, frequência, latência, risco e valor. Não criar agente onde uma automação determinística basta.

### 2. Escolher arquitetura

- chamada direta de API;
- aplicação com tool calling;
- agente com loop controlado;
- servidor MCP local;
- servidor MCP remoto;
- aplicação MCP com UI;
- integração por fila ou job;
- túnel temporário para desenvolvimento.

### 3. Projetar ferramentas para a IA

Cada ferramenta deve ter:

- nome inequívoco;
- descrição orientada à decisão;
- parâmetros pequenos e tipados;
- limites;
- retorno compacto e estruturado;
- erros recuperáveis;
- idempotência quando aplicável;
- autorização mínima;
- trilha de auditoria.

Não expor uma API inteira como uma única ferramenta genérica.

### 4. Contexto e memória

Definir o que entra no contexto, o que é recuperado, o que é persistido, quem pode acessar e quando deve expirar. Não usar histórico ilimitado como memória.

### 5. Segurança

- segredos fora do código;
- princípio do menor privilégio;
- validação de entrada e saída;
- limites de custo e chamadas;
- confirmação humana para ação sensível;
- proteção contra prompt injection em conteúdo externo;
- logs sem dado sensível;
- revogação e rotação;
- isolamento por ambiente.

### 6. Implementar

Gerar código baseado na documentação atual da plataforma escolhida. Não inventar ID de modelo, parâmetro ou assinatura. Marcar tudo que precisa de verificação oficial.

### 7. Testar

- contrato de schema;
- caminho feliz;
- erro de autenticação;
- timeout;
- limite de taxa;
- retorno vazio;
- ferramenta indisponível;
- chamada repetida;
- conteúdo malicioso;
- custo;
- observabilidade;
- cancelamento.

### 8. Implantar

Definir ambiente, configuração, domínio, TLS, autenticação, monitoramento, rollback e suporte. Túnel deve ser temporário e outbound-only quando possível; não substituir arquitetura de produção.

## MCP

Antes de construir, decidir:

- local ou remoto;
- recursos, prompts ou ferramentas;
- transporte;
- autenticação;
- tamanho de resposta;
- elicitação;
- UI necessária;
- distribuição;
- cliente-alvo.

## Agentes

Um agente precisa de:

- objetivo delimitado;
- ferramentas mínimas;
- política de decisão;
- limite de passos;
- tratamento de erro;
- orçamento;
- observabilidade;
- condição de parada;
- avaliação.

## Antipadrões

- agente sem necessidade;
- ferramenta com descrição vaga;
- retorno gigante;
- ação destrutiva sem confirmação;
- segredo no prompt;
- loop sem limite;
- túnel tratado como produção;
- código baseado em memória desatualizada;
- ausência de teste de falha;
- afirmar que foi executado fora do ambiente disponível.

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
