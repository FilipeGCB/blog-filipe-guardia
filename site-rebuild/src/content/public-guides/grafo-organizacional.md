---
id: A09
title: Grafo do Cérebro Organizacional
version: v2.1
status: active
source_method: 09_GUIAS_COPILOT_ARTEFATOS/09-guia-mestre-grafo-cerebro-organizacional.md
html_output: true
---

# Grafo do Cérebro Organizacional

Cria uma experiência de navegação por documentos, relações, backlinks, órfãos e links quebrados.

## Quando ativar

- há um conjunto autorizado de arquivos ou notas
- relações e navegação importam mais que uma lista simples
- é necessário localizar conexões, lacunas e dependências

## Quando não ativar

- o agente não possui acesso real à fonte e não há fixture
- o primeiro escopo exige todos os conectores de uma vez
- um buscador simples resolveria o problema

## Entradas mínimas

- modo de acesso: fixture, pasta autorizada, repositório ou SharePoint
- fontes e escopo autorizados
- tipos de entidade e relação
- regras de privacidade

## Processo obrigatório

1. declarar o modo de acesso real
2. começar por Markdown, árvore, busca, backlinks, órfãos e links quebrados
3. criar modelo canônico de entidades e relações
4. entregar vertical slice navegável
5. expandir conectores apenas após a fatia funcionar

## Entrega esperada

- índice e modelo do grafo
- experiência de busca e navegação
- relatório de órfãos e links quebrados
- backlog de conectores posteriores

## QA e limites

- nunca afirmar que abriu pasta ou SharePoint sem acesso
- não usar caminho local fixo no prompt genérico
- registrar cobertura e falhas de indexação

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Mapeie estes arquivos Markdown e mostre backlinks
- Crie uma primeira versão do grafo deste repositório

## Ajuste da auditoria

Handshake de acesso e vertical slice reduzida substituem a suposição de pasta local.
