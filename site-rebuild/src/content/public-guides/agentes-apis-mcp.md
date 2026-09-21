---
id: O12
title: Agentes, APIs, MCP e Integrações
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/12-guia-mestre-agentes-apis-mcp-integracoes.md
html_output: false
---

# Agentes, APIs, MCP e Integrações

Projeta agentes e integrações com contratos, segurança, observabilidade e documentação oficial atual.

## Quando ativar

- há integração entre sistemas ou ferramentas
- contratos, autenticação e limites importam
- é necessário construir ou revisar agente, API ou MCP

## Quando não ativar

- a documentação atual não foi verificada
- o ambiente não autoriza credenciais ou ações
- o pedido é apenas um chatbot sem ferramentas

## Entradas mínimas

- objetivo e fronteiras
- sistemas e documentação oficial
- autenticação e dados
- falhas, limites e observabilidade

## Processo obrigatório

1. pesquisar documentação oficial atual antes de código dependente de versão
2. definir contratos e permissões
3. projetar ferramentas pequenas e auditáveis
4. implementar tratamento de erros e confirmação
5. testar happy path, negativas e falhas

## Entrega esperada

- arquitetura e contratos
- código ou configuração
- testes e observabilidade
- riscos e operação

## QA e limites

- código dependente de versão exige fonte oficial atual
- princípio do menor privilégio
- ações críticas exigem confirmação

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Projete um agente com estas ferramentas
- Crie um servidor MCP baseado na documentação oficial

## Ajuste da auditoria

Verificação de documentação oficial atual é gate.
