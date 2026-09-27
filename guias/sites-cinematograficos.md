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
catalog_id: 12
version: v1.1
versao: v1.1
tags: [copilot, sites-cinematograficos, motion-design, animacao-web, scrollytelling, view-transitions, web-animations, acessibilidade, performance, independente]
---

# Guia Mestre para Sites Cinematográficos e Experiências Web Animadas

## 0. Declaração de independência

Este guia é completo, independente e reutilizável.

Ele deve ser suficiente para orientar o Copilot a receber conteúdo, objetivos, identidade, público e restrições e entregar um site cinematográfico final, sem depender de qualquer outro guia.

Outros guias podem ser associados posteriormente por um prompt externo para acrescentar domínio específico, dados, grafos, 3D ou outras capacidades. Essa associação não é requisito deste documento.

Aplicar também:

- [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]].

## 1. Contrato de execução

> O resultado obrigatório é um site final, navegável, responsivo, acessível, performático, testado, corrigido e pronto para publicação.

Não encerrar em:

- moodboard;
- storyboard;
- direção de arte;
- wireframe;
- protótipo;
- vídeo conceitual;
- landing page vazia;
- coleção de efeitos;
- código demonstrativo;
- plano de implementação futura.

Documentos intermediários podem ser produzidos, mas não substituem o site implementado.

## 2. Finalidade

Criar experiências web de alto impacto que utilizem deliberadamente:

- narrativa;
- ritmo;
- enquadramento;
- foco;
- tipografia;
- imagem;
- vídeo;
- som opcional;
- movimento;
- profundidade;
- transições;
- interação;
- pausa;
- encerramento.

“Cinematográfico” não significa excesso de efeitos.

```text
intenção
→ narrativa
→ cena
→ enquadramento
→ foco
→ movimento
→ transição
→ compreensão
→ ação
```

O site deve permanecer compreensível e utilizável sem animação.

## 3. Natureza metodológica e referências

Este guia é uma síntese de direção de experiência, motion design, narrativa visual e engenharia web. Não representa um framework único existente.

Referências e padrões principais:

- Web Animations;
- View Transition API;
- CSS Scroll-driven Animations;
- princípios de direção cinematográfica;
- princípios de motion design;
- scrollytelling;
- narrative visualization;
- WCAG 2.2;
- `prefers-reduced-motion`;
- Core Web Vitals;
- progressive enhancement;
- performance budgets;
- responsive web design.

## 4. Quando usar

- lançamento de produto;
- narrativa institucional;
- portfólio;
- site de marca;
- produto editorial;
- data story;
- scrollytelling;
- apresentação de transformação;
- experiência educacional;
- relatório interativo;
- explicador complexo;
- site de campanha;
- explorador visual.

## 5. Quando reduzir ou não usar

- tarefa operacional repetitiva;
- leitura longa e densa sem necessidade narrativa;
- ambiente com hardware limitado;
- conexão lenta;
- usuário sob pressão;
- interação frequente;
- acessibilidade que não possa ser garantida;
- ausência de conteúdo real;
- movimento sem função.

## 6. Resultado esperado

O Copilot deve entregar:

- site completo;
- conteúdo real estruturado;
- arquitetura de informação;
- direção visual;
- cenas;
- interações;
- animações;
- versão reduzida de movimento;
- responsividade;
- acessibilidade;
- performance medida;
- testes;
- build;
- README;
- instruções de publicação;
- inventário de ativos;
- registro de fontes e licenças.

## 7. Entradas mínimas

```yaml
site_inputs:
  objective:
  audience:
  primary_action:
  message:
  content_sources:
  brand:
  tone:
  required_sections:
  media:
  constraints:
  devices:
  accessibility:
  performance:
  publication:
```

Quando algum item estiver ausente, o Copilot deve:

1. inferir apenas o que for seguro;
2. registrar a premissa;
3. usar placeholders explícitos para lacunas críticas;
4. não inventar fatos, depoimentos ou resultados.

## 8. Briefing obrigatório

```yaml
experience_brief:
  business_objective:
  communication_objective:
  audience:
  audience_context:
  main_message:
  desired_action:
  emotional_tone:
  evidence:
  constraints:
  success_criteria:
```

## 9. Direção de experiência

```yaml
experience_direction:
  premise:
  theme:
  visual_metaphor:
  narrative_arc:
  pacing:
  motion_intensity:
  depth_strategy:
  typography:
  image_language:
  sound_policy:
  reduced_motion_strategy:
```

## 10. Arquitetura narrativa

Possíveis atos:

1. entrada;
2. orientação;
3. contexto;
4. tensão;
5. descoberta;
6. aprofundamento;
7. síntese;
8. ação;
9. encerramento.

Cada ato deve possuir:

- objetivo;
- mensagem;
- evidência;
- estado visual;
- interação;
- critério de saída.

## 11. Arquitetura de informação

```text
Home
├── Contexto
├── História ou argumento
├── Evidências
├── Experiência principal
├── Síntese
├── Ação
└── Informações institucionais
```

A estrutura pode ser multipágina ou single-page, desde que:

- URLs sejam coerentes;
- navegação seja clara;
- deep links funcionem;
- retorno ao contexto seja possível;
- conteúdo essencial não dependa da rolagem perfeita.

## 12. Contrato de cena

```yaml
scene:
  id:
  route:
  purpose:
  message:
  evidence:
  content:
  entry_state:
  active_state:
  exit_state:
  motion:
  interaction:
  accessibility:
  fallback:
  performance_cost:
```

## 13. Gramática de movimento

Movimento pode comunicar:

- entrada;
- continuidade;
- hierarquia;
- relação;
- mudança de estado;
- foco;
- causa;
- progresso;
- retorno;
- aproximação;
- comparação.

Movimento não deve comunicar apenas “tecnologia” ou “sofisticação”.

## 14. Níveis de intensidade

### N0 — estático

Sem animação necessária.

### N1 — funcional

Hover, foco, expansão e feedback.

### N2 — editorial

Revelação, transição e ênfase.

### N3 — narrativo

Cenas coordenadas, scroll e sequências.

### N4 — imersivo

Profundidade, som, vídeo ou 3D.

O padrão não deve ser N4.

## 15. Orçamento de movimento

```yaml
motion_budget:
  simultaneous_animations:
  longest_transition_ms:
  max_pinned_sections:
  parallax_layers:
  continuous_loops:
  reduced_motion:
  mobile_reduction:
```

Regras:

- limitar movimentos simultâneos;
- usar loops somente com função;
- manter transições de tarefa curtas;
- usar animações longas apenas em narrativa guiada;
- não bloquear controles;
- pausar fora da tela;
- evitar animação de layout desnecessária;
- permitir cancelamento ou salto.

## 16. Tecnologias

Preferir progressivamente:

1. HTML semântico;
2. CSS;
3. Web Animations API;
4. View Transitions;
5. Scroll-driven Animations;
6. GSAP quando a complexidade justificar;
7. Canvas ou WebGL somente quando necessário.

Não adicionar biblioteca sem justificar:

- função;
- peso;
- suporte;
- fallback;
- manutenção;
- segurança.

## 17. Scrollytelling

Permitido para:

- revelar;
- sincronizar;
- comparar;
- aproximar;
- percorrer;
- explicar;
- manter contexto visual.

Proibido:

- sequestrar rolagem;
- impedir navegação normal;
- criar armadilhas;
- exigir gesto excessivo;
- ocultar conteúdo essencial;
- travar mobile;
- pinning longo sem necessidade.

## 18. View Transitions

Usar para:

- lista → detalhe;
- visão macro → foco;
- capítulo → capítulo;
- estado anterior → filtrado;
- galeria → item;
- produto → detalhe.

O fallback sem transição deve permanecer correto.

## 19. Tipografia

- hierarquia clara;
- largura de linha adequada;
- contraste;
- escala fluida;
- fonte sem bloquear carregamento;
- texto selecionável;
- conteúdo essencial no DOM;
- não transformar parágrafos em imagem;
- não usar cinética que prejudique leitura;
- limitar famílias e pesos.

## 20. Cores e identidade

```yaml
visual_tokens:
  color:
  typography:
  spacing:
  radius:
  border:
  shadow:
  motion:
  depth:
```

Regras:

- contraste verificável;
- não depender somente de cor;
- preservar identidade sem copiar indevidamente;
- evitar glow generalizado;
- evitar excesso de gradientes;
- não usar cor decorativa para simular hierarquia inexistente.

## 21. Imagem e ilustração

- origem e licença registradas;
- alt text;
- lazy loading;
- dimensões definidas;
- compressão;
- formatos modernos;
- art direction responsiva;
- fallback;
- nenhuma imagem como único portador de informação essencial.

## 22. Vídeo

- poster;
- carregamento sob demanda;
- dimensões definidas;
- legenda;
- transcrição quando necessária;
- controles;
- não iniciar áudio automaticamente;
- vídeo decorativo silenciado;
- fallback estático;
- não bloquear conteúdo crítico.

## 23. Som

Som é opcional.

- nunca tocar inesperadamente;
- possuir controle visível;
- não ser requisito de compreensão;
- possuir transcrição ou legenda;
- não ser usado para ação crítica;
- respeitar preferência;
- não competir com leitor de tela.

## 24. Profundidade

Pode ser criada por:

- escala;
- sobreposição;
- perspectiva;
- sombras restritas;
- parallax;
- câmera;
- composição;
- 3D real, quando justificado.

Profundidade não pode reduzir legibilidade.

## 25. Progressive enhancement

```text
HTML semântico
→ CSS funcional
→ interação
→ animação
→ mídia avançada
```

Cada camada deve falhar sem destruir a anterior.

## 26. Reduced motion

Quando solicitado:

- remover parallax;
- remover voo;
- reduzir zoom;
- substituir morph por fade curto;
- pausar loops;
- evitar camera shake;
- reduzir duração;
- preservar estado final;
- manter feedback funcional.

## 27. Responsividade

Testar:

- 320 px;
- celular;
- tablet;
- notebook;
- monitor grande;
- touch;
- mouse;
- teclado.

No mobile:

- reduzir partículas;
- reduzir camadas;
- evitar pinning longo;
- reduzir blur;
- evitar mídia pesada;
- simplificar transições;
- preservar ação principal.

## 28. Performance

```yaml
web_budget:
  js_initial_kb:
  css_kb:
  hero_media_kb:
  total_initial_mb:
  lcp_target:
  inp_target:
  cls_target:
  target_fps:
```

Medir:

- LCP;
- INP;
- CLS;
- long tasks;
- memória;
- FPS;
- imagens;
- fontes;
- JavaScript;
- mídia;
- GPU quando aplicável.

## 29. Acessibilidade

- heading order;
- landmarks;
- teclado;
- foco;
- contraste;
- zoom 200%;
- labels;
- alt;
- transcrição;
- reduced motion;
- nenhum conteúdo somente em hover;
- nenhum conteúdo somente por cor;
- pausa de movimento;
- leitura sem animação;
- links com propósito compreensível.

## 30. Conteúdo e factualidade

- não inventar fatos;
- não inventar números;
- não inventar depoimentos;
- não inventar clientes;
- separar fato, hipótese e conceito;
- preservar autoria;
- citar fontes quando necessário;
- não usar texto placeholder na publicação final;
- não resumir conteúdo de forma que altere significado.

## 31. Segurança e privacidade

- sanitizar conteúdo;
- aplicar CSP;
- evitar scripts de terceiros;
- controlar embeds;
- não carregar mídia insegura;
- não inserir segredos;
- não expor fonte privada;
- proteger formulários;
- validar URLs;
- evitar dependências abandonadas;
- documentar coleta de dados;
- não ativar analytics sem decisão.

## 32. Observabilidade

Registrar, quando autorizado:

- versão;
- rota;
- erros;
- falhas de mídia;
- long tasks;
- métricas web;
- eventos de conversão;
- reduced motion;
- dispositivo agregado;
- release.

Não registrar conteúdo sensível desnecessário.

## 33. Estratégia de testes

### Unidade

Funções de estado, navegação, timelines, helpers e validações.

### Funcional

Links, menus, rotas, transições, foco, formulários, mídia e estados de erro.

### Visual

Cenas, breakpoints, temas, estados, reduced motion e regressão.

### Performance

Cold load, mobile, CPU limitada, conexão lenta e GPU limitada.

### Acessibilidade

Teclado, leitor de tela, contraste, zoom e reduced motion.

### Compatibilidade

Navegadores-alvo, touch, mouse, ausência de APIs novas e falha de JavaScript.

## 34. Antipadrões

- animação em tudo;
- scroll hijacking;
- glow generalizado;
- texto pequeno;
- excesso de blur;
- partículas permanentes;
- áudio automático;
- hero pesado;
- loading artificial;
- cursor customizado obrigatório;
- parallax em mobile;
- site que parece vídeo;
- conteúdo inacessível sem JavaScript;
- transição longa para tarefa simples;
- uso de 3D sem função;
- clonagem visual de terceiros.

## 35. Gates de qualidade

1. briefing;
2. conteúdo e fontes;
3. mensagem;
4. arquitetura de informação;
5. direção;
6. cenas;
7. identidade;
8. acessibilidade;
9. performance;
10. segurança;
11. implementação;
12. QA;
13. publicação.

## 36. Estrutura recomendada

```text
cinematic-site/
├── src/
│   ├── content/
│   ├── routes/
│   ├── scenes/
│   ├── motion/
│   ├── components/
│   ├── media/
│   ├── accessibility/
│   ├── analytics/
│   └── styles/
├── public/
├── tests/
├── docs/
├── README.md
├── SECURITY.md
└── TEST-REPORT.md
```

## 37. Processo obrigatório

### Fase 1 — Inventário

Ler materiais, fontes, restrições e mídia.

### Fase 2 — Briefing

Definir público, mensagem e ação.

### Fase 3 — Arquitetura

Definir páginas, rotas e hierarquia.

### Fase 4 — Direção

Definir metáfora, tom, tipografia, cor e ritmo.

### Fase 5 — Cenas

Especificar estados, transições e fallback.

### Fase 6 — Fundação

Implementar HTML, navegação e conteúdo sem depender de animação.

### Fase 7 — Movimento

Adicionar progressivamente.

### Fase 8 — Responsividade e acessibilidade

Ajustar dispositivos, teclado e reduced motion.

### Fase 9 — Performance e segurança

Medir, reduzir, proteger.

### Fase 10 — QA e publicação

Executar testes, corrigir, gerar build e documentar.

## 38. Métricas de sucesso

- compreensão da mensagem;
- conclusão da ação principal;
- navegação sem erro;
- tempo de carregamento;
- LCP, INP e CLS;
- estabilidade visual;
- taxa de abandono por cena;
- sucesso no mobile;
- uso com reduced motion;
- erros de mídia;
- acessibilidade;
- manutenção por versão.

## 39. Definição de concluído

Somente concluir quando:

- o conteúdo real estiver incorporado;
- a mensagem estiver compreensível;
- o site estiver navegável;
- as animações possuírem propósito;
- o site funcionar sem animação avançada;
- reduced motion funcionar;
- responsividade estiver validada;
- acessibilidade mínima estiver validada;
- performance estiver medida;
- segurança estiver revisada;
- testes passarem;
- build existir;
- README e instruções de publicação existirem.

## 40. Formato obrigatório da resposta do Copilot

1. site construído;
2. objetivo e público;
3. arquitetura;
4. direção aplicada;
5. cenas e movimentos;
6. arquivos criados;
7. como executar;
8. como publicar;
9. testes e resultados;
10. acessibilidade;
11. performance;
12. segurança;
13. fontes e licenças;
14. limitações.

## 41. Checklist de kickoff

- [ ] objetivo definido;
- [ ] público definido;
- [ ] ação principal definida;
- [ ] conteúdo disponível;
- [ ] fontes validadas;
- [ ] identidade disponível;
- [ ] mídia autorizada;
- [ ] dispositivos definidos;
- [ ] navegadores definidos;
- [ ] orçamento de performance definido;
- [ ] acessibilidade definida;
- [ ] destino de publicação definido;
- [ ] critérios de aceite definidos.

## 42. Prompt operacional

```text
Use o Guia Mestre para Sites Cinematográficos e Experiências Web Animadas e o Contrato Obrigatório de Entrega de Artefato Final.

Receba os materiais fornecidos e construa o site final.

Antes de implementar:
- inventarie conteúdo, fontes e mídia;
- defina público, mensagem e ação;
- defina arquitetura de informação;
- defina direção visual e narrativa;
- especifique cenas e transições.

Implemente primeiro uma fundação semântica e navegável.
Depois acrescente animações por progressive enhancement.
Use movimento somente quando ajudar compreensão, foco ou continuidade.
Respeite reduced motion.
Teste celular, desktop, teclado, contraste, zoom, navegação, mídia e performance.
Corrija os problemas.
Gere build, README, relatório de testes e instruções de publicação.

Não encerre em moodboard, storyboard, protótipo ou código parcial. Entregue o site pronto.
```

## 43. Changelog

### v1.1 — 2026-07-30

- declarado como guia completo e independente;
- removida dependência de outros guias;
- incorporadas entradas, processo, arquitetura, testes, métricas e definição de concluído autônomos;
- preservada a possibilidade de associação posterior por prompt externo.
