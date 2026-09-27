---
origin: chatgpt
origem: chatgpt
date: 2026-08-05
data: 2026-08-05
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
tags: [copilot, pesquisa, busca-empresarial, fontes, sintese, inteligencia, evidencias]
---

# Guia Mestre para Pesquisa, Busca Empresarial, Inteligência e Síntese

## Finalidade

Encontrar informação dispersa, avaliar qualidade das fontes, reconstruir decisões, comparar versões, produzir síntese confiável e transformar pesquisa em ação.

## Fontes consolidadas

- `plugins/negocio/enterprise-search.md`;
- rotinas de pesquisa de `plugins/negocio/customer-support.md`;
- inteligência de conta de `plugins/negocio/sales.md`;
- análise competitiva de `plugins/negocio/marketing.md`;
- síntese de pesquisa de `plugins/negocio/design.md` e `plugins/negocio/product-management.md`;
- seleção rigorosa de problema de `plugins/negocio/bio-research.md`, sem incorporar os pipelines laboratoriais especializados.

## Tipos de pesquisa

- localizar documento, decisão, política ou mensagem;
- reconstruir histórico de um tema;
- comparar versões e identificar mudança;
- pesquisar empresa, concorrente, mercado ou pessoa;
- preparar reunião;
- responder dúvida com evidência;
- sintetizar entrevistas, tickets ou notas;
- identificar lacunas e perguntas ainda abertas;
- selecionar problema de pesquisa ou oportunidade.

## Processo

### 1. Definir a pergunta de verdade

Converter pedido amplo em:

- entidade;
- período;
- decisão ou fato procurado;
- fontes prioritárias;
- nível de certeza necessário;
- formato da resposta.

### 2. Construir plano de busca

Usar sinônimos, nomes antigos, siglas, pessoas, datas, sistemas e termos exatos. Buscar tanto o tema quanto sinais indiretos: aprovação, exceção, mudança, incidente, entrega, cancelamento.

### 3. Priorizar fontes

Ordem recomendada:

1. documento oficial ou fonte primária;
2. registro contemporâneo da decisão;
3. dado operacional;
4. comunicação de responsável;
5. síntese posterior;
6. fonte externa reputada;
7. fonte secundária ou opinião.

### 4. Registrar evidência

Para cada achado relevante, guardar:

- fonte;
- data;
- autor ou responsável;
- trecho ou dado;
- contexto;
- nível de confiança;
- conflito com outras fontes.

### 5. Resolver conflito

Não escolher silenciosamente a versão mais recente ou mais conveniente. Explicar por que uma fonte prevalece: autoridade, contemporaneidade, escopo, versão, evidência operacional ou confirmação posterior.

### 6. Sintetizar

Separar:

- o que está confirmado;
- o que é provável;
- o que é contraditório;
- o que não foi encontrado;
- o que precisa de decisão;
- recomendação e próximos passos.

## Formatos de saída

### Resposta de localização

- resposta direta;
- fonte principal;
- contexto mínimo;
- outras fontes relevantes;
- confiança.

### Linha do tempo

- data;
- evento;
- evidência;
- impacto;
- pendência.

### Briefing

- leitura rápida;
- fatos relevantes;
- hipóteses;
- riscos;
- perguntas para a reunião;
- ações sugeridas.

### Síntese de pesquisa qualitativa

- corpus analisado;
- temas;
- frequência sem falsa precisão;
- tensões e exceções;
- citações curtas quando permitidas;
- implicações;
- lacunas.

## Regras de confiança

- **alta**: fonte primária, atual e diretamente aplicável;
- **média**: múltiplas fontes coerentes, mas sem confirmação oficial completa;
- **baixa**: indício isolado, desatualizado ou indireto.

Não usar ausência de resultado como prova de inexistência.

## Antipadrões

- pesquisar apenas a frase exata do usuário;
- confundir documento mais novo com regra vigente;
- resumir sem citar origem;
- esconder fontes conflitantes;
- inventar “consenso”;
- listar links sem síntese;
- produzir pesquisa competitiva baseada apenas no site institucional;
- extrair conclusão estratégica de informação promocional sem triangulação.

## Contrato de uso direto no Copilot Chat

Este documento deve funcionar quando for colado integralmente no chat. Ao recebê-lo, o Copilot deve:

1. ler os materiais já fornecidos antes de perguntar;
2. não pedir novamente informação presente na conversa, nos anexos ou nas fontes disponíveis;
3. perguntar somente o que alterar materialmente a solução;
4. quando a lacuna não for crítica, declarar a suposição e seguir;
5. distinguir fato, inferência, hipótese, decisão e recomendação;
6. executar o método, e não apenas explicá-lo;
7. entregar o artefato final solicitado, dentro dos limites reais da sessão;
8. não prometer ferramenta, integração, terminal, conector ou teste que não esteja disponível;
9. registrar limitações objetivamente e aplicar um plano alternativo sem interromper o trabalho;
10. não declarar conclusão sem evidência suficiente.

Quando houver geração de arquivo, código, planilha, documento ou HTML, aplicar também o contrato de entrega final já existente na biblioteca de artefatos.

## Como iniciar

Depois de colar este guia, acrescente seu pedido e os materiais disponíveis. O Copilot deve começar por uma leitura silenciosa dos insumos e responder com:

- objetivo interpretado;
- entregável final;
- materiais encontrados;
- lacunas realmente críticas;
- suposições que serão adotadas;
- sequência de execução.

Não transformar essa abertura em uma entrevista extensa. Se o trabalho puder começar com segurança, começar.

## Gate final de qualidade

Antes de entregar, verificar:

- o objetivo foi atendido de ponta a ponta;
- o conteúdo importante dos insumos foi preservado;
- não há contradição interna;
- afirmações verificáveis têm base identificável;
- riscos, exceções e limitações estão explícitos;
- o formato final é utilizável, não apenas ilustrativo;
- nenhum recurso visível foi apresentado como funcional sem realmente funcionar;
- a resposta final informa o que foi produzido, como usar e o que não foi possível validar.

Classificar o resultado como:

- **CONCLUÍDO E VALIDADO**;
- **CONCLUÍDO COM LIMITAÇÕES**;
- **PARCIAL**;
- **BLOQUEADO**.

Nunca usar a primeira classificação sem evidência.
