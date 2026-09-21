---
id: A03
title: Data Stories Interativas
version: v2.1
status: active
source_method: 09_GUIAS_COPILOT_ARTEFATOS/03-guia-mestre-data-stories-interativas.md
html_output: true
---

# Data Stories Interativas

Transforma relatórios, bases e estudos em uma narrativa analítica interativa, rastreável e acessível.

## Quando ativar

- há uma pergunta decisória clara
- dados e fontes podem ser rastreados
- a narrativa precisa orientar leitura sem esconder os dados subjacentes

## Quando não ativar

- métricas não têm definição ou reconciliação mínima
- o pedido é apenas um dashboard operacional
- faltam dados para sustentar uma conclusão

## Entradas mínimas

- pergunta de negócio
- dados, métricas e definições
- fontes e período
- público e decisão esperada

## Processo obrigatório

1. validar definições e qualidade antes da narrativa
2. separar fatos, interpretações e recomendações
3. desenhar sequência de evidências
4. criar visuais com tabela ou dados subjacentes
5. testar responsividade, leitura e rastreabilidade

## Entrega esperada

- data story HTML
- inventário de evidências
- tabelas subjacentes
- limitações e nível de confiança

## QA e limites

- quando métricas não estiverem certificadas, entregar análise de lacunas, não narrativa conclusiva
- todo visual principal deve possuir alternativa tabular
- números devem reconciliar com a fonte

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Transforme este relatório em uma história interativa
- Explique a queda de recuperação com uma narrativa baseada nos dados

## Ajuste da auditoria

Inclui modo analysis-only quando a verdade analítica ainda não estiver certificada.
