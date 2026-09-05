# Public Portfolio README System v1

**Status:** design aprovado em conversa; aguardando revisão do documento  
**Data:** 2026-09-05  
**Hub de coordenação:** `FilipeGCB/blog-filipe-guardia`  
**Escopo:** padronização editorial dos repositórios públicos + alinhamento narrativo com o Blog Filipe

## 1. Objetivo

Organizar a camada pública do portfólio de Filipe Guardia para que qualquer visitante entenda rapidamente, em português ou inglês, o que cada projeto é, por que existe, qual problema resolve, em que estado está e como explorar mais.

A padronização deve reduzir densidade desnecessária no primeiro contato sem empobrecer a documentação técnica já existente.

## 2. Repositórios públicos no escopo

1. `FilipeGCB/blog-filipe-guardia`
2. `FilipeGCB/visual-presentation-studio-public`
3. `FilipeGCB/guardia-live`
4. `FilipeGCB/cognitive-os`
5. `FilipeGCB/fil-harness`

Repositórios privados ficam fora deste trabalho.

## 3. Princípio editorial

A primeira tela do README deve responder, em poucos segundos:

1. **O que é?**
2. **Por que existe?**
3. **Qual é o diferencial?**
4. **Em que estado está?**
5. **Como posso testar, instalar, acessar ou entender melhor?**

O README deixa de ser uma documentação longa que começa sem contexto e passa a funcionar primeiro como uma página de entrada do produto/projeto.

## 4. Estratégia bilíngue

### 4.1 Idioma principal

- `README.md`: português do Brasil como idioma principal.
- A abertura inclui imediatamente uma frase-resumo em inglês e um link visível para a versão completa em inglês.
- `README.en.md`: versão completa em inglês, semanticamente equivalente e adaptada naturalmente ao idioma.

### 4.2 Exceção controlada

O Cognitive OS já possui `README.pt-BR.md` e `README.md` em inglês. Para evitar quebra desnecessária de links/distribuição, ele pode manter essa estrutura histórica, desde que o topo dos dois arquivos seja simplificado para o mesmo padrão de entrada e os links de idioma sejam explícitos.

## 5. Estrutura padrão do README

A ordem-base é:

1. **Nome do projeto**
2. **Tagline curta**
3. **Resumo PT-BR em 1–2 frases**
4. **Resumo EN em 1 frase**
5. **Link de idioma**
6. **O que é**
7. **Problema que resolve / por que existe**
8. **O diferencial**
9. **Estado atual**
10. **Como usar / testar / acessar**
11. **Arquitetura ou funcionamento resumido**, quando relevante
12. **Documentação detalhada / segurança / limitações / licença**, quando aplicável

O visitante não deve precisar atravessar arquitetura, metodologia ou histórico de release para entender o projeto.

## 6. Regras de estilo

- Frases curtas e concretas.
- Evitar jargão antes da explicação simples.
- Não iniciar por detalhes de implementação.
- Não vender capacidade que não existe.
- Manter limites e estado real claros.
- PT-BR e EN devem ter o mesmo significado, sem tradução literal ruim.
- Evitar introduções autobiográficas longas nos repositórios de produto.
- Links para blog e outros projetos somente quando ajudam a entender o ecossistema.
- Preservar documentação técnica detalhada abaixo da camada de entrada.

## 7. Direção por repositório

### 7.1 Blog Filipe

Problema atual:
- README em português apenas;
- narrativa mistura portfólio, blog, currículo e projetos com nomes antigos;
- alguns projetos privados aparecem no mesmo nível dos produtos públicos atuais.

Direção:
- explicar que o repo contém o site público pessoal, artigos e portfólio;
- destacar o site publicado logo no topo;
- adicionar versão em inglês;
- trocar a lista de projetos por uma narrativa alinhada aos projetos públicos reais atuais;
- projetos privados podem continuar citados apenas quando agregarem contexto, sempre claramente marcados como privados.

### 7.2 Visual Presentation Studio

Problema atual:
- README forte tecnicamente, mas apenas em inglês e denso antes de chegar ao valor do produto.

Direção:
- PT-BR como entrada principal;
- EN completo em arquivo próprio;
- preservar metodologia, quality system, gates e fronteira pública, mas abaixo de uma abertura curta;
- explicar em linguagem direta que é um sistema para projetar, construir, renderizar, inspecionar e validar apresentações e narrativas visuais com IA assistida.

### 7.3 Guard.IA Live

Problema atual:
- apenas em português;
- primeira explicação já entra cedo em detalhes de extensão/browser.

Direção:
- explicação simples primeiro: copiloto local-first para acompanhar reuniões em tempo real;
- deixar claro o que está realmente implementado hoje;
- versão completa em inglês;
- manter limitações de Teams/Firefox/Whisper explícitas.

### 7.4 Cognitive OS

Problema atual:
- já bilíngue, mas extremamente denso na primeira experiência;
- o valor central pode se perder entre detalhes de release, adapters e capabilities.

Direção:
- preservar toda a documentação atual;
- reduzir o topo para: o que é, quando usar, resultado esperado, instalação e exemplo de 60 segundos;
- empurrar release evidence, adapters e análise de capabilities para seções posteriores;
- manter a estrutura bilíngue existente por compatibilidade.

### 7.5 Fil-Harness

Problema atual:
- apenas em inglês;
- valor técnico é claro para um especialista, mas não para um visitante geral.

Direção:
- PT-BR como entrada principal;
- EN completo em arquivo separado;
- explicar primeiro que agentes podem executar trabalho, mas não podem se dar autoridade para aprovar o próprio resultado;
- manter gates, trusted evidence, ALLOW/HUMAN/DENY, scope e retry abaixo da camada de entrada.

## 8. Coerência entre GitHub e Blog

O GitHub e o Blog devem contar a mesma história profissional.

A narrativa-base do portfólio público passa a ser organizada em torno de projetos reais e verificáveis, especialmente:

- Cognitive OS — qualidade e maturação de decisões antes da execução;
- Fil-Harness — autoridade, evidência e governança na execução por agentes;
- Visual Presentation Studio — engenharia de produção visual e QA;
- Guard.IA Live — copiloto local-first para contexto em tempo real;
- Blog Filipe — publicação que conecta trajetória, artigos, pesquisa aplicada e esses projetos.

O blog não deve tratar esses projetos como cards isolados; deve explicar o que cada um demonstra sobre a evolução profissional e técnica do autor.

## 9. Sequência de implementação

1. Criar/ajustar a abertura e arquitetura dos READMEs dos cinco repositórios.
2. Criar arquivos de idioma ausentes.
3. Preservar conteúdo técnico útil, movendo-o para baixo da camada de entrada.
4. Verificar links internos e comandos de instalação/teste.
5. Não alterar código funcional dos produtos neste trabalho.
6. Depois da padronização dos READMEs, retomar `blog-filipe-guardia` na branch `design/visual-system-v1`.
7. Executar o primeiro bloco já aprovado: fundação responsiva + hero definitivo.
8. Em seguida, reconstruir a página Projetos para refletir o portfólio público real e bilíngue.

## 10. Validação

Para cada repositório, a revisão final deve confirmar:

- visitante entende o projeto nas primeiras linhas;
- PT-BR e EN estão presentes e ligados entre si;
- estado atual e limitações são verdadeiros;
- nenhum nome antigo ou projeto privado aparece como produto público por engano;
- nenhum segredo, dado operacional ou informação corporativa é introduzido;
- comandos e links existentes continuam corretos;
- conteúdo técnico relevante não foi perdido, apenas reorganizado;
- tom e estrutura visual são reconhecíveis como parte do mesmo portfólio.

## 11. Fora de escopo

- renomear repositórios públicos existentes;
- mudar licença de projetos;
- alterar arquitetura ou comportamento dos produtos;
- transformar todos os projetos em um monorepo;
- publicar código privado;
- redesenhar visualmente o site durante a etapa de README;
- reescrever todos os artigos do Blog.

## 12. Definition of Done

O trabalho está concluído quando:

- os cinco repositórios públicos possuem entrada clara e consistente;
- todos oferecem acesso imediato a PT-BR e EN;
- cada projeto pode ser explicado em até 10 segundos pelo topo do README;
- o conteúdo técnico detalhado continua disponível;
- o Blog passa a apresentar o conjunto de projetos públicos com nomes e descrições atuais;
- o próximo trabalho do Blog está claramente retomado na fundação responsiva + hero definitivo.
