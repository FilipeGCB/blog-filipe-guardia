# Responsive Density Pass — 2026-09-21

Status: IMPLEMENTAÇÃO AUTORIZADA
Método de decisão: Cognitive OS V1.5 (framing → materialidade → menor intervenção suficiente → next proof → stop)

## 1. Problema real

O site tem boa identidade editorial em desktop, mas a mesma linguagem visual está superdimensionada e comprimida em telas menores.

Sintomas observados em produção:

- home em 390 px: hero ≈ 1326 px de altura;
- imagem da home em 390 px: ≈ 612 px de altura;
- H1 da home em 390 px: ≈ 55 px;
- statement “Antes da IA...” em 390 px: ≈ 38 px e ≈ 455 px de seção;
- Biblioteca em 945 px: intro ≈ 790 px;
- em 768–1000 px o layout já vira uma coluna, mas o painel decorativo “Operação → Estrutura → Sistema” ainda ocupa ≈ 324–351 px;
- em 1366 px o H1 da home chega a ≈ 85 px e o statement a ≈ 57 px;
- várias seções chegam a ≈ 96–109 px de padding vertical por lado.

Conclusão: o problema não é identidade visual. É escala, densidade e breakpoints.

## 2. Decisão

Escolher **revisão sistêmica de densidade responsiva**, não remendos por página e não redesign completo.

Preservar:

- paleta;
- tipografia serif editorial;
- linguagem Night → Editorial;
- Guard.IA / marca;
- conteúdo;
- hierarquia visual;
- comportamento editorial de desktop.

Alterar somente:

1. escala tipográfica;
2. alturas mínimas;
3. spacing vertical;
4. crop/ratio do hero;
5. tratamento tablet;
6. tamanho de blocos decorativos.

## 3. Regimes responsivos

### Mobile — até 660 px

Princípio: conteúdo primeiro.

- Hero não pode depender de viewport alta.
- Imagem mobile deve respeitar a proporção 4:5 do asset mobile para evitar crop estrutural do rosto.
- H1 principal: alvo 40–44 px em 390–430 px.
- H1 de página: alvo 38–42 px.
- H2 principal: alvo 30–34 px.
- Statement: alvo 28–32 px.
- Section padding: 48–56 px.
- Painéis decorativos sem informação nova podem desaparecer.
- Botões continuam com touch target >= 44 px.

### Tablet / janela estreita — 661 a 1050 px

Princípio: não usar “desktop empilhado”.

- Layout principal pode virar uma coluna.
- “Operação → Estrutura → Sistema” vira faixa horizontal compacta.
- Intro visual: alvo <= 520 px em 768–945 px.
- Section padding: 56–64 px.
- Tipografia intermediária, sem saltos de 13–16vw.

### Desktop — acima de 1050 px

Princípio: manter o caráter cinematográfico com escala 15–25% menor.

- Home hero: alvo 640–720 px em 1366 px.
- H1 home: alvo 68–76 px em 1366 px.
- Statement: alvo 300–360 px em 1366 px.
- Statement text: alvo 42–48 px em 1366 px.
- Section padding: 68–80 px.
- Page intro comum: alvo ≈ 440–560 px.

## 4. Home

### Imagem

Mobile usa o asset mobile existente e apresenta a imagem em 4:5, sem crop estrutural.

Não gerar nova foto.

### Hierarquia

Mobile:

1. imagem;
2. eyebrow;
3. H1;
4. deck;
5. ações;
6. legenda compacta;
7. próxima seção.

Desktop mantém composição imagem + texto, porém com hero e tipografia menores.

## 5. PageIntroVisual

Desktop:
- duas colunas;
- painel assinatura menor;
- H1 e paddings reduzidos.

Tablet:
- uma coluna;
- assinatura vira faixa horizontal “Operação → Estrutura → Sistema”;
- sem min-height cinematográfico.

Mobile:
- assinatura removida;
- intro deixa o conteúdo seguinte aparecer rapidamente.

## 6. Contato

- intro menos alta;
- sequência de canais compacta;
- em tablet, sequência horizontal;
- em mobile, sequência decorativa removida;
- reduzir H1 e spacing;
- cards diretos preservados.

## 7. Artigos e páginas internas

Aplicar apenas redução sistêmica de:
- H1;
- section padding;
- page intro/article hero.

Não alterar composição editorial dos artigos nem seus assets neste passe.

## 8. Gates objetivos

O passe só pode ser publicado se:

### Layout
- nenhum overflow horizontal em 390, 430, 768, 945, 1366, 1920 e 2560 px;
- touch targets existentes continuam >= 44 px;
- navegação continua funcional.

### Home
- hero <= 1050 px em 390/430;
- imagem mobile apresentada em ratio 4:5 e sem crop estrutural;
- H1 <= 44 px em 390 px;
- statement <= 360 px em 390/430;
- hero entre 620 e 740 px em 1366;
- H1 entre 64 e 78 px em 1366.

### PageIntroVisual
- Biblioteca intro <= 500 px em 768 e 945;
- assinatura tablet <= 120 px;
- assinatura oculta <= 660;
- H1 de intro <= 44 px em 390/430.

### Qualidade
- build/check passam;
- suíte Playwright passa;
- páginas Home, Biblioteca, Contato, Sobre, Projetos, Artigos e um artigo real são verificadas em todos os viewports-alvo.

## 9. Next proof

Depois da implementação, medir novamente o DOM nos mesmos viewports.

Se os limites forem atendidos e o QA visual não revelar perda de hierarquia, parar.

Se houver problema residual, corrigir o componente responsável. Não abrir um redesign geral.
