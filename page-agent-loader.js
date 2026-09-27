(() => {
  "use strict";

  const config = window.SITE_CONFIG?.pageAgent || {};
  if (!config.enabled) return;

  const one = (selector, root = document) => root.querySelector(selector);

  function injectStyles() {
    if (one("#page-agent-launcher-styles")) return;

    const style = document.createElement("style");
    style.id = "page-agent-launcher-styles";
    style.textContent = `
      .page-agent-launcher {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        z-index: 2147482000;
        width: min(22rem, calc(100vw - 2rem));
        padding: 1rem;
        border: 1px solid rgba(255,255,255,.16);
        border-radius: 1rem;
        background: rgba(43,23,61,.97);
        color: #fff;
        box-shadow: 0 1rem 3rem rgba(20,10,30,.34);
        font: 500 .92rem/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        backdrop-filter: blur(14px);
      }
      .page-agent-launcher strong {
        display: block;
        margin-bottom: .35rem;
        font-size: 1rem;
      }
      .page-agent-launcher p {
        margin: 0 0 .7rem;
        color: rgba(255,255,255,.86);
      }
      .page-agent-launcher small {
        display: block;
        margin: 0 0 .8rem;
        color: rgba(255,255,255,.66);
        font-size: .72rem;
      }
      .page-agent-launcher button {
        width: 100%;
        min-height: 2.75rem;
        padding: .7rem 1rem;
        border: 0;
        border-radius: .75rem;
        background: #fff;
        color: #2b173d;
        font: inherit;
        font-weight: 750;
        cursor: pointer;
      }
      .page-agent-launcher button:hover { transform: translateY(-1px); }
      .page-agent-launcher button:focus-visible {
        outline: 3px solid #c9a7ef;
        outline-offset: 3px;
      }
      .page-agent-launcher button:disabled {
        cursor: wait;
        opacity: .72;
        transform: none;
      }
      .page-agent-launcher [role="status"] {
        min-height: 1.15rem;
        margin: .55rem 0 0;
        color: rgba(255,255,255,.78);
        font-size: .76rem;
      }
      .page-agent-launcher.is-loaded { opacity: .76; }
      @media (max-width: 600px) {
        .page-agent-launcher { right: .75rem; bottom: .75rem; width: calc(100vw - 1.5rem); }
      }
      @media (prefers-reduced-motion: no-preference) {
        .page-agent-launcher { animation: page-agent-enter .22s ease-out both; }
        .page-agent-launcher button { transition: transform .15s ease, opacity .15s ease; }
        @keyframes page-agent-enter {
          from { opacity: 0; transform: translateY(.75rem); }
          to { opacity: 1; transform: translateY(0); }
        }
      }
    `;
    document.head.appendChild(style);
  }

  function validatedScriptUrl() {
    const raw = String(config.scriptUrl || "").trim();
    if (!raw) return null;

    try {
      const url = new URL(raw, location.href);
      const allowedHosts = new Set(["cdn.jsdelivr.net", "registry.npmmirror.com"]);
      const expectedFile = /\/page-agent(?:@|\/)[^/]+\/.*\/page-agent\.demo\.js$/;
      if (url.protocol !== "https:" || !allowedHosts.has(url.hostname) || !expectedFile.test(url.pathname)) return null;
      return url.href;
    } catch {
      return null;
    }
  }

  function init() {
    if (one("[data-page-agent-launcher]") || one("script[data-page-agent-demo]")) return;

    const scriptUrl = validatedScriptUrl();
    if (!scriptUrl) {
      console.warn("PageAgent não iniciado: URL de script ausente ou não permitida.");
      return;
    }

    injectStyles();

    const launcher = document.createElement("aside");
    launcher.className = "page-agent-launcher";
    launcher.dataset.pageAgentLauncher = "true";
    launcher.setAttribute("aria-label", "Agente experimental de navegação por inteligência artificial");

    const title = document.createElement("strong");
    title.textContent = String(config.label || "Explorar o site com IA");

    const description = document.createElement("p");
    description.textContent = String(config.description || "Use linguagem natural para explorar o conteúdo desta página.");

    const notice = document.createElement("small");
    notice.textContent = String(config.notice || "Recurso experimental processado por um serviço externo de demonstração.");

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Ativar agente experimental";

    const status = document.createElement("p");
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");

    launcher.append(title, description, notice, button, status);
    document.body.appendChild(launcher);

    button.addEventListener("click", () => {
      if (button.disabled) return;

      button.disabled = true;
      button.textContent = "Carregando agente…";
      status.textContent = "Conectando ao PageAgent.";

      const script = document.createElement("script");
      script.src = scriptUrl;
      script.crossOrigin = "anonymous";
      script.dataset.pageAgentDemo = "true";

      script.addEventListener("load", () => {
        button.textContent = "Agente ativado";
        status.textContent = "Use o painel do PageAgent que apareceu na página.";
        launcher.classList.add("is-loaded");
        window.setTimeout(() => launcher.remove(), 4000);
      }, { once: true });

      script.addEventListener("error", () => {
        script.remove();
        button.disabled = false;
        button.textContent = "Tentar novamente";
        status.textContent = "Não foi possível carregar o agente. Verifique a conexão e tente novamente.";
      }, { once: true });

      document.head.appendChild(script);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
