---
origin: chatgpt
origem: chatgpt
date: 2026-08-05
data: 2026-08-05
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
tags: [copilot, html, frontend, design, identidade-visual, interatividade, qa, acessibilidade]
---

# Guia Mestre para Artefatos Web Visuais e Interativos

## Finalidade

Orientar o Copilot a criar artefatos digitais visualmente fortes, funcionais e publicáveis: sites, apresentações HTML, dashboards, simuladores, exploradores, páginas narrativas, revistas digitais, pôsteres web, experiências generativas, playgrounds e miniaplicações.

Este guia consolida direção de arte, identidade visual, temas, design editorial, design de interface, arte algorítmica, construção web, exploração de parâmetros e teste de aplicações.

## Fontes consolidadas

- `skills/frontend-design.md` e seu ponteiro em `plugins/dev/`;
- `skills/web-artifacts-builder.md`;
- `skills/brand-guidelines.md`;
- `skills/theme-factory.md`;
- `skills/canvas-design.md`;
- `skills/algorithmic-art.md`;
- `skills/webapp-testing.md`;
- `skills/slack-gif-creator.md`;
- `plugins/dev/playground.md`;
- partes visuais, de acessibilidade, handoff e design system de `plugins/negocio/design.md`.

## Quando usar

Use para qualquer artefato em que interface, narrativa visual, interação e execução técnica sejam inseparáveis.

Não use como método principal para análise de dados, definição de regra de negócio, redação documental ou descoberta de produto. Nesses casos, faça primeiro o trabalho de verdade correspondente e aplique este guia na camada de apresentação.

## Resultado esperado

Conforme o pedido:

- arquivo HTML autocontido;
- aplicação estática modular;
- projeto React/Vite quando o estado justificar;
- peça visual exportável;
- sistema de temas e tokens;
- explorador interativo com controles e saída reutilizável;
- documentação de execução, edição e publicação;
- relatório de validação.

## Princípios de design

1. Definir uma direção visual específica antes do código.
2. Evitar o “visual padrão de IA”: gradiente roxo genérico, cards idênticos, excesso de bordas arredondadas, ícones sem função e hierarquia fraca.
3. A identidade deve nascer do tema, público, conteúdo e marca.
4. Movimento deve explicar, orientar ou emocionar; nunca competir com o conteúdo.
5. O conteúdo deve permanecer compreensível sem animação.
6. Componentes devem formar um sistema, não uma coleção de exceções.
7. Acessibilidade, responsividade e performance são critérios de design.
8. Gráfico é evidência, não decoração.
9. Toda interação visível deve produzir efeito real.
10. Em arte generativa, primeiro definir a filosofia algorítmica; depois os parâmetros.

## Processo obrigatório

### Etapa 1 — Classificar o artefato

Identificar a natureza predominante:

- informacional;
- narrativa;
- analítica;
- operacional;
- exploratória;
- educativa;
- artística;
- institucional;
- decisória.

### Etapa 2 — Ler os insumos

Extrair:

- conteúdo obrigatório;
- público;
- ação esperada;
- identidade existente;
- dados e fontes;
- restrições tecnológicas;
- formato de publicação;
- exemplos aprovados e rejeitados.

### Etapa 3 — Definir direção de arte

Produzir uma decisão curta contendo:

- conceito visual;
- atmosfera;
- referência estética sem imitação literal;
- paleta;
- tipografia;
- composição;
- linguagem de formas;
- regra de imagem e ilustração;
- regra de movimento;
- nível de densidade.

Quando houver marca, extrair tokens e distinguir regra obrigatória de liberdade criativa.

### Etapa 4 — Arquitetura da informação

Definir:

- narrativa ou mapa de navegação;
- hierarquia de seções;
- componentes;
- estados;
- entradas e saídas;
- comportamento em desktop e celular;
- estratégia de leitura longa;
- persistência, importação e exportação, se necessárias.

### Etapa 5 — Escolher a menor stack suficiente

- HTML único: conteúdo e estado moderados, distribuição simples.
- HTML/CSS/JS modular: manutenção sem framework.
- React/Vite/TypeScript: muitos componentes, rotas, estado ou testes.
- Canvas/p5.js/WebGL: geração visual ou interação gráfica.

Não usar framework apenas para parecer sofisticado.

### Etapa 6 — Implementar por fatias completas

Construir primeiro um fluxo vertical real: entrada, processamento, visualização, interação e saída. Depois expandir. Não entregar uma tela bonita sem comportamento.

### Etapa 7 — Modos especializados

#### Playground

Criar controles compreensíveis, prévia ao vivo, estado serializável e uma saída que possa ser copiada como prompt, configuração ou especificação.

#### Dashboard ou simulador

Vincular cada visual aos dados e regras. Exibir fórmula, premissa, unidade, período e tratamento de valores ausentes quando forem relevantes.

#### Arte algorítmica

Definir sistema, semente, regras, tensão visual e intervalo útil de parâmetros. Oferecer controle sem destruir a coerência estética.

#### Peça editorial

Trabalhar ritmo, grid, escala, contraste, respiro e relação entre texto e imagem. Evitar aparência de template.

#### GIF ou microanimação

Otimizar dimensões, duração, repetição, legibilidade e peso. Produzir alternativa estática quando necessário.

### Etapa 8 — QA técnico e visual

Testar, conforme aplicável:

- carregamento;
- console;
- links e botões;
- filtros e cálculos;
- formulários;
- importação e exportação;
- persistência;
- estados vazio, erro e carregamento;
- teclado e foco;
- contraste;
- `prefers-reduced-motion`;
- desktop e celular;
- overflow;
- legibilidade;
- coerência de identidade;
- performance perceptível.

Usar navegador automatizado quando realmente disponível. Caso contrário, fazer validação estrutural do código e fornecer matriz objetiva de teste manual.

## Antipadrões

- hero section como substituto de site;
- botão sem ação;
- dados fictícios não identificados;
- gráfico desconectado da análise;
- tipografia aleatória;
- tema aplicado apenas por troca de cor;
- excesso de glassmorphism;
- animação sem alternativa reduzida;
- layout desktop comprimido no celular;
- lorem ipsum em versão final;
- bibliotecas carregadas sem necessidade;
- teste declarado sem evidência.

## Entrega

Entregar arquivos-fonte, versão pronta para uso, README, decisões visuais, instruções de edição e publicação e relatório de testes. Quando o ambiente não permitir gerar o arquivo, entregar o código completo em blocos organizados e declarar a limitação.

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
