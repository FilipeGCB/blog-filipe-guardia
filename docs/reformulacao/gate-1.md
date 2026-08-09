# Visual Presentation Studio — Gate 1
## Reformulação do site Filipe Guardia

Status: proposta para aprovação. Nenhuma implementação ou alteração no GitHub foi feita.

## 1. Discovery realizado

Repositório analisado: `FilipeGCB/blog-filipe-guardia`, branch `main`.

O site atual é um site estático publicado no GitHub Pages. A estrutura principal encontrada é:

- `index.html`: home, posicionamento profissional e catálogo dos artigos;
- `home.html`: redirecionamento legado para `index.html`;
- `artigos/`: 15 artigos HTML independentes;
- `sobre.html`, `projetos.html`, `contato.html`: páginas institucionais;
- `styles.css`, `site-enhancements.css`, `site-v2.css`: três camadas de estilos acumuladas;
- `site.js`: navegação, formulários, contatos, metadados, cards, navegação entre artigos e comportamento responsivo;
- `site-config.js`: identidade, links, Formspree, PageAgent e evidências dos projetos;
- `sitemap.xml`: páginas institucionais, artigos, fontes públicas e biblioteca de habilidades;
- páginas públicas de fontes Copilot e uma biblioteca temática em `habilidades/`;
- páginas HTML de design systems e artefatos visuais no nível raiz;
- integração experimental do PageAgent, ativada pelo visitante e carregada de CDN.

Os 15 artigos foram lidos integralmente. Todos possuem estrutura semelhante: abertura argumentativa, capítulos numerados, impacto para pessoas e empresas, aprendizado pessoal, conclusão, pergunta ao leitor e, em vários casos, fontes oficiais.

Achado visual objetivo: nenhum dos 15 artigos possui uma tag `<img>`. Os cards da home usam blocos abstratos com siglas como `KM`, `KB`, `TX`, `TD`, `GV`, `RT`, `HX`, `MCP` e `IA`. Não há atualmente uma estratégia de capas, fotografias, ilustrações, diagramas ou visuais editoriais por artigo.

## 2. Diagnóstico

### O que está bom

- O posicionamento profissional é claro: cobrança B2B, dados, processos, produtos e IA aplicada.
- O conteúdo é autoral, coerente e substancialmente melhor do que a interface atual comunica.
- Os artigos formam um corpo editorial reconhecível, e não uma coleção aleatória de posts.
- Existe uma progressão temática: operação e crédito → relatórios e sistemas → agentes → arquitetura → governança → taxonomia, conhecimento e memória organizacional.
- Os textos usam bons títulos, decks, perguntas de abertura e conclusões memoráveis.
- A marcação semântica é razoável: headings, `time`, canonical, metadados, skip link, foco visível, responsividade e `prefers-reduced-motion`.
- O site é leve, estático, simples de publicar e não depende de backend para funcionar.
- A página Sobre é transparente sobre competências consolidadas e competências em desenvolvimento.
- A página Projetos protege adequadamente código privado, infraestrutura e informações confidenciais.
- O PageAgent possui ativação explícita, aviso ao visitante e não expõe chave de API no repositório.

### O que está fraco

- A interface comunica um portfólio SaaS genérico, não um caderno editorial de pensamento aplicado.
- A paleta roxa, os gradientes, as sombras, os cantos arredondados e os cards repetidos fazem o site parecer uma variação de template.
- O bloco visual dos cards é apenas um marcador tipográfico. Ele não explica, prova nem amplia o significado do artigo.
- As páginas de artigo são longas colunas de texto dentro de um card branco. O conteúdo tem ritmo de ensaio, mas a experiência tem ritmo de documento.
- Não existe hero visual, capa, figura de abertura, diagrama de capítulo, destaque de evidência ou composição editorial.
- A home mistura posicionamento, catálogo, projetos, newsletter e vários grupos de artigos. Ela é funcional, mas não conduz uma leitura com começo, desenvolvimento e destino.
- O artigo em destaque aparece também na listagem de Tecnologia & IA e só é removido por JavaScript. Isso mostra que parte da arquitetura editorial está sendo corrigida no cliente em vez de nascer de um modelo de conteúdo único.
- A navegação cronológica entre artigos é uma sequência hard-coded em `site.js`. O histórico recente mostra commits recorrentes para corrigir navegação, destaque e sitemap.
- Metadados de artigos são duplicados entre cada HTML, a home, o JavaScript e o sitemap. Isso aumenta o risco de datas, categorias, links e títulos divergirem.
- Existem três camadas de CSS incrementais, com regras de header, hero, card e responsividade distribuídas entre arquivos. Isso dificulta consolidar uma linguagem visual.
- O site público tem mais de uma identidade de conteúdo: blog pessoal, portfólio, fontes públicas para agentes e biblioteca de habilidades. Essas camadas ainda não estão claramente separadas na experiência.
- O PageAgent é um recurso interessante, mas o carregador é global. Em um site editorial, um launcher fixo externo pode competir com a leitura e introduzir uma dúvida de privacidade/performance.

### Oportunidade central

O site já possui a matéria-prima de uma publicação autoral sobre como conhecimento operacional se transforma em processos, sistemas, produtos e agentes confiáveis.

A reformulação deve fazer a interface revelar essa tese. A mudança não é trocar roxo por outra cor: é transformar um catálogo de textos em uma experiência editorial de sistemas reais.

## 3. Objetivo

Transformar o site em uma publicação-portfólio premium, legível e visualmente autoral, na qual:

1. a credibilidade profissional aparece antes da tecnologia;
2. o blog se torna o centro intelectual da experiência;
3. cada artigo recebe um visual com função narrativa;
4. projetos e biblioteca demonstram construção prática;
5. a navegação permite descobrir relações entre artigos;
6. o site continua rápido, acessível, responsivo e publicável como artefato estático.

## 4. Público prioritário

Públicos considerados na proposta:

- gestores e líderes de operações, cobrança, dados e transformação;
- profissionais de produto, IA aplicada e arquitetura de soluções;
- recrutadores e lideranças avaliando capacidade de conectar negócio e tecnologia;
- pessoas que acompanham o pensamento do Filipe sobre agentes, governança e conhecimento;
- leitores técnicos que querem entender os temas sem depender de jargão excessivo.

A experiência deve funcionar para alguém que chega por um artigo específico e para alguém que chega pela home sem conhecer Filipe.

## 5. Tese da reformulação

> Filipe Guardia conecta a realidade da operação ao desenho de sistemas, produtos e agentes de IA — preservando contexto, governança, memória e responsabilidade humana.

O site deve mostrar essa tese em três provas:

- experiência real de operação e cobrança;
- pensamento editorial sobre sistemas, trabalho e IA;
- construção prática de produtos, automações e ambientes governados.

## 6. Narrativa da experiência

A narrativa recomendada é:

1. **A realidade antes da ferramenta**  
   O visitante entende de onde vem a autoridade: processo real, dados, regras, exceções e decisões.

2. **O problema que merece ser estruturado**  
   Os artigos mostram que relatórios, documentos, prompts e modelos isolados não resolvem a fragilidade do processo.

3. **A passagem para sistemas inteligentes**  
   Agentes, roteamento, MCP, harnesses e software orientado à intenção aparecem como meios para ampliar o trabalho — não como mágica.

4. **Os limites que tornam a capacidade confiável**  
   Governança, permissões, memória, taxonomia, rastreabilidade e supervisão são apresentados como parte da solução.

5. **O que pode ser construído**  
   Projetos e biblioteca mostram que a tese vira protótipo, produto, automação e método.

6. **Próxima conversa**  
   O contato deixa de ser um formulário genérico e passa a ser o convite para discutir um problema real.

O modo de experiência recomendado é **híbrido**:

- editorial e contínuo nas páginas de artigo;
- exploratório na biblioteca e no arquivo do blog;
- controlado e direto nas páginas Sobre, Projetos e Contato.

Não recomendo transformar todos os artigos em uma experiência 3D ou em uma animação longa. A sofisticação virá da relação entre texto, imagem, diagrama, ritmo e navegação.

## 7. Direções visuais possíveis

### Direção A — Caderno de Sistemas Reais — recomendada

**Conceito:** uma publicação editorial contemporânea sobre trabalho, operação, conhecimento e tecnologia.

**Composição:** grid editorial assimétrico, muito espaço em branco, grandes títulos, colunas de leitura bem definidas, imagens em escala de capa e diagramas inseridos como argumentos.

**Tipografia:** contraste entre uma serif editorial para títulos, citações e momentos de tese, e uma sans neutra para leitura, metadados e interface. O contraste deve ser sóbrio, não ornamental.

**Cor:** base marfim/grafite, roxo profundo como continuidade da identidade existente e um acento variável por série. O roxo deixa de ser o fundo de todos os componentes e passa a funcionar como assinatura.

**Imagem:** ilustrações conceituais, diagramas construídos, composições editoriais e poucos registros documentais quando houver material próprio ou licenciado.

**Ritmo:** abertura forte, pausa, argumento visual, texto, evidência, conclusão. Cada artigo possui uma imagem de capa e pelo menos um momento visual interno quando isso aumentar compreensão.

**Força:** traduz melhor a tese e transforma o blog em uma publicação reconhecível.

**Risco:** exige disciplina de direção de arte e um sistema de assets consistente para não virar uma coleção de imagens bonitas sem unidade.

### Direção B — Atlas Operacional

**Conceito:** o site como um atlas de processos, sistemas e decisões.

**Composição:** grids mais precisos, linhas, nós, trilhas, mapas, fluxos, matrizes e pequenos indicadores. A home poderia parecer um mapa de capacidades.

**Tipografia:** sans técnica de alta legibilidade, títulos compactos e numeração editorial.

**Cor:** grafite, branco, azul-violeta, verde de estado e vermelho de bloqueio, usados sem dashboardizar tudo.

**Imagem:** diagramas, mapas de dependência, fluxos, camadas de arquitetura e visualizações de decisão.

**Força:** comunica domínio de sistemas, governança e arquitetura com muita clareza.

**Risco:** pode ficar frio, excessivamente corporativo ou próximo de uma documentação técnica.

### Direção C — Trabalho Humano, Sistemas Vivos

**Conceito:** mostrar a passagem entre pessoas, experiência, ferramentas e sistemas.

**Composição:** imagens documentais ou editoriais de mesas de trabalho, anotações, telas, documentos e gestos, combinadas a tipografia e chamadas laterais.

**Tipografia:** serif mais humana para narrativa, sans para orientação e dados.

**Cor:** tons quentes de papel, vinho/roxo, azul escuro e um acento âmbar.

**Imagem:** fotografia própria ou licenciada, colagens, ilustração editorial e detalhes de artefatos reais.

**Força:** aproxima o posicionamento do leitor e humaniza tecnologia e operação.

**Risco:** depende de um conjunto de fotografias com qualidade e direitos consistentes; imagens geradas não devem simular documentação real.

### Recomendação

Recomendo a Direção A, incorporando a precisão diagramática da Direção B e pequenos sinais humanos da Direção C.

A razão é narrativa: o site precisa ser autoral e editorial, mas a autoridade de Filipe vem de conectar pessoas, processos e sistemas. A direção A permite que texto, imagem e diagrama alternem funções sem deixar a experiência parecida com um dashboard ou com um portfólio de agência.

## 8. Estratégia geral de imagens e assets

### Princípio

Cada asset deve provar, explicar, orientar, comparar, humanizar ou criar ritmo editorial. “Enfeitar” não será considerado função suficiente.

### Tipos que serão usados

- **Composição editorial:** para capas e teses abstratas;
- **Diagrama/SVG:** para fluxos, camadas, ciclos, hierarquias e limites;
- **Visualização de dados:** apenas quando houver comparação, distribuição ou relação real;
- **Ilustração conceitual gerada:** para metáforas difíceis de fotografar;
- **Fotografia/documentação:** somente com material próprio, licenciado ou claramente reutilizável;
- **Screenshot:** somente quando demonstrar um produto/processo e houver autorização;
- **Sem asset:** quando texto e tipografia forem mais claros.

### Sistema de capa

Cada artigo terá:

- uma capa principal para o hero;
- uma versão de card/listagem;
- uma descrição de ponto focal e comportamento de crop;
- alt text semântico;
- formato responsivo;
- fallback quando imagens estiverem desabilitadas;
- metadado social específico quando possível.

As capas não devem repetir a mesma imagem com apenas uma cor diferente. A unidade virá da composição, da moldura, da tipografia, do tratamento cromático e da gramática visual compartilhada.

### Produção

- Diagramas serão construídos como SVG/HTML para manter nitidez, acessibilidade e edição.
- Conceitos abstratos poderão ser gerados com IA após aprovação do Gate 1, sempre com prompts alinhados à direção.
- Não usarei imagens de banco genéricas de robôs, hologramas, pessoas olhando para telas ou cérebros luminosos.
- Não usarei screenshots ou dados corporativos sem autorização.
- Os assets serão locais, comprimidos e carregados de forma responsiva.

## 9. Estratégia visual por artigo

| Artigo | Tese central | Visual recomendado | Local | Função |
|---|---|---|---|---|
| Pix Parcelado | O Pix Parcelado reorganiza risco, crédito, conversão e cobrança. | Composição editorial/diagrama do fluxo consumidor → banco → empresa, com o risco mudando de lugar. | Hero e diagrama na seção de renegociação. | Tornar visível a transferência de risco e o efeito na cadeia de cobrança. |
| Copilot Studio | Quem conhece a operação pode passar de usuário a construtor de soluções. | Ilustração editorial de uma especialista conectando blocos de processo a um agente; sem imitar a interface proprietária. | Hero. | Humanizar a tese de autonomia operacional e no-code. |
| Da planilha ao agente | A IA amplia quem conhece o negócio; não substitui contexto e julgamento. | Diagrama de transformação planilha → regras → agente → revisão humana. | Após a abertura e na seção do exemplo de despesas. | Mostrar a passagem de informação para fluxo de decisão controlado. |
| IA não começa no prompt | A qualidade nasce do briefing, não de uma fórmula mágica de prompt. | Composição editorial de um briefing em seis campos: problema, objetivo, público, contexto, limites e qualidade. | Hero e framework no modelo prático. | Dar forma visual à estrutura que o texto defende. |
| Quando a IA vira colega de trabalho | A adoção muda a distribuição de tarefas e responsabilidades. | Swimlane humano/agente com etapas de consulta, preparação, revisão e aprovação. | Hero ou entre as seções 1 e 2. | Explicar colaboração sem antropomorfizar a IA. |
| Software em torno de agentes | O centro do produto passa de telas para intenção, com a interface como supervisão. | Arquitetura radial: intenção no centro; agente, dados, ferramentas, aprovação e interface ao redor. | Hero e seção sobre telas. | Mostrar por que adicionar um chat não basta. |
| Quando relatórios viram sistemas | Relatórios devem evoluir para capacidades contínuas de análise, decisão e execução. | Ciclo visual dados → interpretação → decisão → ação → evidência → aprendizado. | Entre as seções 3 e 4. | Converter a tese de “relatório como etapa” em um sistema compreensível. |
| MCP | O MCP padroniza a ponte entre agentes, ferramentas e dados, mas não substitui APIs nem governança. | Ilustração conceitual de um conector universal acompanhada de diagrama técnico simples. | Hero e seção “em linguagem simples”. | Usar a metáfora USB-C com rigor, sem reduzir o artigo a um ícone. |
| O modelo não é o sistema | O modelo é apenas o motor; o sistema depende de harness, regras, ferramentas, memória e controle. | Esquema em camadas/cutaway: modelo, instruções, ferramentas, memória, guardrails, observabilidade e aprovação. | Hero ou seção dos componentes. | Explicar o conceito de harness de modo visual e reutilizável. |
| Uma IA para cada tarefa | Roteamento escolhe caminho, modelo, ferramentas e nível de risco adequados. | Mapa de roteamento com pedidos diferentes indo para leitura, análise, código, agente especialista ou aprovação humana. | Hero e exemplo prático. | Tornar custo, privacidade, complexidade e risco visíveis como critérios. |
| A IA que sabe quando parar | Autonomia confiável depende de limites, permissão mínima, contenção e parada. | Escada de permissão: leitura → preparação → execução isolada → ação externa, com uma barreira de confirmação. | Hero e seção de permissões. | Mostrar que parar é uma capacidade do sistema, não uma falha. |
| Curso não transforma empresa | Transformação é um ciclo de entender, decidir, construir, medir e aprender. | Diagrama circular de cinco movimentos, com evidências alimentando o ciclo seguinte. | Hero ou seção “transformação como sistema”. | Diferenciar aprendizagem consumida de mudança incorporada. |
| Sem vocabulário comum, a IA não entende a empresa | Taxonomia e metadados criam um vocabulário compartilhado para pessoas e agentes. | Árvore de termos em que sinônimos de áreas diferentes convergem para conceitos canônicos e metadados. | Hero e exemplo dos documentos. | Mostrar como a estrutura reduz ambiguidade e melhora busca. |
| Documento não é base de conhecimento | Arquivos só viram conhecimento utilizável quando possuem estrutura, contexto, permissões e manutenção. | Pilha visual de cinco camadas: conteúdo, estrutura, metadados, permissões e manutenção. | Hero e seção “boa base tem camadas”. | Explicar por que RAG não transforma bagunça em conhecimento. |
| A memória da empresa não pode morar na cabeça das pessoas | Memória institucional preserva contexto, decisões, evidências, exceções e histórico. | Composição editorial de conhecimento saindo do ponto individual e formando uma linha do tempo/grafo institucional; sem literalizar “cérebro brilhante”. | Hero e timeline após a seção sobre memória como sistema. | Tornar visível a passagem de dependência individual para memória compartilhada. |

## 10. Home, blog e listagens

### Home

A home deve deixar de ser um catálogo longo e passar a ser a porta de entrada para a tese.

Estrutura recomendada:

1. hero de posicionamento com um visual-síntese de operação → sistema;
2. prova de autoridade em texto curto, sem três cards genéricos;
3. artigo/ensaio em destaque com capa grande;
4. caminhos de leitura por série;
5. seleção editorial de artigos com composição assimétrica;
6. projetos como provas de construção;
7. biblioteca pública como camada secundária;
8. contato como convite para discutir problemas reais.

### Blog/arquivo

Criar uma página de arquivo editorial própria, sem depender apenas de `index.html#artigos`.

Ela deve conter:

- título e tese do caderno;
- artigo em destaque;
- filtros leves por série, tema e ano;
- trilhas de leitura;
- listagem cronológica;
- cards com capa, deck, data, tempo, série e tipo de visual;
- estados acessíveis de filtro e retorno ao conjunto completo.

Os filtros devem aumentar descoberta, não transformar o blog em dashboard.

### Cards

Os cards devem abandonar o bloco de sigla como visual principal.

Cada card terá:

- capa ou mini-diagrama;
- série temática;
- título;
- deck curto;
- data e leitura;
- indicação discreta do tipo de asset;
- ação de leitura.

A composição não será uma grade uniforme de três cards repetidos. Haverá um card principal, itens secundários e uma sequência editorial/cronológica. O card será uma porta de entrada, não um resumo completo do artigo.

## 11. Páginas de artigo

A página de artigo deve se comportar como um ensaio digital.

Estrutura recomendada:

1. breadcrumb e série;
2. título, deck, data e tempo;
3. hero visual específico;
4. abertura em coluna de leitura confortável;
5. sumário/progresso persistente no desktop;
6. capítulos com respiro, citações e listas bem compostas;
7. visual interno no ponto em que o argumento muda;
8. fontes como bloco editorial rastreável;
9. pergunta final e artigos relacionados;
10. navegação anterior/próximo gerada pelo modelo de conteúdo.

O texto continua protagonista. As imagens entram nos momentos em que reduzem abstração ou organizam relações. Não haverá uma imagem decorativa a cada seção.

No mobile, a experiência será linear: capa, texto, figura, texto. No desktop, poderá haver uma coluna visual sticky ou um rail lateral, desde que não prejudique leitura, teclado, zoom ou `prefers-reduced-motion`.

## 12. Sobre, Projetos, Contato e biblioteca

### Sobre

Reorganizar a página como narrativa de prática:

- quem Filipe é hoje;
- trajetória e mudança de camada;
- competências consolidadas e em evolução;
- método de trabalho;
- direção profissional.

A linha do tempo pode receber um tratamento visual editorial, sem virar currículo em cards.

### Projetos

Transformar os projetos em provas de trabalho:

- uma identidade visual/diagrama por projeto;
- problema, abordagem, estágio e o que demonstra;
- distinção clara entre público, privado, experimental e comercial;
- links de demonstração somente quando existirem.

### Contato

Manter simples e confiável, com menos aparência de formulário genérico. A mensagem deve orientar o visitante a explicar contexto, problema e tipo de conversa.

### Biblioteca pública e fontes Copilot

Incluir na arquitetura principal como “Biblioteca” ou “Recursos”, mas separar visualmente do blog.

A biblioteca é um catálogo de fontes para agentes e habilidades, com navegação temática própria. Ela não deve competir com os ensaios autorais nem parecer que todo conteúdo do site é um artigo.

As páginas de design systems e artefatos no nível raiz devem entrar no inventário de conteúdo. A decisão posterior será mantê-las como arquivo visual, movê-las para uma área de biblioteca ou preservar seus URLs com redirecionamento.

### PageAgent

Recomendo tirar o launcher global da leitura editorial. Ele pode:

- ficar em uma página/área “Explorar com IA”;
- aparecer apenas na biblioteca;
- ou permanecer como ativação explícita, mas com posicionamento menos intrusivo e aviso de privacidade mais próximo da ação.

A versão demo não deve ser tratada como funcionalidade central do blog.

## 13. Referências externas avaliadas

O [21st.dev](https://21st.dev/) é uma biblioteca/registro de componentes React e Tailwind. Ele pode ser útil para estudar ou adaptar um padrão isolado de busca, filtro, navegação ou interação, mas não deve definir a direção visual do site. A proposta atual não precisa dele como fundamento técnico.

As referências editoriais devem ser usadas para estudar princípios:

- [Awwwards — storytelling](https://www.awwwards.com/websites/storytelling/): ritmo, transição e relação entre narrativa e interação;
- [Tubik — editorial web design](https://tubikstudio.com/blog/media-editorial-website-design/): hierarquia, tipografia e organização de conteúdo;
- [Siteinspire — editorial](https://www.siteinspire.com/websites/category/editorial): repertório de layouts editoriais;
- [Awwwards — editorial websites](https://www.awwwards.com/academy/course/from-poster-to-screen-designing-editorial-based-websites): tipografia, grids, cor, elementos gráficos e direção de arte.

Nenhuma dessas referências autoriza copiar identidade, textos, imagens ou layouts exclusivos. O que será transferido são princípios de hierarquia, ritmo, grade, comportamento de asset e leitura.

## 14. Abordagem técnica recomendada

### Recomendação

Migrar a repetição estrutural para um site estático gerado por conteúdo, preferencialmente Astro com saída estática para GitHub Pages, mantendo HTML sem runtime como produto final.

A necessidade técnica não é “usar React”. É:

- uma fonte única para metadados dos 15 artigos;
- layouts compartilhados;
- navegação anterior/próximo gerada automaticamente;
- imagens responsivas e metadados sociais por artigo;
- assets locais;
- biblioteca e blog com modelos distintos;
- manutenção sem duplicar home, card, sitemap e artigo.

O output final continua sendo um site estático. JavaScript deve ficar restrito a menu, filtros, progressão de leitura e interações que realmente aumentem compreensão.

### Estrutura conceitual

- coleção de artigos com front matter;
- coleção de projetos;
- coleção de recursos/biblioteca;
- layout global;
- layout de artigo;
- componentes de capa, figura, diagrama, card, sumário, fontes e navegação;
- pipeline de imagens para AVIF/WebP/SVG;
- preservação dos URLs atuais de `artigos/*.html`, ou redirecionamentos explícitos;
- sitemap, canonical, Open Graph e dados estruturados gerados a partir do conteúdo.

### Alternativa de menor mudança

Manter HTML/CSS/JS puro, consolidar os três CSS em um design system e criar um pequeno gerador de páginas. É a alternativa mais conservadora, mas oferece menos ergonomia para crescer a publicação.

### O que não recomendo

Adotar Next.js, um dashboard de componentes ou 21st.dev como base apenas para produzir efeitos visuais. Isso adicionaria dependência, runtime ou complexidade sem necessidade narrativa comprovada.

## 15. Destino e publicação

- Destino canônico recomendado: GitHub Pages, preservando o endereço atual.
- Vercel: opcional para preview, validação e eventualmente publicação alternativa; não é requisito de qualidade.
- O build deve continuar produzindo um pacote local executável e baixável.
- Nenhuma dependência externa deve ser necessária para a leitura principal.
- Imagens e diagramas devem ser locais e comprimidos.

## 16. Riscos

- Produzir capas bonitas, mas genéricas ou sem função narrativa;
- quebrar URLs antigas, sitemap ou navegação;
- perder performance com imagens pesadas;
- gerar inconsistência entre 15 capas;
- usar visualizações sem dados reais;
- deixar a página excessivamente animada;
- misturar blog, biblioteca e fontes técnicas em uma única hierarquia confusa;
- alterar o conteúdo editorial sem aprovação;
- expor informações corporativas em screenshots, exemplos ou imagens;
- manter o PageAgent experimental como distração ou ponto de desconfiança;
- adotar uma stack maior do que a experiência precisa.

## 17. Lacunas e premissas

- Não há fotografias, retrato ou banco de imagens fornecidos no repositório.
- A proposta assume que imagens conceituais geradas e diagramas construídos são aceitáveis para os temas abstratos.
- A proposta assume que os textos dos artigos devem ser preservados, com mudanças visuais e de estrutura editorial, não uma reescrita automática.
- A proposta assume que a biblioteca pública e as fontes Copilot devem continuar existindo, mas em uma camada de navegação separada.
- A publicação renderizada não pôde ser aberta pelo navegador conectado durante o Discovery; a inspeção visual desta etapa foi feita no HTML, CSS e JavaScript efetivamente presentes na branch `main`.
- Não foram encontrados assets de imagem nos 15 artigos; o inventário completo de arquivos visuais deve ser confirmado antes da migração.

## 18. Decisões necessárias para aprovar o Gate 1

1. Aprovar a Direção A — **Caderno de Sistemas Reais**, com precisão diagramática da Direção B.
2. Aprovar a experiência híbrida: blog editorial com scrollytelling leve e biblioteca explorável.
3. Aprovar o uso de diagramas construídos e imagens conceituais geradas, sem stock genérico.
4. Confirmar se a foto pessoal deve entrar no site. Se não houver material, usaremos a direção conceitual sem simular documentação.
5. Aprovar a preservação dos textos atuais como base, sem reescrita ampla nesta rodada.
6. Aprovar a separação visual entre Blog, Projetos e Biblioteca pública.
7. Aprovar Astro/static-first como recomendação técnica, ou escolher a alternativa HTML/CSS/JS conservadora.
8. Confirmar GitHub Pages como destino canônico e Vercel apenas como preview opcional.
9. Decidir se o PageAgent continua global, passa para a Biblioteca/Explorar com IA ou é removido da primeira versão da reformulação.

## 19. Próximo passo após aprovação

Depois da aprovação do Gate 1:

1. fechar o inventário de assets;
2. construir o storyboard da home, arquivo, artigo, projeto, biblioteca e contato;
3. produzir uma primeira família visual de capas e diagramas;
4. montar o scaffold técnico aprovado;
5. migrar um artigo-piloto e a home;
6. renderizar e fazer inspeção visual real;
7. corrigir antes de expandir para os 15 artigos;
8. executar QA de conteúdo, narrativa, visual, experiência e técnica.


