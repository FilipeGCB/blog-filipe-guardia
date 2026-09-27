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
tags: [copilot, historias, requisitos, baseline, comparacao, aderencia, aprovacao, parecer, email-html, projeto]
---

# Guia Mestre para Comparar Histórias de Projeto e Gerar Parecer com E-mail HTML

## Finalidade

Orientar o Copilot a comparar uma especificação, solicitação ou conjunto de histórias originalmente definido com as histórias, requisitos ou documentos atuais do projeto.

O trabalho não termina em um resumo. O Copilot deve reconstruir a intenção original, analisar o que foi preservado, alterado, fragmentado, perdido ou acrescentado, avaliar riscos e produzir uma comunicação final pronta para decisão.

## O que este guia produz

A saída padrão deve conter:

1. visão executiva do que o projeto deveria entregar;
2. mapa de correspondência entre baseline original e histórias atuais;
3. análise individual de cada história;
4. lacunas, divergências, sobreposições e novos escopos;
5. requisitos sem cobertura equivalente;
6. riscos funcionais, operacionais, de dados, segurança e governança;
7. recomendação de aprovação, aprovação condicionada, correção ou reprovação;
8. lista objetiva de ajustes necessários;
9. rastreabilidade das fontes utilizadas;
10. e-mail HTML final, pronto para copiar, revisar e enviar.

Quando solicitado, também pode produzir:

- planilha de controle de aderência;
- documento consolidado das histórias;
- matriz requisito × história;
- backlog corretivo;
- minuta de critérios de aceite;
- apresentação executiva em HTML.

## Quando usar

Use este guia quando houver duas ou mais camadas documentais do mesmo projeto, por exemplo:

- pedido inicial versus histórias refinadas;
- especificação funcional versus backlog atual;
- versão aprovada versus versão proposta;
- requisitos de negócio versus documento da fábrica;
- processo atual versus desenho futuro;
- contrato ou escopo versus entregáveis produzidos;
- documento original versus histórias fragmentadas em várias etapas.

É especialmente útil antes de:

- aprovar histórias;
- homologar uma entrega;
- responder à fábrica ou ao fornecedor;
- registrar divergências de escopo;
- aceitar uma mudança funcional;
- iniciar desenvolvimento com documentação inconsistente;
- comunicar riscos à liderança.

## Exemplos de aplicação

- Comparar oito histórias originais de um projeto com as histórias refinadas entregues pela fábrica e identificar requisitos desaparecidos.
- Analisar se uma história atual substituiu corretamente a original ou se trouxe um novo escopo sem cobrir o pedido anterior.
- Produzir um parecer de aprovação condicionada e um e-mail HTML com os ajustes obrigatórios por história.
- Reconstruir a evolução de um projeto e separar decisão vigente, mudança autorizada e perda acidental de requisito.
- Criar uma matriz que mostre quais requisitos estão atendidos, parciais, fragmentados, ausentes ou transformados em novo escopo.

## Princípios obrigatórios

### 1. A baseline original não é apenas contexto

O documento original representa a intenção, o problema e os compromissos que deram origem ao projeto. Ele deve ser tratado como referência de comparação, salvo quando houver evidência de decisão posterior que o substitua.

### 2. Texto diferente não significa automaticamente divergência

O Copilot deve comparar significado, responsabilidade, efeito operacional, regra, dado, controle e saída — não apenas palavras semelhantes.

### 3. Texto parecido não significa equivalência

Uma história pode repetir termos do requisito original e ainda assim:

- reduzir seu alcance;
- mudar o responsável;
- remover exceções;
- enfraquecer controles;
- transformar decisão em simples informação;
- deslocar a responsabilidade para outra etapa sem cobertura comprovada.

### 4. Novo escopo não substitui requisito antigo por silêncio

Quando uma história atual apresenta uma função nova, o Copilot deve classificá-la como novo escopo. Não deve presumir que ela substitui uma história original diferente.

### 5. Aprovação exige cobertura e critérios verificáveis

Uma história não deve ser aprovada apenas porque parece bem escrita. Deve ser possível verificar:

- o que entra;
- o que acontece;
- quem decide;
- qual regra é aplicada;
- qual saída é produzida;
- como exceções são tratadas;
- como o resultado é auditado;
- quais critérios demonstram conclusão.

## Entradas esperadas

O Copilot deve aproveitar tudo o que estiver disponível:

- especificação funcional original;
- histórias originais;
- histórias atuais ou refinadas;
- e-mails de decisão;
- atas e alinhamentos;
- matrizes de regras;
- layouts e dicionários de dados;
- critérios de aceite;
- documentos de arquitetura;
- evidências de aprovação anterior;
- planilhas de controle;
- observações do responsável de negócio.

Não pedir novamente conteúdo já presente nos arquivos, na conversa ou nas fontes conectadas.

## Classificação de documentos

Antes de comparar, classificar cada fonte como:

- **baseline original** — pedido ou especificação de origem;
- **decisão posterior** — alteração explicitamente aprovada;
- **história atual** — versão em análise;
- **evidência complementar** — layout, regra, ata ou e-mail;
- **contexto histórico** — versão antiga sem vigência atual;
- **fonte conflitante** — documento que diverge sem decisão resolutiva;
- **fonte não localizada** — documento citado, mas indisponível.

Registrar nome, versão, data e função de cada fonte.

## Unidade de comparação

Decompor a baseline em requisitos atômicos. Cada requisito deve representar uma obrigação verificável.

Para cada requisito, registrar:

- identificador;
- tema;
- descrição;
- ator ou responsável;
- condição de entrada;
- regra ou decisão;
- dado necessário;
- saída esperada;
- exceções;
- controle ou evidência;
- criticidade;
- fonte e localização.

Depois localizar a cobertura nas histórias atuais.

## Classificação de aderência

Usar somente estas classificações:

### Atendido

A história atual preserva o objetivo, a responsabilidade, a regra, a saída e os controles essenciais do requisito.

### Parcial

Há cobertura reconhecível, mas faltam condições, exceções, dados, controle, responsabilidade ou critério de aceite.

### Fragmentado

O requisito foi distribuído entre várias histórias. A cobertura pode existir, mas depende de fronteiras e integrações explícitas.

### Divergente

A história atual altera o significado, a autoridade, o efeito ou o resultado esperado sem decisão posterior que justifique a mudança.

### Ausente

Não foi localizada cobertura equivalente nas histórias atuais.

### Novo escopo

A história atual introduz função ou obrigação que não constava na baseline.

### Indeterminado

A documentação disponível não permite concluir com segurança.

Nunca classificar como atendido apenas por semelhança lexical.

## Processo obrigatório

### Etapa 1 — Inventariar fontes

Listar documentos, versões, datas, status e finalidade de uso.

### Etapa 2 — Reconstruir o pedido original

Explicar, em linguagem de negócio:

- qual problema seria resolvido;
- qual fluxo foi proposto;
- quais decisões deveriam existir;
- quais responsabilidades foram atribuídas;
- quais saídas e controles eram esperados.

### Etapa 3 — Decompor a baseline

Criar requisitos atômicos e eliminar duplicações sem apagar nuances.

### Etapa 4 — Ler integralmente as histórias atuais

Para cada história, identificar:

- finalidade declarada;
- entradas;
- processamento;
- regras;
- saídas;
- sistemas;
- responsáveis;
- exceções;
- requisitos não funcionais;
- critérios de aceite;
- dependências.

### Etapa 5 — Construir o mapa de correspondência

Relacionar cada requisito original a uma ou mais histórias atuais, com evidência textual e classificação de aderência.

### Etapa 6 — Analisar fronteiras

Verificar:

- sobreposição de responsabilidades;
- lacunas entre histórias;
- requisito deslocado sem destino claro;
- ordem lógica incorreta;
- entrada que não é produzida pela etapa anterior;
- saída sem consumidor definido;
- decisão repetida em mais de uma história;
- dependência implícita;
- novo escopo tratado como substituição.

### Etapa 7 — Avaliar riscos

Considerar, quando aplicável:

- risco funcional;
- risco operacional;
- risco de perda de regra de negócio;
- risco de dados e privacidade;
- risco de segurança;
- risco de auditoria e rastreabilidade;
- risco de SLA e sustentação;
- risco de escopo e aceite;
- risco de implantação;
- risco de interpretação futura.

### Etapa 8 — Definir recomendação

Classificar cada história como:

- **APROVAR**;
- **APROVAR COM RESSALVAS DOCUMENTAIS**;
- **APROVAR CONDICIONADA A AJUSTES**;
- **NÃO APROVAR COMO ESTÁ**;
- **INFORMAÇÃO INSUFICIENTE PARA DECIDIR**.

A recomendação deve apresentar justificativa e condições objetivas.

### Etapa 9 — Produzir plano de correção

Para cada ponto, escrever:

- problema;
- impacto;
- ajuste esperado;
- história responsável;
- evidência necessária;
- prioridade;
- condição para aprovação.

### Etapa 10 — Gerar e-mail HTML

Criar comunicação pronta para uso, com hierarquia visual, linguagem profissional e conteúdo fiel ao parecer.

## Estrutura mínima da análise

### 1. Resumo executivo

- o que foi comparado;
- conclusão geral;
- maior lacuna;
- riscos principais;
- decisão recomendada.

### 2. Visão do processo

Mostrar a sequência lógica das histórias e a saída de cada etapa.

### 3. Mapa de aderência

| Requisito original | História atual | Classificação | Evidência | Lacuna ou mudança | Impacto | Ação recomendada |
|---|---|---|---|---|---|---|

### 4. Parecer por história

Para cada história:

- objetivo;
- aderências;
- divergências;
- ausências;
- novo escopo;
- sobreposições;
- riscos;
- ajustes;
- decisão sugerida.

### 5. Requisitos sem cobertura

Separar claramente o que desapareceu, ficou implícito ou não pôde ser localizado.

### 6. Backlog corretivo

Organizar ações por criticidade e dependência.

### 7. Fontes e limitações

Registrar documentos utilizados, data de corte, conflitos e materiais ausentes.

## Regras do e-mail HTML

O e-mail deve:

- funcionar em clientes corporativos de e-mail;
- usar estrutura simples e compatível;
- preferir tabelas e estilos inline quando necessário;
- ter largura confortável, aproximadamente 600 a 760 pixels;
- usar contraste adequado;
- manter assunto, saudação e encerramento editáveis;
- apresentar a decisão logo no início;
- resumir pontos por história;
- destacar bloqueios e condições de aprovação;
- evitar excesso de decoração;
- incluir versão em texto simples depois do HTML, quando solicitado.

O HTML não deve depender de:

- JavaScript;
- fontes externas obrigatórias;
- animações;
- recursos que clientes de e-mail normalmente bloqueiam;
- links ou imagens sem necessidade.

## Estrutura recomendada do e-mail

1. assunto sugerido;
2. saudação;
3. contexto da revisão;
4. decisão geral;
5. bloco por história;
6. ajustes obrigatórios;
7. requisitos ainda sem cobertura;
8. próximos passos e responsáveis;
9. encerramento;
10. observação sobre documentos analisados.

## Linguagem da comunicação

O e-mail deve ser:

- direto sem ser agressivo;
- firme sobre riscos e lacunas;
- específico sobre o que precisa mudar;
- cuidadoso para não afirmar ausência sem indicar a busca realizada;
- claro ao separar requisito original, decisão posterior e novo escopo;
- adequado ao nível hierárquico dos destinatários.

Evitar frases vagas como:

- “precisa melhorar”;
- “não está aderente”;
- “há alguns pontos”;
- “revisar conforme alinhado”.

Substituir por problema, efeito e ação objetiva.

## Regras de factualidade

- Não inventar requisitos que não estejam nas fontes.
- Não considerar conversa informal como decisão aprovada sem evidência.
- Não declarar ausência antes de verificar todas as histórias e documentos disponíveis.
- Não tratar recomendação do Copilot como decisão do negócio.
- Não misturar texto original com interpretação sem rotulagem.
- Citar documento, história, seção ou página sempre que possível.
- Marcar inferências e conflitos explicitamente.

## Antipadrões

- comparar apenas títulos;
- resumir documentos sem construir correspondência;
- aprovar porque a história está detalhada;
- assumir que nova história substituiu a antiga;
- esconder requisitos ausentes dentro de observações gerais;
- produzir e-mail antes de concluir a análise;
- copiar o parecer inteiro para o corpo do e-mail;
- gerar HTML visualmente bonito, mas incompatível com e-mail;
- comunicar reprovação sem indicar ajustes que permitiriam aprovação;
- omitir fontes, versões ou data de corte.

## Contrato de uso direto no Copilot Chat

Ao receber este guia, o Copilot deve:

1. ler integralmente os materiais já fornecidos;
2. classificar as fontes e identificar a baseline;
3. perguntar somente quando a lacuna impedir uma comparação confiável;
4. declarar suposições não críticas e prosseguir;
5. executar a comparação completa;
6. separar fatos, inferências, conflitos e recomendações;
7. produzir o parecer e os artefatos solicitados;
8. gerar o e-mail HTML completo quando essa saída fizer parte do pedido;
9. não declarar aprovação ou reprovação sem evidência;
10. informar limitações e documentos não localizados.

## Como iniciar

Depois de colar este guia, acrescente um pedido semelhante a:

> Compare integralmente a especificação original e as histórias atuais anexadas. Reconstrua a intenção inicial, crie o mapa requisito × história, identifique perdas, mudanças, sobreposições e novos escopos, recomende a decisão por história e entregue um e-mail HTML pronto para comunicar o parecer.

O Copilot deve começar pela leitura silenciosa dos documentos e informar apenas:

- baseline identificada;
- versões atuais encontradas;
- entregáveis que produzirá;
- lacunas realmente impeditivas;
- sequência de execução.

Não transformar essa abertura em uma entrevista longa.

## Gate final de qualidade

Antes de entregar, verificar:

- todos os documentos relevantes foram considerados;
- a baseline foi identificada corretamente;
- requisitos foram decompostos em unidades verificáveis;
- cada classificação possui evidência;
- requisitos ausentes e novos escopos estão separados;
- fronteiras entre histórias foram analisadas;
- recomendações possuem condições objetivas;
- riscos estão ligados a efeitos concretos;
- o e-mail resume fielmente o parecer;
- o HTML é compatível com e-mail corporativo;
- fontes, data de corte e limitações estão registradas;
- nenhum conteúdo foi inventado.

Classificar a entrega como:

- **CONCLUÍDA E VALIDADA**;
- **CONCLUÍDA COM LIMITAÇÕES**;
- **PARCIAL**;
- **BLOQUEADA**.

Nunca usar a primeira classificação sem rastreabilidade suficiente.
