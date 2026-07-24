(() => {
  "use strict";
  const c = window.SITE_CONFIG || {};
  const one = (s, x = document) => x.querySelector(s);
  const all = (s, x = document) => [...x.querySelectorAll(s)];
  const base = String(c.baseUrl || "https://filipegcb.github.io/blog-filipe-guardia/").replace(/\/?$/, "/");

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
})();