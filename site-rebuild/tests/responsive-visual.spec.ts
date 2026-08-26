import { test, expect } from '@playwright/test';

const viewports = [
  { name: '390x844 (Mobile)', width: 390, height: 844 },
  { name: '768x1024 (Tablet)', width: 768, height: 1024 },
  { name: '1366x768 (Desktop HD)', width: 1366, height: 768 },
  { name: '1440x900 (Desktop WXGA+)', width: 1440, height: 900 },
  { name: '1920x1080 (FHD)', width: 1920, height: 1080 },
  { name: '2560x1440 (2K)', width: 2560, height: 1440 },
  { name: '3840x2160 (4K)', width: 3840, height: 2160 }
] as const;

const routes = [
  { name: 'Home', path: 'index.html' },
  { name: 'Artigos Archive', path: 'artigos.html' },
  { name: 'Article 1 (Representativo)', path: 'artigos/a-ia-que-sabe-quando-parar.html' },
  { name: 'Article 2 (Representativo)', path: 'artigos/mcp-usb-c-inteligencia-artificial.html' },
  { name: 'Article 3 (Representativo)', path: 'artigos/pix-parcelado.html' },
  { name: 'Sobre', path: 'sobre.html' },
  { name: 'Projetos', path: 'projetos.html' },
  { name: 'Biblioteca', path: 'biblioteca.html' },
  { name: 'Contato', path: 'contato.html' },
  { name: '404', path: '404.html' }
] as const;

test.describe('Responsive Visual Smoke Tests', () => {
  for (const vp of viewports) {
    test.describe(`Viewport ${vp.name}`, () => {
      test.use({ viewport: { width: vp.width, height: vp.height } });

      for (const route of routes) {
        test(`Route ${route.name} (${route.path}) - layout & images`, async ({ page }) => {
          const response = await page.goto(route.path, { waitUntil: 'domcontentloaded' });
          expect(response?.status()).toBe(200);

          // Assert no horizontal overflow
          const overflow = await page.evaluate(
            () => document.documentElement.scrollWidth - window.innerWidth
          );
          expect(overflow).toBeLessThanOrEqual(1);

          // Assert meaningful images load without broken src
          const images = page.locator('img');
          const imageCount = await images.count();
          const brokenImages: string[] = [];

          for (let i = 0; i < imageCount; i++) {
            const img = images.nth(i);
            const alt = await img.getAttribute('alt');
            if (alt === '') continue;

            await img.scrollIntoViewIfNeeded().catch(() => {});
            const isLoaded = await img.evaluate(async (el) => {
              const imageEl = el as HTMLImageElement;
              if (!imageEl.complete || imageEl.naturalWidth === 0) {
                try {
                  await imageEl.decode();
                } catch {
                  // Decoding failed or pending
                }
              }
              return imageEl.complete && imageEl.naturalWidth > 0;
            });

            if (!isLoaded) {
              const src =
                (await img.getAttribute('src')) ||
                (await img.evaluate((el) => (el as HTMLImageElement).currentSrc));
              brokenImages.push(src);
            }
          }
          expect(brokenImages).toEqual([]);

          // Assert hero images use crop/object-fit: cover without distortion
          const heroImages = page.locator(
            'section.hero img, .hero-photo img, .page-intro-visual img, img.visual-asset'
          );
          const count = await heroImages.count();
          for (let i = 0; i < count; i++) {
            const img = heroImages.nth(i);
            if (await img.isVisible()) {
              const objectFit = await img.evaluate(
                (el) => window.getComputedStyle(el).objectFit
              );
              expect(objectFit).toBe('cover');
            }
          }

          // Assert basic header navigation exists and is functional
          const navLinks = page.locator('header nav a, .site-header nav a, nav.site-nav a');
          const navCount = await navLinks.count();
          expect(navCount).toBeGreaterThan(0);
        });
      }

      if (vp.width >= 1366) {
        test(`Navigation click verification (${vp.name})`, async ({ page }) => {
          await page.goto('index.html', { waitUntil: 'domcontentloaded' });
          const artigosLink = page.locator('header nav a[href*="artigos"], nav a[href*="artigos"]').first();
          await expect(artigosLink).toBeVisible();
          await artigosLink.click();
          await expect(page).toHaveURL(/.*artigos.*/);
        });
      }
    });
  }
});
