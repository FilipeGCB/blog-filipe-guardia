export interface EditorialImageVariant {
  width: number;
  avif: string;
  webp: string;
}

export interface EditorialImageAsset {
  id: string;
  alt: string;
  width: number;
  height: number;
  focalPoint: string;
  sizes: string;
  variants: EditorialImageVariant[];
  mobile?: {
    media: string;
    focalPoint: string;
    variants: EditorialImageVariant[];
  };
}

const variants = (prefix: string, widths: number[]): EditorialImageVariant[] =>
  widths.map((width) => ({
    width,
    avif: `${prefix}-${width}.avif`,
    webp: `${prefix}-${width}.webp`
  }));

const coverSizes = '(min-width: 1200px) 1120px, (min-width: 768px) calc(100vw - 64px), 100vw';
const coverWidths = [480, 768, 960, 1280, 1672];

export const editorialImages: Record<string, EditorialImageAsset> = {
  'portrait:filipe:home': {
    id: 'portrait:filipe:home',
    alt: 'Filipe em um ambiente contemporâneo de trabalho, sentado diante de um caderno e laptop, com monitores e a cidade ao fundo.',
    width: 1152,
    height: 648,
    focalPoint: '64% 48%',
    sizes: '(min-width: 1920px) 1152px, (min-width: 1000px) 60vw, (min-width: 768px) 100vw, 100vw',
    variants: variants('/assets/editorial/portraits/filipe/home/hero', [768, 960, 1152]),
    mobile: {
      media: '(max-width: 767px)',
      focalPoint: '68% 46%',
      variants: variants('/assets/editorial/portraits/filipe/home/hero-mobile', [480, 768, 960])
    }
  },
  'portrait:filipe:about': {
    id: 'portrait:filipe:about',
    alt: 'Retrato editorial de Filipe em luz natural, camisa azul clara e ambiente contemporâneo.',
    width: 1122,
    height: 1402,
    focalPoint: '50% 38%',
    sizes: '(min-width: 1100px) 560px, (min-width: 768px) 42vw, 100vw',
    variants: variants('/assets/editorial/portraits/filipe/about/portrait', [480, 768, 960, 1122])
  },
  'cover:a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas': {
    id: 'cover:a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas',
    alt: 'Camadas translúcidas registram e preservam um mesmo rastro de grafite, representando conhecimento que permanece além de uma pessoa.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas/cover', coverWidths)
  },
  'cover:sem-vocabulario-comum-a-ia-nao-entende-a-empresa': {
    id: 'cover:sem-vocabulario-comum-a-ia-nao-entende-a-empresa',
    alt: 'Fragmentos com marcas diferentes convergem por camadas transparentes até formar um padrão comum e estruturado.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/sem-vocabulario-comum-a-ia-nao-entende-a-empresa/cover', coverWidths)
  },
  'cover:a-ia-que-sabe-quando-parar': {
    id: 'cover:a-ia-que-sabe-quando-parar',
    alt: 'Um percurso de metal e luz para diante de uma fronteira roxa, onde uma passagem controlada exige decisão.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/a-ia-que-sabe-quando-parar/cover', coverWidths)
  },
  'cover:o-modelo-nao-e-o-sistema': {
    id: 'cover:o-modelo-nao-e-o-sistema',
    alt: 'Um núcleo roxo aparece envolvido por sucessivas camadas transparentes, registros e caminhos que formam o sistema ao redor.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/o-modelo-nao-e-o-sistema/cover', coverWidths)
  },
  'cover:pix-parcelado': {
    id: 'cover:pix-parcelado',
    alt: 'Faixas transparentes avançam em tempos diferentes enquanto uma linha de liquidação atravessa diretamente a composição.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/pix-parcelado/cover', coverWidths)
  },
  'cover:quando-relatorios-viram-sistemas': {
    id: 'cover:quando-relatorios-viram-sistemas',
    alt: 'Folhas separadas deixam uma pilha linear e passam a formar um ciclo material contínuo de informação e decisão.',
    width: 1672,
    height: 941,
    focalPoint: '50% 50%',
    sizes: coverSizes,
    variants: variants('/assets/editorial/covers/quando-relatorios-viram-sistemas/cover', coverWidths)
  }
};

export function hasEditorialImage(id: string): boolean {
  return Boolean(editorialImages[id]);
}

export function getEditorialImage(id: string): EditorialImageAsset {
  const asset = editorialImages[id];
  if (!asset) throw new Error(`Editorial image not found: ${id}`);
  return asset;
}
