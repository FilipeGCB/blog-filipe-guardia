---
id: O11
title: Contexto, Instruções, Automação e Skills
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/11-guia-mestre-contexto-instrucoes-automacao-skills-ia.md
html_output: false
---

# Contexto, Instruções, Automação e Skills

Cria, audita, versiona e testa instruções, skills, memórias e automações para outros agentes.

## Quando ativar

- é necessário transformar método em instrução reutilizável
- há risco de duplicação ou conflito entre prompts
- a biblioteca precisa de governança e regressão

## Quando não ativar

- o pedido é apenas executar uma tarefa de domínio
- não existe comportamento observável para testar
- a automação não tem dono ou gatilho claro

## Entradas mínimas

- objetivo e público da skill
- ambiente e capacidades
- instruções existentes
- casos positivos e negativos

## Processo obrigatório

1. definir contrato e fronteiras
2. remover pressupostos de ferramenta
3. criar instrução compacta e referência extensa
4. testar casos de ativação e não ativação
5. versionar e publicar com changelog

## Entrega esperada

- skill ou instrução
- casos de teste
- matriz de conflitos
- versão e governança

## QA e limites

- usar como gate de publicação da biblioteca
- não duplicar kernel em cada guia
- testar ativação indevida

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Crie uma skill reutilizável deste método
- Audite estas instruções do agente

## Ajuste da auditoria

Passa a ser gate formal de publicação.
