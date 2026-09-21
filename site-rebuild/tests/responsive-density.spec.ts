import { expect, test } from '@playwright/test';

const routes = [
  '',
  'biblioteca.html',
  'contato.html',
  'sobre.html',
  'projetos.html',
  'artigos.html',
  'artigos/antes-de-automatizar-com-ia-simplifique-o-processo.html'
];

async function box(page: any, selector: string) {
  return page.locator(selector).evaluate((element: Element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element as HTMLElement);
    return {
      width: rect.width,
      height: rect.height,
      fontSize: parseFloat(style.fontSize),
      display: style.display,
      objectPosition: style.objectPosition,
      naturalWidth: (element as HTMLImageElement).naturalWidth ?? 0,
      naturalHeight: (element as HTMLImageElement).naturalHeight ?? 0
    };
  });
}

test.describe('responsive density system', () => {
  for (const width of [390, 430, 768, 945, 1366, 1920, 2560]) {
    test(`no horizontal overflow across key routes at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });

      for (const route of routes) {
        const response = await page.goto(route, { waitUntil: 'networkidle' });
        expect(response?.status(), route).toBeLessThan(400);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow, `${route || 'home'} @ ${width}px`).toBeLessThanOrEqual(1);
      }
    });
  }

  for (const width of [390, 430]) {
    test(`mobile home is compact and portrait-safe at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('', { waitUntil: 'networkidle' });

      const hero = await box(page, '.hero-home');
      const media = await box(page, '.hero-home-media');
      const image = await box(page, '.hero-home .hero-photo img');
      const h1 = await box(page, '.hero-home h1');
      const statement = await box(page, '.statement-band');

      expect(hero.height).toBeLessThanOrEqual(1050);
      expect(h1.fontSize).toBeLessThanOrEqual(44.5);
      expect(statement.height).toBeLessThanOrEqual(360);

      const renderedRatio = media.width / media.height;
      const renderedImageRatio = image.width / image.height;
      expect(renderedRatio).toBeCloseTo(0.8, 2);
      expect(renderedImageRatio).toBeCloseTo(0.8, 2);
      expect(Math.abs(renderedRatio - renderedImageRatio)).toBeLessThan(0.005);
    });

    test(`mobile page intros are content-first at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('biblioteca.html', { waitUntil: 'networkidle' });

      const intro = await box(page, '.page-intro-visual');
      const h1 = await box(page, '.page-intro-visual h1');
      const signature = await box(page, '.page-intro-signature');

      expect(intro.height).toBeLessThanOrEqual(500);
      expect(h1.fontSize).toBeLessThanOrEqual(44);
      expect(signature.display).toBe('none');

      await page.goto('contato.html', { waitUntil: 'networkidle' });
      const utility = await box(page, '.utility-contact-intro');
      const sequence = await box(page, '.utility-intro-sequence');
      expect(utility.height).toBeLessThanOrEqual(380);
      expect(sequence.display).toBe('none');
    });
  }

  for (const width of [768, 945]) {
    test(`tablet intro uses a compact horizontal signature at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('biblioteca.html', { waitUntil: 'networkidle' });

      const intro = await box(page, '.page-intro-visual');
      const signature = await box(page, '.page-intro-signature');

      expect(intro.height).toBeLessThanOrEqual(500);
      expect(signature.display).toBe('flex');
      expect(signature.height).toBeLessThanOrEqual(120);

      await page.goto('contato.html', { waitUntil: 'networkidle' });
      const utility = await box(page, '.utility-contact-intro');
      const sequence = await box(page, '.utility-intro-sequence');

      expect(utility.height).toBeLessThanOrEqual(440);
      expect(sequence.display).toBe('flex');
      expect(sequence.height).toBeLessThanOrEqual(120);
    });
  }

  test('mobile hero generator and CSS share the same 4:5 contract', async () => {
    const { readFileSync } = await import('node:fs');
    const generator = readFileSync('scripts/generate-home-hero.mjs', 'utf8');
    const density = readFileSync('src/styles/responsive-density-system.css', 'utf8');

    expect(generator).toContain('mobileCropWidth = Math.round(mobileCropHeight * 4 / 5)');
    expect(generator).toContain('height = Math.round(width * 5 / 4)');
    expect(density).toContain('aspect-ratio: 4 / 5');
  });

  test('desktop home preserves editorial scale without becoming an outdoor', async ({ page }) => {
    await page.setViewportSize({ width: 1366, height: 900 });
    await page.goto('', { waitUntil: 'networkidle' });

    const hero = await box(page, '.hero-home');
    const h1 = await box(page, '.hero-home h1');
    const statement = await box(page, '.statement-band');
    const statementText = await box(page, '.statement-band p');

    expect(hero.height).toBeGreaterThanOrEqual(620);
    expect(hero.height).toBeLessThanOrEqual(740);
    expect(h1.fontSize).toBeGreaterThanOrEqual(64);
    expect(h1.fontSize).toBeLessThanOrEqual(78);
    expect(statement.height).toBeGreaterThanOrEqual(280);
    expect(statement.height).toBeLessThanOrEqual(360);
    expect(statementText.fontSize).toBeGreaterThanOrEqual(42);
    expect(statementText.fontSize).toBeLessThanOrEqual(48);
  });
});
