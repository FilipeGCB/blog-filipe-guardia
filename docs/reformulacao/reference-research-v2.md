# Pesquisa de referências visuais — Gate 1 revisado

## Status

Pesquisa concluída. Esta rodada ainda não implementa a nova interação. Ela revisa a direção visual aprovada porque o primeiro build não incorporou uma linguagem de movimento baseada em referências reais.

## Diagnóstico confirmado

O build atual tem fotografia e composição editorial, mas a mídia está inserida como imagem estática. Há `scroll-behavior: smooth` e transformações estáticas de layout, porém não há:

- mídia sticky vinculada a capítulos;
- parallax de camadas;
- zoom ou mudança de enquadramento controlada pelo scroll;
- expansão de imagem por `clip-path`;
- troca de imagem conforme o texto avança;
- transição visual entre cenas editoriais.

O problema, portanto, não é apenas a escolha de uma fotografia. É a ausência de uma relação temporal entre conteúdo, imagem e rolagem.

## Referências pesquisadas

### 1. 21st.dev — Modern Hero

https://21st.dev/@uniquesonu/components/modern-hero

O componente descreve uma imagem central que altera `clip-path`, `background-size` e opacidade conforme a rolagem, combinada com imagens menores em velocidades diferentes.

**Princípio transferível:** a imagem não precisa apenas ocupar uma caixa; ela pode mudar de escala, recorte e profundidade para marcar a passagem entre estados narrativos.

**Uso possível:** hero da home e abertura dos artigos.

### 2. 21st.dev — Sticky Scroll Reveal

https://21st.dev/community/components/explore/sticky-scroll-reveal

A coleção reúne padrões em que a mídia permanece fixa enquanto o conteúdo avança, incluindo sticky media, story scroll, scroll media expansion hero e troca progressiva de imagens.

**Princípio transferível:** uma imagem persistente cria continuidade visual; o texto pode mudar sem desmontar a cena inteira a cada seção.

**Uso possível:** a trilha “Operação → Estrutura → Sistema → Agente”.

### 3. Webflow — Sticky Project Teaser

https://webflow.com/made-in-webflow/website/sticky-project-teaser-image-scroll-animation

O padrão divide a tela: o texto percorre uma coluna enquanto a imagem permanece sticky na outra e muda conforme o teaser ativo.

**Princípio transferível:** imagem e texto podem ter ritmos de rolagem diferentes, criando uma leitura de revista sem transformar o site em uma apresentação de slides.

**Uso possível:** arquivo de artigos e projetos.

### 4. Moooi — A Life Extraordinary

https://www.moooi.com/us/a-life-extraordinary

A experiência apresenta a própria rolagem como parte da narrativa (“sound on scroll”), usando cenas, transições e mudança de ambiente para conduzir a descoberta.

**Princípio transferível:** a rolagem deve revelar uma sequência de cenas, não somente deslocar blocos verticais.

**Uso possível:** uma sequência curta de cenas na home, sem reproduzir a estética fantasiosa da marca.

### 5. Awwwards — Parallax Scrolling

https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html

A coleção mostra abordagens diferentes: navegação horizontal, camadas de parallax, galerias fotográficas, conteúdo imersivo, mudança de cor e ilustrações acionadas pelo scroll.

**Princípio transferível:** parallax é uma gramática de profundidade e ritmo; não deve ser aplicado como filtro uniforme em todos os elementos.

**Uso possível:** selecionar dois ou três momentos de destaque, não animar todos os cards.

### 6. WIRED Photo

https://www.wired.com/2016/12/say-hello-wireds-stunning-new-photo-site/

O projeto trata fotografia como meio narrativo principal: imagens ocupam faixas largas, expandem com um parallax sutil e abrem uma experiência de visualização mais ampla.

**Princípio transferível:** uma imagem pode ser um intervalo de leitura e uma mudança de escala, não somente uma miniatura de card.

**Uso possível:** interlúdios fotográficos entre capítulos de artigos selecionados.

### 7. Editorial scrollytelling

https://www.vev.design/blog/editorial-websites/

https://shorthand.com/the-craft/scrollytelling-examples/index.html

As referências de publicação tratam scrollytelling como uma forma de fazer texto, imagem, vídeo e transições mudarem de estado enquanto o leitor avança.

**Princípio transferível:** o movimento precisa carregar significado editorial; não basta revelar elementos para produzir “efeito”.

**Uso possível:** transformar alguns artigos em ensaios visuais leves, mantendo o texto integral e acessível.

### 8. Firewatch — uso controlado de camadas

https://www.creativebloq.com/web-design/parallax-scrolling-1131762

O exemplo é relevante não apenas pelo efeito, mas pelo limite: as camadas ficam concentradas no topo, não sequestram a barra de rolagem e não competem com a leitura.

**Princípio transferível:** movimento seletivo e legível é mais sofisticado do que parallax constante.

**Uso possível:** hero e transições de capítulo; não aplicar em toda a página.

## Padrões que serão incorporados

### A. Hero com profundidade editorial

- texto e imagem compõem uma única cena;
- a fotografia pode começar enquadrada e abrir progressivamente;
- escala, recorte e posição respondem ao scroll;
- o texto permanece legível em uma camada independente;
- reduced motion apresenta a composição final sem efeitos.

### B. Mídia sticky com capítulos

- uma imagem ou composição permanece visível;
- cada capítulo ativa uma nova camada, crop ou asset;
- a troca é orientada pelo conteúdo, não por uma sequência decorativa;
- no mobile, o sticky pode virar uma sequência linear de imagens.

### C. Interlúdio de imagem

- o texto respira antes de uma nova tese;
- a imagem entra em largura maior que a coluna de leitura;
- a imagem expande ou desloca levemente;
- a legenda explica sua função narrativa;
- o componente não interrompe a leitura nem exige JavaScript para existir.

### D. Arquivo editorial com ritmo de revista

- uma matéria principal com mídia dominante;
- alternância entre linhas editoriais, não grade idêntica de cards;
- hover e scroll afetam o enquadramento da imagem, não apenas a sombra do card;
- filtros continuam simples e acessíveis.

## Nova direção recomendada

### Caderno em movimento

O site deixa de ser um arquivo ilustrado e passa a ser uma publicação em que o leitor atravessa cenas:

1. trabalho real;
2. conhecimento que precisa ser estruturado;
3. sistemas que tornam decisões possíveis;
4. agentes que precisam de limites;
5. projetos que transformam a tese em construção.

## Proposta de aplicação no site

### Home

1. Hero full-bleed ou quase full-bleed com fotografia editorial e texto em sobreposição controlada.
2. Scroll-linked zoom e mudança de crop no primeiro avanço da página.
3. Seção sticky com quatro capítulos e mídia persistente:
   - operação;
   - estrutura;
   - sistema;
   - agente governado.
4. Uma imagem ou composição muda em cada capítulo.
5. Artigos aparecem em ritmo de revista, com um destaque grande e linhas alternadas.

### Arquivo

1. Lead story com imagem dominante.
2. Artigos seguintes em linhas alternadas, com imagens mudando de enquadramento ao entrar no viewport.
3. Filtros preservados sem transformar a página em dashboard.

### Páginas de artigo

1. Hero com imagem relacionada à tese, não uma imagem genérica de tema.
2. No primeiro scroll, expansão ou mudança de enquadramento da capa.
3. Artigos selecionados recebem uma seção sticky de argumento visual.
4. Artigos com tese mais estrutural usam diagramas animados por etapas.
5. Artigos mais humanos ou operacionais usam fotografia/composição editorial.
6. O corpo textual continua sem dependência de animação.

## Direção de assets

Não serão geradas imagens isoladas antes de fechar o storyboard de cada superfície. A nova série visual deve compartilhar:

- luz e temperatura cromática;
- proporção e comportamento de crop;
- espaço negativo para títulos e legendas;
- textura material coerente;
- vocabulário de objetos e gestos;
- tratamento compatível com papel, grafite, roxo profundo e âmbar.

A fotografia não precisa aparecer em todos os artigos. Ela entra quando cria cena, escala ou presença. Diagramas entram quando tornam relações, camadas, ciclos ou limites mais claros.

## Abordagem técnica preliminar

- manter Astro estático e HTML semântico;
- priorizar CSS scroll-driven animations quando houver suporte;
- usar `IntersectionObserver` como fallback para entrada e troca de estado;
- considerar GSAP/ScrollTrigger apenas se a prototipação mostrar que CSS não entrega o comportamento desejado;
- não usar smooth-scroll que sequestra a barra de rolagem;
- preservar `prefers-reduced-motion`, teclado, leitura linear e performance mobile.

## Decisões necessárias no Gate 1 revisado

1. Aprovar “Caderno em movimento” como nova direção visual.
2. Aprovar sticky media na home para a trilha Operação → Estrutura → Sistema → Agente.
3. Aprovar expansão/parallax controlado no hero e em interlúdios selecionados.
4. Aprovar a reconstrução do arquivo como ritmo editorial, reduzindo a grade uniforme.
5. Aprovar a escolha de 4–6 artigos prioritários para receberem tratamento scrollytelling mais forte.
6. Aprovar que as próximas imagens só sejam geradas depois do storyboard e do asset board.
