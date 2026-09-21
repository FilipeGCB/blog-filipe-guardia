---
id: O10
title: Segurança e Modernização de Legados
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/10-guia-mestre-seguranca-modernizacao-sistemas-legados.md
html_output: false
---

# Segurança e Modernização de Legados

Contesta achados, protege regras de negócio e moderniza sistemas com prova de equivalência.

## Quando ativar

- há achado de segurança ou sistema legado
- regras existentes precisam ser preservadas
- é necessário distinguir falso positivo, risco real e compensação

## Quando não ativar

- o pedido mistura segurança e modernização sem modo dominante
- não há autorização para testar o ambiente
- a atividade seria ofensiva ou destrutiva

## Entradas mínimas

- modo dominante: segurança ou modernização
- evidências, código e arquitetura
- regras de negócio
- limites de teste e autorização

## Processo obrigatório

1. selecionar modo exclusivo
2. reproduzir evidência com segurança
3. contestar hipóteses e falsos positivos
4. definir mudança mínima ou equivalência
5. testar e registrar risco residual

## Entrega esperada

- parecer de segurança ou plano de modernização
- prova de equivalência
- testes e risco residual
- rollback e governança

## QA e limites

- limites de autorização explícitos
- não executar exploração destrutiva
- não remover regra do legado sem equivalência

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Avalie se este achado é verdadeiro
- Modernize este módulo preservando as regras

## Ajuste da auditoria

Modo exclusivo e limites de segurança explícitos.
