# QA — passe de assets A+B

## Estado

**NÃO PRONTO PARA GATE 2.** A série A+B foi integrada e validada tecnicamente, mas a composição completa ainda precisa de inspeção em navegador nas rotas publicadas.

## Escopo validado

- Quatro cenas escuras formam uma progressão narrativa coerente na home: operação, estrutura, sistema e agente governado.
- Seis capas claras usam o mesmo vocabulário material e mantêm metáforas distintas para cada artigo.
- As três fotografias provisórias anteriores foram removidas do projeto.
- Os diagramas explicativos dos artigos foram preservados; as novas imagens entram como abertura editorial, não como substitutas de informação.
- Os arquivos finais estão em WebP, com proporção 16:9 e sem texto incorporado.
- Textos alternativos foram atualizados para descrever a função editorial de cada imagem.

## Verificações técnicas

- Validação de conteúdo e referências de assets: aprovada.
- Diagnóstico do Astro: aprovado.
- Build estático das 29 rotas: aprovado.
- Auditoria das rotas: aprovada.
- Inspeção isolada da série e do recorte móvel do hero: aprovada.

## Pendência de inspeção visual

O navegador de revisão não conseguiu acessar o preview local: `127.0.0.1` foi bloqueado pelo cliente e o endereço interno alternativo retornou conexão recusada. Por isso, estes pontos ainda não receberam confirmação visual em uma página renderizada:

- equilíbrio entre título, contraste e objeto no hero em desktop e mobile;
- transição e enquadramento dos quatro estados da narrativa sticky;
- cadência das capas claras no arquivo;
- recortes das capas nas páginas de artigo;
- ausência de regressões de espaçamento nas principais larguras de viewport.

## Critério para concluir

Manter a PR como rascunho até executar a inspeção das rotas publicadas em desktop e mobile e resolver qualquer ocorrência BLOCKER ou MAJOR. Não há ocorrência de produto conhecida nesses níveis neste passe; existe uma pendência de validação por indisponibilidade do ambiente de preview.
