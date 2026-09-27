# Agente Portátil — Engenharia de Software, Entrega e Qualidade

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

# Guia Mestre para Engenharia de Software, Entrega e Qualidade

## Finalidade

Conduzir desenvolvimento de funcionalidade, revisão, simplificação, depuração, decisão arquitetural, testes, documentação, commit, PR e iteração até uma entrega tecnicamente confiável.

## Fontes consolidadas

- `plugins/dev/feature-dev.md`;
- `plugins/dev/code-review.md`;
- `plugins/dev/code-simplifier.md`;
- `plugins/dev/pr-review-toolkit.md`;
- `plugins/dev/commit-commands.md`;
- `plugins/dev/ralph-loop.md`;
- componentes técnicos de `plugins/negocio/engineering.md`;
- QA aplicável de `skills/webapp-testing.md`.

## Processo de feature

### 1. Compreender o sistema

Ler instruções, arquitetura, código relacionado, testes, convenções, dependências e histórico disponível. Não propor padrão novo antes de entender o padrão vigente.

### 2. Definir comportamento

Especificar entrada, saída, estados, erros, compatibilidade, segurança, observabilidade e critérios de aceite.

### 3. Planejar a menor mudança coerente

Identificar arquivos afetados, interfaces, migrações, testes e rollback. Evitar refatoração ampla não necessária.

### 4. Implementar

Seguir convenções, preservar contratos e tratar erros. Código novo deve ser legível sem comentário excessivo.

### 5. Testar

Combinar teste unitário, integração, contrato, interface e regressão conforme risco. Testar caminho feliz, limites, erro e dados inesperados.

### 6. Revisar com filtro de confiança

Cada achado deve conter:

- local;
- comportamento observado;
- impacto;
- condição de reprodução;
- evidência;
- correção proposta;
- confiança.

Descartar comentário estilístico sem base no padrão do projeto. Priorizar poucos achados de alto valor.

### 7. Simplificar

Depois de correto, remover complexidade acidental, duplicação, abstração prematura, comentário redundante e ramificação desnecessária. Não sacrificar clareza por concisão.

### 8. Preparar entrega

Produzir commit e PR que expliquem problema, solução, teste, risco, migração e impacto. Não usar mensagem genérica como “fix” ou “updates”.

## ADR

Registrar:

- contexto;
- decisão;
- opções;
- critérios;
- trade-offs;
- consequências;
- reversibilidade;
- gatilho de revisão.

## Debug

1. tornar o erro reproduzível;
2. reduzir o espaço de hipótese;
3. observar estado e logs;
4. formular hipóteses concorrentes;
5. testar uma variável por vez;
6. corrigir a causa, não apenas o sintoma;
7. adicionar prevenção de regressão.

## Iteração disciplinada

Usar ciclos curtos:

```text
objetivo verificável
→ mudança pequena
→ teste
→ leitura do resultado
→ correção
→ novo teste
```

Definir condição de parada. Não iterar indefinidamente nem continuar alterando depois de os critérios serem satisfeitos.

## Revisão profunda de PR

Avaliar:

- corretude;
- segurança;
- compatibilidade;
- dados;
- concorrência;
- performance;
- observabilidade;
- testes;
- documentação;
- manutenção;
- escopo acidental.

## Antipadrões

- reescrever sem necessidade;
- revisar apenas estilo;
- corrigir sem teste de regressão;
- criar abstração para um único caso;
- ignorar convenção existente;
- comentário que descreve o óbvio;
- PR sem contexto;
- commit misturando mudanças independentes;
- declarar teste que não foi executado;
- loop de melhoria sem critério de parada.

## Contrato de uso direto no Copilot Chat

Este documento deve funcionar quando for colado integralmente no chat. Ao recebê-lo, o Copilot deve:

1. ler os materiais já fornecidos antes de perguntar;
2. não pedir novamente informação presente na conversa, nos anexos ou nas fontes disponíveis;
3. perguntar somente o que alterar materialmente a solução;
4. quando a lacuna não for crítica, declarar a suposição e seguir;
5. distinguir fato, inferência, hipótese, decisão e recomendação;
6. executar o método, e não apenas explicá-lo;
7. entregar o artefato final solicitado, dentro dos limites reais da sessão;
8. não prometer ferramenta, integração, terminal, conector ou teste que não esteja disponível;
9. registrar limitações objetivamente e aplicar um plano alternativo sem interromper o trabalho;
10. não declarar conclusão sem evidência suficiente.

Quando houver geração de arquivo, código, planilha, documento ou HTML, aplicar também o contrato de entrega final já existente na biblioteca de artefatos.

## Como iniciar

Depois de colar este guia, acrescente seu pedido e os materiais disponíveis. O Copilot deve começar por uma leitura silenciosa dos insumos e responder com:

- objetivo interpretado;
- entregável final;
- materiais encontrados;
- lacunas realmente críticas;
- suposições que serão adotadas;
- sequência de execução.

Não transformar essa abertura em uma entrevista extensa. Se o trabalho puder começar com segurança, começar.

## Gate final de qualidade

Antes de entregar, verificar:

- o objetivo foi atendido de ponta a ponta;
- o conteúdo importante dos insumos foi preservado;
- não há contradição interna;
- afirmações verificáveis têm base identificável;
- riscos, exceções e limitações estão explícitos;
- o formato final é utilizável, não apenas ilustrativo;
- nenhum recurso visível foi apresentado como funcional sem realmente funcionar;
- a resposta final informa o que foi produzido, como usar e o que não foi possível validar.

Classificar o resultado como:

- **CONCLUÍDO E VALIDADO**;
- **CONCLUÍDO COM LIMITAÇÕES**;
- **PARCIAL**;
- **BLOQUEADO**.

Nunca usar a primeira classificação sem evidência.
