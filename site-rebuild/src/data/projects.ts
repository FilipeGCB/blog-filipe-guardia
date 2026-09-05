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
  href?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    label: 'Público · Agent Skill · Apache 2.0',
    title: 'Cognitive OS',
    description: 'Agent Skill portátil para amadurecer decisões antes de ações consequenciais, separando evidência de suposição, desafiando a conclusão dominante e identificando a próxima prova útil.',
    details: ['Reconstrução de contexto e framing da decisão', 'Pesquisa proporcional ao valor da informação', 'Challenge, robustez e disciplina de parada'],
    proof: 'Arquitetura de agentes, design de decisão, pesquisa grounded, avaliação comportamental e construção de um produto instalável e testável.',
    tone: 'violet',
    visualAlt: 'Representação editorial de um fluxo que transforma contexto em evidência, decisão e próximo passo.',
    visualConcept: 'Contexto → evidência → decisão → próximo passo',
    href: 'https://github.com/FilipeGCB/cognitive-os',
    linkLabel: 'Abrir repositório no GitHub ↗'
  },
  {
    label: 'Público · Governança de agentes',
    title: 'Fil-Harness',
    description: 'Control plane local-first para agentes de código: eles podem executar trabalho, mas não podem usar a própria resposta como autoridade para aprovar o resultado.',
    details: ['Task intake tipado e controle de escopo', 'Verificação independente em checkout separado', 'Evidência confiável + política ALLOW / HUMAN / DENY'],
    proof: 'Arquitetura de execução autônoma com limites de autoridade, persistência durável, evidência verificável e comportamento fail-closed.',
    tone: 'ink',
    visualAlt: 'Representação editorial de execução por agente passando por verificação, evidência e um gate de autoridade.',
    visualConcept: 'Execução → verificação → evidência → autoridade',
    href: 'https://github.com/FilipeGCB/fil-harness',
    linkLabel: 'Abrir repositório no GitHub ↗'
  },
  {
    label: 'Público · Engenharia visual',
    title: 'Visual Presentation Studio',
    description: 'Sistema de engenharia para projetar, construir, renderizar, inspecionar e validar apresentações e narrativas visuais de alta qualidade com workflows assistidos por IA.',
    details: ['Lifecycle de produção com dois gates explícitos', 'Renderização real antes da aprovação', 'QA de conteúdo, narrativa, visual, experiência e técnica'],
    proof: 'Engenharia de experiência, comunicação executiva, geração visual assistida por IA, revisão multimodal e processos reprodutíveis de qualidade.',
    tone: 'warm',
    visualAlt: 'Representação editorial de um briefing passando por construção, renderização e QA visual.',
    visualConcept: 'Briefing → build → render → QA',
    href: 'https://github.com/FilipeGCB/visual-presentation-studio-public',
    linkLabel: 'Abrir repositório no GitHub ↗'
  },
  {
    label: 'Público · Protótipo local-first',
    title: 'Guard.IA Live',
    description: 'Copiloto para acompanhar reuniões em tempo real, organizar contexto localmente e apoiar a conversa sem tornar um serviço de nuvem obrigatório por padrão.',
    details: ['Captura de captions no Microsoft Teams Web', 'Transcript, sessões e contexto persistidos localmente', 'Ollama local como provider padrão e cloud providers opcionais'],
    proof: 'Integração de browser, streaming, contexto em tempo real, privacidade local-first e desenho de produto assistivo com limites explícitos.',
    tone: 'green',
    visualAlt: 'Representação editorial de captions entrando em uma camada de contexto local e alimentando um copiloto em tempo real.',
    visualConcept: 'Captions → contexto → memória → copiloto',
    href: 'https://github.com/FilipeGCB/guardia-live',
    linkLabel: 'Abrir repositório no GitHub ↗'
  },
  {
    label: 'Experiência aplicada · Contexto profissional',
    title: 'Transformação digital em cobrança e planejamento',
    description: 'Aplicação de dados, automação e inteligência artificial a processos reais de cobrança, planejamento operacional, indicadores e rotinas recorrentes.',
    details: ['Entendimento do processo e das exceções', 'Mapeamento de regras, responsabilidades e dados', 'Construção progressiva de automações, análises e sistemas'],
    proof: 'Conhecimento de domínio, visão operacional, análise, governança e tradução entre negócio, liderança e tecnologia.',
    tone: 'violet',
    visualAlt: 'Representação editorial da transformação de uma operação de cobrança em um sistema estruturado.',
    visualConcept: 'Operação → regras → dados → sistema'
  }
];

export const workMethod = [
  ['01', 'Entender', 'Contexto, público, impacto e restrições.'],
  ['02', 'Estruturar', 'Regras, exceções, dados e responsabilidades.'],
  ['03', 'Priorizar', 'MVP, riscos, dependências e valor esperado.'],
  ['04', 'Construir', 'Protótipo, automação, produto ou integração.'],
  ['05', 'Validar', 'Uso real, métricas, segurança e evolução.']
] as const;