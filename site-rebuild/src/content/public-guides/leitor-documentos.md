---
id: A15
title: Leitor de Documentos e Experiência de Leitura
version: v2.1
status: active
source_method: 09_GUIAS_COPILOT_ARTEFATOS/15-guia-mestre-leitor-universal-documentos-experiencia-leitura.md
html_output: true
---

# Leitor de Documentos e Experiência de Leitura

Projeta uma experiência de leitura segura e confortável para formatos suportados, com busca, outline e navegação.

## Quando ativar

- há documentos que precisam ser lidos em uma interface própria
- busca, outline, histórico e modos de leitura agregam valor
- os formatos e conversores disponíveis podem ser declarados

## Quando não ativar

- o pedido exige fidelidade absoluta sem conversor compatível
- todos os formatos são prometidos sem matriz de suporte
- o navegador não pode processar os arquivos e não há serviço auxiliar

## Entradas mínimas

- formatos-alvo e exemplos
- nível de fidelidade necessário
- ambiente browser-only ou serviço com conversores
- regras de privacidade e retenção

## Processo obrigatório

1. classificar cada formato como nativo, semântico, fidelidade visual, conversão externa ou não suportado
2. separar implementação browser-only de serviço com conversores
3. proteger contra conteúdo ativo e vazamento
4. construir busca, outline, navegação e preferências
5. testar amostras reais de cada nível

## Entrega esperada

- matriz de suporte
- leitor para os formatos realmente suportados
- mensagens claras para limitações
- relatório de segurança e fidelidade

## QA e limites

- não usar “universal” como promessa absoluta
- não fingir suporte quando há apenas extração parcial
- testar amostras reais e registrar perdas

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Crie um leitor para Markdown, TXT e PDF
- Defina a matriz de suporte para DOCX, PDF e Pages

## Ajuste da auditoria

Matriz explícita de suporte substitui promessa universal.
