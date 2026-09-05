export interface LibraryCollection {
  slug: string;
  label: string;
  title: string;
  description: string;
  links: Array<{ label: string; href: string }>;
  tone: 'violet' | 'warm' | 'green' | 'ink';
}

export const libraryCollections: LibraryCollection[] = [
  {
    slug: 'metodos-de-trabalho',
    label: 'Métodos',
    title: 'Métodos claros para pedidos abertos',
    description: 'Estruturas para sair de uma necessidade pouco definida e chegar a um resultado verificável, com insumos, etapas e critérios de qualidade explícitos.',
    links: [
      { label: 'Biblioteca pública completa', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Catálogo de habilidades', href: '/habilidades/index.html' },
      { label: 'Projetos e métodos', href: '/projetos.html' }
    ],
    tone: 'violet'
  },
  {
    slug: 'conhecimento-e-navegacao',
    label: 'Conhecimento',
    title: 'Estruturas para organizar e encontrar contexto',
    description: 'Habilidades para trabalhar com documentos, relações, taxonomias, busca, backlinks e memória organizacional sem reduzir conhecimento a uma pasta de arquivos.',
    links: [
      { label: 'Fontes para agentes', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Catálogo de habilidades', href: '/habilidades/index.html' },
      { label: 'Artigos sobre conhecimento', href: '/artigos.html' }
    ],
    tone: 'warm'
  },
  {
    slug: 'artefatos-visuais',
    label: 'Artefatos',
    title: 'Experiências web com função narrativa',
    description: 'Métodos para transformar conteúdo em sites, dashboards, leitores, simuladores e experiências visuais que mantêm o significado e a acessibilidade.',
    links: [
      { label: 'Catálogo de artefatos', href: '/habilidades/index.html' },
      { label: 'Fontes para agentes', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Projetos visuais', href: '/projetos.html' }
    ],
    tone: 'green'
  },
  {
    slug: 'dados-e-decisao',
    label: 'Dados',
    title: 'Da pergunta de negócio à decisão',
    description: 'Roteiros para validar dados, construir análises, escolher visualizações e comunicar evidências sem perder a origem nem a confiança.',
    links: [
      { label: 'Catálogo de dados', href: '/habilidades/index.html' },
      { label: 'Fontes para agentes', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Portfólio de projetos públicos', href: '/projetos.html' }
    ],
    tone: 'ink'
  },
  {
    slug: 'governanca-e-ia',
    label: 'Governança',
    title: 'Automação com limites, evidências e revisão',
    description: 'Práticas para construir sistemas assistidos por IA com contexto, instruções, confirmação humana, segurança e condições de parada.',
    links: [
      { label: 'Catálogo de governança', href: '/habilidades/index.html' },
      { label: 'Fontes para agentes', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Artigos sobre governança', href: '/artigos.html' }
    ],
    tone: 'violet'
  },
  {
    slug: 'aprendizagem-e-comunicacao',
    label: 'Aprendizagem',
    title: 'Conhecimento que vira prática',
    description: 'Estruturas para desenhar cursos, práticas, documentos e apresentações com evidências de domínio e uma narrativa que ajuda alguém a decidir ou agir.',
    links: [
      { label: 'Catálogo de aprendizagem', href: '/habilidades/index.html' },
      { label: 'Fontes para agentes', href: '/habilidades/biblioteca-completa.html' },
      { label: 'Artigos sobre transformação', href: '/artigos.html' }
    ],
    tone: 'warm'
  }
];

export function getCollection(slug: string) {
  return libraryCollections.find((collection) => collection.slug === slug);
}
