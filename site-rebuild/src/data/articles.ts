export interface Article {
  slug: string;
  title: string;
  deck: string;
  category: string;
  series: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  cover: string;
  coverAlt: string;
  figure: string;
  figureAlt: string;
  figureCaption: string;
  figureAfterHeading: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    slug: 'local-first-nao-e-apenas-offline',
    title: 'Local-first não é apenas offline: por que alguns sistemas precisam continuar funcionando sem a nuvem',
    deck: 'Um sistema pode usar nuvem e ainda assim tratar o dispositivo local como parte real da operação. A diferença está em decidir o que continua funcionando quando a conexão desaparece.',
    category: 'Produtos, Sistemas & Arquitetura',
    series: 'Sistemas e continuidade',
    date: '2026-08-29',
    dateLabel: '29 de agosto de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/local-first-nao-e-apenas-offline.svg',
    coverAlt: 'Um computador mantém dados e trabalho localmente enquanto a nuvem aparece como camada de apoio e sincronização.',
    figure: '/assets/editorial/figures/local-first-nao-e-apenas-offline.svg',
    figureAlt: 'Diagrama com dispositivo local executando leitura, escrita e regras enquanto a nuvem fornece sincronização, backup e colaboração.',
    figureCaption: 'Local-first muda a ordem das dependências: o núcleo trabalha localmente e a nuvem amplia a experiência quando está disponível.',
    figureAfterHeading: 'dados-no-dispositivo',
    tags: ['local-first', 'software', 'continuidade']
  },
  {
    slug: 'antes-do-agente-de-dados-vem-o-dicionario',
    title: 'Antes do agente de dados, vem o dicionário',
    deck: 'Uma IA pode escrever SQL em segundos. Mas, sem um mapa confiável das tabelas, campos e relações, velocidade só faz a resposta errada chegar mais rápido.',
    category: 'Dados, Sistemas & IA',
    series: 'Dados e operação',
    date: '2026-08-22',
    dateLabel: '22 de agosto de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/antes-do-agente-de-dados-vem-o-dicionario.svg',
    coverAlt: 'Tabelas técnicas passam por um dicionário de dados com significado e relações antes de chegar a um agente de inteligência artificial.',
    figure: '/assets/editorial/figures/antes-do-agente-de-dados-vem-o-dicionario.svg',
    figureAlt: 'Quatro camadas de um dicionário de dados: estrutura, significado, relações e governança.',
    figureCaption: 'O catálogo técnico é o começo; significado, relações e governança transformam inventário em contexto confiável.',
    figureAfterHeading: 'metadados-primeiro-mapa',
    tags: ['dicionário de dados', 'metadados', 'agentes']
  },
  {
    slug: 'o-modelo-pode-mudar-a-memoria-precisa-ficar',
    title: 'O modelo pode mudar. A memória precisa ficar.',
    deck: 'Modelos evoluem, fornecedores mudam e agentes são substituídos. O conhecimento acumulado pela empresa não deveria recomeçar do zero.',
    category: 'Arquitetura, Conhecimento & IA',
    series: 'Conhecimento organizacional',
    date: '2026-08-15',
    dateLabel: '15 de agosto de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/o-modelo-pode-mudar-a-memoria-precisa-ficar.svg',
    coverAlt: 'Dois modelos substituíveis se conectam à mesma camada persistente de memória, que preserva a história entre as trocas.',
    figure: '/assets/editorial/figures/o-modelo-pode-mudar-a-memoria-precisa-ficar.svg',
    figureAlt: 'Diagrama com modelos substituíveis consultando uma memória persistente compartilhada por agentes.',
    figureCaption: 'O modelo pode ser trocado sem reconstruir a história quando memória e inteligência são camadas separadas.',
    figureAfterHeading: 'tres-coisas',
    tags: ['memória', 'arquitetura', 'agentes']
  },
  {
    slug: 'a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas',
    title: 'A memória da empresa não pode morar na cabeça das pessoas',
    deck: 'Quando o conhecimento essencial só existe na cabeça de alguém, a empresa não tem memória: tem dependência.',
    category: 'Conhecimento, Trabalho & IA',
    series: 'Conhecimento organizacional',
    date: '2026-08-08',
    dateLabel: '8 de agosto de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/generated/cover-memoria-organizacional.webp',
    coverAlt: 'Camadas translúcidas registram e preservam um mesmo rastro de grafite, representando conhecimento que permanece além de uma pessoa.',
    figure: '/assets/editorial/figures/a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas.svg',
    figureAlt: 'Diagrama que transforma conhecimento individual em memória organizacional.',
    figureCaption: 'A memória institucional começa quando o conhecimento deixa de depender de uma única pessoa.',
    figureAfterHeading: 'conhecimento-emprestado',
    tags: ['memória organizacional', 'conhecimento', 'dependência']
  },
  {
    slug: 'documento-nao-e-base-de-conhecimento',
    title: 'Documento não é base de conhecimento',
    deck: 'Uma pasta cheia de arquivos pode armazenar muita informação e, ainda assim, ser uma péssima fonte de conhecimento para pessoas e agentes de inteligência artificial.',
    category: 'Conhecimento, Sistemas & IA',
    series: 'Conhecimento organizacional',
    date: '2026-08-08',
    dateLabel: '8 de agosto de 2026',
    readingTime: 'Leitura de 9 min',
    cover: '/assets/editorial/documento-nao-e-base-de-conhecimento.svg',
    coverAlt: 'Camadas de um arquivo se reorganizando em uma base consultável.',
    figure: '/assets/editorial/figures/documento-nao-e-base-de-conhecimento.svg',
    figureAlt: 'Cinco camadas que transformam um documento em uma base de conhecimento.',
    figureCaption: 'Conteúdo é só a primeira camada: estrutura, metadados, permissão e manutenção completam a base.',
    figureAfterHeading: 'arquivo-informacao',
    tags: ['base de conhecimento', 'documentação', 'agentes']
  },
  {
    slug: 'sem-vocabulario-comum-a-ia-nao-entende-a-empresa',
    title: 'Sem vocabulário comum, a IA não entende a empresa',
    deck: 'Antes de construir um “cérebro organizacional”, a empresa precisa organizar os nomes, conceitos e relações usados para descrever seu próprio trabalho.',
    category: 'Dados, Conhecimento & IA',
    series: 'Conhecimento organizacional',
    date: '2026-08-01',
    dateLabel: '1º de agosto de 2026',
    readingTime: 'Leitura de 9 min',
    cover: '/assets/editorial/generated/cover-vocabulario-comum.webp',
    coverAlt: 'Fragmentos com marcas diferentes convergem por camadas transparentes até formar um padrão comum e estruturado.',
    figure: '/assets/editorial/figures/sem-vocabulario-comum-a-ia-nao-entende-a-empresa.svg',
    figureAlt: 'Árvore de taxonomia com conceitos, sinônimos e relações de negócio.',
    figureCaption: 'Uma taxonomia útil reduz a distância entre a linguagem das áreas e a linguagem do sistema.',
    figureAfterHeading: 'nomes-importam',
    tags: ['taxonomia', 'vocabulário', 'dados']
  },
  {
    slug: 'curso-nao-transforma-empresa',
    title: 'Curso não transforma empresa: por que a mudança precisa virar um sistema de trabalho',
    deck: 'Aprender conceitos é importante. Mas a transformação só acontece quando diagnóstico, decisões, execução, evidências e aprendizado passam a funcionar como um ciclo contínuo.',
    category: 'Transformação Digital & IA',
    series: 'Transformação e trabalho',
    date: '2026-07-25',
    dateLabel: '25 de julho de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/curso-nao-transforma-empresa.svg',
    coverAlt: 'Ciclo de transformação que conecta aprendizado, prática, evidência e melhoria.',
    figure: '/assets/editorial/figures/curso-nao-transforma-empresa.svg',
    figureAlt: 'Ciclo de cinco etapas entre diagnóstico, decisão, execução, evidência e aprendizado.',
    figureCaption: 'Conhecimento só vira transformação quando entra num ciclo de trabalho observável.',
    figureAfterHeading: 'conhecimento-nao-basta',
    tags: ['transformação', 'aprendizado', 'sistema de trabalho']
  },
  {
    slug: 'a-ia-que-sabe-quando-parar',
    title: 'A IA que sabe quando parar: por que o melhor agente não faz tudo sozinho',
    deck: 'Quanto mais um agente consegue acessar dados, usar ferramentas e executar ações, mais importante se torna definir limites, confirmações e responsabilidade.',
    category: 'Governança de IA',
    series: 'Governança e segurança',
    date: '2026-07-18',
    dateLabel: '18 de julho de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/generated/cover-ia-sabe-quando-parar.webp',
    coverAlt: 'Um percurso de metal e luz para diante de uma fronteira roxa, onde uma passagem controlada exige decisão.',
    figure: '/assets/editorial/figures/a-ia-que-sabe-quando-parar.svg',
    figureAlt: 'Escada de autonomia com pontos de parada, confirmação e responsabilidade.',
    figureCaption: 'Autonomia não é binária: cada ação precisa de um limite proporcional ao risco.',
    figureAfterHeading: 'autonomia-nao-e-liberdade-total',
    tags: ['governança', 'autonomia', 'risco']
  },
  {
    slug: 'copilot-studio',
    title: 'Copilot Studio — Como profissionais operacionais podem revolucionar suas áreas com IA',
    deck: 'Quando quem conhece o processo ganha ferramentas para construir soluções, a inovação deixa de depender apenas da área técnica.',
    category: 'Tecnologia & IA',
    series: 'Sistemas e agentes',
    date: '2025-11-25',
    dateLabel: '25 de novembro de 2025',
    readingTime: 'Leitura de 6 min',
    cover: '/assets/editorial/copilot-studio.svg',
    coverAlt: 'Profissional operacional conectando blocos de processo em um agente.',
    figure: '/assets/editorial/figures/copilot-studio.svg',
    figureAlt: 'Blocos de dados, regras e ações conectados por um profissional de negócio.',
    figureCaption: 'A ferramenta aproxima o conhecimento de processo da construção da solução.',
    figureAfterHeading: 'poder-operacao',
    tags: ['copilot studio', 'low-code', 'processo']
  },
  {
    slug: 'da-planilha-ao-agente',
    title: 'Da planilha ao agente: por que a inteligência artificial não substitui quem conhece o negócio',
    deck: 'A tecnologia pode analisar, sugerir e executar tarefas. Mas é o conhecimento de negócio que define regras, limites, riscos e decisões que realmente fazem sentido.',
    category: 'Tecnologia & IA',
    series: 'Sistemas e agentes',
    date: '2026-05-22',
    dateLabel: '22 de maio de 2026',
    readingTime: 'Leitura de 8 min',
    cover: '/assets/editorial/da-planilha-ao-agente.svg',
    coverAlt: 'Uma planilha se transforma em regras, agente e revisão humana.',
    figure: '/assets/editorial/figures/da-planilha-ao-agente.svg',
    figureAlt: 'Fluxo da planilha até um agente supervisionado por quem conhece o negócio.',
    figureCaption: 'A automação começa na planilha, mas só ganha responsabilidade quando recebe contexto e supervisão.',
    figureAfterHeading: 'relatorio-agente',
    tags: ['planilhas', 'agentes', 'conhecimento de negócio']
  },
  {
    slug: 'ia-nao-comeca-no-prompt',
    title: 'IA não começa no prompt: começa no briefing',
    deck: 'A qualidade da resposta depende da clareza do problema, do contexto, das restrições e do resultado esperado antes mesmo de abrir a ferramenta.',
    category: 'Tecnologia & IA',
    series: 'Sistemas e agentes',
    date: '2026-06-06',
    dateLabel: '6 de junho de 2026',
    readingTime: 'Leitura de 7 min',
    cover: '/assets/editorial/ia-nao-comeca-no-prompt.svg',
    coverAlt: 'Briefing dividido em seis campos que antecedem o prompt.',
    figure: '/assets/editorial/figures/ia-nao-comeca-no-prompt.svg',
    figureAlt: 'Composição com problema, contexto, restrições, dados, formato e critério de sucesso.',
    figureCaption: 'Um bom briefing transforma um pedido genérico em uma tarefa que pode ser executada e avaliada.',
    figureAfterHeading: 'prompt-briefing',
    tags: ['briefing', 'prompt', 'clareza']
  },
  {
    slug: 'mcp-usb-c-inteligencia-artificial',
    title: 'MCP: por que o “USB-C” da inteligência artificial é novo, mas a ideia por trás dele é antiga',
    deck: 'O Model Context Protocol ganhou força porque resolve um problema antigo do software: fazer sistemas diferentes conversarem de forma mais padronizada. Mas ele não é mágica, nem substitui arquitetura, segurança ou boas APIs.',
    category: 'Produtos, Sistemas & IA',
    series: 'Sistemas e agentes',
    date: '2026-06-27',
    dateLabel: '27 de junho de 2026',
    readingTime: 'Leitura de 9 min',
    cover: '/assets/editorial/mcp-usb-c-inteligencia-artificial.svg',
    coverAlt: 'Conector central ligando um agente a diferentes sistemas e ferramentas.',
    figure: '/assets/editorial/figures/mcp-usb-c-inteligencia-artificial.svg',
    figureAlt: 'Diagrama de um protocolo comum entre agente, ferramentas, recursos e servidores.',
    figureCaption: 'O ganho do MCP está no contrato de conexão: a arquitetura e a segurança continuam sendo responsabilidade do sistema.',
    figureAfterHeading: 'novo-ou-antigo',
    tags: ['MCP', 'integração', 'arquitetura']
  },
  {
    slug: 'o-modelo-nao-e-o-sistema',
    title: 'O modelo não é o sistema: por que uma IA precisa de regras, ferramentas e memória',
    deck: 'Um modelo poderoso pode responder muito bem e ainda assim falhar ao executar um processo. O que transforma inteligência em sistema é a estrutura que existe ao redor dela.',
    category: 'Arquitetura de IA',
    series: 'Sistemas e agentes',
    date: '2026-07-04',
    dateLabel: '4 de julho de 2026',
    readingTime: 'Leitura de 9 min',
    cover: '/assets/editorial/generated/cover-modelo-nao-e-sistema.webp',
    coverAlt: 'Um núcleo roxo aparece envolvido por sucessivas camadas transparentes, registros e caminhos que formam o sistema ao redor.',
    figure: '/assets/editorial/figures/o-modelo-nao-e-o-sistema.svg',
    figureAlt: 'Camadas de um sistema de IA ao redor do modelo.',
    figureCaption: 'O modelo é uma peça poderosa, mas o comportamento confiável nasce do conjunto.',
    figureAfterHeading: 'modelo-nao-e-sistema',
    tags: ['arquitetura', 'memória', 'ferramentas']
  },
  {
    slug: 'pix-parcelado',
    title: 'Pix Parcelado — A Transformação Silenciosa que Pode Mudar o Crédito no Brasil',
    deck: 'Mais do que um novo meio de pagamento, o Pix Parcelado pode reorganizar risco, ampliar acesso ao crédito e mudar a lógica da cobrança.',
    category: 'Cobrança & Crédito',
    series: 'Operação e crédito',
    date: '2025-11-25',
    dateLabel: '25 de novembro de 2025',
    readingTime: 'Leitura de 7 min',
    cover: '/assets/editorial/generated/cover-pix-parcelado-material.webp',
    coverAlt: 'Faixas transparentes avançam em tempos diferentes enquanto uma linha de liquidação atravessa diretamente a composição.',
    figure: '/assets/editorial/figures/pix-parcelado.svg',
    figureAlt: 'Fluxo entre cliente, banco e empresa em um Pix Parcelado.',
    figureCaption: 'O Pix Parcelado reorganiza o fluxo: a empresa recebe à vista, enquanto o banco assume o parcelamento.',
    figureAfterHeading: 'o-que-e',
    tags: ['crédito', 'cobrança', 'Pix']
  },
  {
    slug: 'quando-a-ia-vira-colega-de-trabalho',
    title: 'Quando a IA vira colega de trabalho',
    deck: 'O que muda quando agentes começam a executar tarefas em vez de apenas responder perguntas.',
    category: 'Tecnologia & IA',
    series: 'Sistemas e agentes',
    date: '2026-05-30',
    dateLabel: '30 de maio de 2026',
    readingTime: 'Leitura de 7 min',
    cover: '/assets/editorial/quando-a-ia-vira-colega-de-trabalho.svg',
    coverAlt: 'Pessoa e agente compartilhando uma sequência de trabalho com pontos de revisão.',
    figure: '/assets/editorial/figures/quando-a-ia-vira-colega-de-trabalho.svg',
    figureAlt: 'Swimlane com ações do humano, do agente e os pontos de passagem entre eles.',
    figureCaption: 'A relação muda quando o agente participa do fluxo: contexto, passagem e revisão passam a ser parte do trabalho.',
    figureAfterHeading: 'responder-executar',
    tags: ['agentes', 'trabalho', 'colaboração']
  },
  {
    slug: 'quando-relatorios-viram-sistemas',
    title: 'Quando relatórios viram sistemas: por que planejamento e dados estão mudando com inteligência artificial',
    deck: 'O futuro das áreas de planejamento e inteligência não está em produzir mais relatórios, mas em transformar conhecimento operacional em processos, automações e sistemas inteligentes.',
    category: 'Tecnologia & IA',
    series: 'Transformação e trabalho',
    date: '2026-06-20',
    dateLabel: '20 de junho de 2026',
    readingTime: 'Leitura de 8 min',
    cover: '/assets/editorial/generated/cover-relatorios-viram-sistemas.webp',
    coverAlt: 'Folhas separadas deixam uma pilha linear e passam a formar um ciclo material contínuo de informação e decisão.',
    figure: '/assets/editorial/figures/quando-relatorios-viram-sistemas.svg',
    figureAlt: 'Ciclo que conecta dados, interpretação, decisão, ação, evidência e aprendizado.',
    figureCaption: 'O relatório deixa de ser ponto final quando passa a alimentar uma cadeia de decisão e execução.',
    figureAfterHeading: 'trabalho-invisivel',
    tags: ['relatórios', 'planejamento', 'decisão']
  },
  {
    slug: 'software-em-torno-de-agentes',
    title: 'Por que a próxima geração de software será construída em torno de agentes — e não apenas de telas',
    deck: 'As interfaces visuais continuarão existindo, mas deixarão de ser o único centro da experiência. O software passa a organizar dados, ferramentas e decisões ao redor da intenção do usuário.',
    category: 'Produtos, Sistemas & IA',
    series: 'Sistemas e agentes',
    date: '2026-06-13',
    dateLabel: '13 de junho de 2026',
    readingTime: 'Leitura de 8 min',
    cover: '/assets/editorial/software-em-torno-de-agentes.svg',
    coverAlt: 'Intenção do usuário no centro de uma arquitetura de dados, ferramentas, regras e interface.',
    figure: '/assets/editorial/figures/software-em-torno-de-agentes.svg',
    figureAlt: 'Arquitetura centrada na intenção com agente, dados, ferramentas, regras e telas.',
    figureCaption: 'As telas continuam importantes, mas passam a ser uma das superfícies de um sistema guiado por intenção.',
    figureAfterHeading: 'telas',
    tags: ['produto', 'software', 'intenção']
  },
  {
    slug: 'uma-ia-para-cada-tarefa',
    title: 'Uma IA para cada tarefa: por que roteamento importa mais do que escolher um único modelo',
    deck: 'Sistemas inteligentes não precisam usar o mesmo modelo para tudo. O desafio é reconhecer a intenção, o risco e a complexidade de cada tarefa para escolher o melhor caminho.',
    category: 'Arquitetura de IA',
    series: 'Sistemas e agentes',
    date: '2026-07-11',
    dateLabel: '11 de julho de 2026',
    readingTime: 'Leitura de 10 min',
    cover: '/assets/editorial/uma-ia-para-cada-tarefa.svg',
    coverAlt: 'Um roteador distribuindo tarefas para caminhos de IA diferentes conforme risco e complexidade.',
    figure: '/assets/editorial/figures/uma-ia-para-cada-tarefa.svg',
    figureAlt: 'Mapa de roteamento entre intenção, risco, complexidade e modelo adequado.',
    figureCaption: 'Escolher o modelo certo é uma decisão de roteamento, não um concurso para eleger um único vencedor.',
    figureAfterHeading: 'o-que-e-roteamento',
    tags: ['roteamento', 'modelos', 'arquitetura']
  }
];

export const articleSeries = [...new Set(articles.map((article) => article.series))];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getSortedArticles() {
  return [...articles].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getAdjacentArticles(slug: string) {
  const ordered = getSortedArticles();
  const index = ordered.findIndex((article) => article.slug === slug);
  return {
    previous: index > 0 ? ordered[index - 1] : undefined,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined
  };
}