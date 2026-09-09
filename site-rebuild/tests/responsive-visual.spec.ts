import { expect, test, type Page } from '@playwright/test';

const viewports = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1366', width: 1366, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'full-hd', width: 1920, height: 1080 },
  { name: 'qhd', width: 2560, height: 1440 },
  { name: '4k', width: 3840, height: 2160 }
];

const routes = [
  { name: 'home', path: './' },
  { name: 'articles', path: 'artigos.html' },
  { name: 'article-latest', path: 'artigos/antes-do-agente-de-dados-vem-o-dicionario.html' },
  { name: 'article-memory', path: 'artigos/a-memoria-da-empresa-nao-pode-morar-na-cabeca-das-pessoas.html' },
  { name: 'article-governance', path: 'artigos/a-ia-que-sabe-quando-parar.html' },
  { name: 'article-system', path: 'artigos/o-modelo-nao-e-o-sistema.html' },
  { name: 'about', path: 'sobre.html' },
  { name: 'projects', path: 'projetos.html' },
  { name: 'library', path: 'biblioteca.html' },
  { name: 'contact', path: 'contato.html' },
  { name: '404', path: '404.html' }
];

const waitForPage = async (page: Page, path: string) => {
  const response = await page.goto(path, { waitUntil: 'networkidle' });
  expect(response, `${path} should return a response`).not.toBeNull();
};

const assertNoHorizontalOverflow = async (page: Page) => {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - root.clientWidth;
  });
  expect(overflow).toBeLessThanOrEqual(1);
};

const assertImagesLoaded = async (page: Page) => {
  await page.locator('img[loading="lazy"]').evaluateAll((images) => {
    images.forEach((image) => {
      (image as HTMLImageElement).loading = 'eager';
    });
  });

  await page.waitForFunction(() => {
    const meaningful = Array.from(document.querySelectorAll('img:not([aria-hidden="true"])'))
      .filter((image) => image.getAttribute('alt') !== '')
      .filter((image) => {
        const rect = image.getBoundingClientRect();
        return rect.width >= 80 && rect.height >= 60;
      }) as HTMLImageElement[];
    return meaningful.every((image) => image.complete);
  }, undefined, { timeout: 15_000 });

  const failed = await page.locator('img:not([aria-hidden="true"])').evaluateAll((images) =>
    images
      .filter((image) => image.getAttribute('alt') !== '')
      .filter((image) => {
        const rect = image.getBoundingClientRect();
        return rect.width >= 80 && rect.height >= 60;
      })
      .filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0)
      .map((image) => (image as HTMLImageElement).currentSrc || (image as HTMLImageElement).src)
  );
  expect(failed, `meaningful images should load: ${failed.join(', ')}`).toEqual([]);
};

test.describe.configure({ mode: 'parallel' });
test.setTimeout(120_000);

for (const viewport of viewports) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of routes) {
      test(`${route.name}: layout and images`, async ({ page }) => {
        await waitForPage(page, route.path);
        await assertNoHorizontalOverflow(page);
        await assertImagesLoaded(page);
      });
    }

    test('home hero keeps approved crop and selects a source-faithful responsive derivative', async ({ page }) => {
      await waitForPage(page, './');
      const hero = page.locator('.hero-home .hero-photo img').first();
      await expect(hero).toBeVisible();
      const metrics = await hero.evaluate((image: HTMLImageElement) => {
        const style = getComputedStyle(image);
        const rect = image.getBoundingClientRect();
        const picture = image.closest('picture');
        return {
          fit: style.objectFit,
          naturalRatio: image.naturalWidth / image.naturalHeight,
          boxRatio: rect.width / rect.height,
          boxWidth: rect.width,
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight,
          currentSrc: image.currentSrc,
          srcsets: picture ? [...picture.querySelectorAll('source')].map((source) => source.getAttribute('srcset') ?? '') : []
        };
      });

      expect(metrics.naturalWidth).toBeGreaterThan(0);
      expect(metrics.naturalHeight).toBeGreaterThan(0);
      expect(metrics.fit).toBe('cover');
      expect(metrics.naturalRatio).toBeGreaterThan(0.7);
      expect(metrics.naturalRatio).toBeLessThan(2.2);
      expect(metrics.boxRatio).toBeGreaterThan(0.5);
      expect(metrics.boxRatio).toBeLessThan(3);
      expect(metrics.naturalWidth, 'selected hero derivative must cover its rendered CSS width at DPR 1').toBeGreaterThanOrEqual(Math.floor(metrics.boxWidth) - 1);
      expect(metrics.naturalWidth).toBeLessThanOrEqual(1536);

      const declaredSrcsets = metrics.srcsets.join(' ');
      expect(declaredSrcsets).toMatch(/hero-1536\.(avif|webp)/);
      expect(declaredSrcsets).toMatch(/hero-mobile-819\.(avif|webp)/);
      expect(declaredSrcsets).not.toMatch(/hero-(1920|2560|3840)\.(avif|webp)/);

      if (viewport.width <= 767) {
        expect(metrics.currentSrc).toMatch(/hero-mobile-(480|768|819)\.(avif|webp)$/);
      } else {
        expect(metrics.currentSrc).toMatch(/hero-(960|1440|1536)\.(avif|webp)$/);
      }

      if (viewport.width >= 1001) {
        expect(metrics.boxWidth).toBeLessThanOrEqual(1537);
        expect(metrics.boxRatio).toBeCloseTo(16 / 9, 1);
      }

      if (viewport.width >= 1920) {
        expect(metrics.naturalWidth, 'large layouts must use the highest useful source-faithful hero density').toBeGreaterThanOrEqual(1440);
      }
    });

    test('about portrait loads with portrait crop strategy', async ({ page }) => {
      await waitForPage(page, 'sobre.html');
      const portrait = page.locator('.page-intro-portrait .page-intro-media img').first();
      await expect(portrait).toBeVisible();
      const metrics = await portrait.evaluate((image: HTMLImageElement) => ({
        fit: getComputedStyle(image).objectFit,
        width: image.naturalWidth,
        height: image.naturalHeight
      }));
      expect(metrics.width).toBeGreaterThan(0);
      expect(metrics.height).toBeGreaterThan(metrics.width);
      expect(metrics.fit).toBe('cover');
    });
  });
}

test.describe('navigation basics', () => {
  test('desktop navigation reaches article archive', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await waitForPage(page, './');
    await page.locator('.site-nav a').filter({ hasText: 'Artigos' }).click();
    await expect(page).toHaveURL(/\/blog-filipe-guardia\/artigos\.html/);
  });

  test('mobile navigation reaches article archive', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await waitForPage(page, './');
    const toggle = page.locator('.nav-toggle');
    if (await toggle.isVisible()) await toggle.click();
    await page.locator('.site-nav a').filter({ hasText: 'Artigos' }).click();
    await expect(page).toHaveURL(/\/blog-filipe-guardia\/artigos\.html/);
  });
});
