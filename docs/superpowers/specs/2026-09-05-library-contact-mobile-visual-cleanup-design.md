# Blog Filipe Guardia — Biblioteca Pública, Contato e Mobile Visual QA v1

**Status:** aprovado para implementação  
**Data:** 2026-09-05  
**Branch:** `feat/library-contact-mobile-visual-cleanup-v1`

## 1. Objetivo

Corrigir três problemas públicos do blog: a Biblioteca hoje não explica claramente o que entrega, a página de Contato não oferece os canais pessoais desejados e figuras/diagramas técnicos quebram em mobile por clipping, overflow ou sobreposição.

A implementação também deve revalidar a spec visual de 2026-08-26 e concluir pendências diretamente relacionadas a essas áreas sem refazer blocos já concluídos.

## 2. Biblioteca: novo contrato público

A Biblioteca pública passa a explicar **guias reutilizáveis para assistentes de IA**.

Um guia é um arquivo Markdown contendo instruções estruturadas que pode ser anexado, colado ou fornecido como contexto a ChatGPT, Copilot, Claude ou outro assistente compatível. Ele funciona de forma semelhante a uma skill portátil: não instala capacidades novas no modelo, mas ativa um modo de trabalho especializado ao fornecer objetivo, entradas, processo, critérios de qualidade e limites.

A primeira dobra da página deve responder em segundos:

1. O que é um guia?
2. Para que serve?
3. Como usar em um assistente?
4. O que muda depois de ativá-lo?

A página pública deve ser uma única entrada simples em `/biblioteca.html`.

## 3. Catálogo de guias

Cada guia público deve exibir:

- ID;
- nome;
- resumo em linguagem comum;
- problema que resolve;
- exemplos de tarefas para as quais deve ser ativado;
- compatibilidade: ChatGPT, Copilot, Claude e assistentes que aceitem instruções/contexto em Markdown;
- ação principal: **Baixar guia (.md)**;
- ação secundária opcional: visualizar o arquivo Markdown no navegador.

Os arquivos canônicos públicos serão copiados da biblioteca compacta existente em `FilipeGCB/obsidian-notes`, diretório `Projetos/formacao-transformacao-digital-ia/12_BIBLIOTECA_HABILIDADES_COPILOT/prompts/`, após revisão de segurança pública.

O blog não deve depender do repositório privado para servir downloads: cópias sanitizadas e versionadas ficam em `site-rebuild/public/guias/`.

## 4. Página antiga usada pelo agente

A estrutura histórica em `/habilidades/` e arquivos relacionados continua no mesmo endereço porque integrações existentes dependem dela.

Regras:

- não renomear;
- não mover;
- não apagar;
- continuar preservando no build/deploy;
- remover links públicos do blog que convidem visitantes a navegar nela;
- remover `/habilidades/` do sitemap editorial;
- remover `PageAgentLauncher` da Biblioteca pública;
- não apresentar a estrutura antiga como demonstração ou produto do blog.

## 5. Contato

A página `/contato.html` deixa o Formspree de ser a única ação central e passa a priorizar canais diretos.

Canais confirmados:

- e-mail pessoal: `filipeguardia@gmail.com`;
- GitHub: `https://github.com/FilipeGCB`.

WhatsApp, telefone e Telegram só podem ser publicados quando o valor exato estiver disponível em fonte autorizada; nunca inventar número ou username. A estrutura deve aceitar esses campos e ocultá-los quando ausentes.

O contato deve ser simples: e-mail/canais diretos no topo, formulário como alternativa secundária.

## 6. Diagramas e figuras em mobile

Toda figura explicativa deve permanecer legível em 390 px sem cortar o lado esquerdo, produzir overflow horizontal ou colocar texto/setas sobre texto indevidamente.

Regras:

- SVG deve ter `viewBox` válido;
- figuras devem usar `max-width: 100%` e altura automática;
- containers não podem usar largura mínima que force corte;
- quando o SVG for semanticamente denso demais para 390 px, usar composição responsiva ou scroll horizontal explícito somente se a leitura exigir;
- setas/labels que já se sobrepõem dentro do próprio SVG devem ser redesenhados, não apenas encolhidos;
- corrigir explicitamente o diagrama MCP citado pelo usuário.

## 7. QA inspirado no VPS

Reaproveitar conceitos do Visual Presentation Studio como referência, sem criar dependência entre repositórios.

O Playwright do blog deve testar ao menos:

- horizontal overflow;
- elementos fora dos limites da viewport;
- imagens quebradas;
- figuras com dimensões inválidas;
- clipping de figuras;
- sobreposição entre labels/elementos marcados para QA em figuras críticas;
- 390×844, 768×1024, 1366×768, 1440×900, 1920×1080, 2560×1440 e 3840×2160.

O gate deve falhar em regressões objetivas.

## 8. Compatibilidade e segurança dos guias

A página deve evitar afirmar que um arquivo Markdown é uma skill nativa instalada. Copy aprovada:

> Um guia é um prompt/instrução estruturada em Markdown que funciona como uma skill portátil: você fornece o arquivo ao assistente e ele passa a seguir aquele método para uma classe específica de tarefas.

Não publicar conteúdo confidencial, caminhos privados, tokens, dados de clientes ou instruções dependentes de ambiente privado.

## 9. Pendências da spec visual original

Ao finalizar este bloco, revalidar o estado real de `main` contra:

- Biblioteca como hub técnico premium;
- Contato/Obrigado/404;
- figuras técnicas;
- imagens responsivas;
- pipeline image-before-publish;
- páginas Sobre/Projetos/Artigos;
- QA multi-viewport.

Classificar itens restantes como `DONE`, `PARTIAL` ou `OPEN` e implementar neste PR apenas os ajustes diretamente necessários para Biblioteca, Contato e figuras/mobile. Pendências independentes devem virar backlog explícito para o próximo bloco, evitando expansão silenciosa do escopo.

## 10. Gates de conclusão

- Biblioteca compreensível sem conhecer a história do projeto;
- todos os 24 guias disponíveis em `.md` público;
- nenhum link editorial público para `/habilidades/`;
- `/habilidades/` continua sendo preservado e acessível diretamente;
- contato mostra o e-mail pessoal correto;
- mobile sem overflow/clipping nas figuras auditadas;
- MCP corrigido;
- build, route audit, image checks e Playwright verdes;
- PR mergeado somente após gates verdes.
