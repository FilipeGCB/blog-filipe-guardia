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

const projectViewports = [
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1366', width: 1366, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'fullhd-1920', width: 1920, height: 1080 },
  { name: 'qhd-2560', width: 2560, height: 1440 },
  { name: 'uhd-3840', width: 3840, height: 2160 }
];

const waitForPage = async (page: Page, path: string) => {
  const response = await page.goto(path, { waitUntil: 'networkidle' });
  expect(response, `${path} should return a response`).not.toBeNull();
};

test.describe('rendered project diagrams never clip their internal nodes', () => {
  test.setTimeout(180_000);

  for (const viewport of projectViewports) {
    test(viewport.name, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await waitForPage(page, 'projetos.html');

      const diagrams = page.locator('.project-concept-visual');
      const count = await diagrams.count();
      expect(count).toBeGreaterThan(0);

      for (let index = 0; index < count; index += 1) {
        const diagram = diagrams.nth(index);
        await diagram.scrollIntoViewIfNeeded();
        const result = await diagram.evaluate((node) => {
          const frame = (node as HTMLElement).getBoundingClientRect();
          const items = [...node.querySelectorAll('.project-concept-node')].map((item) => {
            const rect = (item as HTMLElement).getBoundingClientRect();
            return {
              text: item.textContent?.trim() ?? '',
              left: rect.left,
              right: rect.right,
              top: rect.top,
              bottom: rect.bottom
            };
          });
          const element = node as HTMLElement;
          return {
            frame: { left: frame.left, right: frame.right, top: frame.top, bottom: frame.bottom },
            clientWidth: element.clientWidth,
            scrollWidth: element.scrollWidth,
            items
          };
        });

        expect(result.scrollWidth, `project diagram ${index + 1} must not overflow internally`).toBeLessThanOrEqual(result.clientWidth + 1);
        for (const item of result.items) {
          expect(item.left, `${item.text} must not clip left`).toBeGreaterThanOrEqual(result.frame.left - 1);
          expect(item.right, `${item.text} must not clip right`).toBeLessThanOrEqual(result.frame.right + 1);
          expect(item.top, `${item.text} must not clip top`).toBeGreaterThanOrEqual(result.frame.top - 1);
          expect(item.bottom, `${item.text} must not clip bottom`).toBeLessThanOrEqual(result.frame.bottom + 1);
        }
      }
    });
  }
});

test('technical SVG connectors never cross readable labels', async ({ page }) => {
  test.setTimeout(180_000);
  await page.setViewportSize({ width: 1200, height: 760 });

  const failures: string[] = [];

  for (const slug of articleSlugs) {
    const path = `assets/editorial/figures/${slug}.svg`;
    await waitForPage(page, path);

    const collisions = await page.evaluate(() => {
      const svg = document.querySelector('svg');
      if (!svg) return [{ text: '(missing svg)', connector: 'none' }];

      const labels = [...svg.querySelectorAll('text')].map((node) => {
        const box = (node as SVGGraphicsElement).getBBox();
        return {
          node,
          text: node.textContent?.trim() ?? '',
          box: { x: box.x - 3, y: box.y - 3, width: box.width + 6, height: box.height + 6 }
        };
      }).filter((entry) => entry.text.length > 0);

      const connectors = [...svg.querySelectorAll('path, line, polyline')].filter((node) => {
        const style = getComputedStyle(node);
        const attrWidth = Number(node.getAttribute('stroke-width') ?? 0);
        const cssWidth = Number.parseFloat(style.strokeWidth || '0');
        const width = Math.max(attrWidth, cssWidth);
        const stroke = node.getAttribute('stroke') ?? style.stroke;
        const fill = node.getAttribute('fill') ?? style.fill;
        return stroke !== 'none' && width >= 3 && (fill === 'none' || fill === '' || fill === 'rgba(0, 0, 0, 0)');
      });

      const hits: { text: string; connector: string }[] = [];
      for (const connector of connectors) {
        if (!(connector instanceof SVGGeometryElement)) continue;
        const length = connector.getTotalLength();
        const samples = Math.max(30, Math.ceil(length / 4));
        for (const label of labels) {
          let collides = false;
          for (let i = 0; i <= samples; i += 1) {
            const point = connector.getPointAtLength((length * i) / samples);
            const b = label.box;
            if (point.x >= b.x && point.x <= b.x + b.width && point.y >= b.y && point.y <= b.y + b.height) {
              collides = true;
              break;
            }
          }
          if (collides) {
            hits.push({ text: label.text, connector: connector.getAttribute('d') ?? connector.tagName });
          }
        }
      }
      return hits;
    });

    for (const collision of collisions) {
      failures.push(`${slug}: connector crosses “${collision.text}” (${collision.connector})`);
    }
  }

  expect(failures, failures.join('\n')).toEqual([]);
});
