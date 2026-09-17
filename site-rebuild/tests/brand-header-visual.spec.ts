import { expect, test, type Page } from '@playwright/test';

const openHome = async (page: Page) => {
  const response = await page.goto('./', { waitUntil: 'networkidle' });
  expect(response).not.toBeNull();
};

const horizontalOverflow = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

test.describe('Guard.IA header animation', () => {
  test('desktop keeps Filipe copy visible while only the mark animates and settles', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await openHome(page);

    const brand = page.locator('.brand').first();
    const copy = brand.locator('.brand-copy');
    const title = copy.locator('span');
    const tagline = copy.locator('small');
    const intro = brand.locator('.guardia-brand-intro');
    const still = brand.locator('.guardia-brand-static');

    await expect(title).toHaveText('Filipe Guardia');
    await expect(tagline).toHaveText('B2X · Transformação Digital · IA');
    await expect(title).toBeVisible();
    await expect(tagline).toBeVisible();

    await page.waitForTimeout(650);
    await expect(title).toBeVisible();
    await expect(tagline).toBeVisible();
    await expect(brand).toHaveClass(/brand-intro-active/);
    await expect(intro).toBeVisible();

    const activeMetrics = await intro.evaluate((video: HTMLVideoElement) => {
      const rect = video.getBoundingClientRect();
      return {
        renderedWidth: rect.width,
        renderedHeight: rect.height,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight,
        readyState: video.readyState
      };
    });
    expect(activeMetrics.videoWidth).toBe(640);
    expect(activeMetrics.videoHeight).toBe(360);
    expect(activeMetrics.renderedWidth).toBeLessThanOrEqual(240.5);
    expect(activeMetrics.renderedHeight).toBeLessThanOrEqual(90.5);
    expect(activeMetrics.readyState).toBeGreaterThanOrEqual(2);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);

    await page.waitForTimeout(5_200);
    await expect(title).toBeVisible();
    await expect(tagline).toBeVisible();
    await expect(brand).toHaveClass(/brand-intro-settled/);
    await expect(still).toBeVisible();

    const settled = await still.evaluate((image: HTMLImageElement) => {
      const mark = image.closest('.guardia-brand-mark') as HTMLElement;
      const rect = mark.getBoundingClientRect();
      return {
        naturalWidth: image.naturalWidth,
        naturalHeight: image.naturalHeight,
        markWidth: rect.width,
        markHeight: rect.height,
        markBackground: getComputedStyle(mark).backgroundColor
      };
    });
    expect(settled.naturalWidth).toBe(299);
    expect(settled.naturalHeight).toBe(395);
    expect(settled.markWidth).toBeGreaterThanOrEqual(63);
    expect(settled.markHeight).toBeGreaterThanOrEqual(71);
    expect(settled.markBackground).toBe('rgba(0, 0, 0, 0)');
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
  });

  test('mobile animation never collides with the menu or overflows the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await openHome(page);

    const brand = page.locator('.brand').first();
    const title = brand.locator('.brand-copy > span');
    const toggle = page.locator('.nav-toggle');

    await page.waitForTimeout(650);
    await expect(title).toBeVisible();
    await expect(toggle).toBeVisible();
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);

    const geometry = await page.evaluate(() => {
      const mark = document.querySelector('.guardia-brand-mark')!.getBoundingClientRect();
      const copy = document.querySelector('.brand-copy')!.getBoundingClientRect();
      const toggle = document.querySelector('.nav-toggle')!.getBoundingClientRect();
      return { copyRight: copy.right, toggleLeft: toggle.left, markWidth: mark.width };
    });
    expect(geometry.markWidth).toBeLessThanOrEqual(164);
    expect(geometry.copyRight).toBeLessThanOrEqual(geometry.toggleLeft - 4);

    await page.waitForTimeout(5_200);
    await expect(title).toBeVisible();
    await expect(brand).toHaveClass(/brand-intro-settled/);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
  });

  test('reduced motion skips the video and shows the transparent static G immediately', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1440, height: 900 });
    await openHome(page);

    const brand = page.locator('.brand').first();
    await expect(brand.locator('.brand-copy > span')).toBeVisible();
    await expect(brand.locator('.brand-copy small')).toBeVisible();
    await expect(brand.locator('.guardia-brand-static')).toBeVisible();
    await expect(brand.locator('.guardia-brand-intro')).toBeHidden();
    await expect(brand).toHaveClass(/brand-intro-settled/);
    expect(await horizontalOverflow(page)).toBeLessThanOrEqual(1);
  });
});
