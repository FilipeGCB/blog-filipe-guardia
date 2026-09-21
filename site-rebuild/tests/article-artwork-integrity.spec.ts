import { expect, test } from '@playwright/test';

const articleSlugs = [
  'antes-de-automatizar-com-ia-simplifique-o-processo',
  'agentes-estao-virando-infraestrutura',
  'o-primeiro-teste-pode-usar-ia-o-centesimo-nao-precisa',
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

for (const viewport of [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 }
]) {
  test.describe(`article artwork integrity — ${viewport.name}`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });
    test.setTimeout(180_000);

    test('all article heroes preserve the full artwork', async ({ page }) => {
      const failures: string[] = [];
      for (const slug of articleSlugs) {
        const response = await page.goto(`artigos/${slug}.html`, { waitUntil: 'networkidle' });
        if (!response || response.status() >= 400) {
          failures.push(`${slug}: HTTP ${response?.status() ?? 0}`);
          continue;
        }

        const image = page.locator('.article-visual img').first();
        await expect(image, slug).toBeVisible();
        const metrics = await image.evaluate((img: HTMLImageElement) => {
          const style = getComputedStyle(img);
          return {
            fit: style.objectFit,
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            width: img.offsetWidth,
            height: img.offsetHeight,
            src: img.currentSrc
          };
        });

        const naturalRatio = metrics.naturalWidth / metrics.naturalHeight;
        const renderedRatio = metrics.width / metrics.height;
        const ratioError = Math.abs(renderedRatio - naturalRatio) / naturalRatio;

        if (metrics.fit !== 'contain') failures.push(`${slug}: object-fit=${metrics.fit}`);
        if (metrics.naturalWidth <= 0 || metrics.naturalHeight <= 0) failures.push(`${slug}: image failed to decode`);
        if (ratioError > 0.02) failures.push(`${slug}: artwork cropped/distorted — natural=${naturalRatio.toFixed(3)} rendered=${renderedRatio.toFixed(3)}`);
      }
      expect(failures, failures.join('\n')).toEqual([]);
    });
  });
}
