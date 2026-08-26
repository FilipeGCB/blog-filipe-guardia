# Sistema Visual Editorial — Blog Filipe Guardia

## Objetivo

Transformar o site em uma publicação pessoal de alto impacto visual sem parecer landing page genérica, site de agência, template de IA ou portfólio corporativo. A referência estética é **editorial contemporâneo + sistemas reais + fotografia cinematográfica**, com contraste entre matéria física, tecnologia e raciocínio.

O site deve comunicar, antes de qualquer texto longo:

> trabalho real → estrutura → sistema → inteligência aplicada.

## Princípios obrigatórios

1. **Fotografia humana é rara e importante.** Retratos de Filipe só entram quando existe uma foto de referência aprovada e a identidade facial foi preservada. Nunca regenerar ou “embelezar” o rosto depois da aprovação.
2. **Novo post não publica imagem improvisada.** O asset visual é preparado antes da publicação e passa por revisão de contexto, enquadramento e legibilidade.
3. **Capa não é diagrama técnico.** Cards e hero de artigo usam uma capa editorial de impacto. Diagramas ficam dentro do artigo, onde explicam uma ideia.
4. **Nenhuma imagem pode ser deformada.** É proibido esticar largura/altura. Raster editorial usa `object-fit: cover`; diagrama usa `object-fit: contain` e margem interna.
5. **Texto não deve depender de texto gerado dentro da imagem.** Títulos, legendas e labels relevantes são HTML. Isso evita letras falsas, erros e quebra de acessibilidade.
6. **O roxo é assinatura, não preenchimento.** Ele aparece como acento, linhas, pequenos brilhos e estados. Grandes áreas usam carvão, marfim, grafite, madeira e tons quentes.
7. **Monitor grande deve parecer intencional.** O shell editorial pode crescer até aproximadamente 1.840 px; texto de leitura continua limitado a ~760 px.
8. **Mobile não é crop aleatório do desktop.** Pontos focais e alturas são definidos por breakpoint.

## Paleta canônica

### Base clara
- Paper: `#F2EEE7`
- Surface: `#FFFDF9`
- Surface warm: `#EAE1D5`
- Ink: `#15121A`
- Muted: `#6C6570`
- Line: `#D5CCBF`

### Base escura
- Night: `#0C0A10`
- Night soft: `#17121E`
- Graphite: `#27222C`

### Assinatura
- Brand / plum: `#4A235F`
- Brand deep: `#2A1536`
- Electric violet: `#7C4DFF`
- Brass / warm: `#C99457`
- Soft brass: `#E0B77D`

O site deve evitar roxo saturado em grandes fundos. A cor de assinatura funciona melhor em 5–15% da área visual.

## Linguagem de fotografia

Retratos e imagens ambientais devem ter:

- composição editorial 16:9 ou 3:2;
- luz motivada e fisicamente plausível;
- tons de pele naturais;
- contraste cinematográfico sem HDR artificial;
- ambiente real, vivido e funcional;
- tecnologia presente como ferramenta, não como clichê futurista;
- nenhum holograma, Matrix code, neon gamer ou escritório genérico;
- detalhe suficiente para telas 4K, com master preferencial de 3840×2160 para hero.

### Retrato de Filipe

Fonte de verdade: fotografia aprovada pelo usuário. Depois de aprovada:

- não regenerar;
- não alterar anatomia facial;
- não mudar barba/cabelo sem pedido explícito;
- não aplicar harmonização, rejuvenescimento ou skin smoothing;
- adaptações permitidas: upscale, extensão de canvas, crop, gradação de cor, compressão web e área negativa para texto.

## Capas editoriais de artigos

As capas devem ser geradas a partir de um sistema visual, não escolhidas isoladamente.

### Estrutura
- proporção: 16:9;
- base escura ou material neutro;
- 1 metáfora visual dominante;
- 2–4 elementos secundários no máximo;
- sem parágrafos ou título embutido na imagem;
- roxo/violeta como sinal de inteligência/decisão;
- brass/âmbar como sinal de trabalho, matéria, risco ou ação;
- escala e respiro suficientes para crop em card e hero.

### Famílias visuais

- **Conhecimento organizacional:** camadas, arquivo, memória, grafos, taxonomia, registro, continuidade.
- **Sistemas e agentes:** componentes, conexões, interfaces, ferramentas, passagem de contexto, fluxos.
- **Governança e segurança:** fronteiras, gates, checkpoints, trilhas, zonas de decisão.
- **Transformação e trabalho:** ciclos, passagem de estado, antes/depois, trabalho físico ganhando estrutura.
- **Operação e crédito:** fluxo, risco, liquidez, parcelamento, decisão, transferência de responsabilidade.

## Diagramas dentro dos artigos

Diagramas explicativos permanecem vetoriais quando forem semanticamente úteis. Regras:

- sempre mostrar o conteúdo inteiro;
- fundo claro ou dark-panel consistente com o artigo;
- `object-fit: contain`;
- padding interno mínimo equivalente a 4–6% da largura;
- legenda obrigatória quando o gráfico não é autoexplicativo;
- nenhuma ilustração decorativa deve substituir uma figura que realmente ensina algo.

## Layout e largura

### Desktop
- shell editorial: `min(1840px, viewport - margem fluida)`;
- seções de cards e projetos usam toda essa largura;
- hero pode ser full-bleed;
- leitura de artigo continua em ~720–760 px;
- TOC ocupa coluna lateral sem empurrar o texto para uma faixa minúscula.

### Notebook / tablet
- shell reduz progressivamente;
- grids passam de 3 para 2/1 colunas;
- imagens mantêm proporção e ponto focal.

### Mobile
- 16:9 pode virar 4:3 quando necessário para preservar o assunto;
- texto sempre abaixo/por cima com contraste garantido;
- nenhuma figura técnica é cropada.

## Workflow obrigatório para um novo post

1. Finalizar a tese e o texto.
2. Identificar a metáfora visual principal em uma frase.
3. Definir se a capa é: fotografia, objeto/material editorial, ou abstração de sistema.
4. Gerar **antes de publicar** pelo menos 2 candidatos de capa.
5. Revisar em três tamanhos: hero desktop, card 16:9 e mobile.
6. Rejeitar qualquer candidato com texto falso, anatomia ruim, objetos truncados, perspectiva impossível ou clichê de IA.
7. Gerar master em alta resolução; não usar upscale destrutivo.
8. Exportar WebP para web e manter master fora do caminho crítico do site quando necessário.
9. Atualizar `articles.ts` com `cover`, `coverAlt` e figura explicativa.
10. Rodar `npm run check`, `npm run build`, `npm run audit:assets` e `npm run audit:routes`.
11. Só então publicar.

## Checklist de QA visual

- [ ] A imagem faz sentido sem ler o título?
- [ ] O assunto principal permanece inteiro em 16:9?
- [ ] Não há elementos cortados de forma involuntária?
- [ ] A imagem não parece stock photo nem “AI slop”?
- [ ] A paleta conversa com carvão + marfim + plum + brass?
- [ ] A imagem continua boa em 1440, 1920 e 2560 px de largura?
- [ ] Mobile mantém assunto e contraste?
- [ ] Diagramas aparecem inteiros?
- [ ] Alt text descreve o visual sem repetir o título?
- [ ] O asset tem fallback e não bloqueia o conteúdo textual?

## Regra de manutenção

Ao criar uma página ou artigo novo, este documento é a fonte de verdade visual. Se for necessário romper uma regra, documentar o motivo no PR/commit. Não criar um segundo “design system paralelo” para uma página isolada.