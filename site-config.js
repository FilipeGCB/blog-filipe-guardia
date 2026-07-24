/* Complete apenas os campos desejados. Campos vazios não aparecem no site. */
window.SITE_CONFIG = Object.freeze({
  siteName: "Filipe Guardia",
  tagline: "Cobrança B2B • Dados • Produtos • IA",
  baseUrl: "https://filipegcb.github.io/blog-filipe-guardia/",
  githubUrl: "https://github.com/FilipeGCB",
  linkedinUrl: "",
  email: "",
  formspreeEndpoint: "https://formspree.io/f/mjkdlljg",
  socialImage: "",
  analyticsId: "",
  pageAgent: {
    enabled: true,
    mode: "demo",
    label: "Explorar o site com IA",
    description: "Peça ao agente para localizar artigos, projetos ou informações nesta página.",
    notice: "Recurso experimental: ao ativar, o conteúdo visível da página e suas instruções podem ser processados pelo serviço externo de demonstração do PageAgent.",
    scriptUrl: "https://cdn.jsdelivr.net/npm/page-agent@1.12.2/dist/iife/page-agent.demo.js"
  },
  projectEvidence: {
    "Transformação digital em cobrança e planejamento": { metric: "", summary: "", demoUrl: "", demoLabel: "Ver evidência" },
    "CFO-IA": { metric: "", summary: "", demoUrl: "", demoLabel: "Conhecer demonstração" },
    "Hermes": { metric: "", summary: "", demoUrl: "", demoLabel: "Conhecer arquitetura" },
    "Presentation Intelligence System": { metric: "", summary: "", demoUrl: "", demoLabel: "Ver demonstração" }
  }
});

(() => {
  if (!window.SITE_CONFIG.pageAgent?.enabled || document.querySelector("script[data-site-page-agent-loader]")) return;

  const currentScript = document.currentScript;
  const loader = document.createElement("script");
  loader.src = currentScript?.src
    ? new URL("page-agent-loader.js", currentScript.src).href
    : "page-agent-loader.js";
  loader.async = false;
  loader.dataset.sitePageAgentLoader = "true";
  document.head.appendChild(loader);
})();
