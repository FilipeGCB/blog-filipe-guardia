# Blog Filipe Guardia — Visual & Image System v1

**Status:** Design aprovado para implementação
**Data:** 2026-08-26
**Branch de design:** `design/visual-system-v1`
**Escopo:** `site-rebuild` + assets editoriais associados

## 1. Objetivo

Transformar o blog em uma publicação digital de alto impacto visual, profissional e responsiva, com identidade consistente entre home, artigos, projetos, biblioteca, página Sobre e demais rotas.

O sistema deve corrigir quatro problemas principais do estado atual:

1. excesso de espaço vazio lateral em monitores grandes;
2. imagens visualmente inconsistentes, quebradas, incompletas, sem função editorial clara ou incompatíveis com o restante do site;
3. ausência de um processo obrigatório de criação/validação de imagens antes da publicação de novos posts;
4. falta de uma identidade visual única capaz de unir fotografia, capas conceituais, diagramas técnicos e conteúdo editorial.

O resultado desejado é uma publicação que cause impacto imediato nas entradas de seção, preserve legibilidade em artigos longos e pareça ter sido desenhada especificamente para qualquer largura de tela relevante.

## 2. Princípio visual aprovado

Direção aprovada: **B — entradas escuras/cinematográficas + leitura clara/editorial**.

O site deve trabalhar com dois mundos visuais pertencentes à mesma marca:

### 2.1 Night / Impact
Usado em:
- hero da home;
- topo dos artigos;
- entradas de páginas institucionais quando houver benefício visual;
- momentos de alta carga emocional/visual;
- fotografias e imagens conceituais de destaque.

Características:
- preto e grafite profundos;
- roxo como acento de marca, nunca como excesso decorativo;
- branco quente;
- âmbar discreto proveniente de luz/materialidade fotográfica;
- contraste forte;
- linguagem cinematográfica e editorial, não gamer/cyberpunk.

### 2.2 Editorial / Reading
Usado em:
- corpo dos artigos;
- grids extensos;
- páginas com muito conteúdo;
- diagramas técnicos;
- blocos de leitura e documentação.

Características:
- papel quente;
- superfícies muito claras;
- tinta quase preta;
- roxo usado com parcimônia para links, foco e hierarquia;
- âmbar para atenção/decisão;
- verde apenas quando tiver semântica clara.

## 3. Paleta de referência

A implementação final poderá ajustar tons para contraste e consistência, mas deve permanecer próxima da seguinte direção:

### Night
- `--night-950: #09090C`
- `--night-900: #121118`
- `--night-800: #1B1822`
- `--night-text: #F7F3EC`
- `--night-muted: #B8B0BD`
- `--violet: #7956E8`
- `--violet-deep: #4C2D86`
- `--amber: #B98758`

### Editorial
- `--paper: #F4F0E9`
- `--surface: #FFFDF8`
- `--surface-warm: #EFE8DC`
- `--ink: #17151B`
- `--muted: #6C6670`
- `--line: #D9D1C5`
- `--brand: #3D235C` ou variante recalibrada que dialogue com o violeta Night
- `--warm: #BB8754`
- `--green: #2E7564`

A paleta não deve criar o efeito “site roxo”. O roxo é assinatura, não preenchimento dominante.

## 4. Sistema responsivo profissional

O site deve ser **mobile-first, fluido e orientado ao espaço disponível**, não a aparelhos específicos.

### 4.1 Não usar uma única largura global

O estado atual usa um container central limitado a aproximadamente 1180 px, o que cria excesso de vazio lateral em monitores grandes. O novo sistema deve separar três tipos de largura:

#### Visual shell
Para hero, fotografias, grids amplos e seções de impacto.

Direção:
- largura fluida;
- ocupa grande parte da viewport;
- `max-width` aproximado de 1680–1760 px;
- gutters responsivos;
- permite que 1440p, 4K e ultrawide sejam usados visualmente.

#### Editorial shell
Para navegação, títulos, cards e conteúdo estruturado.

Direção:
- `max-width` aproximado de 1400–1500 px;
- centralizado;
- ainda amplo em desktop;
- não deve parecer “coluna pequena no meio de uma tela gigante”.

#### Reading shell
Para texto longo.

Direção:
- aproximadamente 760–820 px;
- comprimento de linha confortável;
- não aumenta indefinidamente em telas grandes.

### 4.2 Gutters

Usar espaçamento fluido, conceitualmente equivalente a:

`clamp(16px, 3vw, 64px)`

A implementação pode usar tokens intermediários e ajustes por contexto.

### 4.3 Tipografia fluida

Usar `clamp()` para:
- h1;
- h2;
- subtítulos;
- gaps principais;
- paddings verticais de seções.

Títulos devem crescer em telas grandes sem virar elementos desproporcionais. Texto de leitura deve permanecer estável.

### 4.4 Grids

Preferir:
- CSS Grid;
- `auto-fit`/`auto-fill` quando aplicável;
- `minmax()`;
- container queries em componentes que realmente se beneficiem delas.

Evitar grids que dependam de uma lista fixa de breakpoints só para “parecer responsivo”.

### 4.5 Viewport gates obrigatórios

Validar visualmente pelo menos em:
- 390×844;
- 768×1024;
- 1366×768;
- 1440×900;
- 1920×1080;
- 2560×1440;
- 3840×2160.

Esses tamanhos são gates de QA, não a lista de dispositivos suportados.

### 4.6 Ultrawide

Em ultrawide:
- hero e elementos visuais podem expandir;
- texto de leitura não deve expandir além do limite confortável;
- o conteúdo não pode parecer perdido no centro;
- nenhum elemento importante deve ficar excessivamente afastado do eixo de leitura.

## 5. Sistema de imagens

### 5.1 Regra de função editorial

Nem toda imagem deve ser uma fotografia.

O sistema deve diferenciar:

#### Cover
Função emocional/conceitual.
- chama atenção;
- apresenta o assunto;
- pode ser fotográfica ou uma composição conceitual premium;
- nunca deve parecer ilustração genérica de IA.

#### Figure
Função explicativa.
- diagrama;
- arquitetura;
- taxonomia;
- fluxo;
- matriz;
- visualização de sistema;
- comparação técnica.

Diagramas bons não devem ser substituídos por imagens “bonitas” que explicam menos.

### 5.2 Direção artística global

Evitar:
- cérebro brilhando;
- robôs genéricos;
- mãos segurando hologramas;
- interfaces flutuantes sem sentido;
- neon excessivo;
- cyberpunk;
- Matrix;
- stock photo de executivo;
- pessoas em terno sem necessidade;
- UI fictícia usada como se fosse screenshot real;
- estética gamer RGB;
- texto aleatório dentro de imagem;
- excesso de roxo;
- visual “AI slop”.

Buscar:
- fotografia editorial;
- materialidade real;
- madeira, vidro, papel, metal e luz plausível;
- textura;
- profundidade;
- composição cinematográfica;
- metáforas visuais discretas;
- coerência física;
- mesma linguagem entre assets de uma série.

## 6. Imagem aprovada da home — regra de imutabilidade

A fotografia aprovada para a home é a imagem em que Filipe aparece:
- sentado;
- com uma mão no queixo;
- laptop à direita;
- caderno aberto na mesa;
- monitores ao fundo;
- cidade pela janela;
- ambiente escuro e contemporâneo.

Essa imagem passa a ser **fonte de verdade visual** para o hero da home.

### Regras
- não regenerar o rosto;
- não alterar expressão;
- não alterar pose;
- não trocar cenário;
- não mudar composição central;
- não reestilizar;
- não “embelezar” a identidade;
- não esticar horizontalmente ou verticalmente.

Permitido:
- upscale;
- conversão de formato;
- compressão;
- crop responsivo;
- extensão lateral por composição quando necessário, desde que não altere Filipe;
- criação de derivados para diferentes densidades de pixel.

Master-alvo: aproximadamente **3840×2160** ou equivalente 16:9 de alta qualidade.

## 7. Home

### 7.1 Hero

Deve ser o maior momento de impacto visual do site.

Desktop:
- Night;
- imagem aprovada dominante;
- texto integrado ao quadro sem “card flutuante” genérico;
- fotografia usando largura muito maior que no site atual;
- composição sem esmagar texto ou rosto;
- sem barra lateral vazia excessiva.

Mobile:
- crop específico definido previamente;
- preservar rosto e informação principal;
- não simplesmente reduzir a composição desktop;
- evitar que texto cubra a face;
- CTA permanece acessível.

### 7.2 Story “Operação → Estrutura → Sistema → Agente governado”

A estrutura conceitual existente é aprovada e deve ser preservada.

As quatro imagens atuais devem ser revisadas/regeneradas como **uma família visual única**.

Requisitos:
- mesma linguagem material;
- mesma iluminação-base;
- mesmas proporções;
- mesmo violeta de marca;
- parecer quatro frames do mesmo ensaio/editorial;
- não parecer quatro gerações independentes.

## 8. Arquivo de artigos

Entrada:
- Night ou transição Night→Editorial;
- título forte;
- sem foto pessoal adicional competindo com o conteúdo.

Arquivo:
- fundo claro/editorial;
- cards visuais grandes;
- capas consistentes;
- leitura fácil de série, data e tempo de leitura;
- filtros claros e acessíveis.

Todas as capas existentes devem ser auditadas e classificadas como:
- manter;
- redesenhar;
- regenerar;
- substituir por outra linguagem visual;
- manter SVG técnico;
- descartar.

## 9. Artigo individual

### 9.1 Topo

Usar Night:
- título;
- metadados;
- tags;
- cover de grande impacto.

### 9.2 Corpo

Transição para Editorial:
- papel quente;
- texto escuro;
- reading shell;
- sumário lateral quando a largura comportar;
- sumário recolhido ou refluído em telas menores.

### 9.3 Figures

Figuras técnicas devem usar sistema gráfico único:
- fundo claro;
- tinta/grafite para estrutura;
- roxo para fluxo principal;
- âmbar para decisão/atenção;
- verde só com função semântica;
- tipografia limpa;
- acessibilidade de contraste;
- legibilidade em mobile;
- exportação vetorial quando possível.

### 9.4 Wide moments

Algumas figuras podem “escapar” do reading shell e ocupar o editorial shell quando isso melhorar a compreensão.

## 10. Página Sobre

A página deve ganhar um retrato editorial exclusivo.

Direção:
- profissional, porém despojada;
- sem terno;
- luz mais natural que o hero da home;
- ambiente contemporâneo;
- maior humanidade;
- fidelidade facial alta;
- aparência real, não influencer de tecnologia.

A foto deve comunicar:

> uma pessoa que veio da operação e hoje constrói sistemas.

A linha do tempo permanece, mas deve ganhar mais hierarquia visual e melhor comportamento responsivo.

## 11. Projetos

Os projetos atuais devem deixar de ser apenas cards textuais.

Cada projeto recebe uma peça visual editorial própria:
- Transformação digital em cobrança e planejamento;
- CFO-IA;
- Hermes;
- Presentation Intelligence System.

Regras para projetos privados:
- não inventar screenshot “real”;
- não expor código, infraestrutura ou informação confidencial;
- usar interpretação visual explícita;
- representar arquitetura, fluxo, produto em uso, diagramas ou materialidade de construção;
- manter diferenciação visual entre projetos sem quebrar a identidade geral.

## 12. Biblioteca

A Biblioteca deve evitar excesso de fotografia.

Direção:
- hero conceitual forte ligado a conhecimento estruturado;
- coleções com linguagem gráfica consistente;
- aparência de biblioteca técnica premium;
- mais “arquivo/método/sistema” e menos “banco de imagens”.

Os cards atuais podem ganhar um pequeno sistema visual (ícones, padrões, mini-diagramas ou códigos de cor), desde que a estética continue editorial.

## 13. Contato, Obrigado e 404

Não inserir imagem por obrigação.

Contato:
- limpo;
- direto;
- sofisticado;
- CTA claro.

Obrigado:
- confirmação simples;
- linguagem de marca.

404:
- composição tipográfica forte;
- humor discreto se fizer sentido;
- sem arte gratuita.

## 14. Componente de imagem responsiva

O componente visual central deve ser refeito para lidar com imagens de forma profissional.

Requisitos:
- remover o fallback/base64 improvisado do hero atual;
- usar assets reais e versionados;
- `srcset`;
- `sizes`;
- `<picture>` quando fizer sentido;
- WebP/AVIF;
- dimensões explícitas (`width`/`height`) para evitar layout shift;
- `aspect-ratio` previsível;
- `object-fit` apropriado;
- `object-position`/focal point configurável;
- lazy loading por padrão;
- eager apenas em LCP/hero;
- alt text obrigatório;
- suporte a crops distintos para mobile/desktop quando necessário;
- suporte a imagens 1x/2x;
- evitar enviar master 4K para celular.

## 15. Pipeline obrigatório para novos posts

Nenhum novo artigo deve ser publicado sem asset visual validado antes.

Fluxo obrigatório:

1. texto estabilizado;
2. conceito visual definido;
3. prompt registrado;
4. geração de alternativas;
5. seleção humana;
6. master preservado;
7. crop(s) responsivo(s);
8. AVIF/WebP derivados;
9. alt text;
10. focal point;
11. integração no artigo;
12. validação em mobile e desktop;
13. publicação.

A ordem é importante: **imagem antes do publish**.

## 16. Registro de imagem no repositório

Cada imagem gerada e aprovada deve possuir metadados suficientes para reprodução e manutenção.

Para cada asset relevante, registrar:
- slug/artigo/página;
- função (`hero`, `cover`, `figure`, `project`, `portrait` etc.);
- conceito;
- prompt final;
- prompt negativo, se usado;
- modelo/ferramenta quando conhecido;
- resolução original;
- proporção;
- master;
- derivados;
- crop/focal point;
- alt text;
- data;
- status (`draft`, `approved`, `deprecated`);
- observações de identidade, se houver pessoa real.

## 17. Estrutura de assets recomendada

Exemplo:

```text
site-rebuild/public/assets/editorial/
  brand/
  portraits/
    filipe/
      home/
      about/
  covers/
    <slug>/
      master/
      web/
  figures/
    <slug>/
  projects/
    <project-slug>/
  library/
  shared/
```

A implementação pode adaptar nomes, mas deve separar masters de derivados web.

## 18. Performance

Metas:
- não sacrificar LCP por causa de imagens gigantes;
- hero carregado com prioridade adequada;
- demais imagens lazy;
- sem CLS causado por imagens;
- sem base64 gigante embutido em HTML;
- evitar múltiplos formatos redundantes quando não houver ganho;
- gerar tamanhos responsivos adequados;
- compressão visualmente lossless quando possível;
- preservar qualidade facial e de microdetalhe onde isso for relevante.

## 19. Acessibilidade

Requisitos mínimos:
- contraste WCAG adequado;
- foco visível;
- navegação por teclado;
- alvos de toque adequados;
- suporte a `prefers-reduced-motion`;
- alt text contextual;
- não depender só de cor para explicar diagramas;
- heading hierarchy correta;
- imagem decorativa marcada como decorativa quando aplicável.

## 20. Testes visuais e técnicos

Antes de publicar a revisão visual:

### Build
- `npm ci`
- `npm run check`
- `npm run build`
- `npm run preserve:legacy`
- `npm run audit:routes`

### Viewports
Validar todas as rotas principais em:
- 390×844;
- 768×1024;
- 1366×768;
- 1440×900;
- 1920×1080;
- 2560×1440;
- 3840×2160.

### Rotas mínimas
- home;
- artigos;
- 3 artigos representativos;
- sobre;
- projetos;
- biblioteca;
- contato;
- 404.

### Inspeção visual
Verificar:
- crop;
- rosto;
- proporção;
- texto sobre imagem;
- espaços laterais;
- quebras de grid;
- legibilidade;
- artefatos de compressão;
- contraste;
- coerência de cor;
- consistência entre capas;
- imagens faltantes;
- assets quebrados;
- overscroll/overflow horizontal.

## 21. Política de aprovação de imagens com identidade pessoal

Quando uma fotografia de Filipe for aprovada:
- vira asset canônico;
- a aprovação se aplica àquela composição específica;
- qualquer alteração de rosto, pose, ambiente ou linguagem exige nova aprovação;
- upscale e derivados técnicos não exigem nova aprovação se preservarem conteúdo e identidade;
- regeneração nunca deve substituir silenciosamente uma imagem aprovada.

## 22. Inventário inicial a revisar

A implementação deve auditar:
- todos os covers declarados em `site-rebuild/src/data/articles.ts`;
- todas as figures correspondentes;
- imagens de `site-rebuild/public/assets/editorial/generated`;
- imagens da sequência da home;
- hero atual;
- imagens de Sobre (a criar);
- imagens de Projetos (a criar);
- imagem/linguagem de Biblioteca (a criar);
- qualquer asset editorial legado ainda referenciado.

Cada item deve receber uma decisão explícita: manter, ajustar, regenerar, redesenhar, descartar ou arquivar.

## 23. Critérios de sucesso

A revisão será considerada bem-sucedida quando:

1. não houver imagens quebradas ou truncadas nas rotas publicadas;
2. todas as imagens parecerem parte da mesma publicação;
3. a home tiver impacto equivalente ao hero aprovado;
4. artigos continuarem confortáveis para leitura longa;
5. o site usar melhor monitores grandes sem prejudicar mobile;
6. nenhum rosto aprovado sofrer distorção por resize/crop indevido;
7. novos posts tiverem processo de imagem documentado e reproduzível;
8. 4K, QHD, desktop comum, tablet e mobile passarem nos gates visuais;
9. o repositório conter documentação suficiente para repetir o padrão em posts futuros;
10. a identidade visual comunicar sistemas, tecnologia, operação, inteligência e construção sem cair em clichês de IA.

## 24. Fora de escopo desta revisão

- reescrever o conteúdo editorial dos artigos, salvo pequenos ajustes necessários a layout/alt text;
- transformar o blog em SPA;
- adicionar CMS novo;
- migrar do Astro;
- criar tema escuro para o corpo de leitura dos artigos;
- substituir diagramas explicativos por imagens decorativas;
- expor projetos privados;
- alterar a identidade facial da fotografia aprovada.

## 25. Decisões aprovadas nesta especificação

- direção B: Night nas entradas + Editorial na leitura;
- sistema responsivo baseado em visual/editorial/reading shells;
- home com fotografia aprovada como fonte de verdade;
- revisão total do inventário de imagens;
- nova família visual para a sequência da home;
- novo retrato exclusivo para Sobre;
- visuais editoriais próprios para Projetos;
- Biblioteca com linguagem técnica premium;
- pipeline obrigatório de geração antes de publicar artigos;
- documentação de prompts e derivados no repositório;
- imagem pessoal aprovada torna-se asset imutável em conteúdo;
- testes de responsividade e imagem em múltiplas resoluções.
