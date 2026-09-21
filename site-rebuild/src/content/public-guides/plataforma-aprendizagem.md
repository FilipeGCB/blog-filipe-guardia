---
origin: chatgpt
origem: chatgpt
date: 2026-07-30
data: 2026-07-30
type: master_guide
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
tags: [copilot, aprendizagem-interativa, learning-design, plataforma, ia-tutora, mastery-learning, retrieval-practice, udl, xapi, lti, caliper]
---

# Guia Mestre para Construção de Plataformas de Aprendizagem Interativa

## 1. Finalidade

Este documento orienta o Copilot a transformar um curso, formação, método, conjunto de documentos ou programa de capacitação em uma plataforma digital de aprendizagem interativa, aplicável e mensurável.

A plataforma não deve ser tratada como um repositório de textos, vídeos, podcasts e quizzes. Seu objetivo é reduzir o caminho entre:

```text
conteúdo
→ compreensão
→ recuperação da memória
→ prática
→ feedback
→ aplicação em contexto real
→ produção de evidência
→ domínio
→ transferência para o trabalho ou para um projeto
```

O melhor resultado não é a plataforma com maior quantidade de telas, animações ou funcionalidades. É aquela que ajuda o participante a compreender, praticar, produzir, revisar, aplicar e demonstrar o que aprendeu.

A regra central é:

> Começar pelo que o participante deverá ser capaz de fazer e pela evidência que demonstrará essa capacidade; somente depois definir conteúdos, atividades, interface, IA, dados e tecnologia.

---

## 2. Natureza metodológica e status das evidências

### 2.1 O que é consolidado e o que é síntese própria

“Plataforma de Aprendizagem Interativa” não é o nome de um único método científico ou de um livro equivalente a *Storytelling with Data*.

Este guia é uma **síntese de engenharia educacional e produto digital**. Ele combina fundamentos maduros, testados e documentados para construir uma experiência tecnológica coerente.

A síntese de produto proposta neste documento é:

```text
Backward Design
+ aprendizagem ativa e ICAP
+ prática de recuperação
+ espaçamento e intercalação
+ domínio progressivo
+ avaliação formativa e feedback
+ aprendizagem multimídia
+ carga cognitiva
+ Universal Design for Learning
+ acessibilidade web
+ aprendizagem baseada em aplicação e artefatos
+ telemetria e padrões de interoperabilidade
+ IA como tutora, revisora e facilitadora
```

Nenhuma dessas bases, isoladamente, define toda a plataforma. A qualidade vem da integração disciplinada entre elas.

### 2.2 Referências centrais

#### Backward Design e Understanding by Design

Wiggins e McTighe propõem começar pelos resultados desejados, definir evidências aceitáveis e somente então planejar experiências e instrução.

Aplicação no produto:

```text
capacidade esperada
→ evidência de domínio
→ avaliação
→ prática
→ conteúdo
→ interface
```

Referências:

- [Understanding by Design — ASCD](https://www.ascd.org/books/understanding-by-design-expanded-2nd-edition?variant=103055)
- [Backward Design — MIT Teaching + Learning Lab](https://tll.mit.edu/teaching-resources/course-design/backward-design/)

#### ICAP e aprendizagem ativa

O framework ICAP diferencia engajamento passivo, ativo, construtivo e interativo. A hipótese central é que atividades que exigem construção e interação cognitiva tendem a produzir aprendizagem mais profunda do que simples exposição.

Aplicação no produto:

- assistir e ler podem existir, mas não bastam;
- o participante deve recuperar, explicar, comparar, decidir, construir e aplicar;
- interatividade não é clicar: é produzir atividade cognitiva observável.

Referências:

- [The ICAP Framework: Linking Cognitive Engagement to Active Learning Outcomes](https://doi.org/10.1080/00461520.2014.965823)
- [Active learning increases student performance in science, engineering, and mathematics](https://doi.org/10.1073/pnas.1319030111)

#### Prática de recuperação

Recuperar conhecimento sem consultar imediatamente a resposta fortalece retenção e aprendizagem mais do que apenas reler o material.

Aplicação no produto:

- perguntas antes de rever;
- explicações de memória;
- reconstrução de mapas;
- desafios cumulativos;
- revisões posteriores;
- recuperação em contextos diferentes.

Referências:

- [Test-enhanced learning: taking memory tests improves long-term retention](https://pubmed.ncbi.nlm.nih.gov/16507066/)
- [Retrieval practice produces more learning than elaborative studying with concept mapping](https://pubmed.ncbi.nlm.nih.gov/21252317/)

#### Espaçamento, intercalação e técnicas eficazes

A revisão de Dunlosky e colaboradores classifica técnicas de aprendizagem e destaca prática distribuída e testes práticos entre as estratégias de alta utilidade.

Aplicação no produto:

- não concentrar toda a prática no mesmo momento;
- retornar a conceitos importantes;
- misturar problemas relacionados;
- manter revisões programadas;
- distinguir sensação de familiaridade de domínio real.

Referência:

- [Improving Students’ Learning With Effective Learning Techniques](https://www.psychologicalscience.org/journals/pspi/1529100612453266/)

#### Mastery Learning

Bloom propôs progressão por domínio com avaliação formativa, feedback e correção antes do avanço.

Aplicação no produto:

- avançar por evidência, não somente por consumo;
- permitir tentativas;
- oferecer correção diferenciada;
- reavaliar com variação;
- não transformar uma falha inicial em reprovação definitiva.

Referência:

- [Learning for Mastery — Benjamin S. Bloom](https://files.eric.ed.gov/fulltext/ED053419.pdf)

#### Avaliação formativa e feedback

Black e Wiliam documentaram a importância da avaliação formativa. Hattie e Timperley organizaram o feedback em torno do objetivo, do progresso e do próximo passo.

Aplicação no produto:

```text
onde devo chegar?
→ onde estou?
→ qual é a lacuna?
→ o que faço agora?
```

Referências:

- [Assessment and Classroom Learning](https://doi.org/10.1080/0969595980050102)
- [The Power of Feedback](https://doi.org/10.3102/003465430298487)

#### Aprendizagem multimídia e carga cognitiva

Mayer apresenta princípios baseados em evidências para combinar palavras e imagens. Sweller mostra que a memória de trabalho é limitada e que certas formas de resolução ou apresentação podem consumir capacidade sem produzir aprendizagem.

Aplicação no produto:

- remover decoração irrelevante;
- segmentar;
- sinalizar;
- aproximar explicação e representação;
- usar exemplos resolvidos;
- reduzir apoio progressivamente;
- não colocar texto, áudio, animação e gráfico concorrendo pela mesma atenção.

Referências:

- [Multimedia Learning — Richard E. Mayer](https://www.cambridge.org/highereducation/books/multimedia-learning/FB7E79A165D24D47CEACEB4D2C426ECD)
- [Cognitive Load During Problem Solving: Effects on Learning](https://doi.org/10.1207/s15516709cog1202_4)

#### Universal Design for Learning

O UDL orienta o desenho de objetivos, avaliações, métodos e materiais considerando a variabilidade dos participantes, com múltiplas formas de engajamento, representação e ação ou expressão.

Aplicação no produto:

- oferecer alternativas sem reduzir o objetivo;
- eliminar barreiras previsíveis;
- permitir diferentes formas legítimas de demonstrar aprendizagem;
- apoiar autonomia e autorregulação.

Referência:

- [CAST Universal Design for Learning Guidelines 3.0](https://udlguidelines.cast.org/)

#### Acessibilidade web

WCAG 2.2 é o padrão técnico de referência para acessibilidade de conteúdo e aplicações web.

Referência:

- [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)

#### Interoperabilidade e aprendizagem analítica

LTI, xAPI e Caliper são padrões maduros para integração de ferramentas, registro de experiências e eventos de aprendizagem.

Aplicação no produto:

- usar somente quando houver necessidade real de integração;
- manter eventos com semântica estável;
- evitar telemetria improvisada;
- preservar portabilidade futura.

Referências:

- [Learning Tools Interoperability — 1EdTech](https://www.1edtech.org/standards/lti)
- [Caliper Analytics — 1EdTech](https://www.1edtech.org/standards/caliper)
- [xAPI Specification — ADL](https://github.com/adlnet/xAPI-Spec)

#### Plataformas maduras

Open edX, Moodle e outros LMSs demonstram padrões consolidados de estrutura de curso, autoria, progresso, avaliação, papéis e integração. Eles são referências de arquitetura e operação, mas não devem ser copiados automaticamente.

Referência:

- [Creating a Course in Open edX](https://docs.openedx.org/en/latest/educators/navigation/creating_course.html)

### 2.3 Limite de interpretação

As referências acima sustentam princípios e mecanismos específicos. Elas não comprovam que qualquer plataforma com quizzes, animações ou IA produzirá aprendizagem.

O resultado depende de:

- alinhamento entre objetivo, prática e avaliação;
- qualidade do conteúdo;
- conhecimento prévio;
- tempo;
- feedback;
- contexto;
- motivação;
- usabilidade;
- suporte;
- oportunidade de aplicação;
- validação com participantes reais.

---

## 3. Quando usar este guia

Use este documento quando houver intenção de construir ou refatorar:

- uma plataforma de curso;
- uma formação corporativa;
- um ambiente de estudo guiado;
- um programa de onboarding;
- uma experiência de aprendizagem baseada em projetos;
- uma trilha de desenvolvimento profissional;
- uma plataforma que ensina e conduz uma transformação real;
- um portal de capacitação com simuladores;
- um sistema de prática e certificação interna;
- uma experiência interativa baseada em capítulos, podcasts ou documentos;
- um ambiente no qual o participante produz artefatos;
- uma plataforma com IA tutora, revisora ou facilitadora;
- uma solução que acompanha domínio, retenção e aplicação.

Exemplos:

- transformar uma formação em Transformação Digital e IA em uma plataforma aplicável;
- converter capítulos escritos em experiências com prática e feedback;
- criar um ambiente que conduza o MAP360;
- criar exercícios que gerem documentos de diagnóstico;
- construir simuladores ligados aos conteúdos;
- gerar revisões espaçadas;
- produzir portfólio de evidências;
- acompanhar a evolução de competências;
- integrar aprendizagem e execução de um projeto real.

---

## 4. Quando não usar

Não use este guia como processo principal para:

- um site puramente institucional;
- uma landing page de marketing;
- uma biblioteca de documentos sem objetivo de aprendizagem;
- um dashboard analítico;
- uma apresentação;
- um blog;
- um repositório de vídeos;
- um exame regulado de alta consequência sem requisitos formais adicionais;
- uma plataforma de vigilância de empregados;
- um sistema de avaliação psicológica;
- um substituto automático de professor, tutor, especialista ou avaliador;
- uma aplicação que apenas adiciona pontos, badges e ranking sobre conteúdo passivo.

Quando a necessidade for somente publicar conteúdo bem organizado, uma arquitetura editorial simples pode ser suficiente.

---

## 5. Premissa obrigatória

Ao receber materiais existentes, o Copilot deve assumir inicialmente que:

1. o conteúdo pode conter conhecimento válido que deve ser preservado;
2. a estrutura atual não é necessariamente a melhor estrutura de aprendizagem;
3. consumir conteúdo não equivale a aprender;
4. responder um quiz imediatamente após a leitura não comprova retenção;
5. clicar ou navegar não equivale a interatividade cognitiva;
6. gamificação não equivale a motivação;
7. IA não equivale a tutoria eficaz;
8. progresso visual não equivale a domínio;
9. mais recursos não significam melhor aprendizagem;
10. a plataforma deve ser proporcional ao problema.

Se os materiais puderem ser inspecionados, o Copilot não deve exigir que o usuário repita informações disponíveis nos arquivos.

---

## 6. Objetivo da plataforma

A plataforma deve melhorar um ou mais dos seguintes resultados:

- compreensão;
- retenção;
- recuperação;
- aplicação;
- transferência;
- qualidade de execução;
- capacidade de decisão;
- produção de artefatos;
- prática deliberada;
- correção de erros;
- autonomia;
- reflexão;
- colaboração;
- domínio de competências;
- rastreabilidade da aprendizagem;
- reutilização do conhecimento produzido.

### 6.1 North Star recomendada

A métrica principal deve estar ligada à capacidade demonstrada, e não à audiência.

Exemplos:

- percentual de participantes que demonstram a competência-alvo;
- percentual de módulos que geram um artefato utilizável;
- percentual de participantes que aplicam a capacidade em contexto real;
- tempo até primeira evidência válida;
- retenção medida após intervalo;
- qualidade do artefato antes e depois do feedback;
- percentual de ações reais concluídas após a aprendizagem.

Evitar como North Star:

- tempo de tela;
- número de cliques;
- quantidade de páginas;
- vídeos assistidos;
- sequência diária;
- pontos acumulados;
- acessos sem evidência de aprendizagem.

---

## 7. Resultado esperado

Ao final do processo, o Copilot deverá produzir, conforme o escopo:

- visão do produto;
- arquitetura de aprendizagem;
- mapa de competências;
- objetivos observáveis;
- evidências de domínio;
- estrutura de programa, trilhas, módulos e unidades;
- atividades de aprendizagem;
- avaliações;
- rubricas;
- sistema de feedback;
- lógica de domínio e progressão;
- estratégia de recuperação e revisão;
- especificação da IA tutora;
- arquitetura de conteúdo;
- modelo de dados;
- eventos de telemetria;
- interface;
- código;
- testes;
- documentação;
- plano de implantação;
- definição de concluído;
- registro de decisões.

Quando houver material suficiente, o Copilot deve implementar o protótipo ou aplicação solicitada. Não deve parar somente no diagnóstico ou no wireframe.

---

## 8. Informações mínimas de entrada

Trabalhe prioritariamente com os materiais fornecidos.

### 8.1 Entradas essenciais

- tema ou formação;
- público;
- capacidade que deverá ser desenvolvida;
- materiais existentes;
- contexto de uso;
- mecanismo de entrega desejado;
- restrições técnicas, de segurança ou identidade;
- ambiente de publicação, quando conhecido.

### 8.2 Entradas desejáveis

- tempo disponível;
- conhecimento prévio;
- capítulos;
- exercícios existentes;
- exemplos;
- artefatos reais;
- competências;
- critérios de avaliação;
- fontes;
- identidade visual;
- integrações;
- requisitos de acessibilidade;
- dados permitidos;
- papéis;
- requisitos de certificação.

### 8.3 Informações que podem ser inferidas

Quando o material permitir:

- estrutura temática;
- sequência preliminar;
- conceitos centrais;
- exemplos;
- dependências;
- nível de complexidade;
- formatos de atividade;
- oportunidades de prática;
- artefatos possíveis.

### 8.4 Informações que não podem ser inventadas

- certificações oficiais;
- exigências regulatórias;
- políticas corporativas;
- resultados de aprendizagem;
- taxas de sucesso;
- nível real do participante;
- fontes inexistentes;
- dados pessoais;
- notas;
- conclusões sobre desempenho;
- permissões;
- integrações;
- critérios formais de aprovação.

Na ausência de informação não essencial, usar premissa conservadora, registrá-la e prosseguir.

---

## 9. Princípios obrigatórios

1. Começar pela capacidade, não pela tela.
2. Definir evidência antes da atividade.
3. Separar exposição, prática, avaliação e aplicação.
4. Não confundir interatividade física com atividade cognitiva.
5. Fazer o participante recuperar, explicar, decidir, construir e aplicar.
6. Usar conteúdo passivo somente quando tiver função clara.
7. Evitar sobrecarga cognitiva.
8. Oferecer exemplos resolvidos antes de exigir desempenho complexo de iniciantes.
9. Reduzir apoio progressivamente.
10. Distribuir prática ao longo do tempo.
11. Dar feedback que indique objetivo, estado, lacuna e próximo passo.
12. Permitir correção e nova tentativa.
13. Avançar por evidência quando houver gate de domínio.
14. Medir aprendizagem, não somente consumo.
15. Integrar aprendizagem e produção de artefatos quando o objetivo for profissional.
16. Não usar IA para substituir o esforço cognitivo necessário.
17. Não permitir que a IA invente conteúdo, nota ou evidência.
18. Tornar o participante autor do próprio trabalho.
19. Garantir acessibilidade desde a arquitetura.
20. Minimizar dados e telemetria.
21. Separar conteúdo, regras, estado e apresentação.
22. Manter rastreabilidade entre fonte, objetivo, atividade, avaliação e evidência.
23. Implementar a menor plataforma capaz de validar o ciclo.
24. Testar com participantes reais.
25. Registrar aprendizados e evoluir o método.

---

## 10. Escopo e fronteiras

### 10.1 O que este documento governa

- definição da experiência;
- arquitetura pedagógica;
- progressão;
- atividades;
- avaliações;
- feedback;
- domínio;
- recuperação;
- aplicação;
- artefatos;
- IA tutora;
- UX de aprendizagem;
- acessibilidade;
- conteúdo multimídia;
- telemetria;
- especificações;
- arquitetura técnica de referência;
- testes;
- publicação;
- evolução.

### 10.2 O que não substitui

- especialistas no domínio;
- validação pedagógica;
- avaliação regulada;
- segurança corporativa;
- arquitetura de identidade;
- política de privacidade;
- jurídico;
- infraestrutura;
- gestão formal de competências;
- curadoria humana;
- autorização para usar dados;
- processos oficiais de RH;
- LMS corporativo existente.

### 10.3 Não objetivos

- maximizar tempo de uso;
- criar dependência;
- produzir entretenimento sem aprendizagem;
- monitorar pessoas de forma invasiva;
- automatizar avaliação de alta consequência;
- transformar toda formação em jogo;
- criar arquitetura complexa antes de validar o valor;
- gerar grande volume de conteúdo sem validação.

---

## 11. Classificação inicial da plataforma

Antes de projetar, classifique o produto principal.

### 11.1 Curso guiado

O participante percorre uma sequência planejada.

Adequado para:

- fundamentos;
- formação estruturada;
- onboarding;
- dependências claras.

### 11.2 Ambiente de prática

O foco é executar exercícios, simulações, problemas e casos.

Adequado para:

- dados;
- programação;
- tomada de decisão;
- operação;
- ferramentas;
- habilidades procedimentais.

### 11.3 Plataforma baseada em projeto

O participante aprende enquanto constrói um resultado real.

Adequado para:

- transformação digital;
- MAP360;
- implantação;
- diagnóstico;
- design de produto;
- pesquisa aplicada.

### 11.4 Biblioteca adaptativa

O participante acessa conteúdos e revisões conforme lacunas.

Adequado para:

- estudo contínuo;
- manutenção de conhecimento;
- preparação;
- repertório amplo.

### 11.5 Plataforma colaborativa

A aprendizagem inclui discussão, revisão por pares e produção conjunta.

Adequado para:

- comunidades de prática;
- formação de times;
- calibração;
- desenvolvimento de critérios.

### 11.6 Plataforma híbrida

Combina modos anteriores.

Regra:

> Escolha um modo principal. Não tente implementar todos com igual profundidade no primeiro piloto.

---

## 12. Arquitetura de aprendizagem

A plataforma deve estruturar a aprendizagem em níveis claros.

```text
Programa
→ trilha
→ módulo
→ unidade
→ atividade
→ tentativa
→ feedback
→ evidência
→ domínio
→ aplicação
```

### 12.1 Programa

Define:

- transformação prometida;
- público;
- competências;
- sequência macro;
- critérios de conclusão;
- produto ou portfólio final.

### 12.2 Trilha

Agrupa módulos por:

- papel;
- objetivo;
- nível;
- domínio;
- projeto;
- contexto.

### 12.3 Módulo

Desenvolve uma capacidade relevante e termina com evidência.

### 12.4 Unidade

É o menor ciclo coerente de aprendizagem.

### 12.5 Atividade

É uma ação observável do participante.

### 12.6 Tentativa

Registra execução, resposta, tempo, apoio utilizado e resultado.

### 12.7 Evidência

É o material que demonstra desempenho:

- resposta;
- decisão;
- explicação;
- arquivo;
- simulação;
- código;
- mapa;
- apresentação;
- diagnóstico;
- ação observada.

### 12.8 Domínio

É a conclusão sustentada por evidência de que o participante atingiu o critério definido.

---

## 13. Ciclo padrão de uma unidade

Cada unidade deve combinar somente os passos necessários.

### 13.1 Orientar

Mostrar:

- onde o participante está;
- o que aprenderá;
- por que importa;
- o que deverá ser capaz de fazer;
- qual evidência será produzida;
- quanto tempo é esperado;
- quais pré-requisitos existem.

### 13.2 Ativar conhecimento prévio

Usar:

- pergunta;
- cenário;
- previsão;
- mini diagnóstico;
- comparação;
- recuperação de unidade anterior.

Não usar como avaliação punitiva.

### 13.3 Explicar ou demonstrar

Apresentar:

- conceito;
- modelo;
- exemplo;
- processo;
- decisão;
- erro comum.

Usar segmentação e sinalização.

### 13.4 Modelar

Mostrar um exemplo resolvido ou uma execução comentada:

```text
situação
→ raciocínio observável
→ decisão
→ resultado
→ verificação
```

### 13.5 Prática guiada

O participante executa com:

- pistas;
- etapas;
- checklist;
- feedback;
- restrição de complexidade.

### 13.6 Recuperar

O participante responde ou explica sem consultar imediatamente.

### 13.7 Aplicar

O participante resolve um caso novo, de preferência próximo da realidade.

### 13.8 Receber feedback

A plataforma identifica:

- acerto;
- erro;
- tipo de lacuna;
- critério afetado;
- próxima ação.

### 13.9 Corrigir

Permitir:

- rever ponto específico;
- consultar exemplo;
- tentar variação;
- refazer artefato;
- justificar mudança.

### 13.10 Refletir

Perguntas possíveis:

- o que mudou no meu entendimento?
- qual erro eu cometeria antes?
- como aplicarei?
- qual premissa ainda tenho?
- o que preciso revisar?

### 13.11 Registrar evidência

Salvar o resultado e sua relação com o objetivo.

### 13.12 Definir próximo passo

A plataforma deve indicar:

- avançar;
- revisar;
- praticar;
- aplicar;
- solicitar revisão;
- aguardar validação;
- retornar em data futura.

---

## 14. Taxonomia das atividades

Classifique toda atividade pelo comportamento cognitivo esperado.

### 14.1 Passiva

Exemplos:

- ler;
- assistir;
- ouvir.

Pode ser necessária, mas não deve dominar a experiência.

### 14.2 Ativa

Exemplos:

- marcar;
- ordenar;
- manipular;
- destacar;
- selecionar;
- completar.

A ação física não garante construção de entendimento.

### 14.3 Construtiva

Exemplos:

- explicar;
- resumir de memória;
- formular hipótese;
- construir mapa;
- gerar exemplo;
- comparar;
- justificar;
- criar artefato.

### 14.4 Interativa

Exemplos:

- debater com argumento;
- revisar trabalho de outra pessoa;
- construir explicação conjunta;
- negociar critério;
- resolver em colaboração;
- dialogar com tutor que reage ao raciocínio.

### 14.5 Regra de composição

Uma unidade completa deve incluir pelo menos uma atividade construtiva ou interativa quando a capacidade exigir compreensão ou aplicação.

Não classificar como “interativa” uma tela apenas porque possui botões, hover, drag, animação ou navegação.

---

## 15. Objetivos de aprendizagem

Cada objetivo deve definir um desempenho observável.

Evitar:

- conhecer;
- entender;
- aprender;
- familiarizar-se;
- ter noção.

Preferir:

- explicar;
- diferenciar;
- identificar;
- mapear;
- analisar;
- decidir;
- construir;
- diagnosticar;
- priorizar;
- executar;
- validar;
- revisar;
- defender;
- adaptar.

### 15.1 Estrutura recomendada

```text
Dado [contexto],
o participante será capaz de [desempenho observável],
utilizando [recursos permitidos],
atendendo [critérios],
para [finalidade].
```

Exemplo:

> Dado o inventário inicial de uma área, o participante será capaz de agrupar atividades em capacidades, justificar os agrupamentos e registrar incertezas, atendendo aos critérios de coerência, não duplicidade e rastreabilidade.

### 15.2 Mapa de alinhamento

Todo objetivo deve apontar para:

```text
objetivo
→ conteúdo necessário
→ atividade
→ avaliação
→ critério
→ evidência
→ aplicação
```

Se um conteúdo não se conecta a objetivo algum, revisar sua necessidade.

Se um objetivo não possui evidência, ele ainda não está operacionalizado.

---

## 16. Competências e pré-requisitos

### 16.1 CompetencySpec

```yaml
competency_id:
nome:
descricao:
nivel:
desempenhos_observaveis:
pre_requisitos:
criterios:
evidencias_aceitas:
contextos:
erros_comuns:
responsavel:
versao:
status:
```

### 16.2 Grafo de pré-requisitos

Não depender apenas da ordem dos capítulos.

Registrar:

- conceitos necessários;
- habilidades necessárias;
- ferramentas;
- permissões;
- artefatos anteriores;
- dependências opcionais;
- caminhos alternativos.

### 16.3 Níveis

Exemplo:

1. reconhecer;
2. explicar;
3. executar com apoio;
4. executar de forma independente;
5. adaptar;
6. avaliar;
7. ensinar ou criar padrão.

Os níveis devem ser adaptados à natureza da competência. Não apresentar escala genérica como avaliação científica.

---

## 17. Diagnóstico inicial e personalização

### 17.1 Finalidade

O diagnóstico deve identificar:

- conhecimentos prévios;
- experiências;
- lacunas;
- objetivos;
- restrições;
- familiaridade;
- artefatos já existentes.

### 17.2 O diagnóstico não deve

- rotular capacidade geral;
- produzir perfil psicológico;
- excluir sem revisão;
- usar poucas questões para conclusões amplas;
- personalizar com base em estereótipos;
- armazenar dados desnecessários.

### 17.3 Personalização baseada em evidência

Adaptar:

- quantidade de exemplos;
- nível de suporte;
- sequência de revisão;
- dificuldade;
- pistas;
- atividades corretivas;
- opção de pular conteúdo mediante evidência.

Não adaptar apenas pelo tempo de clique ou por uma preferência declarada como “sou visual”.

### 17.4 Teste de dispensa

Permitir demonstrar domínio prévio por:

- avaliação;
- artefato;
- simulação;
- explicação;
- revisão humana.

---

## 18. Conteúdo e aprendizagem multimídia

### 18.1 Conteúdo mínimo necessário

Cada bloco deve responder:

- qual pergunta resolve?
- qual capacidade apoia?
- qual erro evita?
- qual atividade prepara?
- qual evidência sustenta?

### 18.2 Princípios de apresentação

Aplicar, quando pertinente:

- coerência: remover conteúdo irrelevante;
- sinalização: indicar estrutura e pontos essenciais;
- contiguidade espacial: aproximar texto e visual relacionados;
- contiguidade temporal: sincronizar explicação e demonstração;
- segmentação: dividir conteúdo complexo;
- pré-treinamento: apresentar componentes antes do sistema completo;
- modalidade: usar narração e visual quando isso reduzir sobrecarga;
- personalização: linguagem humana e direta;
- controle do participante: permitir pausar e revisar.

### 18.3 Áudio e vídeo

Todo recurso audiovisual deve possuir:

- propósito;
- duração apropriada;
- transcrição;
- legenda;
- navegação;
- resumo;
- relação com atividade;
- alternativa textual;
- controle de velocidade quando aplicável.

Não usar vídeo apenas para substituir texto.

### 18.4 Podcasts

Podcasts podem:

- reforçar;
- contextualizar;
- apresentar caso;
- revisar;
- provocar reflexão.

Não devem ser a única forma de acesso ao conteúdo essencial.

### 18.5 Animações

Usar para explicar:

- mudança;
- sequência;
- fluxo;
- relação;
- transformação;
- causalidade;
- comparação temporal.

Evitar:

- movimento decorativo;
- entrada diferente para cada elemento;
- rolagem cansativa;
- animação que atrasa a prática;
- dependência de movimento para transmitir informação.

Respeitar `prefers-reduced-motion`.

---

## 19. Exemplos, prática guiada e retirada de apoio

### 19.1 Exemplo resolvido

Um bom exemplo deve mostrar:

- problema;
- objetivo;
- dados;
- decisão;
- passos;
- justificativa;
- verificação;
- erros evitados.

### 19.2 Comparação de exemplos

Usar pares:

- bom e ruim;
- válido e inválido;
- completo e superficial;
- decisão sustentada e opinião;
- evidência e inferência.

### 19.3 Fading

Reduzir apoio progressivamente:

```text
exemplo completo
→ exemplo parcialmente completado
→ execução com checklist
→ execução independente
→ aplicação em contexto novo
```

### 19.4 Variação

Não repetir o mesmo exercício trocando apenas nomes.

Variar:

- contexto;
- dados;
- restrições;
- ambiguidades;
- exceções;
- objetivo;
- formato de saída.

---

## 20. Sistema de avaliação

### 20.1 Avaliação diagnóstica

Antes ou no início.

Função:

- identificar ponto de partida;
- recomendar caminho;
- permitir dispensa;
- adaptar suporte.

### 20.2 Avaliação formativa

Durante o processo.

Função:

- revelar lacunas;
- orientar correção;
- melhorar execução;
- alimentar próxima atividade.

### 20.3 Prática de recuperação

Perguntas de baixa consequência usadas para aprendizagem.

### 20.4 Avaliação de desempenho

O participante executa uma tarefa autêntica:

- diagnóstico;
- simulação;
- análise;
- documento;
- código;
- decisão;
- apresentação;
- intervenção.

### 20.5 Avaliação somativa

Consolida evidências ao final de um ciclo.

Não deve introduzir uma capacidade nunca praticada.

### 20.6 Autoavaliação

Deve usar critérios explícitos.

Evitar perguntar apenas “você entendeu?”.

### 20.7 Avaliação por pares

Usar quando:

- critérios podem ser ensinados;
- comparação melhora julgamento;
- exposição não gera risco;
- moderação existe;
- anonimização é adequada.

### 20.8 Rubricas

Toda rubrica deve definir:

- critério;
- evidência;
- níveis;
- exemplos;
- falhas críticas;
- peso, quando necessário.

Evitar adjetivos vagos como “excelente”, “bom” e “ruim” sem comportamento observável.

### 20.9 AssessmentSpec

```yaml
assessment_id:
objective_ids:
tipo:
contexto:
instrucao:
recursos_permitidos:
tempo_estimado:
tentativas:
criterios:
rubrica:
feedback:
evidencia_gerada:
regra_de_dominio:
revisao_humana:
acessibilidade:
versao:
status:
```

---

## 21. Domínio e progressão

### 21.1 Regra geral

Conteúdo consumido pode liberar navegação, mas não deve ser chamado de domínio.

### 21.2 Gate de domínio

Um gate pode exigir:

- critérios mínimos;
- ausência de falha crítica;
- tentativa independente;
- aplicação em caso novo;
- retenção após intervalo;
- revisão humana.

### 21.3 Nota de corte

Não usar 70%, 80% ou 90% automaticamente.

Definir a nota ou regra com base em:

- risco;
- natureza da capacidade;
- confiabilidade da avaliação;
- consequência;
- possibilidade de correção;
- falhas inaceitáveis.

### 21.4 Correção

Quando o participante não demonstra domínio:

1. identificar a lacuna;
2. direcionar para conteúdo ou exemplo específico;
3. oferecer prática corretiva;
4. gerar nova tentativa com variação;
5. registrar evolução;
6. escalar para humano quando necessário.

### 21.5 Progressão adaptativa

Estados possíveis:

- não iniciado;
- em exploração;
- em prática;
- precisa de correção;
- demonstrado com apoio;
- demonstrado independentemente;
- em revisão futura;
- validado;
- expirado, quando a competência exigir recertificação.

---

## 22. Recuperação, espaçamento e revisão

### 22.1 Fila de revisão

A plataforma deve ser capaz de apresentar:

- conceitos importantes;
- erros anteriores;
- decisões;
- procedimentos;
- relações;
- artefatos;
- perguntas cumulativas.

### 22.2 Agenda inicial

Uma heurística de produto pode considerar revisão:

- na mesma unidade;
- em 1 a 3 dias;
- em aproximadamente uma semana;
- em 2 a 4 semanas;
- posteriormente conforme desempenho.

Esses intervalos não são uma lei universal. Devem ser adaptados e testados.

### 22.3 Critérios para agendamento

Considerar:

- acerto;
- confiança;
- tempo;
- pistas utilizadas;
- erro repetido;
- importância;
- risco;
- intervalo desde a última recuperação.

### 22.4 Intercalação

Misturar problemas que exijam discriminar métodos, não apenas repetir o mesmo procedimento.

### 22.5 ReviewItemSpec

```yaml
review_item_id:
objective_id:
tipo:
pergunta:
resposta_esperada:
distratores:
erro_alvo:
dificuldade:
intervalo:
ultima_tentativa:
proxima_revisao:
historico:
status:
```

---

## 23. Feedback

### 23.1 Estrutura obrigatória

O feedback deve responder:

1. Qual era o objetivo?
2. O que a evidência mostra?
3. Qual critério foi atendido ou não?
4. Qual é a lacuna?
5. Qual é o próximo passo?
6. Como verificar a correção?

### 23.2 Níveis de feedback

#### Sobre a tarefa

- precisão;
- completude;
- resultado;
- erro específico.

#### Sobre o processo

- estratégia;
- sequência;
- método;
- verificação.

#### Sobre autorregulação

- planejamento;
- monitoramento;
- escolha de ajuda;
- revisão.

Evitar feedback centrado em elogio genérico à pessoa.

### 23.3 Pistas graduadas

```text
pergunta de orientação
→ pista conceitual
→ pista de processo
→ exemplo parcial
→ exemplo completo
```

Registrar o nível de ajuda usado.

### 23.4 Feedback imediato ou adiado

Usar feedback imediato para:

- erro de procedimento;
- segurança;
- prática inicial;
- prevenção de consolidação de erro.

Considerar atraso para:

- reflexão;
- produção complexa;
- comparação;
- revisão por pares;
- tarefas em que persistência produtiva é desejada.

### 23.5 FeedbackSpec

```yaml
feedback_id:
assessment_id:
criterio:
condicao:
mensagem:
evidencia_citada:
tipo_de_lacuna:
nivel_de_pista:
acao_recomendada:
recurso:
nova_tentativa:
escalonamento:
```

---

## 24. Aprendizagem por projeto e produção de artefatos

### 24.1 Princípio

Quando a capacidade é profissional, o participante deve produzir algo que se aproxime do trabalho real.

Exemplos:

- mapa;
- diagnóstico;
- decisão;
- relatório;
- backlog;
- arquitetura;
- entrevista;
- plano;
- protótipo;
- análise;
- procedimento;
- apresentação.

### 24.2 Ciclo aplicado

```text
aprender método
→ observar exemplo
→ aplicar em caso didático
→ aplicar em contexto próprio
→ receber feedback
→ corrigir
→ validar
→ registrar artefato
→ reutilizar no próximo estágio
```

### 24.3 Integração com transformação real

Uma plataforma de transformação pode conduzir:

```text
formação
→ atividade guiada
→ artefato do participante
→ revisão
→ validação humana
→ uso no projeto
→ memória organizacional
```

### 24.4 Regra de governança

O artefato produzido por participante ou IA não se torna registro oficial automaticamente.

Estados:

- rascunho;
- em desenvolvimento;
- submetido;
- revisado;
- a validar;
- validado;
- aplicado;
- substituído;
- arquivado.

### 24.5 ArtifactSpec

```yaml
artifact_id:
tipo:
titulo:
objective_ids:
project_id:
autor:
template_version:
fonte:
dados_permitidos:
conteudo:
criterios:
feedback:
revisores:
status:
validacao:
versao:
relacionamentos:
destino:
```

---

## 25. IA tutora e copiloto de aprendizagem

### 25.1 Papel

A IA pode atuar como:

- tutora socrática;
- explicadora;
- geradora de exemplos;
- simuladora;
- revisora;
- avaliadora formativa;
- parceira de prática;
- facilitadora de reflexão;
- adaptadora de suporte;
- organizadora de evidências.

### 25.2 O que a IA não deve fazer

- realizar automaticamente toda tarefa que o participante precisa aprender;
- fornecer resposta final antes de tentativa quando isso anular a aprendizagem;
- inventar nota;
- criar evidência inexistente;
- afirmar domínio sem critérios;
- substituir avaliação humana de alta consequência;
- criar perfil psicológico;
- manipular motivação;
- armazenar conversa integral sem necessidade;
- transformar incerteza em conclusão;
- ocultar que é IA.

### 25.3 Modos de interação

#### Explicar

Apresentar conceito com exemplo e verificar entendimento.

#### Perguntar

Conduzir por perguntas sem entregar imediatamente.

#### Praticar

Gerar caso, observar resposta e dar feedback.

#### Simular

Representar cliente, gestor, sistema ou cenário.

#### Revisar

Avaliar artefato contra rubrica.

#### Desafiar

Apresentar contraexemplo, risco ou hipótese alternativa.

#### Refletir

Ajudar o participante a explicitar aprendizados e decisões.

### 25.4 Política de tentativa antes da resposta

Quando a aprendizagem exigir esforço cognitivo:

1. pedir uma tentativa;
2. identificar raciocínio;
3. oferecer pista;
4. permitir revisão;
5. mostrar modelo somente quando apropriado.

Permitir resposta direta quando:

- houver risco;
- o participante solicitar referência;
- a tarefa for consulta, não aprendizagem;
- o objetivo for executar, não memorizar;
- a informação não precisar ser recuperada.

### 25.5 Grounding

A IA deve:

- utilizar as fontes autorizadas;
- citar a fonte interna quando aplicável;
- distinguir conteúdo da formação de conhecimento geral;
- declarar lacuna;
- não criar regra;
- preservar versão.

### 25.6 Avaliação por IA

Usar como avaliação formativa, salvo processo formal aprovado.

A saída deve conter:

- critérios;
- evidências;
- nível de confiança;
- limitações;
- pontos que exigem humano;
- possibilidade de contestação.

### 25.7 TutorPolicySpec

```yaml
tutor_id:
papel:
fontes_permitidas:
objetivos:
modos:
quando_perguntar:
quando_explicar:
quando_dar_pista:
quando_mostrar_resposta:
tarefas_proibidas:
politica_de_avaliacao:
politica_de_dados:
escalonamento_humano:
registro:
versao:
```

---

## 26. Motivação e gamificação

### 26.1 Motivação legítima

Priorizar:

- propósito;
- progresso real;
- autonomia;
- competência;
- relevância;
- escolha;
- pertencimento;
- feedback;
- produção visível;
- aplicação.

### 26.2 Gamificação

Pontos, badges, níveis e streaks podem ser usados somente quando:

- apoiam comportamento de aprendizagem;
- não substituem a capacidade;
- não incentivam velocidade indevida;
- não punem pausas legítimas;
- não criam competição inadequada;
- não expõem desempenho.

### 26.3 Evitar

- confete após qualquer clique;
- ranking público;
- contagem regressiva sem necessidade;
- sequência diária que incentiva uso compulsivo;
- pontos por assistir;
- medalhas sem critério;
- progressão falsa;
- punição por acessibilidade ou ritmo.

---

## 27. UX da plataforma

### 27.1 Página inicial do participante

Deve responder:

- onde estou?
- o que já demonstrei?
- o que preciso fazer agora?
- o que está pendente?
- o que preciso revisar?
- qual artefato estou construindo?
- onde obter ajuda?

### 27.2 Navegação

Deve permitir:

- continuar;
- rever;
- buscar;
- retornar;
- visualizar pré-requisitos;
- acessar glossário;
- localizar fontes;
- consultar artefatos;
- entender bloqueios.

### 27.3 Progresso

Mostrar separadamente:

- conteúdo acessado;
- atividades concluídas;
- evidências produzidas;
- competências demonstradas;
- revisões pendentes;
- validações humanas.

### 27.4 Estados

Tratar:

- carregando;
- vazio;
- sem conteúdo;
- tentativa salva;
- offline;
- erro;
- sincronização pendente;
- feedback indisponível;
- revisão humana pendente;
- dado desatualizado;
- acesso negado;
- atividade expirada.

### 27.5 Mobile

- preservar objetivo e ação;
- evitar atividades que dependam de hover;
- aumentar áreas de toque;
- permitir retomada;
- reduzir densidade;
- adaptar artefatos complexos;
- oferecer alternativa de desktop quando necessário.

### 27.6 Busca

A busca deve distinguir:

- conteúdo;
- conceito;
- atividade;
- artefato;
- fonte;
- dúvida;
- competência.

### 27.7 Glossário

Cada conceito deve possuir:

- definição;
- fonte;
- exemplo;
- contraexemplo;
- relação com outros conceitos;
- módulos associados.

---

## 28. UDL e acessibilidade

### 28.1 Múltiplas formas de engajamento

Oferecer, quando compatível:

- escolha de exemplo;
- relevância;
- objetivo visível;
- apoio à persistência;
- reflexão;
- colaboração;
- controle de ritmo.

### 28.2 Múltiplas formas de representação

Oferecer:

- texto;
- visual;
- exemplo;
- áudio com transcrição;
- demonstração;
- glossário;
- linguagem clara;
- destaque de estrutura.

Não é obrigatório duplicar tudo em todos os formatos. A alternativa deve preservar o objetivo.

### 28.3 Múltiplas formas de ação e expressão

Permitir diferentes formas válidas de evidência quando o formato não for parte da competência.

### 28.4 Requisitos técnicos

A plataforma deverá:

- buscar conformidade WCAG 2.2 AA;
- funcionar por teclado;
- possuir foco visível;
- usar semântica;
- ter contraste;
- não depender apenas de cor;
- fornecer legendas e transcrições;
- possuir textos alternativos;
- permitir zoom;
- respeitar movimento reduzido;
- evitar limites de tempo desnecessários;
- tornar erros identificáveis;
- manter alvos adequados;
- usar linguagem clara.

### 28.5 Acessibilidade da avaliação

Garantir que a barreira medida seja a competência-alvo, não uma limitação irrelevante da interface.

---

## 29. Arquitetura de conteúdo

### 29.1 Conteúdo como dados

Separar:

- texto;
- objetivos;
- fontes;
- atividades;
- avaliações;
- feedback;
- configurações;
- componentes.

### 29.2 Fonte canônica

Cada conteúdo deve possuir:

- identificador;
- versão;
- autor;
- fonte;
- status;
- data;
- validade;
- relacionamentos;
- permissão.

### 29.3 Versionamento

Alterações devem registrar:

- o que mudou;
- por quê;
- impacto;
- objetivo afetado;
- avaliação afetada;
- necessidade de migração;
- data.

### 29.4 ContentSpec

```yaml
content_id:
titulo:
tipo:
objective_ids:
fonte:
autor:
versao:
status:
idioma:
duracao_estimada:
acessibilidade:
pre_requisitos:
corpo:
midias:
atividades_relacionadas:
avaliacoes_relacionadas:
```

---

## 30. Contratos de especificação

### 30.1 ProgramSpec

```yaml
program_id:
titulo:
publico:
problema:
transformacao_prometida:
competencias:
produto_final:
duracao:
modo_principal:
trilhas:
criterios_de_conclusao:
avaliacao:
dados:
acessibilidade:
responsavel:
versao:
status:
```

### 30.2 ModuleSpec

```yaml
module_id:
program_id:
titulo:
capacidade:
objetivos:
pre_requisitos:
pergunta_central:
evidencia_final:
unidades:
revisoes:
artefatos:
gate:
duracao:
fontes:
responsavel:
versao:
status:
```

### 30.3 UnitSpec

```yaml
unit_id:
module_id:
titulo:
objetivos:
orientacao:
ativacao:
conteudo:
exemplos:
pratica_guiada:
recuperacao:
aplicacao:
feedback:
reflexao:
evidencia:
proximo_passo:
duracao:
acessibilidade:
```

### 30.4 ActivitySpec

```yaml
activity_id:
unit_id:
tipo_icap:
objetivo:
instrucao:
entrada:
acao_do_participante:
saida:
apoios:
feedback:
tentativas:
tempo_estimado:
dados:
acessibilidade:
telemetria:
```

### 30.5 LearnerState

```yaml
learner_id:
program_id:
objetivos:
competencias:
atividades:
tentativas:
evidencias:
revisoes:
artefatos:
feedback:
preferencias_de_acessibilidade:
proximo_passo:
ultima_atualizacao:
```

### 30.6 ProgressSpec

```yaml
progress_id:
learner_id:
object_id:
object_type:
estado:
evidencia:
nivel_de_ajuda:
tentativas:
dominio:
proxima_revisao:
validacao:
updated_at:
```

---

## 31. Telemetria e aprendizagem analítica

### 31.1 Princípio

Coletar somente eventos necessários para:

- melhorar aprendizagem;
- orientar participante;
- detectar falha;
- validar produto;
- cumprir requisito autorizado.

### 31.2 Eventos úteis

- objetivo visualizado;
- diagnóstico realizado;
- atividade iniciada;
- tentativa enviada;
- pista solicitada;
- feedback recebido;
- resposta revisada;
- domínio demonstrado;
- revisão concluída;
- artefato criado;
- artefato submetido;
- artefato validado;
- aplicação registrada;
- erro técnico;
- abandono de fluxo.

### 31.3 Eventos que exigem cautela

- tempo de tela;
- movimentos do cursor;
- transcrição integral;
- emoções inferidas;
- vigilância contínua;
- produtividade;
- comparação individual.

### 31.4 EventSpec

```yaml
event_id:
actor:
verb:
object:
objective_id:
context:
result:
timestamp:
session:
source:
consent:
retention:
```

### 31.5 Padrões

Quando houver ecossistema educacional:

- xAPI para experiências e statements;
- Caliper para eventos e perfis de atividade;
- LTI para integração com LMS e ferramentas;
- QTI para interoperabilidade de itens, quando necessário.

Não implementar padrão apenas para parecer sofisticado.

### 31.6 Privacidade

- minimizar;
- pseudonimizar;
- controlar acesso;
- definir retenção;
- explicar finalidade;
- permitir correção;
- evitar decisões automáticas de alta consequência;
- separar analytics de vigilância.

---

## 32. Métricas de aprendizagem

### 32.1 Aquisição

- desempenho inicial versus posterior;
- critérios demonstrados;
- taxa de correção;
- nível de ajuda;
- tentativas até domínio.

### 32.2 Retenção

- recuperação após intervalo;
- estabilidade;
- erros recorrentes;
- necessidade de pistas.

### 32.3 Transferência

- aplicação em caso novo;
- aplicação no trabalho;
- qualidade do artefato real;
- decisão tomada;
- resultado observado.

### 32.4 Eficiência

- tempo até evidência;
- retrabalho;
- abandono;
- bloqueios;
- feedback pendente;
- dificuldade técnica.

### 32.5 Qualidade do produto

- clareza;
- usabilidade;
- acessibilidade;
- confiabilidade;
- erros;
- desempenho;
- satisfação contextualizada.

### 32.6 Métricas proibidas como conclusão isolada

- conclusão baseada somente em acesso;
- conclusão baseada somente em tempo;
- domínio baseado somente em conclusão de página;
- engajamento baseado somente em clique;
- aprendizagem baseada somente em satisfação.

---

## 33. Arquitetura técnica de referência

A tecnologia deve ser proporcional.

### 33.1 Protótipo autocontido

Usar HTML, CSS e JavaScript quando:

- houver uma experiência pequena;
- não houver autenticação;
- o conteúdo for local;
- o objetivo for validar;
- não houver estado complexo;
- a entrega precisar ser portátil.

### 33.2 Aplicação modular

Uma referência adequada para produto interativo:

- Vite;
- React;
- TypeScript;
- conteúdo em Markdown, JSON ou YAML;
- componentes reutilizáveis;
- estado local explícito;
- testes automatizados;
- persistência local opcional.

### 33.3 Aplicação com backend

Adicionar backend quando houver:

- múltiplos usuários;
- autenticação;
- sincronização;
- revisão humana;
- portfólio;
- analytics;
- integrações;
- permissões;
- conteúdo dinâmico.

### 33.4 Decisão tecnológica

O Copilot deve justificar:

- por que a stack é suficiente;
- quais dependências são necessárias;
- quais riscos existem;
- como será publicado;
- como será mantido;
- como migrar.

### 33.5 Separação de camadas

```text
conteúdo
→ regras pedagógicas
→ domínio e progressão
→ estado do participante
→ componentes
→ persistência
→ telemetria
→ integrações
```

### 33.6 Estrutura sugerida

```text
/src
  /app
  /components
  /content
  /learning
  /assessments
  /feedback
  /artifacts
  /analytics
  /accessibility
  /services
  /types
  /tests
/docs
/public
README.md
```

### 33.7 PWA e offline

Usar quando:

- acesso móvel é importante;
- conectividade é limitada;
- retomada offline possui valor;
- sincronização pode ser resolvida com segurança.

### 33.8 Bibliotecas

Adicionar somente com benefício claro.

Exemplos de necessidade:

- editor rico;
- visualização;
- animação;
- áudio;
- markdown;
- validação;
- estado;
- testes.

Registrar dependência, licença, tamanho e manutenção.

---

## 34. Animação e interatividade visual

### 34.1 Regra

A animação deve apoiar:

- orientação;
- continuidade;
- explicação;
- causa e efeito;
- feedback;
- foco;
- progresso.

### 34.2 Simuladores

Um simulador deve definir:

- modelo;
- variáveis;
- limites;
- premissas;
- resultado;
- feedback;
- objetivos;
- cenário;
- reset;
- acessibilidade;
- interpretação.

### 34.3 Visualizações

Usar quando ajudam a:

- comparar;
- explicar;
- explorar;
- simular;
- mapear relações;
- observar mudança.

Evitar gráficos decorativos.

### 34.4 Laboratórios

Um laboratório interativo deve conter:

- objetivo;
- contexto;
- instrução;
- ambiente;
- estado;
- desafio;
- feedback;
- verificação;
- reflexão;
- resultado salvo.

---

## 35. Segurança e integridade

### 35.1 Conteúdo e dados

Não incluir:

- credenciais;
- dados pessoais desnecessários;
- informações corporativas não autorizadas;
- respostas sensíveis;
- telemetria oculta.

### 35.2 Integridade da avaliação

Para avaliações relevantes:

- randomizar com cuidado;
- registrar versão;
- separar prática de prova;
- evitar exposição de banco;
- permitir auditoria;
- controlar acesso;
- preservar contestação.

### 35.3 IA

Registrar:

- modelo;
- versão;
- prompt;
- fontes;
- critérios;
- limitações;
- revisão humana;
- custo;
- eventos.

### 35.4 Conteúdo gerado

Todo conteúdo gerado por IA deve ser:

- marcado internamente;
- revisável;
- rastreável;
- validado antes de se tornar canônico.

---

## 36. Fluxo obrigatório de construção

O processo deve usar oito fases.

### Fase 1: inspeção dos insumos

Identificar:

- público;
- propósito;
- capacidades;
- materiais;
- sequência;
- exercícios;
- exemplos;
- artefatos;
- tecnologia;
- restrições;
- lacunas;
- riscos.

Registrar:

1. Preservar.
2. Reestruturar.
3. Criar.
4. Validar.
5. Não incluir.

### Fase 2: arquitetura reversa

Definir:

- transformação;
- competências;
- objetivos;
- evidências;
- avaliação;
- produto final;
- critérios de domínio.

Não desenhar telas antes disso.

### Fase 3: arquitetura da experiência

Definir:

- modo principal;
- trilhas;
- módulos;
- unidades;
- ciclo;
- atividades;
- revisões;
- artefatos;
- IA;
- apoio humano.

### Fase 4: especificações

Produzir os Specs necessários:

- ProgramSpec;
- CompetencySpec;
- ModuleSpec;
- UnitSpec;
- ActivitySpec;
- AssessmentSpec;
- FeedbackSpec;
- ArtifactSpec;
- TutorPolicySpec;
- EventSpec.

### Fase 5: protótipo

Implementar o menor ciclo completo:

```text
entrar
→ aprender
→ praticar
→ receber feedback
→ produzir evidência
→ retomar
```

### Fase 6: validação de aprendizagem e experiência

Testar:

- objetivo;
- compreensão;
- prática;
- feedback;
- domínio;
- navegação;
- acessibilidade;
- estado;
- persistência;
- erros.

### Fase 7: piloto real

Executar com participantes e observar:

- entendimento;
- dificuldades;
- erros;
- abandono;
- feedback;
- aplicação;
- qualidade dos artefatos.

### Fase 8: evolução

Somente após evidência:

- ampliar conteúdo;
- adicionar IA;
- adicionar analytics;
- integrar LMS;
- criar colaboração;
- escalar arquitetura.

---

## 37. Gates de qualidade

### Gate 1: propósito

- público definido;
- transformação clara;
- problema legítimo;
- contexto;
- sucesso.

### Gate 2: alinhamento

- objetivos observáveis;
- evidências;
- avaliações;
- atividades;
- critérios.

### Gate 3: aprendizagem

- atividade construtiva ou interativa;
- prática;
- recuperação;
- feedback;
- correção;
- aplicação.

### Gate 4: conteúdo

- fontes;
- exemplos;
- carga adequada;
- segmentação;
- linguagem;
- ausência de decoração irrelevante.

### Gate 5: domínio

- progressão coerente;
- gate justificado;
- tentativas;
- correção;
- retenção quando necessária.

### Gate 6: IA

- papel definido;
- fontes;
- limites;
- tentativa antes da resposta quando aplicável;
- avaliação contestável;
- escalonamento humano.

### Gate 7: experiência

- navegação;
- estados;
- retomada;
- mobile;
- acessibilidade;
- clareza;
- ajuda.

### Gate 8: técnico

- arquitetura;
- separação;
- testes;
- console;
- desempenho;
- segurança;
- persistência;
- documentação.

### Gate 9: dados

- eventos úteis;
- minimização;
- consentimento;
- retenção;
- métricas honestas.

### Gate 10: publicação

- piloto;
- responsáveis;
- suporte;
- versão;
- riscos;
- plano de evolução.

---

## 38. Estratégia de testes

### 38.1 Testes de alinhamento

- cada objetivo possui evidência;
- cada avaliação mede o objetivo;
- cada atividade prepara a avaliação;
- cada conteúdo apoia uma atividade.

### 38.2 Testes de conteúdo

- precisão;
- fonte;
- clareza;
- exemplo;
- contraexemplo;
- linguagem;
- atualização;
- neutralidade.

### 38.3 Testes de aprendizagem

Perguntar ao participante:

- o que você deveria ser capaz de fazer?
- qual foi o ponto principal?
- o que você consegue recuperar sem consultar?
- onde errou?
- o feedback ajudou?
- consegue aplicar em um caso novo?
- sabe qual é o próximo passo?

### 38.4 Testes de avaliação

- validade;
- cobertura;
- dificuldade;
- ambiguidade;
- critérios;
- acessibilidade;
- tentativas;
- feedback.

### 38.5 Testes da IA

- resposta fundamentada;
- recusa de inventar;
- controle de fonte;
- pistas;
- tentativa;
- rubrica;
- casos adversariais;
- privacidade;
- consistência.

### 38.6 Testes funcionais

- navegação;
- salvamento;
- retomada;
- sincronização;
- estados;
- links;
- formulários;
- artefatos;
- exportação.

### 38.7 Testes de acessibilidade

- teclado;
- foco;
- leitor de tela;
- contraste;
- zoom;
- movimento reduzido;
- legendas;
- transcrição;
- alvos;
- erros.

### 38.8 Testes de desempenho

- carregamento;
- interação;
- mídia;
- rede;
- mobile;
- offline;
- volume;
- falhas.

### 38.9 Testes de analytics

- evento correto;
- sem duplicidade;
- contexto;
- retenção;
- privacidade;
- reconciliação.

### 38.10 Testes visuais e regressão

Aplicar o guia técnico ou pacote de QA HTML vigente no projeto, evitando duplicar regras já consolidadas.

---

## 39. Antipadrões

Não considerar boa plataforma quando ela:

- organiza capítulos em cards e chama isso de aprendizagem;
- troca “próximo” por animação;
- usa um quiz superficial após cada texto;
- mede apenas conclusão;
- entrega resposta pela IA antes do esforço;
- usa gamificação como compensação;
- possui vídeo sem atividade;
- adiciona chatbot sem política pedagógica;
- bloqueia progresso sem critério;
- exige nota arbitrária;
- transforma erro em punição;
- não permite correção;
- usa exemplos muito distantes da realidade;
- não salva artefatos;
- não conecta módulo a competência;
- não possui revisão;
- ignora acessibilidade;
- coleta dados excessivos;
- confunde satisfação com aprendizagem;
- constrói LMS completo antes do piloto;
- utiliza padrão técnico sem necessidade;
- publica conteúdo gerado sem revisão;
- cria interface bonita e pedagogicamente passiva.

---

## 40. Governança e papéis

### 40.1 Especialista de domínio

- valida conteúdo;
- define desempenho;
- revisa exemplos;
- identifica erros;
- valida artefatos.

### 40.2 Designer de aprendizagem

- define objetivos;
- alinha atividades;
- projeta avaliações;
- planeja feedback;
- controla carga.

### 40.3 Design de produto

- organiza experiência;
- navegação;
- estados;
- usabilidade;
- acessibilidade.

### 40.4 Desenvolvimento

- implementa;
- testa;
- mantém;
- protege;
- observa.

### 40.5 IA

- acelera;
- estrutura;
- gera alternativas;
- implementa;
- revisa;
- simula.

Não aprova conteúdo ou domínio sozinha.

### 40.6 Tutor ou avaliador humano

- trata ambiguidade;
- valida artefatos;
- orienta;
- decide exceções;
- revisa alta consequência.

### 40.7 Participante

- aprende;
- tenta;
- produz;
- corrige;
- reflete;
- contesta;
- aplica.

### 40.8 Proprietário do produto

- prioriza;
- define valor;
- garante operação;
- acompanha resultados;
- decide evolução.

---

## 41. Roadmap de implantação

### Fase 0: seleção do piloto

Escolher:

- um módulo;
- uma capacidade;
- uma evidência;
- um público;
- um contexto;
- risco controlado.

### Fase 1: protótipo de aprendizagem

Implementar:

- orientação;
- conteúdo mínimo;
- exemplo;
- prática;
- feedback;
- evidência;
- retomada.

### Fase 2: teste com poucos participantes

Observar e corrigir.

### Fase 3: MVP

Adicionar:

- progresso;
- persistência;
- revisões;
- artefatos;
- acessibilidade;
- analytics mínimo.

### Fase 4: IA controlada

Adicionar um papel específico:

- tutora;
- revisora;
- simuladora.

Avaliar antes de ampliar.

### Fase 5: projeto aplicado

Conectar aprendizagem a artefato real.

### Fase 6: integração

Adicionar LMS, identidade ou padrões somente se necessário.

### Fase 7: escala

Expandir por módulos e componentes reutilizáveis.

---

## 42. Métricas de sucesso

### 42.1 Aprendizagem

- domínio;
- retenção;
- transferência;
- redução de erros;
- qualidade da evidência;
- independência.

### 42.2 Produto

- conclusão do ciclo;
- retomada;
- acessibilidade;
- suporte;
- confiabilidade;
- clareza.

### 42.3 Aplicação

- artefatos produzidos;
- artefatos validados;
- ações executadas;
- decisões;
- resultados.

### 42.4 Eficiência

- tempo de autoria;
- tempo de feedback;
- ciclos de correção;
- reutilização;
- custo;
- manutenção.

### 42.5 IA

- utilidade;
- fundamentação;
- necessidade de correção;
- escalonamento;
- custo;
- latência;
- falhas.

---

## 43. Definição de concluído

A plataforma ou piloto estará concluído quando:

- possuir público e transformação definidos;
- possuir objetivos observáveis;
- possuir evidências de domínio;
- alinhar conteúdo, atividade e avaliação;
- incluir prática construtiva ou interativa;
- incluir recuperação;
- oferecer feedback acionável;
- permitir correção;
- tratar progressão honestamente;
- produzir ou registrar evidência;
- funcionar em desktop e mobile;
- atender acessibilidade definida;
- preservar fontes e versões;
- tratar estados e erros;
- salvar e retomar;
- possuir testes;
- não apresentar erros relevantes no console;
- coletar somente dados necessários;
- identificar limitações;
- ter sido testada com participante;
- demonstrar ganho sobre a alternativa anterior;
- possuir documentação;
- possuir plano de suporte e evolução.

---

## 44. Formato obrigatório da resposta do Copilot

Ao usar este guia, organizar a resposta nas seções abaixo.

### 1. Leitura dos insumos

- materiais;
- público;
- propósito;
- capacidades;
- estrutura atual;
- restrições;
- lacunas.

### 2. Base preservada

- conteúdo;
- fontes;
- identidade;
- tecnologia;
- artefatos;
- regras.

### 3. Arquitetura de aprendizagem

- transformação;
- competências;
- objetivos;
- evidências;
- avaliações;
- trilhas;
- módulos;
- unidades.

### 4. Experiência proposta

- ciclo;
- atividades;
- prática;
- recuperação;
- feedback;
- artefatos;
- IA;
- acessibilidade.

### 5. Especificações

Entregar os Specs necessários.

### 6. Arquitetura técnica

- stack;
- componentes;
- dados;
- persistência;
- telemetria;
- integrações;
- riscos.

### 7. Implementação

Entregar diretamente:

- código;
- arquivos;
- estrutura;
- conteúdo;
- testes;
- documentação.

Não parar no plano quando houver material suficiente para executar.

### 8. Validação

- alinhamento;
- aprendizagem;
- acessibilidade;
- funcional;
- técnico;
- segurança;
- analytics.

### 9. Registro de decisões

- decisões;
- premissas;
- adaptações;
- limitações;
- pendências;
- próximos testes.

---

## 45. Checklist de kickoff

- [ ] Quem é o participante?
- [ ] Qual transformação é prometida?
- [ ] O que ele deverá ser capaz de fazer?
- [ ] Qual evidência demonstrará isso?
- [ ] Quais são os pré-requisitos?
- [ ] Quais materiais já existem?
- [ ] Quais fontes são canônicas?
- [ ] Qual é o modo principal da plataforma?
- [ ] Qual é o primeiro módulo piloto?
- [ ] Qual atividade construtiva será usada?
- [ ] Qual aplicação real será realizada?
- [ ] Qual artefato será produzido?
- [ ] Como o feedback será fornecido?
- [ ] Como a correção acontecerá?
- [ ] Existe gate de domínio?
- [ ] Como a retenção será revisada?
- [ ] Qual papel a IA terá?
- [ ] O que a IA não poderá fazer?
- [ ] Quais dados serão coletados?
- [ ] Qual padrão de acessibilidade será aplicado?
- [ ] Qual stack é suficiente?
- [ ] Onde será publicado?
- [ ] Quem valida conteúdo?
- [ ] Quem valida aprendizagem?
- [ ] Como o piloto será testado?
- [ ] O que caracteriza sucesso?

---

## 46. Prompt operacional para uso no Copilot Chat

Use o texto abaixo junto com este guia e com os materiais da formação.

```text
Construa ou refatore a plataforma de aprendizagem anexada seguindo o Guia Mestre para Construção de Plataformas de Aprendizagem Interativa.

Trate a plataforma como um sistema de desenvolvimento de capacidade, e não como um repositório de conteúdo. Comece pela transformação esperada, pelas competências, pelos objetivos observáveis e pelas evidências de domínio. Somente depois defina unidades, atividades, interface, IA, dados e tecnologia.

Inspecione integralmente os materiais recebidos. Identifique o que deve ser preservado, reestruturado, criado, validado e excluído do escopo. Não peça ao usuário informações que possam ser deduzidas dos arquivos. Faça perguntas apenas quando a resposta for indispensável para evitar uma decisão incorreta. Quando faltar informação não essencial, adote a premissa mais conservadora, registre-a e prossiga.

A experiência deve combinar, quando aplicável: orientação, ativação de conhecimento prévio, explicação segmentada, exemplo resolvido, prática guiada, recuperação, aplicação, feedback acionável, correção, reflexão, evidência e próximo passo.

Não confunda clicar com interatividade, conclusão de conteúdo com domínio, quiz imediato com retenção, gamificação com motivação ou chatbot com tutoria. A IA deve apoiar o esforço cognitivo, não substituir a tarefa que o participante precisa aprender.

Implemente o menor ciclo completo que permita ao participante entrar, aprender, praticar, receber feedback, produzir evidência, salvar e retomar. Use a tecnologia mais simples que atenda ao caso. Separe conteúdo, regras pedagógicas, estado, apresentação, persistência e telemetria.

Garanta acessibilidade, responsividade, estados de erro, rastreabilidade das fontes, privacidade e testes. Entregue diretamente o código e os arquivos quando houver material suficiente. Não pare apenas em recomendações ou wireframes.

Ao final, apresente:
1. leitura dos insumos;
2. base preservada;
3. arquitetura de aprendizagem;
4. objetivos, evidências e avaliações;
5. experiência e atividades;
6. especificações;
7. arquitetura técnica;
8. implementação;
9. validação;
10. registro de decisões, premissas e limitações.

Contexto específico desta plataforma:
[descreva aqui público, formação, objetivo, materiais, restrições e resultado esperado]
```

---

## 47. Aplicação recomendada à Formação em Transformação Digital e IA

A formação pode evoluir para uma plataforma com o seguinte ciclo:

```text
capítulo
→ aula interativa
→ recuperação
→ caso didático
→ exercício guiado
→ aplicação no projeto
→ artefato
→ revisão por IA
→ revisão humana
→ validação
→ integração ao Canvas Mestre
→ próximo capítulo
```

### 47.1 Componentes possíveis

- mapa da jornada M00-M16;
- página de capítulo;
- áudio e transcrição;
- conceitos;
- perguntas de recuperação;
- caso integrador;
- laboratório;
- simulador;
- template;
- área de artefatos;
- revisão por rubrica;
- diário de aprendizagem;
- mapa de dúvidas;
- decisões;
- progresso por competência;
- revisões futuras;
- conexão com Canvas Mestre.

### 47.2 Regra de integração

A plataforma deve respeitar as quatro camadas:

```text
curso-base
→ caso didático anonimizado
→ projeto aplicado privado
→ registro corporativo oficial
```

Não transportar automaticamente conteúdo privado para a camada compartilhável ou oficial.

### 47.3 Primeiro piloto recomendado

Escolher um capítulo já validado e criar:

1. orientação;
2. síntese;
3. exemplo;
4. pergunta de recuperação;
5. exercício aplicado;
6. artefato;
7. feedback;
8. revisão;
9. exportação;
10. registro de aprendizagem.

O piloto deve comprovar o ciclo antes de construir a plataforma completa.

---

## 48. Síntese operacional

A construção deve seguir:

```text
insumos
→ capacidade
→ objetivo
→ evidência
→ avaliação
→ atividade
→ conteúdo
→ feedback
→ domínio
→ aplicação
→ artefato
→ retenção
→ resultado
→ aprendizado do produto
```

A implementação será considerada metodologicamente consistente quando conseguir ligar, sem perda de significado:

```text
fonte
→ objetivo
→ atividade
→ tentativa
→ feedback
→ evidência
→ domínio
→ aplicação
→ resultado
```

O melhor produto não é aquele que contém mais conteúdo ou tecnologia.

É aquele que transforma conhecimento em capacidade demonstrada, corrigível, aplicável e reutilizável.
