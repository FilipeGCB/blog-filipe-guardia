import { expect, test } from '@playwright/test';

const institutionalPages = [
  './',
  'artigos.html',
  'biblioteca.html',
  'projetos.html',
  'sobre.html',
  'contato.html'
];

test.describe('public quality regressions', () => {
  test('institutional pages expose large social preview images', async ({ page }) => {
    for (const path of institutionalPages) {
      const response = await page.goto(path, { waitUntil: 'networkidle' });
      expect(response?.status(), path).toBeLessThan(400);
      const og = await page.locator('meta[property="og:image"]').getAttribute('content');
      const twitter = await page.locator('meta[name="twitter:image"]').getAttribute('content');
      expect(og, `${path} must expose og:image`).toMatch(/^https:\/\//);
      expect(twitter, `${path} must expose twitter:image`).toBe(og);
    }
  });

  test('article archive uses semantic H2 titles under its H1', async ({ page }) => {
    await page.goto('artigos.html', { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toHaveCount(1);
    expect(await page.locator('.article-card h2').count()).toBe(22);
    await expect(page.locator('.article-card h3')).toHaveCount(0);
  });

  test('series filters update visible heading, document title and URL', async ({ page }) => {
    const series = 'Sistemas e agentes';
    await page.goto(`artigos.html?serie=${encodeURIComponent(series)}`, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle(`${series} — Artigos | Filipe Guardia`);
    await expect(page.locator('.page-intro-visual h1')).toHaveText(`Série: ${series}`);

    const button = page.locator('[data-filter]').filter({ hasText: 'Dados e operação' });
    await button.click();
    await expect(page).toHaveURL(/serie=Dados(?:\+|%20)e(?:\+|%20)opera/);
    await expect(page).toHaveTitle('Dados e operação — Artigos | Filipe Guardia');
    await expect(page.locator('.page-intro-visual h1')).toHaveText('Série: Dados e operação');
  });

  test('library links to 24 rendered guide pages and keeps Markdown as download', async ({ page }) => {
    await page.goto('biblioteca.html', { waitUntil: 'networkidle' });
    await expect(page.locator('.guide-open')).toHaveCount(24);
    await expect(page.locator('a.guide-download[download]')).toHaveCount(24);

    const hrefs = await page.locator('.guide-open').evaluateAll((links) =>
      links.map((link) => (link as HTMLAnchorElement).getAttribute('href') ?? '')
    );
    expect(new Set(hrefs).size).toBe(24);

    for (const href of hrefs) {
      const response = await page.goto(href, { waitUntil: 'networkidle' });
      expect(response?.status(), href).toBeLessThan(400);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /\/guias\/.+\.html$/);
      await expect(page.locator('a[download][href$=".md"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\//);
    }
  });

  test('mobile text links and footer links keep a 44px touch target', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    for (const path of institutionalPages) {
      await page.goto(path, { waitUntil: 'networkidle' });
      const tooSmall = await page.locator('.text-link, .footer-shell nav a').evaluateAll((nodes) =>
        nodes
          .filter((node) => {
            const rect = (node as HTMLElement).getBoundingClientRect();
            const style = getComputedStyle(node);
            return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
          })
          .filter((node) => (node as HTMLElement).getBoundingClientRect().height < 43.5)
          .map((node) => ({
            text: node.textContent?.trim() ?? '',
            height: (node as HTMLElement).getBoundingClientRect().height
          }))
      );
      expect(tooSmall, `${path}: touch targets below 44px`).toEqual([]);
    }
  });
});
