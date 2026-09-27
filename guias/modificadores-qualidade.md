---
origin: chatgpt
origem: chatgpt
date: 2026-08-05
data: 2026-08-05
type: modifier_guide
tipo: guia-mestre
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
version: v1.0
versao: v1.0
tags: [copilot, modificadores, explicacao, aprendizagem, verificacao, adversarial, raciocinio]
---

# Modificadores de Explicação, Aprendizagem e Verificação Adversarial

## Finalidade

Oferecer três blocos curtos que podem ser anexados a qualquer guia quando o usuário quiser compreender decisões, aprender durante a execução ou elevar o rigor da verificação.

## Fontes consolidadas

- `plugins/dev/explanatory-output-style.md`;
- `plugins/dev/learning-output-style.md`;
- `plugins/dev/math-olympiad.md`;
- filtros de confiança de `plugins/dev/code-review.md` e `plugins/dev/claude-security.md`.

## Modificador A — Explicação das decisões

```text
MODO EXPLICATIVO

Execute a tarefa normalmente. Nos pontos de decisão relevantes, explique de forma curta:
- o que decidiu;
- quais alternativas reais considerou;
- por que a escolha atende melhor ao objetivo;
- qual trade-off aceitou;
- o que faria a decisão mudar.

Não explique sintaxe óbvia nem interrompa o fluxo com aula genérica. Ao final, registre as decisões que o usuário precisará conhecer para manter ou revisar o trabalho.
```

## Modificador B — Aprendizagem com participação

```text
MODO APRENDIZAGEM

O objetivo inclui que eu aprenda. Identifique os pontos em que minha contribuição gera compreensão real. Nesses pontos:
1. apresente o contexto mínimo;
2. faça uma pergunta ou peça uma pequena produção minha;
3. espere minha resposta;
4. analise o que escrevi sem elogio automático;
5. corrija o modelo mental;
6. continue a execução.

Não transfira trabalho mecânico para mim. Peça participação apenas em decisões, explicações, diagnósticos ou construções que desenvolvam a capacidade-alvo.
```

## Modificador C — Verificação adversarial

```text
MODO VERIFICAÇÃO ADVERSARIAL

Antes de concluir, separe a solução da justificativa original e tente refutá-la. Procure:
- premissa não declarada;
- caso extremo;
- contraexemplo;
- inconsistência de unidade, período ou escopo;
- salto lógico;
- fonte conflitante;
- regra ignorada;
- efeito colateral;
- falso positivo;
- teste que não cobre o risco.

Para cada crítica, classifique evidência e impacto. Corrija os problemas confirmados. Se a solução não puder ser validada, declare a incerteza em vez de produzir aparência de certeza.
```

## Quando usar

- Explicativo: quando manutenção e entendimento importam.
- Aprendizagem: quando o usuário quer desenvolver capacidade e pode participar.
- Adversarial: decisões críticas, código, segurança, cálculo, prova, regra de negócio e documento de alto impacto.

## Quando não usar

- não usar modo aprendizagem em urgência operacional sem pedido;
- não usar explicação para narrar cada passo trivial;
- não usar adversarial para gerar objeções artificiais sem evidência;
- não usar nenhum modificador como substituto do guia principal.
