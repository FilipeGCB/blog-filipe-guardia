---
id: A14
title: Experiências 3D na Web
version: v2.1
status: active
source_method: 09_GUIAS_COPILOT_ARTEFATOS/14-guia-mestre-experiencias-3d-na-web.md
html_output: true
---

# Experiências 3D na Web

Cria aplicações 3D quando profundidade, posição ou relação espacial carregam significado real.

## Quando ativar

- o eixo Z representa informação
- a câmera e o espaço ajudam a compreender relações
- existe benefício claro sobre uma visualização 2D

## Quando não ativar

- 3D seria apenas espetáculo
- o dispositivo ou ambiente não suporta WebGL de forma confiável
- a mesma informação fica mais clara em 2D

## Entradas mínimas

- significado espacial
- dados, objetos ou narrativa
- dispositivos-alvo
- limites de GPU, acessibilidade e publicação

## Processo obrigatório

1. executar capability check de WebGL/GPU
2. justificar por que 3D é necessário
3. projetar cena, câmera e interação
4. entregar alternativa 2D equivalente
5. adaptar qualidade ao dispositivo

## Entrega esperada

- experiência 3D funcional
- fallback 2D
- controle de qualidade adaptativa
- relatório de compatibilidade

## QA e limites

- se o eixo Z não tiver significado, escolher 2D
- não ocultar conteúdo no fallback
- testar perda de contexto, navegação por teclado e desempenho

## Regra de execução

Aplicar também [`00-KERNEL-EXECUCAO.md`](./00-KERNEL-EXECUCAO.md).

## Exemplos de pedidos

- Crie um mapa 3D destas dependências
- Avalie se este conjunto de dados merece uma experiência 3D

## Ajuste da auditoria

Capability check e alternativa 2D são gates obrigatórios.
