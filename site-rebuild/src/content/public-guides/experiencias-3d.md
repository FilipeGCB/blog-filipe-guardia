---
origin: chatgpt
origem: chatgpt
date: 2026-07-30
data: 2026-07-30
updated: 2026-07-30
atualizado: 2026-07-30
type: master_guide
tipo: guia-mestre
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
catalog_id: 14
version: v1.1
versao: v1.1
tags: [copilot, 3d-web, threejs, webgl, webgpu, gltf, grafos, acessibilidade, performance, independente]
---

# Guia Mestre para Experiências 3D na Web

## 0. Declaração de independência

Este guia é completo, independente e reutilizável.

Ele deve ser suficiente para orientar o Copilot a receber um problema, dados, modelos ou conteúdo e entregar uma experiência 3D final na web, sem depender de qualquer outro guia.

Outros guias podem ser associados posteriormente por um prompt externo para acrescentar domínio, narrativa, animação ou arquitetura de produto específica. Essa associação não é requisito deste documento.

Aplicar também:

- [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]].

## 1. Contrato de execução

> O resultado obrigatório é uma aplicação 3D final, útil, navegável, acessível por alternativa equivalente, performática, testada, corrigida e pronta para publicação.

Não encerrar em:

- modelo girando;
- shader isolado;
- partículas;
- cena demonstrativa;
- screenshot;
- benchmark;
- wireframe;
- prova de conceito;
- recomendação de stack;
- código parcial.

## 2. Finalidade

Usar 3D para apoiar:

- compreensão espacial;
- exploração;
- comparação;
- orientação;
- estrutura;
- profundidade;
- relações;
- escala;
- fluxo;
- arquitetura;
- rede;
- produto;
- simulação;
- narrativa.

```text
problema
→ hipótese de valor do 3D
→ representação
→ interação
→ descoberta
→ decisão ou ação
```

3D é meio, não objetivo.

## 3. Natureza metodológica e referências

Este guia é uma síntese de engenharia gráfica, interação espacial, visualização, produto e acessibilidade. Não representa um framework único existente.

Referências e padrões principais:

- Three.js;
- WebGL 2;
- WebGPU conforme suporte;
- glTF 2.0;
- `<model-viewer>`;
- Web Animations;
- Web Workers;
- OffscreenCanvas quando apropriado;
- WCAG 2.2;
- `prefers-reduced-motion`;
- Core Web Vitals;
- progressive enhancement;
- princípios de visualização e interação espacial.

## 4. Regra de decisão 3D

Antes de implementar, responder:

1. Que pergunta fica melhor em 3D?
2. O que os eixos representam?
3. O que o eixo Z significa?
4. Que informação pode ser perdida?
5. Como o usuário mantém orientação?
6. Qual alternativa 2D existe?
7. Qual é o custo de performance?
8. Como reduzir movimento?
9. Que dispositivos e navegadores serão usados?
10. Que tarefa concreta será melhorada?

Sem respostas fortes, usar 2D.

## 5. Quando usar

- modelo de produto;
- arquitetura;
- digital twin;
- rede;
- grafo;
- mapa espacial;
- experiência educacional;
- showroom;
- instalação;
- ciência;
- simulação;
- fluxo;
- narrativa espacial;
- visualização de camadas.

## 6. Quando não usar

- tabela;
- formulário;
- leitura principal;
- comparação numérica precisa;
- filtro frequente;
- dados sem significado espacial;
- dispositivo fraco sem fallback;
- acessibilidade sem alternativa;
- efeito promocional sem função;
- falta de conteúdo real.

## 7. Resultado esperado

O Copilot deve entregar:

- aplicação web completa;
- cena funcional;
- dados reais ou demonstração claramente identificada;
- câmera;
- controles;
- seleção;
- painel no DOM;
- alternativa 2D;
- perfis de qualidade;
- reduced motion;
- tratamento de incompatibilidade;
- responsividade;
- acessibilidade;
- segurança;
- performance medida;
- testes;
- build;
- README;
- relatório de testes;
- instruções de publicação;
- inventário e licença dos ativos.

## 8. Entradas mínimas

```yaml
three_d_inputs:
  objective:
  users:
  task:
  spatial_question:
  axes_meaning:
  scale:
  data_sources:
  models:
  interactions:
  devices:
  browsers:
  fallback:
  accessibility:
  performance:
  publication:
```

Quando entradas estiverem ausentes:

- não inventar dados;
- registrar premissas;
- usar placeholders explícitos;
- criar demonstração somente quando identificada como demonstração;
- não apresentar ativo genérico como produto final real.

## 9. Briefing 3D

```yaml
three_d_brief:
  business_objective:
  user_task:
  spatial_hypothesis:
  scene_type:
  interaction_model:
  information_hierarchy:
  success_criteria:
  constraints:
  risks:
```

## 10. Escolha de stack

### `<model-viewer>`

Usar para modelo único, produto simples, visualização glTF/GLB e AR opcional.

### Three.js

Usar para controle detalhado de cena, câmera, interação, dados dinâmicos e renderers personalizados.

### React Three Fiber

Usar quando o produto já for React e a integração justificar a dependência.

### Babylon.js ou equivalente

Considerar quando recursos específicos justificarem, registrando custo e benefício.

### Canvas ou SVG 2D

Usar como fallback ou alternativa equivalente.

### WebGPU

Usar como progressive enhancement, nunca como requisito sem fallback quando o ambiente não for controlado.

## 11. Critérios de escolha da stack

```yaml
stack_decision:
  product_framework:
  scene_complexity:
  data_volume:
  animation_complexity:
  target_browsers:
  target_devices:
  accessibility:
  team_skills:
  maintenance:
  fallback:
  decision:
```

## 12. Arquitetura

```text
Dados ou ativos
→ Modelo canônico
→ Modelo de cena
→ Layout
→ Objetos
→ Renderer
→ Câmera
→ Interação
→ UI no DOM
→ Acessibilidade
→ Observabilidade
```

Separar estado de domínio, estado da cena e objetos gráficos.

## 13. Contrato da cena

```yaml
scene_spec:
  id:
  purpose:
  coordinate_system:
  units:
  origin:
  bounds:
  axes_meaning:
  camera:
  lights:
  objects:
  interactions:
  animation:
  lod:
  quality_profiles:
  accessibility:
  fallback:
  performance_budget:
```

## 14. Modelo de dados

```ts
interface SceneNode {
  id: string;
  type: string;
  position?: [number, number, number];
  size?: number;
  label?: string;
  state?: string;
  metadata?: Record<string, unknown>;
}

interface SceneEdge {
  id: string;
  source: string;
  target: string;
  type: string;
  weight?: number;
  metadata?: Record<string, unknown>;
}
```

A fonte não deve ser acoplada diretamente ao renderer.

## 15. Sistema de coordenadas

Definir:

- unidades;
- origem;
- handedness;
- escala;
- orientação;
- bounds;
- transformação entre espaço de dados e espaço de cena.

Não misturar escalas sem normalização.

## 16. Câmera

Escolher perspectiva, ortográfica ou ambas conforme a tarefa.

Regras:

- near e far corretos;
- evitar clipping;
- movimento previsível;
- home view;
- fit selection;
- limites de zoom e rotação;
- reset;
- transições canceláveis;
- preservar orientação;
- não mover sem necessidade.

## 17. Controles

Possíveis:

- orbit;
- pan;
- zoom;
- select;
- focus;
- reset;
- fit;
- teclado;
- touch;
- first-person somente quando necessário.

Não obrigar gestos complexos.

## 18. Seleção e picking

Pode usar:

- raycasting;
- color picking;
- índice espacial;
- ID de instância;
- bounding volumes.

A seleção deve:

- possuir feedback claro;
- ser tolerante;
- atualizar painel no DOM;
- possuir alternativa por teclado;
- não depender somente de cor;
- indicar o objeto selecionado em texto;
- permitir limpar e voltar.

## 19. Objetos e geometrias

- compartilhar geometrias;
- compartilhar materiais;
- usar instancing;
- limitar transparência;
- evitar geometria excessiva;
- liberar recursos;
- recalcular bounds;
- não usar alta fidelidade sem benefício;
- manter IDs de domínio separados de IDs gráficos.

## 20. Materiais e iluminação

- iluminação simples e coerente;
- contraste suficiente;
- evitar reflexos que escondam dados;
- limitar sombras;
- usar bake quando adequado;
- não aplicar pós-processamento sem função;
- manter leitura em temas definidos;
- testar daltonismo e baixo contraste quando aplicável.

## 21. Ativos 3D

Preferir glTF ou GLB.

```text
origem
→ licença
→ limpeza
→ escala
→ otimização
→ compressão
→ LOD
→ poster
→ validação
```

Registrar:

```yaml
asset_manifest:
  id:
  source:
  license:
  author:
  format:
  size:
  triangles:
  textures:
  compression:
  lod:
  attribution:
```

## 22. Texturas

- dimensões adequadas;
- compressão;
- mipmaps;
- formatos suportados;
- atlas quando útil;
- evitar texturas gigantes;
- não colocar texto essencial em textura;
- considerar DPR e distância.

## 23. Animação

Tipos:

- transformação;
- skeletal;
- morph targets;
- timeline de câmera;
- transição de layout;
- dados ao longo do tempo.

Regras:

- movimento com função;
- cancelável;
- pausar fora da tela;
- respeitar reduced motion;
- evitar loops permanentes;
- evitar movimento que impeça seleção;
- não usar física quando interpolação simples resolver.

## 24. Física

Usar somente quando:

- colisão for parte da tarefa;
- comportamento físico representar o domínio;
- interação depender de simulação;
- custo for aceitável.

Não usar física apenas para decoração.

## 25. 3D para grafos e redes

Aplicar quando:

- clusters se sobrepõem em 2D;
- profundidade possui significado;
- visão macro ajuda;
- caminhos podem ser destacados;
- camadas ou tempo precisam de separação.

O eixo Z deve representar algo definido:

- nível;
- tempo;
- fonte;
- confiança;
- camada;
- profundidade hierárquica.

Nunca usar Z aleatório sem legenda.

## 26. Layout de grafo 3D

Possíveis:

- force 3D;
- hierárquico em camadas;
- radial esférico;
- clusters;
- timeline;
- circular com cautela.

Regras:

- seed determinístico;
- cálculo em worker;
- congelamento;
- persistência;
- limite de iteração;
- atualização incremental;
- redução para 2D;
- labels sob demanda;
- posição não é evidência.

## 27. Visualização de arquitetura

Possíveis representações:

- camadas;
- volumes;
- conexões;
- fluxo;
- dependências;
- estados;
- ambientes;
- tempo.

Evitar edifícios metafóricos quando não ajudarem a tarefa.

## 28. Visualização de produto

- controles simples;
- hotspots;
- variantes;
- exploded view;
- medidas;
- materiais;
- comparação;
- poster;
- carregamento sob demanda.

## 29. Simulações

Definir:

```yaml
simulation_spec:
  model:
  assumptions:
  inputs:
  outputs:
  timestep:
  determinism:
  validation:
  controls:
  limitations:
```

Não apresentar simulação como realidade sem validação.

## 30. UI no DOM

A interface principal deve permanecer no DOM:

- busca;
- filtros;
- detalhes;
- preview;
- configurações;
- ajuda;
- acessibilidade;
- mensagens de erro;
- ações críticas.

Canvas não deve conter sozinho a interface essencial.

## 31. Alternativa 2D

Obrigatória para informação essencial.

Pode ser:

- lista;
- tabela;
- diagrama;
- mapa 2D;
- imagem anotada;
- árvore;
- painel textual.

A alternativa deve permitir realizar a tarefa principal, não apenas exibir uma mensagem de incompatibilidade.

## 32. Escalabilidade

- instancing;
- point clouds quando adequado;
- batched geometry;
- level of detail;
- frustum culling;
- limite de arestas;
- limite de labels;
- clustering;
- agregação;
- streaming;
- workers;
- cancelamento;
- qualidade adaptativa;
- carregamento sob demanda.

## 33. Perfis de qualidade

```yaml
quality_profiles:
  low:
    pixel_ratio:
    shadows:
    postprocessing:
    labels:
    particles:
    object_limit:
  medium:
  high:
```

Selecionar por capacidade real do dispositivo.

## 34. Performance

```yaml
performance_budget:
  initial_js_kb:
  initial_asset_mb:
  first_scene_ms:
  target_fps_desktop:
  target_fps_mobile:
  max_draw_calls:
  max_triangles:
  max_visible_labels:
  memory_warning_mb:
```

Medir:

- FPS;
- frame time;
- draw calls;
- triangles;
- points;
- lines;
- memória;
- tempo de carregamento;
- compilação de shader;
- tempo de layout;
- latência de interação.

Regras:

- pausar fora da tela;
- evitar render contínuo em cena estática;
- limitar pixel ratio;
- pré-compilar quando apropriado;
- liberar recursos;
- tratar perda de contexto;
- degradar com segurança;
- manter fallback.

## 35. WebGPU

Tratar como progressive enhancement.

- detectar suporte;
- manter fallback WebGL 2 ou 2D;
- testar navegador-alvo;
- registrar diferenças;
- não depender de hardware indisponível;
- não usar recurso instável sem decisão explícita.

## 36. Workers e processamento paralelo

Usar para:

- parsing;
- layout;
- clustering;
- indexação;
- transformação;
- cálculos pesados;
- preparação de buffers.

Mensagens devem ser:

- versionadas;
- canceláveis;
- observáveis;
- validadas;
- limitadas em tamanho.

## 37. Responsividade

### Desktop

- visão completa;
- detalhes laterais;
- maior densidade;
- atalhos de teclado.

### Mobile

- visão simplificada;
- menos objetos e labels;
- perfil de baixa qualidade;
- painel em sheet;
- controles maiores;
- alternativa 2D como padrão quando necessário.

## 38. Reduced motion

Quando solicitado:

- remover voo;
- reduzir zoom;
- encurtar transições;
- pausar loops;
- evitar shake;
- reduzir física;
- preservar estado final;
- manter feedback funcional.

## 39. Acessibilidade

3D não substitui conteúdo.

Obrigatório:

- alternativa 2D;
- lista ou tabela;
- detalhes textuais;
- navegação por teclado;
- foco;
- reduced motion;
- opção de desligar animação;
- contraste;
- legendas;
- instruções;
- reset;
- evitar flashes;
- não exigir arraste preciso;
- anunciar seleção em texto.

## 40. Segurança

- validar dados;
- sanitizar labels;
- não executar conteúdo;
- controlar URLs;
- limitar tamanho;
- evitar shaders não confiáveis;
- aplicar CSP;
- não expor metadados sensíveis;
- não carregar ativos remotos desconhecidos;
- não incorporar segredos;
- validar arquivos glTF/GLB;
- documentar dependências.

## 41. Observabilidade

Registrar, quando autorizado:

- renderer;
- suporte WebGL/WebGPU;
- perfil de qualidade;
- FPS agregado;
- perda de contexto;
- falha de asset;
- falha de shader;
- tempo de carregamento;
- erros de interação;
- versão;
- release.

Não registrar dados sensíveis desnecessários.

## 42. Estratégia de testes

### Unidade

Transformações, layout, seleção, filtros, qualidade e serialização.

### Integração

Dados → cena, assets → loaders, worker → main thread, fallback e perda de contexto.

### Funcional

Carregar, selecionar, focar, resetar, filtrar, trocar qualidade e trocar 2D/3D.

### Compatibilidade

Chromium, Firefox, Safari quando alvo, navegador corporativo, GPU integrada e ausência de WebGL.

### Performance

Cold load, milhares de objetos, atualização, memória, dispositivo fraco e conexão lenta.

### Acessibilidade

Teclado, reduced motion, alternativa 2D, zoom e leitor de tela no painel DOM.

### Segurança

Assets malformados, URLs, labels, arquivos grandes, dependências e CSP.

## 43. Antipadrões

- 3D sem significado;
- eixo Z aleatório;
- partículas permanentes;
- labels ilegíveis;
- câmera livre sem orientação;
- pós-processamento excessivo;
- sombra pesada;
- render contínuo;
- ausência de fallback;
- UI principal em canvas;
- texto essencial em textura;
- carregar tudo de uma vez;
- voo obrigatório;
- uso de física decorativa;
- shader complexo sem benefício;
- modelo pesado sem LOD.

## 44. Gates de qualidade

1. objetivo;
2. valor do 3D;
3. tarefa do usuário;
4. significado espacial;
5. dados e ativos;
6. modelo de cena;
7. fallback;
8. stack;
9. câmera;
10. interação;
11. performance;
12. acessibilidade;
13. segurança;
14. testes;
15. documentação;
16. publicação.

## 45. Estrutura recomendada

```text
3d-web-experience/
├── src/
│   ├── data/
│   ├── scene/
│   ├── layout/
│   ├── renderers/
│   ├── interaction/
│   ├── ui/
│   ├── accessibility/
│   ├── quality/
│   └── workers/
├── public/
│   └── assets/
├── tests/
├── docs/
├── README.md
├── SECURITY.md
└── TEST-REPORT.md
```

## 46. Processo obrigatório

### Fase 1 — Problema

Definir tarefa e hipótese de valor do 3D.

### Fase 2 — Dados e ativos

Inventariar fontes, formatos, licenças e volumes.

### Fase 3 — Modelo

Definir coordenadas, objetos, relações e estados.

### Fase 4 — Stack

Escolher renderer, fallback e dependências.

### Fase 5 — Fundação

Implementar dados, UI no DOM e alternativa 2D.

### Fase 6 — Cena

Implementar câmera, luz, objetos e controles.

### Fase 7 — Interação

Implementar seleção, foco, detalhes e reset.

### Fase 8 — Escala

Adicionar LOD, instancing, workers e qualidade adaptativa.

### Fase 9 — Acessibilidade e segurança

Validar fallback, teclado, reduced motion e assets.

### Fase 10 — QA e publicação

Testar, corrigir, gerar build, relatório e documentação.

## 47. Métricas de sucesso

- sucesso da tarefa;
- compreensão espacial;
- tempo para localizar objeto;
- taxa de uso da alternativa 2D;
- FPS;
- tempo da primeira cena;
- erros de contexto;
- falhas de asset;
- uso por dispositivo;
- abandono;
- acessibilidade;
- estabilidade;
- memória.

## 48. Definição de concluído

Somente concluir quando:

- 3D responder uma pergunta real;
- dados ou ativos reais estiverem integrados ou mocks estiverem identificados;
- câmera e controles funcionarem;
- seleção e reset funcionarem;
- existir alternativa 2D;
- performance estiver medida;
- qualidade for adaptativa;
- reduced motion funcionar;
- acessibilidade mínima estiver validada;
- segurança estiver revisada;
- testes passarem;
- build existir;
- README e instruções de publicação existirem;
- nenhum efeito permanecer sem função.

## 49. Formato obrigatório da resposta do Copilot

1. aplicação construída;
2. objetivo e tarefa;
3. justificativa do 3D;
4. stack;
5. modelo de cena;
6. dados e ativos;
7. arquivos criados;
8. como executar;
9. controles;
10. fallback 2D;
11. testes e resultados;
12. performance;
13. acessibilidade;
14. segurança;
15. licenças;
16. limitações;
17. como publicar.

## 50. Checklist de kickoff

- [ ] objetivo definido;
- [ ] tarefa definida;
- [ ] valor do 3D justificado;
- [ ] eixos definidos;
- [ ] dados disponíveis;
- [ ] ativos autorizados;
- [ ] licenças registradas;
- [ ] dispositivos definidos;
- [ ] navegadores definidos;
- [ ] fallback definido;
- [ ] performance definida;
- [ ] acessibilidade definida;
- [ ] publicação definida;
- [ ] critérios de aceite definidos.

## 51. Prompt operacional

```text
Use o Guia Mestre para Experiências 3D na Web e o Contrato Obrigatório de Entrega de Artefato Final.

Receba os dados, ativos e objetivo fornecidos e construa a aplicação 3D final.

Antes de implementar:
- valide por que 3D é necessário;
- defina a tarefa do usuário;
- defina o significado dos eixos;
- inventarie dados, modelos e licenças;
- escolha a stack e o fallback;
- defina o modelo de cena.

Implemente:
- UI essencial no DOM;
- alternativa 2D;
- câmera, controles, seleção, foco e reset;
- qualidade adaptativa;
- reduced motion;
- responsividade;
- segurança;
- observabilidade.

Use instancing, LOD, workers e carregamento sob demanda quando necessário.
Teste GPU limitada, mobile, teclado, reduced motion, ausência de WebGL, assets inválidos e perda de contexto.
Corrija os problemas.
Gere build, README, relatório de testes e instruções de publicação.

Não encerre em cena demonstrativa, modelo girando ou código parcial. Entregue a aplicação pronta.
```

## 52. Changelog

### v1.1 — 2026-07-30

- declarado como guia completo e independente;
- removida dependência de outros guias;
- incorporadas entradas, processo, arquitetura, testes, métricas e definição de concluído autônomos;
- preservada a possibilidade de associação posterior por prompt externo.
