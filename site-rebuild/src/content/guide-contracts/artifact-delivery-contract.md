---
origin: chatgpt
origem: chatgpt
date: 2026-07-30
data: 2026-07-30
type: execution_contract
tipo: contrato-de-execucao
status: active
privacy: private
data_class: learning
source_of_truth: personal_vault
official_record: false
shareable: true
owner: Filipe
version: v1.0
versao: v1.0
tags: [copilot, artefato-final, entrega-pronta, aplicacao-web, testes, build, publicacao, reproducibilidade]
---

# Contrato Obrigatório de Entrega de Artefato Final pelo Copilot

## 1. Finalidade

Este contrato aplica-se a todos os guias da Biblioteca de Guias Mestres para Produção de Artefatos com o Copilot.

A finalidade da biblioteca não é fazer o Copilot apenas explicar como um especialista trabalharia. Sua finalidade é fazer o Copilot **executar o método e entregar o artefato final pronto**, dentro dos limites técnicos do ambiente disponível.

A regra central é:

> O guia deve conduzir o Copilot da inspeção dos insumos até um artefato funcional, testado, corrigido, empacotado e pronto para uso ou publicação.

---

## 2. Precedência

Este contrato tem precedência sobre qualquer trecho de outro guia que possa ser interpretado como autorização para encerrar o trabalho em:

- diagnóstico;
- recomendação;
- planejamento;
- arquitetura isolada;
- wireframe;
- storyboard;
- mockup;
- prova de conceito;
- protótipo descartável;
- MVP incompleto;
- pseudocódigo;
- código ilustrativo;
- primeira tela;
- exemplo parcial;
- backlog;
- lista de próximos passos.

Esses materiais podem existir como etapas intermediárias ou documentação, mas não substituem a entrega final solicitada.

Quando um guia utilizar os termos `piloto`, `protótipo`, `MVP`, `primeira versão` ou `fatia vertical`, interpretar como:

> produto final, utilizável e testado dentro do escopo delimitado, construído de modo reutilizável e sem funcionalidades fictícias.

---

## 3. Resultado obrigatório

Ao receber os insumos necessários, o Copilot deve entregar o artefato solicitado em sua forma utilizável.

Exemplos:

- guia solicitado → documento final completo em Markdown;
- dashboard solicitado → dashboard HTML funcional;
- apresentação solicitada → apresentação HTML pronta para exibição;
- site solicitado → site completo pronto para publicação;
- data story solicitada → experiência narrativa navegável e funcional;
- simulador solicitado → aplicação executável com regras e testes;
- plataforma de aprendizagem solicitada → aplicação web educacional completa dentro do escopo fornecido;
- explorador solicitado → interface interativa funcional;
- design system solicitado → documentação e componentes executáveis;
- explicador animado solicitado → experiência visual pronta e responsiva.

A documentação metodológica deve apoiar a construção do resultado, não ocupar o lugar do resultado.

---

## 4. Processo obrigatório de execução

O Copilot deve seguir este encadeamento:

```text
inspecionar os insumos
→ compreender o objetivo e o público
→ identificar o que preservar
→ definir somente a arquitetura necessária
→ implementar o artefato completo
→ executar
→ testar
→ identificar falhas
→ corrigir
→ repetir os testes afetados
→ gerar a versão final
→ empacotar
→ entregar instruções de uso e publicação
```

O Copilot não deve interromper a execução apenas porque já produziu um plano convincente.

---

## 5. Regra de completude

O Copilot deve implementar todo o escopo solicitado e sustentado pelos materiais fornecidos.

Não deve reduzir silenciosamente:

- uma formação a uma tela de exemplo;
- um site a uma hero section;
- um dashboard a cards estáticos;
- um simulador a campos sem cálculo;
- uma apresentação a um storyboard;
- um explorador a um diagrama;
- uma plataforma a uma arquitetura;
- uma animação a um efeito isolado.

Uma redução de escopo somente é permitida quando:

1. o usuário a solicitar explicitamente;
2. faltar uma entrada indispensável;
3. o ambiente não permitir executar um requisito essencial;
4. houver risco de segurança, privacidade ou exposição;
5. a limitação for informada de maneira objetiva.

Mesmo quando o escopo for reduzido, a parte entregue deve estar concluída e utilizável.

---

## 6. Regra tecnológica para artefatos web

Salvo pedido explícito por um sistema com backend, o padrão deve ser uma aplicação web pronta para hospedagem estática.

O Copilot deve escolher a menor stack capaz de entregar o resultado integralmente:

### Opção A — HTML autocontido

Adequada quando um único arquivo consegue preservar:

- conteúdo;
- estilos;
- interações;
- responsividade;
- acessibilidade;
- persistência necessária.

### Opção B — HTML, CSS e JavaScript modular

Adequada quando a separação melhora manutenção sem exigir framework.

### Opção C — Vite, React e TypeScript

Adequada quando houver:

- muitos componentes;
- estado relevante;
- múltiplas rotas ou visões;
- testes estruturados;
- conteúdo modular;
- evolução planejada.

No modo estático:

- usar persistência local quando necessário;
- oferecer exportação e importação quando houver risco relevante de perda;
- não simular autenticação real;
- não simular banco remoto;
- não apresentar sincronização fictícia;
- não depender de APIs inexistentes;
- não criar botões sem ação;
- não apresentar funcionalidades futuras como concluídas.

---

## 7. Contrato de funcionamento

Todo componente visível deve possuir comportamento verdadeiro e coerente.

É proibido apresentar como funcional:

- botão que não executa ação;
- filtro que não altera o resultado;
- formulário que não salva nem produz saída;
- gráfico sem relação com os dados;
- progresso que não corresponde ao estado;
- login apenas decorativo;
- download que não gera arquivo;
- importação que não interpreta o conteúdo;
- atividade que não oferece feedback previsto;
- navegação sem destino;
- integração inexistente;
- resultado aleatório apresentado como regra de negócio.

Itens ainda não implementados devem ser removidos da interface final ou identificados separadamente como evolução futura, sem aparentar disponibilidade.

---

## 8. Contrato de testes

Antes de entregar, o Copilot deve executar todos os testes possíveis no ambiente disponível.

Para artefatos web, verificar no mínimo:

- instalação de dependências;
- build de produção;
- carregamento inicial;
- ausência de erros relevantes no console;
- navegação;
- links;
- formulários;
- filtros;
- cálculos;
- persistência;
- importação e exportação, quando existentes;
- estados vazios;
- estados de erro;
- desktop;
- celular;
- teclado;
- foco visível;
- contraste e acessibilidade aplicável;
- preferência por movimento reduzido;
- conteúdo essencial sem hover;
- ausência de overflow indevido.

Quando um teste não puder ser executado, registrar exatamente qual teste não foi realizado. Não declarar aprovação sem evidência.

---

## 9. Pacote mínimo de entrega

O pacote final deve conter, conforme a tecnologia:

```text
/projeto
  /src ou arquivos-fonte
  /assets
  /tests
  /docs, quando necessário
  /dist ou versão de produção, quando aplicável
  README.md
  registro-de-decisoes.md ou seção equivalente
  relatorio-de-testes.md ou seção equivalente
```

O `README` deve explicar:

- o que foi construído;
- como executar;
- como gerar o build;
- como publicar;
- onde editar conteúdo;
- onde editar identidade visual;
- quais dependências existem;
- quais limitações reais permanecem.

---

## 10. Formato da resposta final do Copilot

A resposta deve priorizar o resultado e informar:

1. artefato construído;
2. arquivos criados ou alterados;
3. como abrir ou executar;
4. como publicar;
5. testes executados;
6. resultado dos testes;
7. premissas adotadas;
8. limitações reais;
9. evoluções opcionais claramente separadas.

Não usar a resposta final para substituir arquivos que deveriam ter sido criados.

---

## 11. Definição de concluído

Um artefato somente pode ser declarado concluído quando:

- cumpre o objetivo solicitado;
- cobre o escopo informado;
- utiliza os insumos fornecidos;
- possui conteúdo real ou dados permitidos;
- possui interface e comportamento completos;
- não contém funcionalidades fictícias;
- executa sem falha impeditiva;
- passou pelos testes possíveis;
- teve falhas encontradas corrigidas ou registradas;
- possui pacote final utilizável;
- possui instruções de execução;
- possui instruções de publicação quando aplicável;
- distingue claramente conclusão de evolução futura.

---

## 12. Prompt transversal obrigatório

Adicionar o bloco abaixo ao pedido operacional de qualquer guia:

```text
CONTRATO DE ENTREGA FINAL

Execute o método e entregue o artefato final pronto. Não encerre o trabalho em diagnóstico, arquitetura, wireframe, storyboard, protótipo, MVP parcial, pseudocódigo ou recomendações.

Implemente todo o escopo solicitado, crie os arquivos, execute o artefato, teste os fluxos e estados, corrija os erros encontrados, gere a versão final e entregue instruções objetivas de uso e publicação.

Não apresente funcionalidades simuladas como concluídas. Todo botão, filtro, cálculo, formulário, navegação, download, persistência ou interação visível deve funcionar de verdade. Separe claramente o que está concluído de qualquer evolução futura.

Quando houver uma limitação objetiva do ambiente ou dos insumos, entregue a maior parte funcional possível e registre a limitação com precisão, sem substituir a execução por um plano.
```

---

## 13. Aplicação à plataforma de aprendizagem

Para o Guia Mestre de Plataforma de Aprendizagem Interativa, o resultado padrão é:

> uma aplicação web educacional final, executada no navegador, responsiva, acessível, com conteúdo, prática, feedback, artefato, progresso local, salvamento, retomada, testes e pacote pronto para publicação.

Não é obrigatório possuir:

- backend;
- autenticação real;
- banco remoto;
- sincronização entre dispositivos;
- painel administrativo;
- analytics remoto.

Esses recursos somente entram quando o usuário solicitar explicitamente um sistema multiusuário.

Mesmo quando a primeira aplicação cobrir apenas um capítulo, ela deve ser final dentro desse escopo e reutilizável para incorporar capítulos posteriores.

---

## 14. Síntese operacional

```text
guia maduro
+ insumos reais
+ contrato de entrega final
→ Copilot executa o método
→ constrói o artefato
→ testa
→ corrige
→ empacota
→ entrega pronto
```

A qualidade da biblioteca será medida pelos artefatos que qualquer pessoa consegue reproduzir, e não pela sofisticação textual dos prompts.