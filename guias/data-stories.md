---
origin: chatgpt
origem: chatgpt
date: 2026-07-30
data: 2026-07-30
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
tags: [copilot, data-story, storytelling-com-dados, narrativa-analitica, html, visualizacao, decisao, acessibilidade, testes]
---

# Guia Mestre para Transformação de Relatórios e Estudos em Data Stories Interativas

## 0. Contrato de execução

Este guia deve ser utilizado junto com:

- [[00-CONTRATO-ENTREGA-ARTEFATO-FINAL|Contrato Obrigatório de Entrega de Artefato Final pelo Copilot]].

O resultado padrão não é roteiro, storyboard, especificação visual ou coleção de gráficos.

> O Copilot deve transformar os insumos autorizados em uma Data Story web final, funcional, responsiva, acessível, testada, corrigida e pronta para publicação.

Documentos intermediários são obrigatórios quando aumentarem a qualidade, mas não substituem a implementação.

---

## 1. Finalidade

Este guia orienta o Copilot a transformar relatórios, estudos, planilhas, bases, apresentações, indicadores, evidências e decisões pendentes em experiências web narrativas que ajudem um público específico a compreender uma situação e tomar uma decisão.

A Data Story deve conectar:

```text
pergunta
→ contexto
→ evidências
→ fatos
→ explicação
→ implicações
→ alternativas
→ recomendação
→ decisão solicitada
```

O ativo central não é um gráfico isolado. É uma experiência em que dados, texto, visual, interação e sequência trabalham juntos.

---

## 2. Natureza metodológica e status das referências

Este guia não reproduz um único framework existente. Ele é uma síntese de engenharia de produto e comunicação analítica apoiada em fundamentos maduros.

### 2.1 Referências principais

1. **Storytelling with Data**, de Cole Nussbaumer Knaflic  
   Fundamentos adotados: começar pelo contexto, escolher visual apropriado, remover desordem, dirigir atenção, pensar como designer e construir uma história orientada ao público.

2. **Narrative Visualization: Telling Stories with Data**, de Edward Segel e Jeffrey Heer  
   Fundamentos adotados: equilíbrio entre narrativa conduzida pelo autor e exploração pelo leitor; gêneros de narrativa visual; técnicas de ordenação, interatividade e mensagem.

3. **Authoring Narrative Visualizations with Ellipsis**, de Arvind Satyanarayan e Jeffrey Heer  
   Fundamentos adotados: cenas, estados, anotações dinâmicas e coordenação desacoplada entre componentes.

4. **Web Content Accessibility Guidelines — WCAG 2.2**, W3C  
   Fundamentos adotados: conteúdo perceptível, operável, compreensível e robusto.

5. **Core Web Vitals**, web.dev  
   Fundamentos adotados: carregamento, interatividade e estabilidade visual precisam ser medidos como qualidade da experiência.

6. **Plataforma AI-first de Estudos e Narrativas Analíticas**, documentação interna do projeto  
   Fundamentos adotados: decisão antes do gráfico, separação entre exploração e comunicação, fatos rastreáveis, contratos independentes do renderer e pacote analítico reproduzível.

### 2.2 O que é evidência consolidada

- contexto e audiência influenciam a eficácia da comunicação;
- escolha do visual deve ser orientada pela pergunta;
- atenção visual pode ser direcionada;
- interação e sequência alteram a leitura da história;
- acessibilidade e desempenho são requisitos de produto;
- narrativa não substitui validação analítica;
- exploração e comunicação explanatória possuem objetivos diferentes.

### 2.3 O que é síntese própria deste guia

- o contrato `DecisionSpec`;
- o contrato `EvidenceSpec`;
- o pipeline obrigatório em gates;
- a taxonomia operacional de cenas;
- o modelo de rastreabilidade fato → visual → afirmação → decisão;
- o formato de pacote final;
- a integração com a biblioteca de guias e com o Design System de Narrativas Analíticas.

---

## 3. Quando utilizar

Utilizar quando houver:

- estudo analítico que precisa conduzir uma decisão;
- relatório recorrente que perdeu clareza;
- apresentação executiva baseada em evidências;
- diagnóstico com múltiplos achados;
- comparação de cenários;
- explicação de variação;
- avaliação de piloto;
- business case;
- resultado de pesquisa;
- análise de estoque, mailing, produtividade, risco ou benefício;
- necessidade de substituir PDF ou slides por HTML;
- necessidade de combinar narrativa e exploração limitada.

---

## 4. Quando não utilizar

Não utilizar como solução principal quando:

- o usuário precisa monitorar operação continuamente;
- a tarefa principal é filtrar e consultar livremente milhares de registros;
- o objetivo é editar dados;
- a experiência exige transação operacional;
- não existe pergunta ou decisão;
- os dados ainda não foram validados;
- a conclusão depende de análise ainda não realizada;
- um documento simples atende melhor;
- a narrativa poderia induzir certeza inexistente;
- o conteúdo não possui autorização para publicação.

Nesses casos, considerar dashboard, aplicação operacional, notebook analítico, documento ou etapa de investigação.

---

## 5. Resultado obrigatório

O Copilot deve entregar:

```text
/data-story
├── src/
│   ├── content/
│   ├── data/
│   ├── components/
│   ├── charts/
│   ├── scenes/
│   ├── interactions/
│   ├── styles/
│   └── accessibility/
├── public/
├── tests/
├── dist/
├── README.md
├── registro-de-decisoes.md
├── inventario-de-fontes.md
├── matriz-de-rastreabilidade.md
├── relatorio-de-testes.md
└── package.json
```

A aplicação deve:

- abrir sem falha impeditiva;
- apresentar narrativa completa;
- usar dados autorizados;
- exibir fontes e limitações;
- permitir navegação por teclado;
- funcionar em celular e desktop;
- possuir impressão ou exportação quando aplicável;
- respeitar movimento reduzido;
- possuir fallback quando uma interação não for suportada;
- ser publicável em hospedagem estática quando o escopo permitir.

---

## 6. Entradas mínimas

### 6.1 Obrigatórias

- pergunta de negócio;
- público;
- decisão ou ação esperada;
- fontes;
- período;
- métricas;
- evidências;
- limitações;
- restrições de confidencialidade;
- identidade visual disponível;
- formato de publicação;
- critérios de aceite.

### 6.2 Desejáveis

- baseline;
- metas;
- hipóteses;
- análises anteriores;
- regras de negócio;
- glossário;
- exemplos de narrativa;
- artefatos anteriores;
- feedback de usuários;
- formatos permitidos;
- requisitos de impressão;
- requisitos offline.

### 6.3 Se faltarem entradas

O Copilot deve:

1. inventariar o material;
2. separar o que existe do que falta;
3. registrar premissas;
4. usar placeholders visíveis somente quando inevitável;
5. não inventar fatos;
6. não transformar hipótese em conclusão;
7. não ocultar ausência de fonte ou baseline.

---

## 7. Princípios obrigatórios

1. **Começar pela decisão, não pelo gráfico.**
2. **Separar exploração de comunicação.**
3. **Nenhuma afirmação material sem evidência vinculada.**
4. **Nenhum visual sem pergunta explícita.**
5. **Uma cena deve cumprir uma função narrativa.**
6. **Interação deve reduzir esforço cognitivo ou permitir verificação.**
7. **Animação deve explicar mudança, relação ou sequência.**
8. **O leitor deve saber o que é fato, inferência, hipótese e recomendação.**
9. **A narrativa não pode esconder incerteza.**
10. **A experiência deve funcionar sem animações.**
11. **Acessibilidade não é acabamento.**
12. **Performance integra a qualidade narrativa.**
13. **Conteúdo, dados e apresentação devem permanecer separados.**
14. **O resultado deve ser reproduzível.**
15. **A Data Story deve terminar em compreensão, decisão ou próxima investigação clara.**

---

## 8. Contrato da decisão

Criar `DecisionSpec`.

```yaml
decision_id:
titulo:
publico_primario:
publicos_secundarios:
decisao_solicitada:
prazo_da_decisao:
contexto:
problema:
por_que_agora:
alternativas_conhecidas:
restricoes:
riscos_da_nao_decisao:
responsavel_pela_decisao:
acao_esperada_apos_leitura:
criterios_de_sucesso:
```

### Gate

Não iniciar a narrativa final enquanto não for possível responder:

- quem decide;
- o que deve decidir;
- com base em quê;
- até quando;
- que ação ocorre depois.

---

## 9. Contrato de audiência

Criar `AudienceSpec`.

```yaml
audience_id:
papel:
conhecimento_previo:
tempo_disponivel:
interesse_principal:
objeções_provaveis:
nivel_de_detalhe:
termos_que_precisam_ser_explicados:
necessidades_de_acessibilidade:
dispositivo_principal:
contexto_de_consumo:
```

A mesma evidência pode exigir histórias diferentes para diretoria, operação, especialistas e público externo.

---

## 10. Contrato de fontes e métricas

Criar `MetricSpec`.

```yaml
metric_id:
nome:
definicao:
formula:
unidade:
granularidade:
dimensoes:
fonte:
owner:
periodicidade:
filtros:
exclusoes:
baseline:
meta:
data_de_corte:
qualidade:
limitacoes:
status_validacao:
```

Criar `SourceSpec`.

```yaml
source_id:
nome:
tipo:
localizacao_logica:
owner:
autorizacao:
classificacao:
periodo_coberto:
granularidade:
campos_relevantes:
qualidade_conhecida:
restricoes_de_uso:
versao:
data_de_extracao:
checksum_ou_identificador:
```

---

## 11. Biblioteca de evidências e fatos

### 11.1 Candidato a achado

```yaml
finding_candidate_id:
pergunta:
descricao:
calculo:
segmento:
periodo:
comparacao:
magnitude:
fonte:
hipotese_explicativa:
testes_pendentes:
riscos_de_interpretacao:
```

### 11.2 Evidência validada

```yaml
evidence_id:
finding_candidate_id:
afirmacao_suportada:
metodo:
fontes:
resultado:
robustez:
incerteza:
limitacoes:
revisores:
data_validacao:
status:
```

### 11.3 Fato narrável

```yaml
fact_id:
texto_curto:
tipo: [fato_validado, fato_observado, inferencia, estimativa]
evidence_ids:
relevancia_para_decisao:
magnitude:
comparacao:
segmentos:
periodo:
grau_confianca:
limitacoes:
visual_recomendado:
```

### Regra

Um fato narrável precisa ser:

- correto;
- relevante;
- compreensível;
- rastreável;
- proporcional à evidência;
- útil para a decisão.

---

## 12. Arquitetura narrativa

### 12.1 Estrutura padrão

```text
Abertura
→ o que está em jogo

Contexto
→ como chegamos aqui

Pergunta
→ o que precisa ser compreendido

Evidência principal
→ o que os dados mostram

Explicação
→ por que isso acontece

Implicação
→ por que importa

Alternativas
→ que caminhos existem

Recomendação
→ o que fazer

Decisão
→ o que precisa ser aprovado ou executado

Apêndice
→ método, fontes, detalhes e limitações
```

### 12.2 A estrutura não é rígida

O Copilot pode adaptar a sequência, mas deve justificar alterações.

### 12.3 Arcos possíveis

- problema → causa → resposta;
- mudança → impacto → ação;
- comparação → diferença → escolha;
- expectativa → realidade → correção;
- risco → exposição → mitigação;
- oportunidade → valor → investimento;
- diagnóstico → opções → decisão;
- cenário atual → cenário futuro → transição.

---

## 13. Modelo de cenas

Criar `SceneSpec`.

```yaml
scene_id:
ordem:
titulo:
funcao_narrativa:
pergunta_respondida:
fact_ids:
mensagem_principal:
visual:
anotacoes:
interacoes:
transicao_entrada:
transicao_saida:
acao_do_usuario:
fallback:
acessibilidade:
fonte_visivel:
```

### Funções narrativas permitidas

- abertura;
- orientação;
- contexto;
- definição;
- comparação;
- revelação;
- decomposição;
- causa;
- consequência;
- risco;
- cenário;
- recomendação;
- decisão;
- método;
- limitação;
- fechamento.

Cada cena deve ter uma mensagem principal. Cenas com muitas mensagens devem ser divididas.

---

## 14. Gêneros de Data Story

### 14.1 Artigo analítico interativo

Adequado para leitura linear com explorações pontuais.

### 14.2 Slideshow narrativo

Adequado para sequência de telas e apresentação conduzida.

### 14.3 Scrollytelling

Adequado quando a rolagem controla a evolução da evidência.

### 14.4 One-page executiva

Adequado para uma decisão com poucos fatos essenciais.

### 14.5 Relatório explorable

Adequado quando existe narrativa principal e camadas de detalhamento.

### 14.6 Data documentary

Adequado para combinar dados, áudio, vídeo, mapas e testemunhos autorizados.

### 14.7 Explicador de variação

Adequado para decompor diferença, contribuição, mix, concentração ou tendência.

### 14.8 Comparador de cenários

Adequado para permitir que o leitor altere premissas dentro de limites controlados.

O gênero deve ser escolhido pela decisão, audiência, volume de evidências e contexto de consumo.

---

## 15. Seleção de visuais

### 15.1 Pergunta antes da forma

| Pergunta | Famílias de visual |
|---|---|
| Quanto? | barras, pontos, indicadores |
| Como evoluiu? | linhas, áreas, small multiples |
| Como se distribui? | histograma, boxplot, densidade |
| Como se compõe? | barras empilhadas, waterfall, treemap com cautela |
| Como se relaciona? | dispersão, matriz, rede |
| Onde ocorre? | mapa somente quando geografia importa |
| O que contribui? | waterfall, decomposição, barras divergentes |
| Como flui? | Sankey com cautela, fluxo, processo |
| Qual cenário? | bandas, intervalos, comparação de premissas |
| Qual sequência? | timeline, etapas, storyboard |

### 15.2 Regras

- evitar 3D decorativo em gráficos quantitativos;
- não usar pizza quando comparação precisa for central;
- não usar mapa apenas porque existe localidade;
- não usar duas escalas sem justificativa forte;
- não depender de cor para significado;
- incluir unidade e período;
- ordenar para facilitar leitura;
- destacar somente o necessário;
- mostrar incerteza quando material;
- permitir acesso aos dados subjacentes quando apropriado.

---

## 16. Direção de atenção

Utilizar:

- posição;
- tamanho;
- contraste;
- cor;
- anotação;
- ordem;
- isolamento;
- movimento;
- progressão.

Evitar:

- todos os elementos destacados;
- excesso de cores;
- efeitos sem significado;
- animações concorrentes;
- legendas distantes;
- títulos genéricos;
- rótulos que repetem o óbvio.

### Título orientado à mensagem

Evitar:

> Evolução do indicador.

Preferir:

> O aumento concentrou-se em dois segmentos e não foi generalizado.

A mensagem deve continuar proporcional à evidência.

---

## 17. Texto e anotação

Toda anotação deve cumprir uma função:

- explicar;
- quantificar;
- localizar;
- comparar;
- alertar;
- contextualizar;
- mostrar limitação;
- indicar decisão.

Regras:

- usar linguagem direta;
- explicar siglas;
- evitar adjetivos sem medida;
- distinguir associação de causalidade;
- não chamar hipótese de causa;
- não transformar recomendação em fato;
- manter fontes próximas ao conteúdo;
- oferecer detalhes técnicos no apêndice.

---

## 18. Interatividade

### 18.1 Interações úteis

- revelar detalhes;
- comparar antes e depois;
- alternar cenário;
- filtrar dentro de escopo;
- destacar segmento;
- inspecionar valor;
- avançar cena;
- abrir metodologia;
- baixar dados autorizados;
- copiar referência;
- trocar unidade;
- ativar modo acessível.

### 18.2 Interações inadequadas

- rolagem bloqueada sem necessidade;
- elementos que se movem apenas para impressionar;
- filtros que alteram a conclusão sem explicação;
- controles sem estado visível;
- hover como único acesso;
- drag sem alternativa;
- animações longas antes do conteúdo;
- exploração ilimitada quando a fonte não suporta.

### 18.3 Princípio

> Interação deve permitir compreender, verificar ou decidir; nunca esconder a mensagem.

---

## 19. Exploração versus explicação

A Data Story pode conter exploração, mas deve preservar:

```text
trilha principal
→ mensagem conduzida

camadas opcionais
→ detalhes

exploração controlada
→ perguntas previstas

apêndice
→ método e dados
```

O usuário deve sempre conseguir retornar à narrativa principal.

---

## 20. Animação

A animação pode:

- mostrar mudança;
- preservar contexto;
- conectar estados;
- revelar sequência;
- explicar fluxo;
- dirigir atenção.

Não deve:

- retardar acesso;
- simular precisão;
- causar enjoo;
- alterar dado;
- ser indispensável para compreender;
- bloquear interação;
- ocultar estado final.

### Regras técnicas

- priorizar transform e opacity;
- evitar animações contínuas;
- pausar quando fora da tela;
- respeitar `prefers-reduced-motion`;
- fornecer estado estático equivalente;
- testar em hardware modesto;
- impedir layout shift.

---

## 21. Arquitetura técnica recomendada

### 21.1 Princípio

Separar:

```text
dados
≠ fatos
≠ narrativa
≠ visual
≠ renderer
```

### 21.2 Estrutura

```text
src/
├── data/
│   ├── raw/
│   ├── processed/
│   └── contracts/
├── content/
│   ├── facts/
│   ├── narrative/
│   └── glossary/
├── scenes/
├── charts/
├── components/
├── interactions/
├── adapters/
├── styles/
├── tests/
└── app/
```

### 21.3 Stack

O Copilot deve escolher o menor stack suficiente.

- HTML/CSS/JavaScript para experiências simples;
- Vite para aplicação estática modular;
- React quando houver composição complexa e estado;
- Next.js quando houver múltiplas rotas, conteúdo e publicação compatível;
- D3, Vega-Lite, Observable Plot ou biblioteca equivalente conforme necessidade;
- SVG para visuais acessíveis e moderados;
- Canvas para grande volume;
- WebGL somente quando volume ou experiência justificar.

A ferramenta não substitui os contratos.

---

## 22. Contrato do renderer

```ts
interface StoryRenderer {
  renderScene(scene: SceneSpec): Promise<void>;
  updateState(state: StoryState): void;
  exportStatic?(): Promise<Blob>;
  destroy(): void;
}
```

```ts
interface ChartRenderer {
  render(container: HTMLElement, spec: ChartSpec): void;
  update(data: unknown, state: ChartState): void;
  getAccessibleSummary(): string;
  destroy(): void;
}
```

---

## 23. Estado da história

```yaml
story_state:
  current_scene:
  visited_scenes:
  selected_filters:
  selected_scenario:
  expanded_details:
  accessibility_mode:
  reduced_motion:
  last_updated:
```

Persistência local é opcional e deve ser usada somente quando útil.

---

## 24. Responsividade

A experiência deve ser redesenhada, não apenas reduzida.

### Desktop

- maior densidade;
- comparação lado a lado;
- painéis auxiliares;
- hover como complemento.

### Mobile

- sequência vertical;
- controles maiores;
- texto curto;
- gráficos simplificados;
- toque;
- legendas integradas;
- nenhum significado exclusivo em hover.

### Impressão

Quando aplicável:

- remover controles;
- fixar estados;
- preservar fontes;
- quebrar páginas;
- mostrar URLs ou identificadores de referência;
- incluir data de geração.

---

## 25. Acessibilidade

Meta padrão: WCAG 2.2 nível AA, quando aplicável.

Obrigatório:

- HTML semântico;
- navegação por teclado;
- foco visível;
- ordem de leitura;
- labels;
- contraste;
- alvos adequados;
- alternativa a drag;
- descrição textual de gráficos;
- tabela ou dados acessíveis quando necessário;
- não depender somente de cor;
- legendas em áudio e vídeo;
- movimento reduzido;
- controle de reprodução;
- avisos para conteúdo que pisca;
- linguagem clara.

### Resumo acessível do gráfico

Cada visual material deve possuir:

```yaml
accessible_summary:
  pergunta:
  mensagem_principal:
  valores_chave:
  comparacoes:
  incerteza:
  fonte:
```

---

## 26. Performance

### Metas iniciais

- LCP bom no percentil 75;
- INP bom no percentil 75;
- CLS próximo de zero;
- primeira cena disponível rapidamente;
- assets pesados sob demanda;
- gráficos abaixo da dobra carregados progressivamente.

### Estratégias

- code splitting;
- lazy loading;
- compressão;
- imagens responsivas;
- fontes limitadas;
- SVG otimizado;
- cache;
- pré-carregamento seletivo;
- evitar bibliotecas duplicadas;
- pausar observers e animações;
- usar worker para transformação pesada.

Registrar orçamento:

```yaml
performance_budget:
  initial_js_kb:
  initial_css_kb:
  initial_images_kb:
  max_lcp_seconds:
  max_inp_ms:
  max_cls:
  max_scene_assets_kb:
```

---

## 27. Segurança, privacidade e publicação

- publicar somente dados autorizados;
- remover segredos;
- não expor caminhos internos;
- não enviar bases restritas ao cliente;
- não incluir tokens;
- revisar metadados;
- anonimizar exemplos;
- proteger downloads;
- aplicar CSP quando possível;
- validar dependências;
- registrar versões;
- separar ambiente pessoal e corporativo;
- não usar CDN externa sem autorização;
- não registrar telemetria sem base e aviso.

---

## 28. Rastreabilidade

Criar matriz:

| Scene | Afirmação | Fact ID | Evidence ID | Metric ID | Source ID | Visual | Revisão |
|---|---|---|---|---|---|---|---|

A pessoa revisora deve conseguir responder:

- de onde veio;
- como foi calculado;
- qual versão;
- qual limitação;
- quem validou;
- que decisão suporta.

---

## 29. Processo obrigatório de produção

### Fase 1 — Inventário

- localizar fontes;
- identificar versões;
- detectar duplicidades;
- classificar informação;
- mapear lacunas.

### Fase 2 — Enquadramento

- preencher `DecisionSpec`;
- preencher `AudienceSpec`;
- definir escopo;
- escolher gênero.

### Fase 3 — Certificação

- validar métricas;
- reproduzir cálculos;
- criar evidências;
- classificar confiança;
- registrar limitações.

### Fase 4 — Biblioteca de fatos

- transformar evidências em fatos narráveis;
- priorizar por decisão;
- rejeitar irrelevantes.

### Fase 5 — Arquitetura narrativa

- definir arco;
- criar cenas;
- ligar fatos;
- definir ação final.

### Fase 6 — Storyboard funcional

- desenhar fluxo;
- escolher visuais;
- definir anotações;
- definir interações e fallbacks.

### Fase 7 — Implementação

- criar projeto;
- separar contratos;
- implementar cenas;
- implementar acessibilidade;
- integrar fontes autorizadas.

### Fase 8 — Testes

- dados;
- narrativa;
- usabilidade;
- acessibilidade;
- performance;
- responsividade;
- segurança.

### Fase 9 — Correção

- corrigir falhas;
- remover funcionalidades fictícias;
- reduzir peso;
- revisar mensagens.

### Fase 10 — Empacotamento

- build;
- documentação;
- relatório;
- matriz;
- instruções de publicação.

---

## 30. Gates de qualidade

### Gate 1 — Decisão

Existe decisão clara?

### Gate 2 — Fonte

As fontes estão autorizadas e versionadas?

### Gate 3 — Métrica

Definições e cálculos são reproduzíveis?

### Gate 4 — Evidência

Afirmações materiais possuem evidência?

### Gate 5 — Narrativa

Cada cena move a compreensão?

### Gate 6 — Visual

Cada visual responde uma pergunta?

### Gate 7 — Interação

Cada interação possui utilidade e fallback?

### Gate 8 — Acessibilidade

A experiência é operável sem mouse e sem movimento?

### Gate 9 — Performance

O conteúdo principal aparece sem peso desnecessário?

### Gate 10 — Decisão final

O leitor sabe o que fazer depois?

Falha material em um gate impede declaração de concluído.

---

## 31. Estratégia de testes

### 31.1 Dados

- fórmulas;
- agregações;
- filtros;
- períodos;
- totais;
- arredondamentos;
- nulos;
- duplicidades.

### 31.2 Narrativa

- coerência;
- sequência;
- aderência à decisão;
- linguagem;
- limites;
- ausência de contradição.

### 31.3 Visuais

- escala;
- unidade;
- legenda;
- cor;
- rótulo;
- responsividade;
- dados subjacentes.

### 31.4 Interação

- teclado;
- toque;
- mouse;
- estados;
- retorno;
- links;
- filtros;
- cenários.

### 31.5 Acessibilidade

- axe ou equivalente;
- leitor de tela;
- foco;
- zoom 200%;
- contraste;
- movimento reduzido;
- alternativas de gráficos.

### 31.6 Performance

- Lighthouse;
- Core Web Vitals;
- bundle;
- rede lenta;
- dispositivo modesto;
- layout shift.

### 31.7 Segurança

- segredos;
- dados restritos;
- dependências;
- links;
- downloads;
- headers;
- telemetria.

---

## 32. Antipadrões

- começar pelo layout;
- escolher gráfico pela aparência;
- narrar sem decisão;
- inserir todos os achados;
- esconder incerteza;
- usar animação decorativa;
- transformar dashboard em sequência de screenshots;
- permitir filtros que invalidam a narrativa;
- afirmar causalidade com correlação;
- usar título neutro quando existe mensagem validada;
- usar título conclusivo quando só existe hipótese;
- excluir apêndice técnico;
- publicar base completa no navegador;
- tratar protótipo visual como produto final;
- declarar testado sem evidência;
- criar números fictícios para preencher espaço;
- usar IA para “descobrir” conclusão sem validação.

---

## 33. Papéis

- sponsor;
- owner da decisão;
- diretor do estudo;
- analista;
- owner da métrica;
- certificador;
- arquiteto narrativo;
- designer de informação;
- desenvolvedor;
- QA;
- acessibilidade;
- segurança;
- publicador.

Uma pessoa pode acumular papéis em baixo risco, mas as responsabilidades devem permanecer explícitas.

---

## 34. Métricas de sucesso

### Uso

- taxa de abertura;
- conclusão da narrativa;
- retorno;
- interação útil;
- tempo até a mensagem principal.

### Compreensão

- capacidade de explicar o achado;
- reconhecimento de limitações;
- redução de dúvidas materiais.

### Decisão

- decisão tomada;
- tempo até decisão;
- ação executada;
- necessidade de retrabalho.

### Qualidade

- defeitos;
- divergências de métrica;
- acessibilidade;
- performance;
- rastreabilidade.

### Reutilização

- componentes reutilizados;
- fatos reaproveitados;
- tempo de produção;
- ativos incorporados ao acervo.

---

## 35. Definição de concluído

A Data Story somente está concluída quando:

- a decisão está clara;
- as fontes estão identificadas;
- as métricas estão definidas;
- os cálculos foram validados;
- fatos estão rastreáveis;
- a narrativa está completa;
- os visuais respondem perguntas;
- interações funcionam;
- acessibilidade foi testada;
- performance foi medida;
- segurança foi revisada;
- build foi gerado;
- documentação foi criada;
- limitações estão visíveis;
- não existem funcionalidades fictícias;
- o pacote pode ser aberto ou publicado.

---

## 36. Formato da resposta final do Copilot

A resposta deve informar:

1. artefato construído;
2. pergunta e decisão;
3. arquivos criados;
4. fontes utilizadas;
5. testes executados;
6. resultados;
7. como executar;
8. como publicar;
9. limitações;
10. próximos incrementos opcionais.

A resposta não substitui os arquivos.

---

## 37. Checklist de kickoff

- [ ] decisão definida;
- [ ] público definido;
- [ ] fontes autorizadas;
- [ ] métricas definidas;
- [ ] data de corte definida;
- [ ] identidade visual disponível;
- [ ] restrições registradas;
- [ ] formato escolhido;
- [ ] critérios de aceite definidos;
- [ ] responsáveis identificados.

---

## 38. Prompt operacional

```text
Use o Guia Mestre para Transformação de Relatórios e Estudos em Data Stories Interativas e o Contrato Obrigatório de Entrega de Artefato Final.

Inspecione todos os insumos fornecidos. Não comece pelo layout nem pelo gráfico.

1. Identifique a pergunta, o público, a decisão e a ação esperada.
2. Inventarie fontes, métricas, evidências, versões, limitações e restrições.
3. Separe fato validado, observação, inferência, estimativa, hipótese e recomendação.
4. Valide cálculos e crie a matriz de rastreabilidade.
5. Defina o gênero de Data Story mais adequado.
6. Construa a arquitetura narrativa e as cenas.
7. Escolha visuais e interações pela pergunta que respondem.
8. Implemente a aplicação web final.
9. Garanta responsividade, acessibilidade, performance e segurança.
10. Execute testes, corrija falhas e gere o build.
11. Entregue o pacote completo, documentação, inventário, matriz e relatório de testes.

Não encerre com roteiro, storyboard, wireframe, plano ou código ilustrativo.
Não invente fatos, valores, fontes, datas, conclusões ou validações.
```

---

## 39. Aplicação à Plataforma AI-first de Estudos e Narrativas Analíticas

Este guia operacionaliza o fluxo:

```text
pergunta
→ briefing
→ exploração
→ evidência validada
→ fato
→ narrativa
→ visual
→ Data Story HTML
→ decisão
→ aprendizado reutilizável
```

Ele deve consumir, quando disponíveis:

- biblioteca de fatos;
- biblioteca narrativa;
- biblioteca visual;
- contratos de fontes e métricas;
- identidade visual;
- componentes;
- testes;
- decisões anteriores.

E devolver:

- cenas;
- componentes;
- narrativas;
- padrões;
- aprendizados;
- evidências de uso;
- release versionado.

---

## 40. Síntese operacional

```text
insumos reais
+ decisão clara
+ evidências certificadas
+ narrativa orientada ao público
+ visuais adequados
+ interação útil
+ acessibilidade
+ testes
→ Data Story final pronta para publicação
```

A qualidade será medida pela capacidade de a experiência transformar evidência em compreensão e compreensão em decisão, sem perder rastreabilidade, honestidade ou robustez.
