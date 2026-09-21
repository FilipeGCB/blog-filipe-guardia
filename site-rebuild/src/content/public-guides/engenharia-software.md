---
id: O09
title: Engenharia de Software, Entrega e Qualidade
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/09-guia-mestre-engenharia-software-entrega-qualidade.md
html_output: false
---

# Engenharia de Software, Entrega e Qualidade

Implementa mudanças mínimas, depura, testa, revisa e entrega código com evidência e condição de parada.

## Quando ativar

- há código, repositório ou especificação
- é possível definir comportamento esperado
- testes e regressões importam

## Quando não ativar

- o agente não tem acesso ao código e o usuário espera alteração direta
- o pedido é apenas arquitetura sem implementação
- a tarefa exigiria credenciais ou produção sem autorização

## Entradas mínimas

- repositório ou arquivos
- comportamento esperado
- restrições e ambiente
- testes existentes

## Processo obrigatório

1. reproduzir ou definir o problema
2. fazer a menor mudança segura
3. executar testes disponíveis
4. coletar evidência conforme o ambiente
5. revisar diff, risco e rollback

## Entrega esperada

- código ou patch
- testes e evidências
- resumo de mudança
- riscos e próximos passos

## QA e limites

- não declarar teste sem comando ou evidência
- não ampliar escopo silenciosamente
- parar quando o critério de aceite estiver atendido

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Corrija este bug com teste de regressão
- Implemente esta feature e abra um PR

## Ajuste da auditoria

Coleta de evidência adaptada ao ambiente.
