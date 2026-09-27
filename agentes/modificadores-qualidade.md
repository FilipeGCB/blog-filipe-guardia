# Agente Portátil — Modificadores de Explicação, Aprendizagem e Verificação

> **Como usar:** anexe este único arquivo ao Copilot Chat, ChatGPT, Claude ou outro assistente com contexto Markdown e faça seu pedido normalmente.
>
> Este arquivo não instala ferramentas. Ele combina um contrato de execução reutilizável com o método de domínio original, preservado sem reescrita.

# Padrão de Engenharia para Agentes Portáteis em Markdown

## Finalidade

Este padrão extrai a engenharia de instrução observada nos guias mais consistentes da biblioteca, especialmente os guias de artefatos e Data Stories.

Ele não substitui nenhum método de domínio. Sua função é definir **como empacotar um método para que um chat de IA limitado consiga executá-lo de forma previsível**, sem transformar todos os guias no mesmo conteúdo.

A regra central é:

> Padronizar a engenharia da execução, não o conhecimento do domínio.

## Problema que o padrão resolve

Em um chat básico, o modelo não possui necessariamente:

- agente persistente;
- skill instalável;
- workflow;
- memória estruturada;
- executor externo;
- testes automáticos;
- ferramentas especiais.

O Markdown precisa carregar contexto operacional suficiente para reduzir improvisação e conduzir a IA até um resultado utilizável.

## O que um agente portátil precisa conter

### 1. Missão

Definir em uma frase o problema que o método resolve e qual transformação produz.

### 2. Quando ativar e quando não ativar

O modelo precisa saber reconhecer o caso certo e também evitar ativação indevida.

### 3. Entradas mínimas

Declarar o que é indispensável, o que é desejável e o que fazer quando faltar informação.

### 4. Contratos intermediários

Quando a tarefa for complexa, definir estruturas explícitas para organizar o trabalho antes da entrega.

Exemplos:

- DecisionSpec;
- EvidenceSpec;
- SceneSpec;
- matriz de comparação;
- esquema de dados;
- checklist de requisitos;
- mapa de riscos.

O contrato deve reduzir ambiguidade, não gerar burocracia.

### 5. Processo obrigatório

Definir a sequência causal mínima do método.

Exemplo abstrato:

```text
insumos
→ enquadramento
→ validação
→ construção
→ teste
→ correção
→ entrega
```

A sequência pode possuir branches, mas o modelo não deve pular diretamente para a aparência ou para a resposta final quando uma etapa anterior sustenta a qualidade.

### 6. Regras específicas do domínio

Esta é a parte que deve continuar diferente em cada guia.

Exemplos:

- Storytelling with Data em Data Stories;
- backward design em aprendizagem;
- reconciliação em finanças;
- source authority em pesquisa;
- least privilege em integrações;
- equivalência em modernização.

### 7. Antipadrões

Incluir comportamentos comuns de LLM que devem ser evitados.

Antipadrão bom é específico e observável.

### 8. Contrato de entrega

Definir exatamente o artefato final esperado.

Não aceitar automaticamente plano, wireframe, pseudocódigo, arquitetura ou exemplo parcial quando o pedido exige resultado executável.

### 9. QA e gates

Converter qualidade abstrata em verificações observáveis.

Um gate só deve existir se sua falha puder mudar materialmente a confiança na entrega.

### 10. Definition of Done

Explicitar quando o agente pode afirmar que terminou.

### 11. Formato de fechamento

A resposta final deve informar o que foi produzido, evidências relevantes, como usar e limitações reais.

### 12. Prompt operacional

Encerrar o guia com uma versão compacta que reforce:

- ordem de execução;
- invariantes;
- resultado final;
- proibições materiais.

A repetição deliberada das invariantes é permitida quando ajuda modelos limitados a preservá-las durante contexto longo.

## Princípios derivados do Data Stories

### Reduzir o espaço de decisão desnecessário

O agente deve escolher onde a escolha agrega valor. O restante deve receber uma gramática clara.

### Transformar princípios em regras operacionais

Evitar:

> faça um bom dashboard.

Preferir regras como:

- cada visual responde a uma pergunta;
- cada cena possui uma mensagem principal;
- títulos comunicam a mensagem quando ela estiver validada;
- mobile é redesenhado, não apenas reduzido;
- interação sem utilidade é removida;
- funcionalidade visível precisa funcionar.

### Menor stack suficiente

Complexidade técnica não é sinal de qualidade.

Escolher a menor tecnologia capaz de cumprir o resultado e os critérios de aceite.

### Reforço de invariantes

Resultado obrigatório, gates, testes e Definition of Done podem repetir a mesma regra em contextos diferentes. Isso é útil quando a repetição reduz regressões do modelo.

### Evidência antes de claim

Nunca declarar execução, teste, acesso, validação ou pesquisa que não ocorreu de forma observável.

## Dois modos de distribuição

### Modo Chat

Para Copilot Chat básico e outros chats sem skills/agentes instaláveis.

Um único Markdown deve ser autocontido o suficiente para:

1. explicar o método;
2. instruir a execução;
3. orientar o uso das capacidades realmente disponíveis;
4. declarar limitações;
5. produzir o resultado pedido.

### Modo Skill

Para hosts compatíveis com Agent Skills.

Estrutura recomendada:

```text
skill/
├── SKILL.md
├── references/
│   └── metodo-completo.md
├── schemas/
├── tests/
└── resources/ quando necessário
```

O `SKILL.md` deve ser curto e roteável. O método completo permanece em `references/`.

## Regra de fonte única

Não manter dois métodos divergentes.

```text
método canônico
├── bundle autocontido para Chat
└── skill modular para hosts compatíveis
```

As duas distribuições devem declarar a mesma missão, limites e Definition of Done.

## Critério de publicação

Uma habilidade só deve ganhar destaque público quando houver evidência de que ela melhora materialmente pelo menos um destes pontos:

- qualidade;
- consistência;
- completude;
- redução de erro;
- rastreabilidade;
- tempo para chegar ao resultado;
- capacidade de execução em um host mais limitado.

Quantidade de texto não é critério de qualidade.

## Teste recomendado

Para métodos importantes, executar comparação com entradas diferentes:

1. sem guia;
2. com método completo;
3. quando relevante, sem contrato de entrega;
4. quando relevante, sem gates/Definition of Done;
5. versão compacta.

Avaliar:

- aderência ao método;
- consistência estrutural;
- erros;
- completude;
- estabilidade do artefato;
- qualidade do resultado;
- claims sem evidência.

O objetivo é descobrir quais partes realmente produzem ganho antes de replicá-las pela biblioteca.

---

# Método de domínio original

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
