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
}

export const projects: Project[] = [
  {
    label: 'Experiência aplicada',
    title: 'Transformação digital em cobrança e planejamento',
    description: 'Aplicação de dados, automação e inteligência artificial a processos de cobrança, planejamento operacional, indicadores e rotinas recorrentes.',
    details: ['Entendimento do processo e das exceções', 'Mapeamento de regras e responsabilidades', 'Construção progressiva de automações e soluções'],
    proof: 'Conhecimento de domínio, visão operacional, análise, governança e tradução entre negócio, liderança e tecnologia.',
    tone: 'violet',
    visualAlt: 'Representação editorial da transformação de uma operação de cobrança em um sistema estruturado.',
    visualConcept: 'Operação → regras → dados → decisão'
  },
  {
    label: 'Produto comercial · Código privado',
    title: 'CFO-IA',
    description: 'Software próprio de inteligência financeira, criado para organizar informações, apoiar análises e transformar dados financeiros em decisões mais claras e rastreáveis.',
    details: ['Visão de produto e fluxos financeiros', 'Automação com agentes e revisão humana', 'Segurança e evolução por etapas'],
    proof: 'Concepção de produto, arquitetura de solução, especificação funcional e coordenação de desenvolvimento assistido por IA.',
    tone: 'warm',
    visualAlt: 'Representação editorial de um sistema financeiro organizado em dados, regras, análise e revisão humana.',
    visualConcept: 'Dados → análise → confirmação → ação'
  },
  {
    label: 'Projeto pessoal · Privado',
    title: 'Hermes',
    description: 'Assistente local e ambiente pessoal de agentes, criado para pesquisar, organizar informações, operar ferramentas e coordenar modelos locais e remotos com controles de segurança.',
    details: ['Roteamento entre modelos', 'Separação de permissões e confirmação humana', 'Registro de ações, memória e execução controlada'],
    proof: 'Arquitetura de agentes, modelos locais, integração de ferramentas, segurança, governança e experimentação aplicada.',
    tone: 'green',
    visualAlt: 'Representação editorial de agentes, roteamento de modelos e execução governada.',
    visualConcept: 'Intenção → roteamento → ferramenta → gate'
  },
  {
    label: 'Protótipo em evolução',
    title: 'Presentation Intelligence System',
    description: 'Sistema para transformar uma necessidade de comunicação em briefing, tese, argumentos, evidências, narrativa, storyboard e apresentação executiva.',
    details: ['Fluxo estruturado de raciocínio', 'Revisão e desafio da narrativa', 'Geração de apresentações em HTML'],
    proof: 'Produto digital, experiência do usuário, comunicação executiva e arquitetura de fluxos com IA.',
    tone: 'ink',
    visualAlt: 'Representação editorial de um fluxo que transforma briefing em narrativa, storyboard e apresentação.',
    visualConcept: 'Briefing → tese → narrativa → apresentação'
  }
];

export const workMethod = [
  ['01', 'Entender', 'Contexto, público, impacto e restrições.'],
  ['02', 'Estruturar', 'Regras, exceções, dados e responsabilidades.'],
  ['03', 'Priorizar', 'MVP, riscos, dependências e valor esperado.'],
  ['04', 'Construir', 'Protótipo, automação, produto ou integração.'],
  ['05', 'Validar', 'Uso real, métricas, segurança e evolução.']
] as const;
