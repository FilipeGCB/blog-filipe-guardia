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

export const editorialImages: Record<string, EditorialImageAsset> = {
  'portrait:filipe:home': {
    id: 'portrait:filipe:home',
    alt: 'Filipe em um ambiente contemporâneo de trabalho, sentado diante de um caderno e laptop, com monitores e a cidade ao fundo.',
    width: 3840,
    height: 2160,
    focalPoint: '64% 48%',
    sizes: '(min-width: 1800px) 1760px, (min-width: 900px) calc(100vw - 2 * clamp(16px, 3vw, 64px)), 100vw',
    variants: variants('/assets/editorial/portraits/filipe/home/hero', [960, 1440, 1920, 2560, 3840]),
    mobile: {
      media: '(max-width: 767px)',
      focalPoint: '68% 46%',
      variants: variants('/assets/editorial/portraits/filipe/home/hero-mobile', [480, 768, 960])
    }
  }
};

export function getEditorialImage(id: string): EditorialImageAsset {
  const asset = editorialImages[id];
  if (!asset) throw new Error(`Editorial image not found: ${id}`);
  return asset;
}
