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
tags: [copilot, documentos, comunicacao, word, pdf, powerpoint, coautoria, executivo]
---

# Guia Mestre para Documentos, Comunicação e Arquivos Office

## Finalidade

Transformar contexto bruto em documentos claros, comunicações executivas e arquivos Office utilizáveis, preservando estrutura, formatação, intenção, rastreabilidade e revisão humana.

## Fontes consolidadas

- `skills/doc-coauthoring.md`;
- `skills/internal-comms.md`;
- `skills/docx.md`;
- `skills/pdf.md`;
- `skills/pptx.md`;
- `plugins/negocio/pdf-viewer.md`.

## Modos de trabalho

### Coautoria de documento

Conduzir transferência de contexto, estruturar o argumento, redigir, testar compreensão com leitor crítico e revisar. Não tratar a primeira versão como final.

### Comunicação interna

Produzir atualização, FAQ, anúncio, newsletter, nota de decisão, resumo executivo ou mensagem de alinhamento com foco no que mudou, por que importa, o que cada público precisa fazer e onde buscar detalhes.

### Documento Word

Gerar `.docx` editável com estilos consistentes, títulos, listas, tabelas, cabeçalho, rodapé, sumário quando necessário e verificação de abertura. Evitar formatação manual fragmentada.

### PDF

Extrair, unir, dividir, girar, ordenar, converter, preencher, aplicar marca d’água ou reconhecer texto. Preservar o original, registrar páginas afetadas e verificar o resultado final.

### Apresentação PowerPoint

Usar somente quando PowerPoint for requisito. Criar narrativa, motivo visual, layouts variados, texto editável e notas quando necessário. Não converter um relatório em slides de bullet.

### Revisão visual de PDF

Quando houver anotação, assinatura ou preenchimento, identificar coordenadas e páginas com precisão, gerar cópia de trabalho e validar visualmente. Não sobrepor conteúdo sem inspeção.

## Processo

1. Identificar audiência, objetivo, decisão e canal.
2. Separar conteúdo obrigatório de material de apoio.
3. Definir estrutura antes de redigir.
4. Produzir versão completa.
5. Fazer revisão de leitor: o que está ambíguo, ausente ou excessivo.
6. Corrigir conteúdo e forma.
7. Gerar o arquivo solicitado.
8. Validar abertura, paginação, tabelas, links, imagens, fontes e editabilidade.

## Regras de escrita

- começar pelo que o leitor precisa compreender ou decidir;
- usar títulos informativos;
- evitar introduções genéricas;
- não esconder decisão em parágrafo longo;
- distinguir contexto, evidência, análise, decisão, ação e pendência;
- preservar termos técnicos necessários e explicar somente os que bloqueiam entendimento;
- usar tabelas quando facilitarem comparação, não para decorar;
- reduzir redundância sem remover nuance importante;
- manter tom compatível com audiência e canal.

## Regras de apresentação

Uma apresentação deve possuir:

- tese ou mensagem central;
- progressão narrativa;
- uma função por slide;
- evidência legível;
- variedade de composição controlada;
- consistência de identidade;
- encerramento com decisão, ação ou síntese.

## Regras de arquivo

- preservar uma cópia do original;
- não declarar conversão fiel sem abrir o resultado;
- não rasterizar texto editável sem necessidade;
- não criar sumário vazio;
- não duplicar marcadores;
- não quebrar tabela entre páginas sem controle;
- não usar fontes ausentes sem alternativa;
- não alterar metadados ou conteúdo silenciosamente.

## QA

Verificar:

- coerência do conteúdo;
- ortografia e consistência terminológica;
- hierarquia visual;
- paginação;
- tabelas e gráficos;
- links;
- imagens;
- sumário;
- abertura no formato de destino;
- editabilidade;
- ausência de elementos cortados;
- correspondência entre versão fonte e exportada.

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
