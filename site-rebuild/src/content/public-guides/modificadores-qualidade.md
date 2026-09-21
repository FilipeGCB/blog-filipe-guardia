---
id: O14
title: Modificadores de Explicação, Aprendizagem e Verificação
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/14-modificadores-explicacao-aprendizagem-verificacao-adversarial.md
html_output: false
---

# Modificadores de Explicação, Aprendizagem e Verificação

Adiciona, sob demanda, explicação, ensino ou verificação adversarial sem duplicar o método principal.

## Quando ativar

- o usuário quer entender o raciocínio ou aprender
- a solução precisa de revisão adversarial
- um guia principal já foi selecionado

## Quando não ativar

- não há guia principal
- o modificador duplicaria seções já exigidas
- a tarefa é simples e a camada extra só aumentaria custo

## Entradas mínimas

- guia principal
- tipo de modificador
- profundidade desejada

## Processo obrigatório

1. selecionar apenas o modificador necessário
2. aplicar depois do método principal
3. manter foco no entregável
4. registrar mudanças provocadas pela revisão

## Entrega esperada

- explicação, plano de aprendizagem ou revisão adversarial
- achados e correções
- limites restantes

## QA e limites

- nunca embutir todos os modificadores em todos os guias
- não substituir o método do domínio
- mostrar o que mudou após a revisão

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Explique a solução enquanto executa
- Tente refutar este resultado antes da entrega

## Ajuste da auditoria

Permanece separado e composável.
