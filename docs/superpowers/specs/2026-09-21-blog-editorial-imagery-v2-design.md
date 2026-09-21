# Blog Filipe Guardia — Editorial Imagery v2

**Status:** design aprovado em conversa, aguardando revisão do spec  
**Data:** 2026-09-21  
**Branch:** `design/blog-editorial-imagery-v2`  
**Escopo:** somente imagens editoriais, capas e figuras/diagramas. Não redesenhar layout, tipografia, navegação, componentes ou identidade estrutural do site.

## 1. Objetivo

Elevar 100% das imagens públicas do Blog Filipe Guardia para um padrão editorial premium e estabelecer um processo permanente para que todo novo artigo já nasça com o mesmo padrão visual.

O sistema separa claramente duas funções:

- **Cover / imagem externa:** impacto editorial e metáfora visual. Deve funcionar em home, cards, arquivo de artigos, compartilhamento e topo do artigo.
- **Figure / diagrama interno:** explicação precisa. Deve tornar uma ideia, sistema, decisão, arquitetura ou fluxo mais fácil de compreender.

As fotos pessoais de Filipe não fazem parte desta revisão e não devem ser regeneradas.

## 2. Princípios de direção de arte

A linguagem visual deve parecer uma publicação editorial premium sobre sistemas, transformação digital, trabalho e inteligência artificial.

Buscar:
- composição cinematográfica e editorial;
- materialidade plausível: vidro, papel, metal, luz, superfícies, profundidade;
- metáforas visuais discretas;
- hierarquia forte;
- contraste controlado;
- uso da linguagem Guard.IA como assinatura, não como preenchimento dominante;
- coerência entre imagens sem transformar o blog em uma série de imagens idênticas.

Evitar:
- cérebro brilhando;
- robôs humanoides genéricos;
- hologramas;
- mãos apontando para interfaces falsas;
- estética Matrix/cyberpunk/gamer;
- “site roxo”;
- stock executivo;
- texto aleatório gerado dentro de imagem;
- diagramas compostos apenas por cartões retangulares e setas.

## 3. Covers premium

### 3.1 Função

Toda imagem usada fora do corpo do artigo deve ser tratada como peça editorial premium.

A cover:
- é conceitual, não literal;
- deve comunicar o tema em poucos segundos;
- deve sobreviver a thumbnail;
- não deve conter o título do artigo dentro da imagem;
- deve preservar área útil para crops responsivos;
- deve ser criada em 16:9 como master editorial;
- pode ser fotográfica, material, abstrata ou uma composição conceitual sofisticada.

### 3.2 Ferramentas

Ordem preferencial:
1. ChatGPT Image para conceito, composição editorial e metáforas visuais;
2. Google Flow / Imagen para exploração cinematográfica, materialidade e fotografia conceitual;
3. composição controlada quando uma geração precisar de acabamento adicional.

Não existe obrigação de usar o mesmo gerador para todos os artigos. O padrão é definido pela direção de arte, não pelo fornecedor.

## 4. Figures / diagramas premium

### 4.1 Regra central

A figura interna continua sendo explicativa. Não substituir informação precisa por uma imagem decorativa.

O novo padrão, porém, deixa de aceitar como resultado final diagramas que sejam apenas:
- caixas alinhadas;
- setas genéricas;
- parágrafos dentro de cartões;
- Mermaid sem tratamento editorial;
- SVG tecnicamente correto, porém visualmente cru.

### 4.2 Arquitetura híbrida

Fluxo obrigatório:

```text
conteúdo correto
→ modelo conceitual
→ escolha do arquétipo visual
→ estrutura determinística
→ direção artística
→ composição premium
→ validação semântica
→ exportação
→ QA responsivo
```

A informação — rótulos, relações, sequência, arquitetura, números e direção das setas — deve permanecer determinística.

Image generation pode produzir:
- materialidade;
- metáforas;
- objetos;
- textura;
- ambiente;
- profundidade;
- elementos ilustrativos.

Texto e estrutura lógica não devem depender da capacidade de um gerador de imagem escrever corretamente.

### 4.3 Formatos

Preferir SVG quando:
- há texto relevante;
- a figura precisa permanecer extremamente legível;
- a estrutura é vetorial;
- mobile precisa de redimensionamento perfeito.

Preferir composição raster premium quando:
- o valor está em materialidade, iluminação ou ilustração;
- o diagrama usa uma metáfora espacial/visual forte;
- toda informação crítica puder permanecer controlada em camada final.

É permitido combinar fundo/elementos raster com overlays vetoriais controlados.

## 5. Arquétipos visuais para figures

A skill deve selecionar o arquétipo em função do conteúdo, e não repetir sempre o mesmo layout.

Arquétipos iniciais:

1. **Transformation Path** — redução, evolução ou mudança de estado.
2. **Layered System** — responsabilidades ou infraestrutura em camadas.
3. **Hub & Orbit** — núcleo persistente usado por componentes substituíveis.
4. **Pipeline** — transformação sequencial com mudança de natureza.
5. **Decision Landscape** — decisão entre caminhos com critérios.
6. **Before → After** — contraste entre dois estados.
7. **Architecture Map** — componentes, contratos e fronteiras.
8. **Cycle / Feedback Loop** — sistema que aprende ou realimenta decisões.

A lista pode crescer, mas não deve virar catálogo decorativo.

## 6. Golden set v2

Antes de reconstruir o acervo inteiro, seis peças servirão como referência canônica.

### 6.1 Antes de automatizar com IA, simplifique o processo

**Cover — conceito:** “complexidade removida antes da inteligência”.

Direção:
- uma estrutura física/processual excessivamente complexa ocupa o lado esquerdo;
- partes são removidas, fundidas ou simplificadas ao longo do quadro;
- somente o fluxo essencial alcança uma pequena camada inteligente no final;
- visual editorial sofisticado, não infográfico;
- materiais reais/abstratos: papel, trilhas, placas ou peças mecânicas discretas;
- sensação de clareza emergindo do excesso.

Não mostrar robô, cérebro, dashboard ou quatro caixas com os quatro destinos.

**Figure — arquétipo:** Decision Landscape / Transformation Path.

Conteúdo obrigatório:
1. Eliminar — não cria valor / não precisa existir.
2. Simplificar — reduzir regras, campos e passagens.
3. Automatizar — regra conhecida / execução previsível.
4. Agenciar — ambiguidade / contexto / julgamento.

Direção:
- representar aumento de complexidade como terreno, degraus, percurso ou níveis;
- “Eliminar” deve parecer o caminho de menor custo e “Agenciar” o de maior complexidade;
- a figura precisa deixar visualmente claro que complexidade só é adicionada quando compra capacidade;
- usar pouco texto e hierarquia forte.

### 6.2 Agentes estão virando infraestrutura

**Cover — conceito:** “o modelo deixou de carregar a máquina sozinho”.

Direção:
- um núcleo inteligente pequeno aparece encaixado em uma infraestrutura operacional maior;
- camadas de estado, ferramentas, sessão e execução sustentam o trabalho;
- metáfora de infraestrutura: rack, estrutura, trilhos, chassi, instalação técnica ou sistema de suporte;
- o modelo é uma peça valiosa, mas não domina a composição;
- premium, físico e plausível.

Não mostrar quatro cartões empilhados nem interface fictícia de agente.

**Figure — arquétipo:** Layered System.

Conteúdo obrigatório:
- Modelo: interpreta, raciocina e escolhe próximos passos.
- Harness: sessão, contexto, ferramentas, aprovações, recuperação.
- Produto e governança: regras, permissões, critérios, auditoria e experiência humana.
- Trabalho real: arquivos, sistemas, pessoas, decisões e efeitos.

Direção:
- criar um corte arquitetural/industrial em camadas;
- mostrar responsabilidades como partes que se encaixam;
- harness deve parecer camada operacional que envolve e sustenta o modelo;
- trabalho real deve aparecer como destino/efeito, não apenas quarta caixa;
- leitura clara em desktop e mobile.

### 6.3 O modelo pode mudar. A memória precisa ficar.

**Cover — conceito:** “trocar o cérebro de cálculo sem apagar a história”.

Direção:
- uma camada persistente preserva marcas, registros ou memória enquanto diferentes módulos de inteligência podem ser encaixados e removidos;
- metáfora física sofisticada: arquivo, placa, núcleo de memória, camadas translúcidas, rastro persistente;
- transmitir continuidade e portabilidade;
- nenhum fornecedor ou logotipo específico;
- atmosfera premium e atemporal.

**Figure — arquétipo:** Hub & Orbit / Layered Infrastructure.

Conteúdo obrigatório:
- modelos/agentes substituíveis;
- memória persistente compartilhada;
- distinção entre histórico bruto, memória/fatos consolidados e fontes/artefatos;
- agentes consultam contexto sem possuir a memória;
- mensagem: memória é infraestrutura; modelo é componente substituível.

Direção:
- memória como núcleo ou fundação persistente;
- modelos entram e saem sem alterar o núcleo;
- proveniência/fontes devem ser visualmente diferenciadas de fatos consolidados;
- evitar desenho simplista “Modelo A → caixa de memória → Agente”.

## 7. Guard.IA Editorial Imagery

O golden set aprovado passa a definir a referência canônica de:
- contraste;
- materialidade;
- densidade;
- nível de abstração;
- profundidade;
- uso de cor;
- tipografia das figures;
- proporções;
- quantidade de texto;
- grau de sofisticação.

Não é necessário que todas as imagens pareçam pertencer ao mesmo ensaio fotográfico. Elas devem parecer pertencer à mesma publicação.

## 8. Skill / playbook permanente

Criar uma instrução reutilizável `blog-visual-editorial` no repositório.

Responsabilidades:
1. ler o artigo completo;
2. identificar a tese principal;
3. definir a metáfora da cover;
4. decidir ChatGPT Image, Flow/Imagen ou composição controlada;
5. identificar quais ideias realmente precisam de figure;
6. escolher o arquétipo da figure;
7. preservar o conteúdo semântico;
8. gerar/produzir alternativas;
9. registrar conceito, ferramenta, prompt, master e decisão;
10. gerar derivados web;
11. validar mobile/desktop;
12. impedir publish sem assets aprovados.

## 9. Pipeline de artigo novo — regra dos sábados

Quando o usuário pedir para construir um novo artigo, criação visual faz parte do Definition of Done.

Fluxo:

```text
pesquisa / pauta
→ artigo
→ revisão factual/editorial
→ tese visual
→ cover premium
→ figure premium quando o conteúdo justificar
→ seleção dos masters
→ AVIF/WebP/SVG
→ alt + metadata
→ integração
→ browser QA
→ publish
```

Não é necessário que o usuário peça novamente “faça uma imagem”.

A ausência de cover premium bloqueia publicação.

A figure só é obrigatória quando existir conteúdo que ganhe compreensão com visualização. Não criar diagrama meramente decorativo.

## 10. Metadata e rastreabilidade

Reutilizar o pipeline já existente de `editorialImageManifest.json`, masters, derivados e auditoria.

Adicionar aos assets novos:
- função;
- conceito;
- arquétipo;
- ferramenta/modelo, quando conhecido;
- prompt final ou briefing;
- master;
- status;
- data de aprovação;
- alt;
- focal point;
- notas de QA.

## 11. Compatibilidade com o site atual

Esta iniciativa não deve:
- alterar o layout do blog;
- redesenhar header, footer ou navegação;
- mudar tipografia do site;
- trocar estrutura dos cards;
- mudar Astro ou o sistema de rotas;
- interferir com PRs paralelas que atuem em CSS/UI.

Mudanças esperadas:
- assets editoriais;
- manifests/metadados de imagem;
- documentação editorial;
- skill/playbook;
- testes/gates diretamente relacionados aos assets.

## 12. Estratégia segura para trabalho concorrente

Como o blog está sendo modificado em paralelo:

1. trabalhar em branch isolada;
2. nunca editar arquivos de UI/CSS apenas para acomodar as novas imagens, salvo defeito comprovado e revisão separada;
3. antes de qualquer integração, atualizar a branch com o `main` mais recente;
4. comparar PRs abertas e arquivos tocados;
5. não fazer merge automático desta iniciativa;
6. manter masters em caminhos novos até a seleção final;
7. substituir referências antigas apenas na etapa de integração.

## 13. QA

Para cada cover:
- thumbnail;
- artigo desktop;
- artigo mobile;
- crop;
- compressão;
- focal point;
- coerência com o título sem literalidade excessiva.

Para cada figure:
- conteúdo semanticamente correto;
- nenhum rótulo truncado;
- nenhum relacionamento incorreto;
- compreensível sem depender apenas de cor;
- legível em 390 px;
- funciona em desktop grande;
- não parece slide corporativo genérico;
- não parece Mermaid cru;
- não parece “AI slop”.

## 14. Critérios de aceite do golden set

O golden set só é aprovado se:

1. as três covers parecem imagens de uma publicação premium;
2. nenhuma cover parece um diagrama;
3. os três diagramas explicam mais que os atuais;
4. cada diagrama usa linguagem visual apropriada ao conteúdo, sem repetir o mesmo template;
5. texto e relações nos diagramas estão corretos;
6. o conjunto demonstra que o padrão pode escalar para todos os artigos existentes;
7. mobile e desktop passam em QA;
8. a direção visual pode ser repetida no próximo artigo sem depender de memória informal do operador.

## 15. Rollout após o golden set

Depois da aprovação das seis peças:

**Fase A — covers**
- inventariar todas as covers;
- gerar novas covers premium para as que ainda são SVG técnico/conceitual;
- reavaliar também os masters raster existentes contra o novo golden set;
- substituir somente após aprovação individual.

**Fase B — figures**
- revisar 100% das figures atuais;
- preservar conteúdo semântico;
- redesenhar visualmente todas que estiverem abaixo do novo padrão;
- escolher arquétipo específico por artigo.

**Fase C — QA integral**
- visitar todas as rotas de artigos;
- mobile + desktop;
- conferir assets, crops, legibilidade e performance;
- só então encerrar a migração visual.

## 16. Fora de escopo

- redesenho do site;
- alterações de layout sem relação direta com asset;
- regeneração de fotos pessoais;
- mudanças editoriais substanciais nos artigos;
- troca de framework;
- CMS novo;
- animações adicionais sem função editorial.
