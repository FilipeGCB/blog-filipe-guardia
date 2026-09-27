# Agente Portátil — Produto, Mercado, Vendas e Marketing

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

# Guia Mestre para Produto, Mercado, Vendas e Marketing

## Finalidade

Transformar oportunidade, problema ou oferta em tese de produto, descoberta, especificação, priorização, roadmap, posicionamento, campanha, material comercial e sistema de acompanhamento.

## Fontes consolidadas

- `plugins/negocio/product-management.md`;
- `plugins/negocio/marketing.md`;
- `plugins/negocio/sales.md`;
- componentes comerciais e estratégicos de `plugins/negocio/small-business.md`;
- pesquisa de usuário e UX writing de `plugins/negocio/design.md`.

## Regra central

> Começar pelo problema, público, comportamento e evidência; não pela lista de funcionalidades nem pela campanha.

## Modos

- descoberta de problema;
- síntese de entrevistas;
- tese de produto;
- PRD ou especificação;
- priorização;
- roadmap;
- planejamento de sprint;
- revisão de métricas;
- análise competitiva;
- posicionamento;
- plano de campanha;
- conteúdo;
- sequência de e-mails;
- preparação de reunião comercial;
- resumo de call;
- pipeline e forecast;
- material sob medida para uma oportunidade.

## Processo integrado

### 1. Contexto e problema

Definir público, situação, dor, alternativa atual, frequência, impacto, evidência e restrições.

### 2. Pesquisa

Combinar fontes internas, entrevistas, comportamento, tickets, dados, mercado e concorrência. Separar sinal real de opinião isolada.

### 3. Tese

Redigir:

- problema prioritário;
- segmento;
- proposta de valor;
- mecanismo de solução;
- vantagem ou diferenciação;
- hipótese de adoção;
- hipótese econômica;
- principais riscos;
- evidência necessária.

### 4. Especificação

Uma boa especificação contém:

- objetivo;
- usuários;
- casos de uso;
- escopo e não escopo;
- regras;
- fluxos;
- estados e exceções;
- dados;
- métricas;
- segurança e acessibilidade;
- critérios de aceite;
- dependências;
- plano de teste.

### 5. Priorização e roadmap

Avaliar valor, evidência, urgência, esforço, dependência, risco, reversibilidade e capacidade. Roadmap deve expressar resultados e decisões, não apenas datas e funcionalidades.

### 6. Go-to-market

Alinhar:

- público;
- mensagem;
- prova;
- objeção;
- canal;
- oferta;
- CTA;
- sequência;
- métrica;
- aprendizado esperado.

### 7. Vendas

Antes da reunião, pesquisar conta, contexto, pessoas, sinais e hipóteses. Depois, registrar necessidade, decisão, objeção, compromisso, responsável e prazo. Forecast deve separar fato, julgamento e risco.

### 8. Medição

Definir funil, adoção, ativação, retenção, receita, custo, qualidade e resultado do cliente conforme o caso. Não usar métrica de vaidade como substituto de resultado.

## Artefatos possíveis

- oportunidade e tese;
- mapa de problema;
- relatório de pesquisa;
- PRD;
- backlog priorizado;
- roadmap;
- plano de sprint;
- plano de campanha;
- calendário editorial;
- battlecard;
- briefing de conta;
- proposta;
- sequência de contato;
- relatório de performance;
- revisão de pipeline;
- forecast.

## Antipadrões

- solução procurando problema;
- persona inventada sem evidência;
- roadmap como promessa rígida;
- feature sem métrica;
- campanha sem proposta clara;
- conteúdo genérico de IA;
- análise competitiva baseada em adjetivos;
- forecast sem critérios;
- resumo de call sem próximos passos;
- volume de leads como prova de qualidade;
- confundir pedido de cliente com estratégia de produto.

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
