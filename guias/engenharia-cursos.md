---
origin: chatgpt
origem: chatgpt
date: 2026-08-01
data: 2026-08-01
updated: 2026-08-01
atualizado: 2026-08-01
type: master_guide
tipo: guia-mestre
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
catalog_id: 16
version: v2.1
editorial_review: robust_v2.1
versao: v2.1
tags: [curso, learning-design, instructional-design, backward-design, constructive-alignment, 4cid, evidence-centered-design, retrieval-practice, mastery-learning, feedback, cognitive-load, multimedia-learning, udl, wcag, avaliacao, transferencia, ia-generativa]
---

# Guia Mestre para Engenharia de Cursos Baseados em Evidências e Competências

## 0. Declaração de independência

Este guia é completo, independente e reutilizável.

Ele orienta o Copilot — ou outra IA autorizada — a investigar uma necessidade de aprendizagem, decidir se um curso é a resposta adequada, projetar o currículo, produzir os materiais, construir práticas e avaliações, pilotar, revisar, publicar, acompanhar transferência para o trabalho e manter o curso ao longo do tempo.

O guia não ensina um tema específico. Ele ensina **como construir cursos completos** sobre qualquer domínio, preservando:

- rigor metodológico;
- alinhamento entre capacidade, evidência, avaliação, prática e conteúdo;
- aprendizagem de competências complexas;
- qualidade editorial;
- acessibilidade;
- rastreabilidade das fontes;
- segurança e privacidade;
- uso responsável de IA;
- transferência para situações reais;
- manutenção e evolução.

Aplicar também o contrato transversal da biblioteca:

- [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]].

> Um curso não está pronto porque possui módulos e textos. Está pronto quando um público definido consegue desenvolver capacidades observáveis, demonstrá-las em tarefas autênticas e transferi-las para o contexto-alvo, com evidências suficientes para revisar o desenho.

---

## 1. O erro que este guia evita

Cursos costumam nascer por uma sequência invertida:

```text
assunto disponível
→ lista de tópicos
→ slides ou capítulos
→ vídeos
→ quiz de lembrança imediata
→ certificado
```

Essa sequência mede principalmente exposição e conclusão.

A engenharia proposta neste guia começa por outra pergunta:

> O que a pessoa precisa fazer melhor no mundo real, em que condições, com que padrão de qualidade e que evidência demonstrará essa capacidade?

A sequência correta é:

```text
necessidade ou desempenho
→ público e contexto
→ competência
→ tarefa autêntica
→ evidência de domínio
→ avaliação
→ prática e feedback
→ conteúdo de suporte
→ revisão e transferência
→ manutenção
```

O curso é um sistema de aprendizagem, não um contêiner de conteúdo.

---

## 2. Natureza metodológica

### 2.1 O que este guia é

Este documento propõe uma síntese operacional chamada:

> **Engenharia de Cursos Baseados em Evidências e Competências.**

Esse nome descreve a síntese utilizada neste guia; não deve ser apresentado como framework acadêmico único, registrado ou universalmente reconhecido.

A síntese integra métodos e resultados de pesquisa com finalidades diferentes:

```text
Human Performance Technology
+ Backward Design
+ Constructive Alignment
+ Evidence-Centered Design
+ 4C/ID
+ First Principles of Instruction
+ ICAP e aprendizagem ativa
+ prática de recuperação, espaçamento e intercalação
+ Mastery Learning
+ avaliação formativa e feedback
+ exemplos resolvidos, fading e carga cognitiva
+ aprendizagem multimídia
+ Universal Design for Learning
+ WCAG
+ revisão de qualidade de cursos
+ transferência para o trabalho
+ governança de IA e conteúdo
```

Nenhum desses componentes, isoladamente, resolve toda a engenharia do curso.

### 2.2 O papel do ADDIE

ADDIE pode ser usado como vocabulário de processo:

```text
analisar
→ desenhar
→ desenvolver
→ implementar
→ avaliar
```

Mas não deve ser tratado como garantia científica de qualidade nem como um método único e fechado. O guia usa ciclos iterativos, protótipos, gates e retorno a decisões anteriores.

### 2.3 Marcadores de conhecimento

Toda afirmação importante do guia ou do curso produzido deve ser classificada quando necessário:

| Marcador | Significado |
|---|---|
| `[EVID]` | sustentado por fonte identificável ou evidência validada |
| `[PAD]` | padrão institucional, normativo ou técnico |
| `[REC]` | recomendação de desenho derivada de critérios explícitos |
| `[DEC]` | decisão específica do curso ou projeto |
| `[HIP]` | hipótese ainda não demonstrada |
| `[LIM]` | limitação conhecida |
| `[CTX]` | dependente do público, organização, licença, rollout ou tecnologia |
| `[POC]` | resultado observado em prova de conceito controlada; não equivale a produção |
| `[TENANT]` | comportamento que exige confirmação no tenant autorizado |
| `[IA]` | produzido ou transformado com assistência de IA e sujeito a validação humana |

Os marcadores não substituem fonte, data, owner ou evidência. Uma POC não deve ser generalizada para produção sem decisão explícita.

---

## 3. Referências metodológicas centrais

### 3.1 Diagnóstico de desempenho — Human Performance Technology

Treinamento não corrige toda lacuna de desempenho.

Antes de construir um curso, investigar:

- resultado esperado;
- resultado observado;
- conhecimento e habilidade;
- ferramentas e informação;
- incentivos;
- processo;
- capacidade;
- autoridade;
- carga de trabalho;
- ambiente;
- feedback;
- suporte gerencial.

Um curso é indicado quando parte material da lacuna pode ser reduzida por aprendizagem. Quando a causa é acesso, processo, sistema, política ou incentivo, a solução deve incluir intervenções não instrucionais.

### 3.2 Backward Design

O desenho começa por:

1. resultados desejados;
2. evidências aceitáveis;
3. experiências e instrução.

Aplicação:

```text
capacidade
→ desempenho observável
→ tarefa de avaliação
→ rubrica
→ prática
→ conteúdo
```

### 3.3 Constructive Alignment

Resultados, atividades e avaliação devem exigir o mesmo tipo de desempenho.

Se o resultado diz “configurar”, a avaliação não pode ser apenas “definir”.
Se diz “diagnosticar”, a prática precisa expor casos incompletos e ambíguos.
Se diz “decidir”, a rubrica precisa avaliar critérios, evidências e consequências.

### 3.4 Evidence-Centered Design

Projetar avaliação por três modelos:

- **modelo de competência:** o que se pretende inferir sobre o participante;
- **modelo de evidência:** que comportamentos ou produtos sustentam a inferência;
- **modelo de tarefa:** que situação provoca esses comportamentos.

Isso reduz avaliações desconectadas da capacidade real.

### 3.5 4C/ID para competências complexas

Programas de aprendizagem complexa devem articular:

1. **tarefas de aprendizagem completas:** casos, projetos e problemas autênticos;
2. **informação de apoio:** modelos mentais, estratégias e teoria para aspectos não rotineiros;
3. **informação procedural:** instruções just-in-time para rotinas;
4. **prática de partes:** repetição de componentes que exigem alta automaticidade.

O curso deve progredir por classes de tarefas com complexidade crescente e suporte decrescente.

### 3.6 First Principles of Instruction

Cada unidade relevante deve conectar:

```text
problema real
→ ativação do conhecimento prévio
→ demonstração
→ aplicação
→ integração ao repertório
```

### 3.7 ICAP e aprendizagem ativa

Interatividade não é clicar. A atividade cognitiva pode ser:

- passiva: receber;
- ativa: manipular ou selecionar;
- construtiva: produzir explicação, solução ou representação nova;
- interativa: construir em diálogo com resposta contingente.

O curso deve reservar a maior parte do esforço para atividades construtivas e interativas quando o objetivo exigir compreensão profunda e aplicação.

### 3.8 Prática de recuperação, espaçamento e intercalação

O participante precisa tentar recuperar antes de rever.

Aplicações:

- pergunta diagnóstica;
- reconstrução de memória;
- mini casos sem consulta;
- revisões após intervalo;
- retorno cumulativo a conceitos;
- mistura de problemas semelhantes;
- comparação de alternativas.

Releitura pode apoiar estudo, mas não substitui recuperação.

### 3.9 Mastery Learning

O avanço por domínio exige:

- critério explícito;
- avaliação formativa;
- feedback;
- correção;
- nova tentativa com variação;
- apoio adicional;
- registro do progresso.

Domínio não significa perfeição. Significa atingir o padrão de segurança e qualidade definido para a etapa.

### 3.10 Avaliação formativa e feedback

Feedback útil responde:

```text
qual é o objetivo?
→ qual foi o desempenho?
→ qual é a lacuna?
→ qual é o próximo passo?
```

Ele deve ser:

- específico;
- ligado à rubrica;
- oportuno;
- acionável;
- proporcional;
- respeitoso;
- focado em tarefa, processo e autorregulação.

Elogio genérico e correção sem caminho de melhoria possuem baixo valor instrucional.

### 3.11 Carga cognitiva, exemplos resolvidos e fading

Novatos não devem ser lançados diretamente em tarefas complexas sem apoio.

Sequência frequente:

```text
modelo explicado
→ exemplo resolvido
→ exemplo parcialmente resolvido
→ prática guiada
→ prática independente
→ variação e transferência
```

Reduzir apoio à medida que a competência cresce.

### 3.12 Aprendizagem multimídia

Palavras, imagens, áudio e animação devem apoiar um modelo mental comum.

Regras:

- remover decoração sem função;
- segmentar;
- sinalizar estrutura;
- manter texto próximo ao elemento explicado;
- evitar narração e texto idêntico concorrendo;
- usar diagramas quando relações espaciais importam;
- permitir controle do ritmo;
- fornecer alternativas acessíveis.

### 3.13 Universal Design for Learning e WCAG

O desenho deve antecipar variabilidade sem reduzir o padrão de competência.

Oferecer:

- formas alternativas de representação;
- formas legítimas de ação e expressão;
- apoio à motivação e autorregulação;
- navegação por teclado;
- contraste;
- semântica;
- legendas e transcrições;
- texto alternativo;
- foco visível;
- linguagem clara;
- redução de movimento;
- documentos acessíveis.

### 3.14 Transferência para o trabalho

Transferência depende de:

- desenho do treinamento;
- características do participante;
- ambiente de trabalho.

O curso deve prever:

- tarefa real ou simulação fiel;
- plano de aplicação;
- apoio do gestor ou sponsor;
- acesso a ferramentas;
- oportunidade de uso;
- feedback após aplicação;
- comunidade ou revisão;
- remoção de barreiras.

### 3.15 Revisão de qualidade

A revisão deve verificar ao menos:

- visão e navegação;
- objetivos;
- avaliação;
- materiais;
- atividades;
- tecnologia;
- suporte;
- acessibilidade;
- alinhamento entre todos esses elementos.

Revisão por pares e pilotagem são preferíveis à autocertificação do autor.

---

## 4. Quando usar

Usar para:

- criar curso do zero;
- transformar pesquisa em formação;
- reconstruir curso excessivamente expositivo;
- criar capacitação corporativa;
- criar onboarding;
- formar competência técnica;
- formar competência de análise, decisão ou consultoria;
- construir trilha baseada em projeto;
- produzir livro-curso;
- converter documentos, podcasts ou aulas em currículo;
- criar formação que acompanha transformação real;
- preparar curso para plataforma interativa;
- criar certificação interna de baixa ou média consequência;
- criar programa blended, assíncrono, síncrono ou presencial.

---

## 5. Quando não usar como única solução

Não usar curso como resposta principal quando a causa dominante for:

- falta de acesso;
- sistema inadequado;
- processo incoerente;
- meta contraditória;
- ausência de autoridade;
- incentivo desalinhado;
- sobrecarga;
- informação indisponível;
- regra não definida;
- decisão de gestão;
- problema clínico, psicológico ou disciplinar;
- necessidade de suporte operacional imediato.

Nesses casos, o curso pode apoiar uma solução mais ampla, mas não substituí-la.

---

## 6. Contrato de execução

O Copilot não deve encerrar em:

- lista de módulos;
- ementa;
- sumário;
- tópicos;
- referências sem síntese;
- texto expositivo;
- banco de perguntas;
- cronograma;
- prompt;
- protótipo de uma aula;
- recomendação de plataforma.

Quando o pedido for “criar o curso completo”, entregar o sistema completo de aprendizagem proporcional ao escopo.

### 6.1 Entregáveis mínimos

1. diagnóstico e justificativa;
2. público e contexto;
3. mapa de competências;
4. pré-requisitos;
5. resultados observáveis;
6. tarefas autênticas;
7. mapa curricular;
8. matriz de alinhamento;
9. blueprint de avaliação;
10. rubricas;
11. módulos e aulas completos;
12. exemplos e contraexemplos;
13. práticas guiadas;
14. práticas independentes;
15. laboratórios;
16. feedback e gabaritos;
17. recuperação e espaçamento;
18. projeto integrador;
19. plano de transferência;
20. acessibilidade;
21. fontes;
22. guia de facilitação;
23. pilotagem;
24. QA;
25. manutenção;
26. registro de decisões.

### 6.2 Regra de honestidade

Quando faltarem fontes, acesso, ambiente, dados ou especialistas:

- não inventar;
- marcar a lacuna;
- produzir material sintético;
- definir teste;
- separar fato de hipótese;
- registrar o que depende de validação.

---

## 7. Macroprocesso em 15 fases

```text
F0 — enquadrar a demanda
F1 — diagnosticar desempenho e necessidade
F2 — investigar público, contexto e fontes
F3 — modelar competências e tarefas reais
F4 — definir resultados e evidências
F5 — construir blueprint de avaliação
F6 — arquitetar currículo e progressão
F7 — desenhar experiências e práticas
F8 — construir sistema de memória e domínio
F9 — produzir conteúdo e mídia
F10 — integrar aplicação e transferência
F11 — prototipar e pilotar
F12 — revisar qualidade e acessibilidade
F13 — publicar e facilitar
F14 — medir, manter e evoluir
```

As fases são iterativas. Uma avaliação impossível pode exigir revisão do objetivo; uma POC pode exigir revisão da competência; o piloto pode revelar pré-requisito ausente.

---

# PARTE I — ENQUADRAMENTO E DIAGNÓSTICO

## 8. F0 — Enquadrar a demanda

Registrar:

```yaml
course_request:
  business_or_learning_problem:
  requested_course:
  requester:
  sponsor:
  target_population:
  desired_change:
  deadline:
  constraints:
  available_sources:
  subject_matter_experts:
  delivery_modes:
  technologies:
  sensitive_data:
  success_claim:
```

Perguntas obrigatórias:

- Que mudança concreta é esperada?
- Quem observará essa mudança?
- Qual risco existe se a pessoa errar?
- Já existe material?
- A habilidade será usada com que frequência?
- O ambiente permite praticar?
- Que parte pode ser simulada?
- O curso será voluntário, obrigatório ou ligado a papel?
- Qual é o limite de tempo realista?

### Gate F0

Não avançar sem problema, público, contexto e decisão que o curso deve apoiar.

---

## 9. F1 — Diagnosticar desempenho e necessidade

### 9.1 Mapa de lacuna

```yaml
performance_gap:
  desired_performance:
  current_performance:
  evidence:
  frequency:
  impact:
  risk:
  causes:
    knowledge:
    skill:
    information:
    tool:
    process:
    incentive:
    authority:
    environment:
    capacity:
  instructional_contribution:
  non_instructional_actions:
```

### 9.2 Matriz “curso ou outra intervenção”

| Causa | Curso ajuda? | Intervenção principal |
|---|---:|---|
| não conhece o conceito | sim | ensino e prática |
| conhece, mas não executa | talvez | prática, feedback, ferramenta ou processo |
| não tem acesso | não | acesso |
| sistema impede | não | correção técnica |
| regra é ambígua | não primeiro | decisão e documentação |
| não recebe feedback | parcialmente | mecanismo de feedback |
| não há tempo/capacidade | não | gestão de capacidade |
| tarefa rara e crítica | sim, com job aid e simulação | curso + suporte de desempenho |
| tarefa frequente e variável | sim | prática de tarefa completa |
| incentivo contradiz | pouco | gestão e incentivo |

### Gate F1

Avançar somente se:

- a lacuna estiver demonstrada;
- causas instrucionais e não instrucionais estiverem separadas;
- houver justificativa para o curso;
- ações externas ao curso possuírem owner.

---

## 10. F2 — Investigar público, contexto e fontes

### 10.1 Perfil do participante

Não criar “persona decorativa”. Registrar variáveis que mudam o desenho:

- conhecimento prévio;
- tarefas atuais;
- experiência;
- idioma;
- acessibilidade;
- dispositivo;
- conectividade;
- tempo disponível;
- motivação;
- ansiedade ou risco;
- autonomia;
- suporte;
- necessidade de certificação;
- ambiente para praticar.

### 10.2 Baseline

Aplicar diagnóstico de entrada:

- perguntas de recuperação;
- tarefa curta;
- autoavaliação calibrada;
- análise de artefato anterior;
- entrevista;
- observação;
- inventário de acesso.

Não usar baseline apenas para pontuar. Usar para adaptar pré-requisitos, exemplos e apoio.

### 10.3 Corpus

Criar inventário:

```yaml
source:
  source_id:
  title:
  author_or_owner:
  authority:
  date:
  version:
  scope:
  claims_supported:
  limitations:
  copyright_or_license:
  sensitive:
  status: [accepted, contextual, disputed, outdated, rejected]
```

### 10.4 Hierarquia de fontes

1. padrão, norma ou documentação oficial;
2. pesquisa original ou revisão robusta;
3. livro consolidado;
4. prática industrial documentada;
5. especialista;
6. material interno validado;
7. síntese do autor;
8. hipótese.

Não misturar níveis sem sinalização.

### Gate F2

- baseline definido;
- fontes catalogadas;
- lacunas de fonte explícitas;
- necessidades de acessibilidade registradas;
- contexto de aplicação conhecido.

---

# PARTE II — COMPETÊNCIA, EVIDÊNCIA E CURRÍCULO

## 11. F3 — Modelar competências e tarefas reais

### 11.1 Competência

```yaml
competency:
  id:
  name:
  purpose:
  real_world_tasks:
  conditions:
  standards:
  decisions:
  knowledge:
  skills:
  attitudes_or_dispositions:
  tools:
  risks:
  common_errors:
  evidence:
```

### 11.2 Tarefa autêntica

Uma tarefa autêntica:

- se aproxima do trabalho real;
- contém contexto;
- exige decisão;
- possui restrições;
- permite mais de um caminho quando apropriado;
- produz artefato ou desempenho observável;
- exige justificativa;
- incorpora consequência ou trade-off.

### 11.3 Análise cognitiva da tarefa

Com especialistas:

1. pedir demonstração;
2. perguntar o que observam;
3. identificar decisões;
4. levantar sinais;
5. descobrir exceções;
6. registrar erros;
7. explicitar conhecimento tácito;
8. comparar novato e especialista;
9. validar com mais de uma pessoa;
10. converter em casos e rubricas.

### 11.4 Tarefa completa e partes

Separar:

- aspectos não rotineiros: exigem modelos mentais e estratégia;
- aspectos rotineiros: exigem instrução just-in-time;
- componentes críticos: podem exigir prática de partes.

### Gate F3

- competências ligadas a tarefas reais;
- condições e padrão explícitos;
- erros comuns identificados;
- não há lista de “competências” formada apenas por substantivos abstratos.

---

## 12. F4 — Definir resultados e evidências

### 12.1 Resultado observável

Formato:

```text
Dada [condição], o participante será capaz de [ação observável],
produzindo [resultado], segundo [critério].
```

Exemplo:

> Dado um site SharePoint de desenvolvimento e um conjunto de fontes sintéticas, o participante será capaz de projetar um Content Type reutilizável, justificar seus campos e demonstrar seu comportamento em três canais de ingestão, sem criar duplicidade semântica.

### 12.2 Evitar verbos vagos

Evitar isoladamente:

- conhecer;
- compreender;
- aprender;
- familiarizar-se;
- ter consciência.

Substituir por:

- explicar;
- comparar;
- diagnosticar;
- modelar;
- configurar;
- testar;
- justificar;
- revisar;
- decidir;
- produzir;
- operar.

### 12.3 Evidência aceitável

Para cada resultado:

```yaml
alignment:
  outcome:
  authentic_evidence:
  assessment_task:
  rubric_criteria:
  practice:
  supporting_content:
  transfer_task:
```

### Gate F4

Todo resultado possui ação, condição, produto ou desempenho e critério.

---

## 13. F5 — Construir blueprint de avaliação

### 13.1 Tipos

- diagnóstico;
- formativo;
- somativo;
- desempenho;
- produto;
- portfólio;
- projeto;
- defesa;
- observação;
- simulação;
- transferência.

### 13.2 Triângulo de evidência

Para cada avaliação:

```yaml
assessment:
  claim:
  evidence_required:
  task:
  scoring:
  misconceptions:
  accessibility:
  security:
  feedback:
  retry:
```

### 13.3 Validade

Perguntar:

- a tarefa exige a competência?
- algo irrelevante interfere?
- o participante pode acertar por pista?
- o resultado é reproduzível?
- a rubrica discrimina níveis?
- o contexto é fiel?
- há oportunidade de revisão?

### 13.4 Blueprint

Distribuir por:

- competência;
- complexidade;
- contexto;
- risco;
- tipo de evidência;
- peso;
- momento;
- reavaliação.

### 13.5 Rubrica analítica

Critérios típicos:

- correção;
- completude;
- raciocínio;
- uso de evidências;
- segurança;
- qualidade do artefato;
- justificativa;
- operação;
- transferibilidade.

Níveis devem descrever desempenho observável, não adjetivos vagos.

### Gate F5

- avaliações medem os verbos dos resultados;
- tarefas críticas são avaliadas por desempenho;
- existe gabarito, exemplo ou âncora;
- reavaliação e feedback estão definidos.

---

## 14. F6 — Arquitetar currículo e progressão

### 14.1 Estrutura

```text
programa
→ trilhas
→ módulos
→ classes de tarefa
→ aulas/unidades
→ atividades
→ avaliações
→ artefatos
```

### 14.2 Sequenciamento

Critérios possíveis:

- pré-requisito;
- simples → complexo;
- concreto → abstrato;
- baixa → alta variabilidade;
- parte → sistema;
- observar → executar → decidir → ensinar;
- simulação → ambiente real;
- suporte alto → autonomia;
- baixo → alto risco.

### 14.3 Classes de tarefa

Para competência complexa:

```text
Classe 1 — caso completo com forte apoio
Classe 2 — caso completo com variação moderada
Classe 3 — caso ambíguo com apoio parcial
Classe 4 — caso realista e independente
Classe 5 — transferência para contexto novo
```

### 14.4 Espiral curricular

Conceitos centrais retornam em contextos mais complexos.

Não repetir conteúdo igual; aumentar exigência.

### 14.5 Pré-requisitos

Separar:

- obrigatório;
- recomendado;
- ensinado em ponte;
- fornecido como job aid;
- dispensável por diagnóstico.

### 14.6 Carga horária real

A hora deve estar associada a atividade.

```yaml
time_budget:
  activation:
  study:
  demonstration:
  guided_practice:
  independent_practice:
  feedback:
  retrieval:
  assessment:
  workplace_application:
```

Não calcular somente pelo número de páginas ou vídeos.

### Gate F6

- módulos formam progressão;
- cada hora possui função;
- competências importantes retornam;
- pré-requisitos e pontes estão definidos;
- carga é realista.

---

# PARTE III — EXPERIÊNCIA, PRÁTICA E CONTEÚDO

## 15. F7 — Desenhar experiências e práticas

### 15.1 Anatomia de módulo

1. problema ou tarefa;
2. diagnóstico;
3. objetivos;
4. mapa;
5. ativação;
6. demonstração;
7. exemplo resolvido;
8. prática guiada;
9. feedback;
10. prática independente;
11. variação;
12. síntese;
13. recuperação;
14. aplicação;
15. avaliação;
16. contribuição para o projeto.

### 15.2 Anatomia de aula

```text
por que importa
→ tentativa inicial
→ modelo explicativo
→ demonstração
→ exemplo e contraexemplo
→ prática curta
→ feedback
→ desafio
→ síntese de memória
→ próximo uso
```

### 15.3 Biblioteca de atividades

| Padrão | Finalidade |
|---|---|
| Previsão antes da explicação | ativar conhecimento |
| Exemplo resolvido | modelar estratégia |
| Problema parcialmente resolvido | retirar apoio gradualmente |
| Comparação de casos | discriminar critérios |
| Classificação | construir categorias |
| Diagnóstico de erro | reconhecer falhas |
| Teach-back | construir explicação |
| Decisão com trade-off | aplicar critérios |
| Simulação | executar em contexto |
| Produção de artefato | demonstrar competência |
| Revisão por rubrica | calibrar qualidade |
| Crítica de solução | desenvolver julgamento |
| Reflexão pós-ação | integrar aprendizado |
| Job aid design | externalizar rotina |
| Caso cumulativo | integrar módulos |

### 15.4 Feedback em camadas

1. resultado;
2. critério;
3. processo;
4. próximo passo;
5. nova tentativa.

Evitar entregar a solução antes de o participante tentar quando a tentativa for segura.

### 15.5 Suporte adaptativo

- pista conceitual;
- pista procedural;
- exemplo parcial;
- solução comentada;
- demonstração;
- remediação;
- tarefa alternativa equivalente.

### Gate F7

- existe atividade cognitiva coerente;
- pelo menos uma tarefa autêntica por módulo;
- apoio diminui;
- feedback produz nova ação;
- não há “interação” puramente decorativa como principal prática.

---

## 16. F8 — Construir sistema de memória e domínio

### 16.1 Ciclo

```text
estudar
→ tentar recuperar
→ receber feedback
→ corrigir
→ espaçar
→ misturar
→ aplicar
→ recuperar novamente
```

### 16.2 Plano de revisão

Exemplo ajustável:

- fim da aula;
- 24–72 horas;
- uma semana;
- três semanas;
- antes do projeto;
- após aplicação.

Não prometer calendário universal. Ajustar complexidade, duração e risco.

### 16.3 Tipos de recuperação

- definição de memória;
- explicação causal;
- reconstrução de procedimento;
- mini caso;
- comparação;
- geração de exemplo;
- detecção de erro;
- prática cumulativa.

### 16.4 Intercalação

Misturar problemas parecidos para forçar escolha de estratégia, em vez de apenas repetir o mesmo procedimento.

### 16.5 Critério de domínio

```yaml
mastery:
  target:
  critical_errors:
  threshold:
  attempts:
  remediation:
  reassessment:
  expiration_or_revalidation:
```

### Gate F8

- revisão cumulativa existe;
- domínio não é consumo;
- erros críticos impedem aprovação;
- nova tentativa varia o caso;
- memória e aplicação são avaliadas em momentos diferentes.

---

## 17. F9 — Produzir conteúdo e mídia

### 17.1 Conteúdo como informação de apoio

Produzir somente o necessário para executar, compreender e transferir.

Cada peça deve ter:

- finalidade;
- resultado associado;
- fonte;
- versão;
- escopo;
- formato;
- acessibilidade;
- validade;
- owner.

### 17.2 Padrões editoriais

- título informativo;
- promessa da unidade;
- linguagem clara;
- exemplos específicos;
- contraexemplos;
- distinção entre fato, recomendação e hipótese;
- termos definidos;
- links e fontes;
- resumo;
- perguntas de recuperação;
- histórico.

### 17.3 Biblioteca de componentes didáticos

- conceito;
- modelo;
- procedimento;
- exemplo resolvido;
- caso;
- erro comum;
- decisão;
- checklist;
- job aid;
- tabela comparativa;
- diagrama;
- demonstração;
- prática;
- rubrica;
- reflexão;
- fonte.

### 17.4 Escolha de mídia

Usar:

- texto para precisão, consulta e ritmo individual;
- diagrama para relações;
- captura anotada para interface;
- vídeo para dinâmica e demonstração;
- áudio para narrativa sem necessidade visual;
- simulação para decisão e consequência;
- ambiente real para transferência.

Não transformar toda unidade em vídeo.

### 17.5 Direitos autorais

- não reproduzir obras além do permitido;
- resumir e citar;
- usar licenças compatíveis;
- registrar origem de imagens;
- não enviar conteúdo interno a serviço não autorizado;
- não usar material corporativo em curso compartilhável.

### Gate F9

- toda mídia possui função;
- conteúdo está ligado a prática;
- fontes estão registradas;
- documentos são acessíveis;
- não há redundância concorrente;
- exemplos e gabaritos foram revisados.

---

# PARTE IV — APLICAÇÃO, IA, PILOTO E OPERAÇÃO

## 18. F10 — Integrar aplicação e transferência

### 18.1 Plano de transferência

```yaml
transfer:
  target_task:
  workplace_context:
  first_application:
  deadline:
  manager_or_peer_support:
  tools_and_access:
  job_aid:
  evidence:
  feedback:
  obstacles:
  follow_up:
```

### 18.2 Artefatos

Priorizar artefatos reutilizáveis:

- diagnóstico;
- modelo;
- plano;
- configuração;
- código;
- documento;
- dashboard;
- decisão;
- runbook;
- teste;
- relatório;
- portfólio.

### 18.3 Projeto integrador

O projeto deve:

- começar cedo;
- receber incrementos por módulo;
- usar caso comum;
- exigir integração;
- possuir milestones;
- receber feedback;
- culminar em demonstração ou defesa;
- ter rubrica própria;
- possuir versão segura/anonimizada.

### 18.4 Ambiente

Treinar sem acesso ao ambiente real pode exigir:

- sandbox;
- dados sintéticos;
- screenshots;
- simulação;
- role-play;
- procedimento assistido;
- POC acompanhada.

Declarar o que foi simulado.

### Gate F10

- primeira aplicação definida;
- barreiras identificadas;
- sponsor ou apoio previsto;
- artefatos possuem destino;
- projeto integra módulos.

---

## 19. Uso de IA na produção e na aprendizagem

### 19.1 Papéis permitidos

A IA pode atuar como:

- pesquisadora assistida;
- organizadora;
- geradora de variações;
- tutora socrática;
- simuladora;
- revisora por rubrica;
- geradora de feedback preliminar;
- criadora de dados sintéticos;
- acessibilidade e transformação de formato;
- analisadora de testes.

### 19.2 Papéis que exigem validação humana

- definir verdade do domínio;
- aprovar fonte;
- validar regra;
- avaliar desempenho de alto impacto;
- conceder certificado crítico;
- decidir exceção;
- aprovar conteúdo sensível;
- interpretar dado pessoal;
- publicar em nome da organização.

### 19.3 Contrato de produção com IA

```yaml
ai_production:
  task:
  model_or_tool:
  sources_allowed:
  data_allowed:
  prompts_versioned:
  human_reviewer:
  factuality_check:
  copyright_check:
  privacy_check:
  bias_and_accessibility_check:
  output_status:
```

### 19.4 IA tutora

A tutora deve:

- perguntar antes de responder;
- usar o material autorizado;
- adaptar apoio, não reduzir objetivo;
- dar pistas graduais;
- citar fontes quando aplicável;
- reconhecer incerteza;
- não fingir observar ações que não observa;
- não reter dados desnecessários;
- permitir revisão humana;
- não substituir avaliação crítica sem controle.

### 19.5 Avaliação em cenário com IA

Decidir explicitamente:

- IA proibida;
- IA permitida;
- IA exigida;
- IA limitada;
- uso declarado;
- processo avaliado;
- artefato avaliado;
- defesa oral ou execução ao vivo;
- logs ou reflexão.

Avaliar capacidade humana relevante, inclusive dirigir, verificar e corrigir IA quando isso fizer parte do trabalho real.

---

## 20. F11 — Prototipar e pilotar

### 20.1 Vertical slice

Antes de produzir tudo, construir uma fatia completa:

```text
resultado
→ avaliação
→ aula
→ prática
→ feedback
→ acessibilidade
→ telemetria
→ aplicação
```

### 20.2 Participantes do piloto

Incluir, quando possível:

- novato;
- participante típico;
- experiente;
- pessoa com necessidade de acessibilidade relevante;
- facilitador;
- especialista;
- gestor ou consumidor do artefato.

### 20.3 Dados do piloto

- entendimento;
- tempo;
- erros;
- abandono;
- pedido de ajuda;
- qualidade do artefato;
- desempenho sem consulta;
- acessibilidade;
- utilidade;
- transferência inicial.

### 20.4 Think-aloud e observação

Observar sem ensinar durante o teste quando o objetivo for descobrir falha de desenho.

Separar:

- erro do participante;
- pré-requisito ausente;
- instrução ambígua;
- interface;
- avaliação;
- conteúdo;
- ambiente.

### Gate F11

- fatia completa testada;
- tempo medido;
- problemas priorizados;
- alterações registradas;
- nenhum resultado crítico depende apenas da opinião do autor.

---

## 21. F12 — Revisar qualidade e acessibilidade

### 21.1 Oito dimensões de revisão

1. visão geral e orientação;
2. objetivos e competências;
3. avaliação;
4. materiais;
5. atividades e interação;
6. tecnologia;
7. suporte;
8. acessibilidade e usabilidade.

### 21.2 Revisão de alinhamento

Para cada resultado:

```text
resultado
↔ avaliação
↔ prática
↔ conteúdo
↔ feedback
↔ transferência
```

Qualquer elo ausente é defeito.

### 21.3 Revisão factual

- cada afirmação material tem fonte;
- documentação atual foi verificada;
- Preview/GA está marcado;
- números possuem data;
- hipótese está marcada;
- especialista aprovou conteúdo interno;
- links funcionam;
- exemplos não contradizem a regra.

### 21.4 Revisão de acessibilidade

- estrutura de headings;
- teclado;
- foco;
- contraste;
- texto alternativo;
- legendas;
- transcrição;
- tabelas;
- ordem de leitura;
- zoom;
- redução de movimento;
- linguagem;
- documentos;
- avaliação equivalente.

### 21.5 Revisão editorial

A revisão editorial não se limita a ortografia. Ela verifica se o curso pode ser usado, avaliado e mantido sem explicações paralelas do autor.

Verificar:

- promessa, público, escopo e não objetivos;
- progressão entre módulos e classes de tarefa;
- coerência entre títulos, resultados, atividades e avaliação;
- definição e uso consistente de termos;
- distinção entre fato, padrão, recomendação, decisão, hipótese, POC e dependência do tenant;
- fontes, datas, versões, owner e vigência;
- precisão dos nomes de produtos, objetos e papéis;
- instruções com pré-condição, permissão, resultado esperado, validação e rollback;
- exemplos e contraexemplos coerentes com as regras;
- redundância pedagógica intencional versus repetição editorial;
- transições que explicam entrada, saída e dependência;
- tabelas com pergunta, unidade e critério;
- código e expressões com contexto e limites;
- rubricas com desempenho observável e patamar de aprovação;
- erros críticos e regras de reavaliação;
- linguagem clara, direta, inclusiva e não promocional;
- acessibilidade de texto, mídia, documentos e avaliações;
- changelog e gatilhos de manutenção.

Usar um documento canônico de convenções editoriais para impedir que cada módulo redefina termos e critérios.

### Gate F12

O curso não publica com falha essencial de alinhamento, segurança ou acessibilidade.

---

## 22. F13 — Publicar e facilitar

### 22.1 Pacote do participante

- orientação;
- syllabus;
- cronograma;
- pré-requisitos;
- materiais;
- atividades;
- avaliações;
- rubricas;
- suporte;
- política de IA;
- acessibilidade;
- privacidade;
- progresso;
- portfólio.

### 22.2 Pacote do facilitador

- objetivos;
- roteiro;
- tempo;
- demonstrações;
- perguntas;
- erros;
- feedback;
- remediação;
- gabaritos;
- critérios;
- incidentes;
- adaptações;
- registro de decisões.

### 22.3 Presença e facilitação

Mesmo no assíncrono, definir:

- mensagens;
- feedback;
- plantão;
- comunidade;
- escalonamento;
- prazos;
- recuperação;
- intervenção para participantes em risco.

### 22.4 Certificação

Certificar somente o que foi avaliado.

“Concluiu o conteúdo” não equivale a “domina a competência”.

---

## 23. F14 — Medir, manter e evoluir

### 23.1 Níveis de evidência de resultado

- reação e usabilidade;
- aprendizagem imediata;
- retenção;
- aplicação;
- resultado no trabalho;
- impacto organizacional.

Não atribuir causalidade automaticamente.

### 23.2 Indicadores úteis

- qualidade de artefato;
- domínio por competência;
- erro crítico;
- reavaliação;
- retenção;
- transferência;
- tempo até primeira aplicação;
- uso de job aid;
- apoio gerencial;
- falhas do curso;
- atualização de fontes;
- acessibilidade;
- custo de manutenção.

### 23.3 Success Case

Investigar casos de alto e baixo sucesso:

- o que foi aplicado;
- que resultado ocorreu;
- que fatores ajudaram;
- que barreiras impediram;
- que parte do curso contribuiu;
- o que precisa mudar.

### 23.4 Manutenção

```yaml
maintenance:
  content_owner:
  instructional_owner:
  technical_owner:
  review_cycle:
  volatile_sources:
  trigger_events:
  version:
  deprecation:
  learner_feedback:
  regression_tests:
```

Gatilhos:

- mudança normativa;
- mudança de produto;
- novo erro recorrente;
- resultado abaixo da meta;
- nova tecnologia;
- mudança de público;
- problema de acessibilidade;
- fonte retirada;
- projeto aplicado produz aprendizado novo.

---

# PARTE V — DESIGN SYSTEM DO CURSO

## 24. Bibliotecas metodológicas

### 24.1 Biblioteca de competências

Cada item possui:

- tarefa;
- condições;
- critérios;
- evidências;
- riscos;
- pré-requisitos;
- progressão;
- transferência.

### 24.2 Biblioteca de resultados

Padrões:

- explicar;
- discriminar;
- diagnosticar;
- modelar;
- configurar;
- operar;
- avaliar;
- decidir;
- criar;
- revisar;
- transferir;
- ensinar.

### 24.3 Biblioteca de avaliações

- item de resposta selecionada;
- resposta construída;
- caso;
- simulação;
- demonstração;
- produto;
- portfólio;
- defesa;
- revisão;
- observação;
- aplicação real.

### 24.4 Biblioteca de atividades

Usar a biblioteca da seção 15.3, com:

- objetivo;
- momento;
- tamanho;
- apoio;
- feedback;
- acessibilidade;
- contraindicação.

### 24.5 Biblioteca de feedback

- resultado;
- critério;
- processo;
- estratégia;
- autorregulação;
- orientação para a próxima tentativa;
- remediação.

### 24.6 Biblioteca de mídia

- texto;
- diagrama;
- demonstração;
- captura;
- vídeo;
- áudio;
- simulação;
- job aid;
- ambiente real.

### 24.7 Biblioteca de erros

Todo curso deve catalogar:

- concepção equivocada;
- erro procedural;
- erro de decisão;
- erro de segurança;
- erro de leitura;
- erro de ferramenta;
- erro de comunicação;
- erro de transferência.

### 24.8 Biblioteca de fontes

Separar:

- normativas;
- pesquisa;
- livros;
- documentação;
- especialistas;
- casos;
- materiais internos;
- hipóteses.

---

## 25. Matriz operacional central

```text
necessidade
→ desempenho
→ competência
→ tarefa real
→ resultado
→ evidência
→ avaliação
→ prática
→ feedback
→ conteúdo
→ aplicação
→ métrica
```

Modelo:

```yaml
course_alignment:
  need:
  performance:
  competency:
  real_task:
  outcome:
  evidence:
  assessment:
  practice:
  feedback:
  content:
  transfer:
  metric:
  source:
  owner:
```

Nenhum conteúdo entra no curso sem lugar nessa matriz, salvo referência opcional claramente marcada.

---

## 26. Padrão de módulo

```markdown
# Módulo

## Contrato
## Entrada do módulo
## Problema profissional
## Tarefa completa
## Pré-requisitos, acesso e diagnóstico
## Resultados observáveis
## Contrato de evidência
## Evidências e avaliação
## Mapa conceitual
## Planejamento do tempo
## Aulas e demonstrações
## Exemplo resolvido
## Contraexemplo
## Prática guiada
## Prática independente ou laboratório
## Feedback, gabarito e nova tentativa
## Erros comuns e erros críticos
## Recuperação e espaçamento
## Aplicação no trabalho
## Contribuição ao projeto integrador
## Rubrica e patamar de aprovação
## Gate
## Ponte para o próximo módulo
## Fontes, limitações e dependências do tenant
## Changelog
```

---

## 27. Padrão de aula

```markdown
# Aula

## Por que importa
## Entrada e tentativa inicial
## Resultado de aprendizagem
## Termos e pressupostos
## Modelo explicativo
## Demonstração
## Exemplo resolvido
## Exemplo contrastante
## Prática curta
## Feedback e correção
## Desafio com variação
## Síntese sem consulta
## Tarefa de revisão futura
## Fonte, data e limitação
```

---

## 28. Cálculo de carga horária

Estimar pelo trabalho do participante.

### 28.1 Fórmula

```text
tempo de leitura/visualização
+ tempo de tentativa
+ tempo de prática
+ tempo de feedback
+ tempo de revisão
+ tempo de avaliação
+ tempo de aplicação
```

### 28.2 Regra

- não inflar;
- não chamar referência opcional de carga obrigatória;
- medir no piloto;
- informar intervalo quando variar;
- separar carga guiada e autônoma;
- registrar tempo do projeto.

### 28.3 Distribuição recomendada para curso aplicado

Não é regra universal, mas ponto de partida:

- 15–25% estudo e demonstração;
- 35–50% prática;
- 10–20% feedback e revisão;
- 15–30% aplicação e avaliação.

Cursos de competência técnica complexa devem dedicar mais tempo à prática e ao projeto do que à exposição.

---

## 29. Gates

### Gate 1 — necessidade

Curso é intervenção adequada.

### Gate 2 — competência

Tarefas, condições e critérios estão definidos.

### Gate 3 — alinhamento

Resultados, avaliação e prática correspondem.

### Gate 4 — arquitetura

Progressão e pré-requisitos funcionam.

### Gate 5 — vertical slice

Uma unidade completa foi produzida.

### Gate 6 — pilotagem

Participantes reais ou representativos foram observados.

### Gate 7 — qualidade

Conteúdo, acessibilidade e fontes foram revisados.

### Gate 8 — transferência

Existe aplicação e suporte.

### Gate 9 — publicação

Pacotes, owners e operação estão prontos.

### Gate 10 — evolução

Métricas e revisão estão ativas.

---

## 30. Antipadrões

- ementa como curso;
- lista de tópicos como currículo;
- objetivo “entender” sem evidência;
- avaliação de definição para competência prática;
- vídeo como formato padrão;
- quiz imediatamente após leitura como prova de domínio;
- atividade de clicar como aprendizagem ativa;
- caso artificial sem decisão;
- projeto somente no fim;
- ausência de contraexemplo;
- feedback genérico;
- rubrica com “ruim/bom/excelente” sem comportamento;
- gamificação como motivação;
- certificado por consumo;
- IA escrevendo conteúdo sem fonte;
- IA avaliando alto impacto sem revisão;
- horas calculadas por páginas;
- curso que ignora acesso e ambiente;
- treinamento para problema de processo;
- conteúdo corporativo em ambiente não autorizado;
- curso sem owner de manutenção;
- curso técnico sem política de atualização;
- acessibilidade deixada para o final.

---

## 31. Exemplo áureo resumido

### Demanda

“Ensinar analistas a construir agentes corporativos confiáveis.”

### Diagnóstico

Parte da lacuna é conhecimento; outras partes dependem de licença, acesso, arquitetura e segurança.

### Competência

Projetar, construir, testar e operar um agente delimitado.

### Tarefa autêntica

Criar agente read-only sobre corpus sintético, com citações, usuário negativo e ferramenta de consulta exata.

### Evidência

- arquitetura;
- agente;
- conjunto de testes;
- relatório;
- defesa;
- runbook.

### Avaliação

Rubrica mede:

- grounding;
- citação;
- abstenção;
- segurança;
- exatidão;
- observabilidade;
- ALM.

### Progressão

```text
analisar pergunta
→ preparar conteúdo
→ configurar fonte
→ testar recuperação
→ adicionar ferramenta
→ testar segurança
→ promover
→ operar
```

### Transferência

Inventário do tenant e POC acompanhada.

Esse exemplo não começa por “aula sobre Copilot Studio”.

---

## 32. Definição de concluído

Um curso completo somente está concluído quando:

- necessidade foi validada;
- público e contexto estão documentados;
- competências e tarefas autênticas existem;
- resultados são observáveis;
- matriz de alinhamento está completa;
- avaliações possuem blueprint e rubrica;
- módulos possuem conteúdo, prática e feedback;
- erros e contraexemplos foram incluídos;
- recuperação e espaçamento estão planejados;
- projeto integrador recebe entregas progressivas;
- carga horária foi calculada e testada;
- fontes foram auditadas;
- IA foi governada;
- acessibilidade foi revisada;
- vertical slice e piloto foram executados ou bloqueio registrado;
- transferência foi desenhada;
- pacote do participante e facilitador existem;
- manutenção tem owner, gatilhos e versão;
- nenhum artefato planejado é apresentado como produzido;
- nenhum resultado de aprendizagem é afirmado sem avaliação.

---

## 33. Estrutura de arquivos recomendada

```text
curso/
├── 00-LEIA-ME.md
├── 00_ESPECIFICACAO/
│   ├── 00-charter.md
│   ├── 01-diagnostico.md
│   ├── 02-publico-baseline.md
│   ├── 03-mapa-competencias.md
│   ├── 04-matriz-alinhamento.md
│   ├── 05-blueprint-avaliacao.md
│   ├── 06-pratica-recuperacao.md
│   ├── 07-transferencia.md
│   ├── 08-acessibilidade-ia.md
│   └── 09-fontes.md
├── MODULOS/
│   ├── M01/
│   └── ...
├── PROJETO_INTEGRADOR/
├── AVALIACOES/
├── GABARITOS/
├── FACILITACAO/
├── DADOS_SINTETICOS/
├── QA/
└── CHANGELOG.md
```

---

## 34. Formato obrigatório da resposta do Copilot

Ao concluir a construção, responder com:

1. resumo executivo;
2. necessidade e diagnóstico;
3. público;
4. competência final;
5. arquitetura curricular;
6. carga horária;
7. avaliações;
8. práticas;
9. projeto integrador;
10. transferência;
11. acessibilidade;
12. fontes;
13. uso de IA;
14. arquivos criados;
15. testes;
16. limitações;
17. decisões;
18. como utilizar;
19. manutenção;
20. evidência de que o curso está completo.

---

## 35. Prompt operacional

```text
Use o Guia Mestre para Engenharia de Cursos Baseados em Evidências e Competências e o Contrato Obrigatório de Entrega de Artefato Final.

Objetivo:
transformar o corpus fornecido e a pesquisa autorizada em um curso completo, aplicável e mensurável.

Regras:
- diagnostique a necessidade antes de prescrever treinamento;
- comece pelas capacidades e tarefas reais;
- use Backward Design e alinhamento construtivo;
- modele evidência e avaliação antes do conteúdo;
- use tarefas completas e progressivas inspiradas no 4C/ID;
- organize cada unidade por ativação, demonstração, aplicação e integração;
- inclua exemplos resolvidos, contraexemplos, prática guiada, fading e prática independente;
- construa recuperação, espaçamento, intercalação e domínio;
- produza feedback ligado a rubricas;
- calcule carga pelo trabalho real do participante;
- inclua aplicação e transferência;
- use UDL e WCAG;
- cite fontes e marque volatilidade;
- governe uso de IA, privacidade e autoria;
- construa uma vertical slice, teste e revise;
- entregue módulos e aulas completos, não somente ementa;
- diferencie material produzido, planejado, simulado e dependente de acesso;
- não declare domínio sem avaliação;
- não encerre antes de entregar todos os arquivos previstos e validar links, horas e alinhamento.
```

---

## 36. Referências essenciais

- MIT Teaching + Learning Lab. *Backward Design*.
- Wiggins, G.; McTighe, J. *Understanding by Design*.
- Biggs, J. *Enhancing Teaching through Constructive Alignment*.
- Mislevy, R.; Steinberg, L.; Almond, R. *Evidence-Centered Assessment Design*.
- van Merriënboer, J.; Kirschner, P.; Frèrejean, J. *Ten Steps to Complex Learning*.
- Merrill, M. D. *First Principles of Instruction*.
- Chi, M.; Wylie, R. *The ICAP Framework*.
- Freeman et al. *Active Learning Increases Student Performance in STEM*.
- Roediger, H.; Karpicke, J. *Test-Enhanced Learning*.
- Karpicke, J.; Blunt, J. *Retrieval Practice Produces More Learning*.
- Dunlosky et al. *Improving Students’ Learning With Effective Learning Techniques*.
- Bloom, B. *Learning for Mastery*.
- Black, P.; Wiliam, D. *Assessment and Classroom Learning*.
- Hattie, J.; Timperley, H. *The Power of Feedback*.
- Sweller, J. *Cognitive Load During Problem Solving*.
- Mayer, R. *Multimedia Learning*.
- CAST. *Universal Design for Learning Guidelines 3.0*.
- W3C. *Web Content Accessibility Guidelines 2.2*.
- Baldwin, T.; Ford, J. *Transfer of Training*.
- Brinkerhoff, R. *Success Case Method*.
- ISPI. *Human Performance Technology*.
- Quality Matters. *Course Design Rubrics*.
- UNESCO. *Guidance for Generative AI in Education and Research*.

---

## 37. Changelog

### v2.0 — 2026-08-01

- substituído o guia técnico incorreto por um guia metodológico de construção de cursos;
- incorporados diagnóstico de desempenho, Backward Design, alinhamento, ECD e 4C/ID;
- incorporados ciência da aprendizagem, avaliação, feedback, multimídia, UDL e transferência;
- criado Design System de curso com bibliotecas, matriz operacional, gates e contratos;
- criado prompt para produção de cursos completos;
- definido que o guia deve ser aplicado ao curso Microsoft 365 de 84 horas.


---

## Revisão editorial v2.1 — 2026-08-01

- unificados os marcadores de conhecimento;
- acrescentadas as categorias POC e dependência do tenant;
- ampliado o gate de revisão editorial;
- reforçados contrato de evidência, patamar de aprovação, transições e manutenção;
- normalizados termos metodológicos em português quando não havia perda de precisão.
