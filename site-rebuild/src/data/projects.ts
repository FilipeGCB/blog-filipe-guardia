export interface Project {
  label: string;
  title: string;
  description: string;
  details: string[];
  proof: string;
  tone: 'warm' | 'violet' | 'green' | 'ink';
  visualAsset?: string;
  visualAlt: string;
  visualConcept: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    label: 'Agent Skill · Público · v1.4',
    title: 'Cognitive OS',
    description: 'Skill portátil para amadurecer decisões antes de ações consequentes. Reconstrói contexto, separa evidência de hipótese, escolhe pesquisa proporcional, desafia a conclusão dominante e identifica a próxima prova que realmente vale obter.',
    details: [
      'Entrevista adaptativa somente quando a ambiguidade muda a decisão',
      'Disciplina de evidência, diagnóstico, red team e Value of Information',
      'Capacidades abstratas para funcionar sem prender o método a um fornecedor'
    ],
    proof: 'Design de Agent Skills, arquitetura de decisão, avaliação comportamental, integração de capacidades e disciplina para saber quando continuar — ou parar.',
    tone: 'violet',
    visualAlt: 'Representação editorial do Cognitive OS transformando contexto em evidência, desafio e decisão.',
    visualConcept: 'Contexto → evidência → desafio → decisão',
    repoUrl: 'https://github.com/FilipeGCB/cognitive-os'
  },
  {
    label: 'Controle de agentes · Público',
    title: 'Fil-Harness',
    description: 'Control plane local-first e independente de fornecedor para execução de agentes de código. O agente pode produzir mudanças, mas não pode transformar a própria afirmação de sucesso em autoridade para aprová-las.',
    details: [
      'Execução separada da verificação independente',
      'Evidência vinculada ao candidato, tarefa e estado verificado',
      'Política determinística ALLOW / HUMAN / DENY com comportamento fail-closed'
    ],
    proof: 'Governança de agentes, separação entre capacidade e autoridade, verificação confiável, persistência de execução e desenho de gates determinísticos.',
    tone: 'ink',
    visualAlt: 'Representação editorial do Fil-Harness separando tarefa, candidato, evidência e gate de autoridade.',
    visualConcept: 'Tarefa → candidato → evidência → gate',
    repoUrl: 'https://github.com/FilipeGCB/fil-harness'
  },
  {
    label: 'Engenharia visual · Público',
    title: 'Visual Presentation Studio',
    description: 'Sistema local-first para projetar, construir, renderizar, inspecionar e validar apresentações HTML e narrativas visuais de alta qualidade com fluxos assistidos por IA.',
    details: [
      'Briefing, tese e narrativa congelados antes da construção',
      'Render real, inspeção e correção antes da aprovação final',
      'QA de conteúdo, narrativa, visual, experiência e superfície técnica'
    ],
    proof: 'Engenharia de apresentações, sistemas visuais, workflows com IA, qualidade observável e produção orientada por evidência em vez de aceitar o primeiro output do modelo.',
    tone: 'warm',
    visualAlt: 'Representação editorial do Visual Presentation Studio indo de briefing a construção, render e QA.',
    visualConcept: 'Brief → construção → render → QA',
    repoUrl: 'https://github.com/FilipeGCB/visual-presentation-studio-public'
  },
  {
    label: 'Copiloto de reuniões · Público',
    title: 'Guard.IA Live',
    description: 'Extensão de navegador experimental para acompanhar reuniões em tempo real: captura legendas visíveis, mantém transcript e histórico local e oferece um copiloto no painel lateral.',
    details: [
      'Captura de captions do Microsoft Teams Web com deduplicação',
      'Histórico, estado da reunião e insights mantidos no navegador',
      'Ollama local como provider padrão; provedores externos são opt-in'
    ],
    proof: 'Extensões WebExtension MV3, IA local, contexto em tempo real, privacidade por padrão e integração entre captura de interface e assistência conversacional.',
    tone: 'green',
    visualAlt: 'Representação editorial do Guard.IA Live transformando legendas em contexto, copiloto e histórico local.',
    visualConcept: 'Legenda → contexto → copiloto → histórico',
    repoUrl: 'https://github.com/FilipeGCB/guardia-live'
  }
];

export const workMethod = [
  ['01', 'Entender', 'Contexto, público, impacto e restrições.'],
  ['02', 'Estruturar', 'Regras, exceções, dados e responsabilidades.'],
  ['03', 'Priorizar', 'MVP, riscos, dependências e valor esperado.'],
  ['04', 'Construir', 'Protótipo, automação, produto ou integração.'],
  ['05', 'Validar', 'Uso real, métricas, segurança e evolução.']
] as const;
