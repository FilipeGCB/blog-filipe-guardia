import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { guideCompatibility, portableGuides } from '../src/data/guides.ts';

const outputDir = join(process.cwd(), 'public', 'guias');

const render = (guide) => `# ${guide.title}\n\n> **${guide.id} · Guia portátil para assistentes de IA**\n>\n> Compatível com: ${guideCompatibility.join(', ')}.\n\n## O que este guia ativa\n\n${guide.summary}\n\nEste arquivo funciona como uma **skill portátil**: anexe ou cole este Markdown no contexto do seu assistente e peça a tarefa. Ele não instala novas capacidades; organiza como o assistente deve trabalhar para esta classe de problema.\n\n## Quando ativar\n\n${guide.activateWhen}\n\n## Entradas mínimas\n\n${guide.inputs}\n\n## Processo\n\n${guide.process.map((step, index) => `${index + 1}. ${step}`).join('\n')}\n\n## Entrega esperada\n\n${guide.delivery}\n\n## Qualidade e limites\n\n${guide.quality}\n\n## Exemplos de pedido\n\n${guide.examples.map((example) => `- ${example}`).join('\n')}\n\n---\n\n**Como usar:** baixe este arquivo, anexe-o ou cole seu conteúdo no ChatGPT, Copilot, Claude ou outro assistente que aceite instruções em Markdown. Em seguida, faça seu pedido normalmente.\n`;

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const guide of portableGuides) {
  await writeFile(join(outputDir, `${guide.slug}.md`), render(guide), 'utf8');
}

const files = (await readdir(outputDir)).filter((name) => name.endsWith('.md'));
if (files.length !== portableGuides.length) {
  throw new Error(`Expected ${portableGuides.length} generated guides, found ${files.length}`);
}

console.log(`public-guides: generated ${files.length} Markdown guides`);
