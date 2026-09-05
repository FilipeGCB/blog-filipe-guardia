import { expect, test, type Page } from '@playwright/test';

const articleSlugs = [
  'ia-nao-se-testa-no-feeling',
  'local-first-nao-e-apenas-offline',
  'antes-do-agente-de-dados-vem-o-dicionario',
  'o-modelo-pode-mudar-a-memoria-precisa-ficar',
  'a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas',
  'documento-nao-e-base-de-conhecimento',
  'sem-vocabulario-comum-a-ia-nao-entende-a-empresa',
  'curso-nao-transforma-empresa',
  'a-ia-que-sabe-quando-parar',
  'uma-ia-para-cada-tarefa',
  'o-modelo-nao-e-o-sistema',
  'mcp-usb-c-inteligencia-artificial',
  'quando-relatorios-viram-sistemas',
  'software-em-torno-de-agentes',
  'ia-nao-comeca-no-prompt',
  'quando-a-ia-vira-colega-de-trabalho',
  'da-planilha-ao-agente',
  'copilot-studio',
  'pix-parcelado'
];

const waitForArticle = async (page: Page, slug: string) => {
  const response = await page.goto(`artigos/${slug}.html`, { waitUntil: 'networkidle' });
  expect(response, `${slug} should return a response`).not.toBeNull();
};

const auditFigures = async (page: Page, slug: string) => {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow, `${slug} must not create horizontal page overflow`).toBeLessThanOrEqual(1);

  const figureLocators = page.locator('.inline-figure');
  const count = await figureLocators.count();

  for (let index = 0; index < count; index += 1) {
    const figure = figureLocators.nth(index);
    await figure.scrollIntoViewIfNeeded();
    const image = figure.locator('img').first();
    await expect(image, `${slug} figure ${index + 1} image must exist`).toHaveCount(1);
    await image.evaluate((node: HTMLImageElement) => {
      node.loading = 'eager';
    });
    await expect.poll(
      () => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0),
      { timeout: 10_000, message: `${slug} figure ${index + 1} image must finish loading` }
    ).toBe(true);

    const metrics = await figure.evaluate((node) => {
      const figureNode = node as HTMLElement;
      const rect = figureNode.getBoundingClientRect();
      const imageNode = figureNode.querySelector('img') as HTMLImageElement;
      const imageRect = imageNode.getBoundingClientRect();
      return {
        left: rect.left,
        right: rect.right,
        width: rect.width,
        viewport: document.documentElement.clientWidth,
        imageLeft: imageRect.left,
        imageRight: imageRect.right,
        imageWidth: imageRect.width,
        imageHeight: imageRect.height,
        naturalWidth: imageNode.naturalWidth,
        complete: imageNode.complete,
        src: imageNode.currentSrc || imageNode.src
      };
    });

    expect(metrics.width, `${slug} figure ${index + 1} must have width`).toBeGreaterThan(0);
    expect(metrics.left, `${slug} figure ${index + 1} must not clip on the left`).toBeGreaterThanOrEqual(-1);
    expect(metrics.right, `${slug} figure ${index + 1} must stay inside viewport`).toBeLessThanOrEqual(metrics.viewport + 1);
    expect(metrics.complete, `${slug} figure ${index + 1} image must finish loading`).toBe(true);
    expect(metrics.naturalWidth, `${slug} figure ${index + 1} image must be valid`).toBeGreaterThan(0);
    expect(metrics.imageWidth, `${slug} figure ${index + 1} image must render`).toBeGreaterThan(0);
    expect(metrics.imageHeight, `${slug} figure ${index + 1} image must render`).toBeGreaterThan(0);
    expect(metrics.imageLeft, `${slug} figure ${index + 1} image must not clip left`).toBeGreaterThanOrEqual(metrics.left - 1);
    expect(metrics.imageRight, `${slug} figure ${index + 1} image must not escape its frame`).toBeLessThanOrEqual(metrics.right + 1);
  }
};

test.describe('all technical figures remain readable inside mobile layout bounds', () => {
  test.setTimeout(240_000);

  for (const viewport of [
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'tablet-768', width: 768, height: 1024 }
  ]) {
    test(viewport.name, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      for (const slug of articleSlugs) {
        await waitForArticle(page, slug);
        await auditFigures(page, slug);
      }
    });
  }
});
