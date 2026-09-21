---
id: O03
title: Dados, Analytics, Planilhas e Dashboards
version: v2.0
status: active
source_method: 11_GUIAS_OPERACIONAIS_COPILOT_CHAT/03-guia-mestre-dados-analytics-planilhas-dashboards.md
html_output: true
---

# Dados, Analytics, Planilhas e Dashboards

Conduz da pergunta de negócio à validação dos dados, cálculo, análise e visualização.

## Quando ativar

- há uma pergunta de negócio
- dados ou planilhas estão disponíveis
- a resposta precisa ser auditável

## Quando não ativar

- a definição da métrica não existe
- o pedido é só estética de dashboard
- os dados não podem ser acessados e não há amostra

## Entradas mínimas

- pergunta e decisão
- dados e dicionário
- período e filtros
- regras de cálculo e reconciliação

## Processo obrigatório

1. definir a pergunta e métricas
2. profiling e qualidade
3. calcular e reconciliar
4. analisar hipóteses e segmentos
5. visualizar sem alterar a verdade analítica

## Entrega esperada

- análise reproduzível
- cálculos e evidências
- dashboard ou tabela quando solicitado
- limitações e próximos testes

## QA e limites

- evidência mínima: amostra, fórmula, teste ou reconciliação
- não ocultar inconsistências
- separar dado, interpretação e recomendação

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Analise esta planilha e encontre os principais drivers
- Crie um dashboard após validar os cálculos

## Ajuste da auditoria

Template mínimo de evidências de teste incorporado ao kernel.
