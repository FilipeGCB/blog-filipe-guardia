import { access, mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const BASE_URL = 'https://filipegcb.github.io/blog-filipe-guardia/';
const ROOT_PAGES = ['projetos.html', 'sobre.html', 'contato.html'];

async function exists(relativePath) {
  try { await access(path.join(ROOT, relativePath)); return true; }
  catch { return false; }
}

async function readText(relativePath) {
  return readFile(path.join(ROOT, relativePath), 'utf8');
}

async function writeText(relativePath, content) {
  const destination = path.join(ROOT, relativePath);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, content.trim() + '\n', 'utf8');
}

async function writeIfMissing(relativePath, content) {
  if (await exists(relativePath)) return;
  await writeText(relativePath, content);
}

async function listArticles() {
  if (!(await exists('artigos'))) return [];
  return (await readdir(path.join(ROOT, 'artigos'), { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.html'))
    .map((entry) => `artigos/${entry.name}`)
    .sort();
}

function beforeClosing(html, tag, content) {
  const re = new RegExp(`</${tag}>`, 'i');
  if (!re.test(html)) throw new Error(`Página sem </${tag}>.`);
  return html.replace(re, `${content}\n</${tag}>`);
}

function addBodyClass(html, className) {
  return html.replace(/<body([^>]*)>/i, (match, attrs) => {
    if (/\bclass\s*=/i.test(attrs)) {
      return match.replace(/class=(['"])(.*?)\1/i, (_m, quote, value) => {
        const classes = new Set(value.split(/\s+/).filter(Boolean));
        classes.add(className);
        return `class=${quote}${[...classes].join(' ')}${quote}`;
      });
    }
    return `<body${attrs} class="${className}">`;
  });
}

function patchPage(html, relativePath, prefix = '') {
  let result = html
    .replaceAll('Blog do Filipe Guardia', 'Filipe Guardia')
    .replaceAll('Cobrança • Tecnologia • Mercado', 'Cobrança B2B • Dados • Produtos • IA')
    .replaceAll('Ideias sobre cobrança, tecnologia e mercado.', 'Cobrança B2B, dados, produtos e IA aplicada.')
    .replace(/href=(['"])((?:\.\.\/)?)(?:home\.html)([^'"]*)\1/gi, (_m, q, dir, suffix) => `href=${q}${dir}index.html${suffix}${q}`);

  const canonical = relativePath === 'index.html' ? BASE_URL : new URL(relativePath, BASE_URL).href;
  const head = [];
  if (!/name=['"]author['"]/i.test(result)) head.push('<meta name="author" content="Filipe Guardia" />');
  if (!/name=['"]theme-color['"]/i.test(result)) head.push('<meta name="theme-color" content="#2b173d" />');
  if (!/name=['"]robots['"]/i.test(result)) head.push('<meta name="robots" content="index, follow, max-image-preview:large" />');
  if (!/rel=['"]canonical['"]/i.test(result)) head.push(`<link rel="canonical" href="${canonical}" />`);
  if (!/property=['"]og:url['"]/i.test(result)) head.push(`<meta property="og:url" content="${canonical}" />`);
  if (!/property=['"]og:site_name['"]/i.test(result)) head.push('<meta property="og:site_name" content="Filipe Guardia" />');
  if (!/name=['"]twitter:card['"]/i.test(result)) head.push('<meta name="twitter:card" content="summary" />');
  if (!/rel=['"]icon['"]/i.test(result)) head.push('<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2224%22 fill=%22%232b173d%22/><text x=%2250%22 y=%2264%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2242%22 font-weight=%22700%22 fill=%22white%22>FG</text></svg>" />');
  if (!result.includes('site-v2.css')) head.push(`<link rel="stylesheet" href="${prefix}site-v2.css" />`);
  if (head.length) result = beforeClosing(result, 'head', head.join('\n'));

  if (!result.includes('site-config.js')) {
    result = beforeClosing(result, 'body', `<script src="${prefix}site-config.js" defer></script>\n<script src="${prefix}site.js" defer></script>`);
  }

  if (relativePath === 'index.html') {
    result = result.replace(/<meta\s+name=['"]robots['"]\s+content=['"]noindex(?:,?\s*follow)?['"]\s*\/?>/gi, '');
    result = addBodyClass(result, 'home-page');
  }
  return result;
}

const SITE_CONFIG = `/* Complete apenas os campos desejados. Campos vazios não aparecem no site. */
window.SITE_CONFIG = Object.freeze({
  siteName: "Filipe Guardia",
  tagline: "Cobrança B2B • Dados • Produtos • IA",
  baseUrl: "${BASE_URL}",
  githubUrl: "https://github.com/FilipeGCB",
  linkedinUrl: "",
  email: "",
  formspreeEndpoint: "https://formspree.io/f/mjkdlljg",
  socialImage: "",
  analyticsId: "",
  projectEvidence: {
    "Transformação digital em cobrança e planejamento": { metric: "", summary: "", demoUrl: "", demoLabel: "Ver evidência" },
    "CFO-IA": { metric: "", summary: "", demoUrl: "", demoLabel: "Conhecer demonstração" },
    "Hermes": { metric: "", summary: "", demoUrl: "", demoLabel: "Conhecer arquitetura" },
    "Presentation Intelligence System": { metric: "", summary: "", demoUrl: "", demoLabel: "Ver demonstração" }
  }
});`;

const SITE_JS = `(() => {
  "use strict";
  const c = window.SITE_CONFIG || {};
  const one = (s, x = document) => x.querySelector(s);
  const all = (s, x = document) => [...x.querySelectorAll(s)];
  const base = String(c.baseUrl || "${BASE_URL}").replace(/\\/?$/, "/");

  function brand() {
    all(".brand-copy").forEach((el) => {
      el.textContent = c.siteName || "Filipe Guardia";
      const small = document.createElement("small");
      small.textContent = c.tagline || "Cobrança B2B • Dados • Produtos • IA";
      el.appendChild(small);
    });
    all(".brand").forEach((el) => el.setAttribute("aria-label", (c.siteName || "Filipe Guardia") + " — início"));
    all(".site-footer strong").forEach((el) => { el.textContent = c.siteName || "Filipe Guardia"; });
    all(".site-footer span").forEach((el) => {
      if (el.textContent.includes("©")) el.textContent = "© " + new Date().getFullYear() + " • Cobrança B2B, dados, produtos e IA aplicada.";
    });
  }

  function links() {
    all("a[href]").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (href.startsWith("home.html") || href.startsWith("../home.html")) a.setAttribute("href", href.replace("home.html", "index.html"));
      if (a.target === "_blank") a.rel = (a.rel + " noopener noreferrer").trim();
    });
  }

  function menu() {
    const header = one(".site-header"), shell = header && one(".nav-shell", header), nav = header && one(".site-nav", header);
    if (!header || !shell || !nav || one(".nav-toggle", header)) return;
    nav.id = nav.id || "site-navigation";
    const button = document.createElement("button");
    button.className = "nav-toggle"; button.type = "button";
    button.setAttribute("aria-controls", nav.id); button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-label", "Abrir menu");
    button.innerHTML = "<span></span><span></span><span></span>";
    shell.insertBefore(button, nav);
    const close = () => { button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-label", "Abrir menu"); nav.classList.remove("is-open"); document.body.classList.remove("menu-open"); };
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") !== "true";
      if (!open) return close();
      button.setAttribute("aria-expanded", "true"); button.setAttribute("aria-label", "Fechar menu"); nav.classList.add("is-open"); document.body.classList.add("menu-open");
    });
    nav.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    document.addEventListener("click", (e) => { if (button.getAttribute("aria-expanded") === "true" && !header.contains(e.target)) close(); });
    matchMedia("(min-width: 761px)").addEventListener?.("change", (e) => { if (e.matches) close(); });
  }

  function hidden(form, name, value) {
    let input = one('input[name="' + name + '"]', form);
    if (!input) { input = document.createElement("input"); input.type = "hidden"; input.name = name; form.prepend(input); }
    input.value = value;
  }

  function forms() {
    all("form").forEach((form) => {
      const newsletter = !!form.closest("#newsletter"), contact = form.classList.contains("contact-form");
      if (!newsletter && !contact) return;
      if (c.formspreeEndpoint) form.action = c.formspreeEndpoint;
      hidden(form, "origem", newsletter ? "newsletter" : "contato-profissional");
      hidden(form, "pagina", location.pathname);
      hidden(form, "_next", base + "obrigado.html");
      if (!one('input[name="_gotcha"]', form)) {
        const label = document.createElement("label"); label.className = "form-trap"; label.setAttribute("aria-hidden", "true"); label.textContent = "Não preencha este campo";
        const input = document.createElement("input"); input.type = "text"; input.name = "_gotcha"; input.tabIndex = -1; input.autocomplete = "off"; label.appendChild(input); form.appendChild(label);
      }
      form.addEventListener("submit", () => {
        if (!form.checkValidity()) return;
        const button = one('button[type="submit"]', form);
        if (button) { button.textContent = "Enviando…"; button.disabled = true; button.setAttribute("aria-busy", "true"); }
      });
    });
  }

  function contactLink(container, label, description, href) {
    if (!container || !href || one('a[href="' + CSS.escape(href) + '"]', container)) return;
    const a = document.createElement("a"); a.className = "contact-link contact-link--external"; a.href = href;
    if (!href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    a.append(label); const small = document.createElement("small"); small.textContent = description; a.appendChild(small); container.prepend(a);
  }

  function contacts() {
    const box = one(".contact-links");
    contactLink(box, "LinkedIn", "Perfil e trajetória profissional", String(c.linkedinUrl || "").trim());
    const email = String(c.email || "").trim(); contactLink(box, "E-mail", email, email ? "mailto:" + email : "");
    const footer = one(".site-footer .footer-shell"); if (!footer || one(".site-social-links", footer)) return;
    const items = [["GitHub", c.githubUrl], ["LinkedIn", c.linkedinUrl], ["E-mail", email ? "mailto:" + email : ""]].filter((x) => x[1]);
    if (!items.length) return;
    const nav = document.createElement("nav"); nav.className = "site-social-links"; nav.setAttribute("aria-label", "Links profissionais");
    items.forEach(([label, href]) => { const a = document.createElement("a"); a.textContent = label; a.href = href; if (!href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; } nav.appendChild(a); });
    footer.appendChild(nav);
  }

  function evidence() {
    const data = c.projectEvidence || {};
    all(".project-showcase").forEach((card) => {
      const h = one("h3", card), p = h && data[h.textContent.trim()]; if (!p) return;
      const metric = String(p.metric || "").trim(), summary = String(p.summary || "").trim(), url = String(p.demoUrl || "").trim();
      if (!metric && !summary && !url) return;
      const box = document.createElement("div"); box.className = "project-evidence";
      if (metric) { const strong = document.createElement("strong"); strong.textContent = metric; box.appendChild(strong); }
      if (summary) { const text = document.createElement("p"); text.textContent = summary; box.appendChild(text); }
      if (url) { const a = document.createElement("a"); a.className = "card-link"; a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = p.demoLabel || "Ver demonstração"; box.appendChild(a); }
      card.appendChild(box);
    });
  }

  function articles() {
    const section = one("#tecnologia"); if (!section) return;
    const cards = all(".article-card", section), featured = one(".article-card.featured .card-link"), featuredHref = featured && featured.getAttribute("href");
    const unique = cards.filter((card) => { const a = one(".card-link", card), href = a && a.getAttribute("href"); if (featuredHref && href === featuredHref) { card.classList.add("is-duplicate-article"); return false; } return true; });
    if (unique.length <= 4) return;
    unique.slice(4).forEach((card) => card.classList.add("is-collapsed-article"));
    const row = document.createElement("div"), button = document.createElement("button"); row.className = "articles-toggle-row"; button.className = "button secondary articles-toggle"; button.type = "button"; button.setAttribute("aria-expanded", "false"); button.textContent = "Ver todos os artigos"; row.appendChild(button); one(".container", section)?.appendChild(row);
    button.addEventListener("click", () => { const expanded = button.getAttribute("aria-expanded") === "true"; unique.slice(4).forEach((card) => card.classList.toggle("is-collapsed-article", expanded)); button.setAttribute("aria-expanded", String(!expanded)); button.textContent = expanded ? "Ver todos os artigos" : "Mostrar menos artigos"; });
  }

  function metadata() {
    const description = one('meta[name="description"]')?.content || "";
    [["twitter:title", document.title], ["twitter:description", description]].forEach(([name, value]) => {
      let m = one('meta[name="' + name + '"]'); if (!m) { m = document.createElement("meta"); m.name = name; document.head.appendChild(m); } m.content = value;
    });
    if (c.socialImage) {
      [["property", "og:image"], ["name", "twitter:image"]].forEach(([attr, value]) => { let m = one('meta[' + attr + '="' + value + '"]'); if (!m) { m = document.createElement("meta"); m.setAttribute(attr, value); document.head.appendChild(m); } m.content = c.socialImage; });
      one('meta[name="twitter:card"]').content = "summary_large_image";
    }
    if (!one("#person-structured-data")) {
      const sameAs = [c.githubUrl, c.linkedinUrl].filter(Boolean);
      const person = { "@context": "https://schema.org", "@type": "Person", name: c.siteName || "Filipe Guardia", url: base, jobTitle: "Consultor de planejamento e inteligência de cobrança B2B", description: "Profissional de cobrança B2B, dados, processos, produtos, automação e inteligência artificial aplicada.", knowsAbout: ["Cobrança B2B", "Contas a receber", "Planejamento", "Dados", "Automação", "Produtos digitais", "Inteligência artificial"], sameAs };
      if (c.email) person.email = "mailto:" + c.email;
      const s = document.createElement("script"); s.id = "person-structured-data"; s.type = "application/ld+json"; s.textContent = JSON.stringify(person); document.head.appendChild(s);
    }
    if (location.pathname.includes("/artigos/") && !one("#article-structured-data") && one("h1")) {
      const article = { "@context": "https://schema.org", "@type": "BlogPosting", headline: one("h1").textContent.trim(), description, mainEntityOfPage: one('link[rel="canonical"]')?.href || location.href, author: { "@type": "Person", name: c.siteName || "Filipe Guardia", url: base }, publisher: { "@type": "Person", name: c.siteName || "Filipe Guardia", url: base } };
      const time = one("time[datetime]"); if (time) article.datePublished = time.getAttribute("datetime"); if (c.socialImage) article.image = c.socialImage;
      const s = document.createElement("script"); s.id = "article-structured-data"; s.type = "application/ld+json"; s.textContent = JSON.stringify(article); document.head.appendChild(s);
    }
  }

  function analytics() {
    const id = String(c.analyticsId || "").trim(); if (!/^G-[A-Z0-9]+$/i.test(id)) return;
    const s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(id); document.head.appendChild(s);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); }; window.gtag("js", new Date()); window.gtag("config", id);
  }

  function init() { brand(); links(); menu(); forms(); contacts(); evidence(); articles(); metadata(); analytics(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true }); else init();
})();`;

const SITE_CSS = `:root { --focus-ring: rgba(111, 53, 178, .26); --header-surface: rgba(255,255,255,.92); }
html { scroll-padding-top: 96px; }
body { overflow-x: hidden; }
.site-header { position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid rgba(70,42,89,.1); background: var(--header-surface); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); }
.nav-shell { position: relative; }
.brand { flex-shrink: 0; }
.brand-copy { line-height: 1.12; }
.site-nav { overflow: visible; }
.site-nav a { min-height: 44px; display: inline-flex; align-items: center; border-radius: 10px; }
.site-nav a:hover { background: rgba(86,35,154,.07); }
.site-nav a[aria-current="page"] { background: rgba(86,35,154,.1); }
.nav-toggle { width: 46px; height: 46px; display: none; place-content: center; gap: 5px; padding: 0; margin-left: auto; border: 1px solid var(--line,#ded7e4); border-radius: 12px; background: #fff; color: var(--text,#28222e); cursor: pointer; }
.nav-toggle span { width: 20px; height: 2px; display: block; border-radius: 999px; background: currentColor; transition: transform 180ms ease, opacity 180ms ease; }
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
.home-page .hero { position: relative; overflow: hidden; }
.home-page .hero::after { content: ""; position: absolute; width: 420px; height: 420px; right: -220px; bottom: -260px; border-radius: 50%; background: radial-gradient(circle,rgba(117,63,178,.14),transparent 68%); pointer-events: none; }
.article-card,.project-showcase,.proof-card,.contact-card,.method-step { transition: transform 180ms ease,box-shadow 180ms ease,border-color 180ms ease; }
.article-card:hover,.project-showcase:hover,.proof-card:hover { transform: translateY(-3px); border-color: rgba(86,35,154,.24); box-shadow: 0 18px 42px rgba(43,23,61,.1); }
.article-card:focus-within,.project-showcase:focus-within,.proof-card:focus-within { border-color: var(--brand-light,#6f35b2); box-shadow: 0 0 0 4px var(--focus-ring); }
.is-duplicate-article,.is-collapsed-article { display: none !important; }
.articles-toggle-row { display: flex; justify-content: center; margin-top: 30px; }
.articles-toggle { cursor: pointer; }
.project-evidence { margin-top: 22px; padding: 18px; border: 1px solid rgba(86,35,154,.18); border-radius: 14px; background: linear-gradient(135deg,rgba(86,35,154,.07),rgba(255,255,255,.9)); }
.project-evidence strong { display: block; color: var(--brand-dark,#321448); font-size: 1rem; }
.project-evidence p { margin: 8px 0 0; }
.project-evidence .card-link { display: inline-flex; margin-top: 12px; }
.site-social-links { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 14px; }
.site-social-links a { color: inherit; font-size: .86rem; font-weight: 750; text-underline-offset: 3px; }
.form-trap { position: absolute !important; width: 1px !important; height: 1px !important; overflow: hidden !important; clip: rect(0 0 0 0) !important; clip-path: inset(50%) !important; white-space: nowrap !important; }
button[aria-busy="true"] { cursor: progress; opacity: .72; }
a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible { outline: 3px solid var(--focus-ring); outline-offset: 3px; }
@media (max-width:760px) { body.menu-open { overflow: hidden; } .nav-shell { min-height: 70px; display: flex; align-items: center; } .nav-toggle { display: grid; } .site-nav { position: absolute; top: calc(100% + 8px); left: 0; right: 0; display: none; max-height: calc(100vh - 100px); overflow-y: auto; padding: 10px; border: 1px solid var(--line,#ded7e4); border-radius: 16px; background: #fff; box-shadow: 0 24px 60px rgba(32,18,44,.18); } .site-nav.is-open { display: flex; flex-direction: column; } .site-nav a { width: 100%; padding: 11px 13px; } .brand-copy small { max-width: 190px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; } .site-footer .footer-shell { align-items: flex-start; } .site-social-links { width: 100%; margin-top: 6px; } }
@media (max-width:420px) { .brand-copy small { display: none; } .brand-mark { width: 40px; height: 40px; } }
@media (prefers-reduced-motion:reduce) { .article-card,.project-showcase,.proof-card,.contact-card,.method-step,.nav-toggle span { transition: none !important; } .article-card:hover,.project-showcase:hover,.proof-card:hover { transform: none; } }`;

function redirectPage() {
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="robots" content="noindex, follow" /><link rel="canonical" href="${BASE_URL}" /><title>Redirecionando | Filipe Guardia</title><script>(()=>{const legacy={"#da-planilha-ao-agente":"artigos/da-planilha-ao-agente.html"};location.replace(legacy[location.hash]||"index.html"+location.hash)})();</script><noscript><meta http-equiv="refresh" content="0; url=index.html" /></noscript></head><body><p><a href="index.html">Acessar o site de Filipe Guardia</a></p></body></html>`;
}

function simplePage(title, eyebrow, heading, text, secondaryHref, secondaryLabel) {
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="robots" content="noindex, follow" /><meta name="theme-color" content="#2b173d" /><title>${title} | Filipe Guardia</title><link rel="stylesheet" href="styles.css" /><link rel="stylesheet" href="site-enhancements.css" /><link rel="stylesheet" href="site-v2.css" /></head><body><main id="conteudo"><section class="page-hero"><div class="container"><p class="eyebrow">${eyebrow}</p><h1>${heading}</h1><p class="lead">${text}</p><div class="hero-actions"><a class="button" href="index.html">Voltar ao início</a><a class="button secondary" href="${secondaryHref}">${secondaryLabel}</a></div></div></section></main><script src="site-config.js" defer></script><script src="site.js" defer></script></body></html>`;
}

function sitemap(articles) {
  const today = new Date().toISOString().slice(0, 10);
  const pages = ['', ...ROOT_PAGES, ...articles];
  const rows = pages.map((page) => `  <url><loc>${page ? new URL(page, BASE_URL).href : BASE_URL}</loc><lastmod>${today}</lastmod></url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>`;
}

const README = `# Complementos opcionais do site\n\nA atualização principal já foi aplicada.\n\nEdite somente \`site-config.js\` para preencher, quando desejar:\n\n- \`linkedinUrl\`\n- \`email\`\n- \`socialImage\` (PNG 1200 × 630)\n- métricas e links em \`projectEvidence\`\n- \`analyticsId\`\n\nCampos vazios não aparecem para visitantes. O histórico do Git mantém a versão anterior para restauração.`;

async function main() {
  const articles = await listArticles();
  const home = await readText('home.html');
  const index = await readText('index.html');
  const source = /class=['"]hero['"]/i.test(home) ? home : /class=['"]hero['"]/i.test(index) ? index : '';
  if (!source) throw new Error('Conteúdo principal não encontrado em home.html ou index.html.');

  await writeText('index.html', patchPage(source, 'index.html'));
  for (const page of ROOT_PAGES) if (await exists(page)) await writeText(page, patchPage(await readText(page), page));
  for (const article of articles) await writeText(article, patchPage(await readText(article), article, '../'));

  await writeText('home.html', redirectPage());
  await writeIfMissing('site-config.js', SITE_CONFIG);
  await writeText('site-v2.css', SITE_CSS);
  await writeText('site.js', SITE_JS);
  await writeText('obrigado.html', simplePage('Mensagem enviada', 'Mensagem enviada', 'Obrigado pelo contato.', 'Sua mensagem foi registrada. Retornarei pelo e-mail informado assim que possível.', 'projetos.html', 'Conhecer os projetos'));
  await writeText('404.html', simplePage('Página não encontrada', 'Erro 404', 'Esta página não foi encontrada.', 'O conteúdo pode ter mudado de endereço ou o link utilizado pode estar incompleto.', 'index.html#artigos', 'Ver artigos'));
  await writeText('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}sitemap.xml`);
  await writeText('sitemap.xml', sitemap(articles));
  await writeText('README-COMPLEMENTAR.md', README);

  for (const transient of ['upgrade-site.mjs', '.github/workflows/apply-site-upgrade.yml']) {
    if (await exists(transient)) await unlink(path.join(ROOT, transient));
  }
  console.log(`Site atualizado: ${articles.length} artigos processados.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
