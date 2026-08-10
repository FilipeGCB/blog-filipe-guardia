# Visual Presentation Studio — Storyboard
## Reformulação do site Filipe Guardia

Status: aprovado como consequência do Gate 1; usar como contrato de experiência durante a implementação.

## Contrato visual comum

- Direção: Caderno de Sistemas Reais.
- Experiência: editorial híbrida, com scrollytelling leve somente onde melhora compreensão.
- Mensagem preservada: operação real → estrutura → sistema → agente governado.
- Asset rule: toda imagem explica, prova, orienta, compara, humaniza ou cria ritmo.
- Movimento: entrada sutil, progressão de leitura e filtros; nenhum efeito deve esconder conteúdo.
- Fallback: toda experiência deve permanecer compreensível sem JavaScript e com reduced motion.
- Grid: leitura confortável no centro; rails laterais para metadata, sumário e evidências.
- Cor: papel, grafite e roxo profundo; acentos restritos às séries.

## 1. Casca global

### Header

- Purpose: orientar identidade e navegação.
- Content: Filipe Guardia, posicionamento curto, Início, Artigos, Projetos, Biblioteca, Sobre, Contato.
- Composition: header claro e compacto; marca no início; navegação limpa; menu recolhível no mobile.
- Asset: monograma tipográfico, sem logo externo.
- Motion: abertura do menu e estado ativo; sem deslocar a página.
- Message that must remain: este é um site autoral sobre operação, sistemas e IA aplicada.

### Footer

- Purpose: fechar o ciclo e oferecer links de continuidade.
- Content: assinatura, ano, GitHub e links profissionais configurados.
- Composition: faixa de encerramento editorial, sem bloco promocional pesado.
- Asset: nenhum.
- Motion: nenhum.
- Message that must remain: o site é uma publicação-portfólio com canais verificáveis.

## 2. Home

### H1 — Hero de posicionamento

- Purpose: apresentar Filipe e o problema que ele conecta.
- Content: título atual refinado, deck profissional e duas ações: ler artigos / conhecer projetos.
- Composition: duas colunas; texto forte à esquerda; composição visual de operação se transformando em sistema à direita.
- Asset: capa-síntese com linhas de processo, tabela, regra, nó de decisão e agente, construída como SVG/editorial.
- Motion: camadas podem entrar em sequência curta; reduced motion mostra o quadro completo.
- Message that must remain: a tecnologia parte do conhecimento do processo real.

### H2 — Prova de autoridade

- Purpose: responder por que o visitante deve continuar.
- Content: experiência desde 2011, cobrança B2B/dados, construção prática de produtos e IA.
- Composition: três provas assimétricas com números/verbos curtos, não três cards decorativos.
- Asset: pequenos marcadores tipográficos ou microdiagramas.
- Motion: nenhum.
- Message that must remain: a autoridade combina domínio e construção.

### H3 — Artigo em destaque

- Purpose: apresentar a tese editorial mais recente.
- Content: artigo atual de memória organizacional, título, deck, data, leitura e ação.
- Composition: capa dominante, texto editorial e faixa de série.
- Asset: visual da memória individual tornando-se memória institucional.
- Motion: crop estático; entrada de capa opcional.
- Message that must remain: conhecimento crítico não pode depender de uma cabeça.

### H4 — Trilhas de leitura

- Purpose: ensinar o leitor a explorar os artigos por pensamento, não apenas por data.
- Content: Operação e crédito; Sistemas e agentes; Conhecimento organizacional; Transformação e trabalho.
- Composition: quatro caminhos com uma frase e um pequeno signo visual.
- Asset: um signo/diagrama por série, derivado da gramática de capas.
- Motion: hover/focus com mudança de cor e indicação de continuidade.
- Message that must remain: os artigos formam um sistema de ideias relacionado.

### H5 — Arquivo editorial selecionado

- Purpose: dar acesso aos artigos sem tornar a home uma lista infinita.
- Content: 6–8 artigos selecionados, com botão para arquivo completo.
- Composition: mosaico editorial: um destaque grande, dois médios, sequência vertical.
- Asset: miniaturas das capas/diagramas.
- Motion: hover mínimo, sem parallax.
- Message that must remain: cada artigo é uma entrada para uma tese específica.

### H6 — Projetos

- Purpose: provar que as ideias viram construção.
- Content: CFO-IA, Hermes, Presentation Intelligence System e transformação de cobrança/planejamento.
- Composition: quatro blocos de caso com status, problema, abordagem e tipo de acesso.
- Asset: diagramas de arquitetura ou artefatos abstratos; sem screenshots confidenciais.
- Motion: nenhum além de foco.
- Message that must remain: o portfólio não é apenas discurso.

### H7 — Biblioteca pública

- Purpose: separar e apresentar fontes públicas para agentes e habilidades.
- Content: descrição curta e seis áreas temáticas.
- Composition: faixa de arquivo/índice, visualmente diferente do blog, com ação Biblioteca.
- Asset: mapa de fontes em miniatura.
- Motion: nenhum.
- Message that must remain: existe uma camada reutilizável de conhecimento público.

### H8 — Contato

- Purpose: converter interesse em conversa contextualizada.
- Content: convite para explicar problema, contexto e objetivo.
- Composition: bloco final calmo, sem urgência artificial.
- Asset: nenhum.
- Motion: nenhum.
- Message that must remain: a conversa começa pelo problema, não pela ferramenta.

## 3. Arquivo de artigos

- Purpose: oferecer exploração completa e sustentável.
- Content: título do caderno, destaque, filtros por série/tema/ano e todos os artigos.
- Composition: cabeçalho editorial, filtro compacto, lista/mosaico com capas e leitura cronológica.
- Asset: capas em proporções responsivas.
- Motion: filtro com atualização acessível, foco e contagem visível; sem recarregar página.
- Message that must remain: o arquivo é uma publicação, não um dashboard.
- Removal test: sem esta página, o leitor só encontra os artigos por uma home longa e perde a visão do conjunto.

## 4. Template de artigo

### A1 — Abertura

- Purpose: estabelecer tese, contexto e expectativa.
- Content: breadcrumb, série, H1, deck, data, autoria, tempo de leitura.
- Composition: texto em uma coluna e hero visual em outra no desktop; linear no mobile.
- Asset: capa específica do artigo.
- Motion: entrada curta ou nenhuma.
- Message that must remain: este artigo tem uma pergunta e uma tese, não apenas um tema.

### A2 — Visual de abertura

- Purpose: criar a primeira imagem mental do argumento.
- Content: título curto da figura e alt text.
- Composition: figura ampla, legenda editorial discreta.
- Asset: SVG, diagrama ou composição conceitual definida na tabela do Gate 1.
- Motion: apenas revelar quando entrar no viewport, com reduced motion estático.
- Message that must remain: a imagem deve explicar o artigo sem substituir sua leitura.

### A3 — Corpo de leitura

- Purpose: permitir leitura profunda e confortável.
- Content: texto original, headings, listas, fontes e perguntas.
- Composition: coluna de 680–760px; margens generosas; subtítulos com alto contraste; texto sem card pesado.
- Asset: nenhum por padrão; figuras entram nos pontos previstos.
- Motion: progresso de leitura opcional.
- Message that must remain: texto é protagonista.

### A4 — Figura de argumento

- Purpose: tornar visível a relação central do artigo.
- Content: diagrama/legenda construído a partir do próprio texto.
- Composition: figura em largura controlada, com nota ou legenda.
- Asset: diagrama interno específico.
- Motion: animação de etapas somente se ensinar sequência; fallback estático.
- Message that must remain: o leitor deve entender o que ganhou ao ver a figura.

### A5 — Fontes e continuidade

- Purpose: encerrar com rastreabilidade e próxima leitura.
- Content: fontes oficiais, pergunta ao leitor, artigos relacionados/anterior/próximo.
- Composition: fontes em bloco editorial e navegação com série.
- Asset: nenhum.
- Motion: nenhum.
- Message that must remain: a tese pode ser verificada e continuada.

## 5. Sobre

- Purpose: construir confiança e explicar trajetória.
- Content: quem sou, trajetória, competências, método, direção.
- Composition: perfil-ensaio com timeline horizontal adaptada ao mobile e matriz de capacidades.
- Asset: linha de transformação de execução → planejamento → solução.
- Motion: timeline estática; progressão discreta opcional.
- Message that must remain: tecnologia é uma camada prática sobre experiência de negócio.

## 6. Projetos

- Purpose: mostrar construção prática sem expor material privado.
- Content: quatro projetos com problema, abordagem, estágio e evidência.
- Composition: casos em sequência editorial, com visual diferente por projeto.
- Asset: diagramas abstratos de cada produto/ambiente.
- Motion: nenhum.
- Message that must remain: cada projeto tem contexto e limite de exposição.

## 7. Biblioteca

### L1 — Índice

- Purpose: orientar as fontes públicas e habilidades.
- Content: seis áreas temáticas, descrição, busca/filtro se necessário.
- Composition: índice compacto e taxonômico, separado do blog.
- Asset: mapa de famílias de habilidades.
- Motion: filtro opcional.
- Message that must remain: biblioteca é recurso de consulta e roteamento.

### L2 — Página temática

- Purpose: permitir consulta de uma fonte ou família.
- Content: título, finalidade, entradas, processo, entrega, limites e links.
- Composition: documentação editorial, com navegação lateral e blocos expansíveis apenas quando houver ganho real.
- Asset: diagramas de processo quando o conteúdo exigir.
- Motion: nenhum por padrão.
- Message that must remain: cada fonte tem propósito e limites.

## 8. Páginas auxiliares

- 404: reorientar para início, artigos e biblioteca.
- Obrigado: confirmar contato enviado e oferecer projetos/artigos.
- OAuth do Memory Hub: manter fora da navegação editorial principal, com identidade própria.
- Design systems antigos: inventariar e preservar URLs durante a migração; decidir depois se entram na Biblioteca.

## 9. Controle de qualidade do storyboard

- Todo bloco possui purpose, content, composition, asset, motion e message.
- Nenhuma animação é necessária para compreender o texto.
- Todo artigo possui um asset de capa com função semântica.
- Figuras internas só entram quando reduzem abstração ou organizam relações.
- A home não repete o artigo em destaque na lista.
- O arquivo é navegável por teclado e por filtros sem depender de cor.

