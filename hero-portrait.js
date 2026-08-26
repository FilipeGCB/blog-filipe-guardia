(() => {
  "use strict";

  const init = async () => {
    const aside = document.querySelector(".home-page .hero-note");
    if (!aside || aside.classList.contains("hero-portrait")) return;

    const partUrls = Array.from({ length: 6 }, (_, index) =>
      `assets/hero/filipe-home-${String(index + 1).padStart(2, "0")}.txt`
    );

    try {
      const parts = await Promise.all(partUrls.map(async (url) => {
        const response = await fetch(url, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Falha ao carregar ${url}`);
        return (await response.text()).trim();
      }));

      const img = new Image();
      img.alt = "Filipe Guardia em um ambiente profissional contemporâneo ligado a tecnologia e inteligência artificial";
      img.width = 800;
      img.height = 533;
      img.decoding = "async";
      img.fetchPriority = "high";
      img.src = `data:image/webp;base64,${parts.join("")}`;
      await img.decode();

      if (!document.getElementById("hero-portrait-styles")) {
        const style = document.createElement("style");
        style.id = "hero-portrait-styles";
        style.textContent = `
          .home-page .hero-grid {
            grid-template-columns: minmax(0, 1.36fr) minmax(340px, .72fr);
            align-items: center;
          }
          .home-page .hero-note.hero-portrait {
            position: relative;
            min-height: 0;
            aspect-ratio: 4 / 5;
            padding: 0;
            overflow: hidden;
            isolation: isolate;
            border: 1px solid rgba(86,35,154,.24);
            border-radius: 28px;
            background: #21152f;
            box-shadow: 0 26px 60px rgba(33,18,54,.18);
          }
          .home-page .hero-note.hero-portrait::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background:
              linear-gradient(180deg, rgba(53,16,95,.04) 35%, rgba(23,21,29,.08) 55%, rgba(23,21,29,.90) 100%),
              linear-gradient(135deg, rgba(86,35,154,.14), transparent 44%);
          }
          .hero-portrait__image {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            object-position: 51% 44%;
            transform: scale(1.012);
          }
          .hero-portrait__copy {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            padding: 64px 26px 25px;
            color: #fff;
          }
          .home-page .hero-note.hero-portrait .hero-portrait__copy strong {
            display: inline-flex;
            margin: 0 0 8px;
            padding: 5px 9px;
            border: 1px solid rgba(255,255,255,.22);
            border-radius: 999px;
            background: rgba(53,16,95,.42);
            color: #fff;
            font-size: .72rem;
            letter-spacing: .08em;
            text-transform: uppercase;
            backdrop-filter: blur(8px);
          }
          .home-page .hero-note.hero-portrait .hero-portrait__copy p {
            max-width: 31ch;
            margin: 0;
            color: rgba(255,255,255,.88);
            font-size: .9rem;
            line-height: 1.55;
            text-shadow: 0 1px 16px rgba(0,0,0,.38);
          }
          @media (max-width: 900px) {
            .home-page .hero-grid { grid-template-columns: 1fr; align-items: start; }
            .home-page .hero-note.hero-portrait {
              width: min(100%, 620px);
              aspect-ratio: 16 / 10;
              margin-top: 6px;
            }
            .hero-portrait__image { object-position: 50% 39%; }
          }
          @media (max-width: 560px) {
            .home-page .hero-note.hero-portrait { aspect-ratio: 4 / 5; border-radius: 22px; }
            .hero-portrait__copy { padding: 56px 20px 20px; }
          }
          @media (prefers-reduced-motion: no-preference) {
            .home-page .hero-note.hero-portrait { animation: heroPortraitIn .55s ease-out both; }
            @keyframes heroPortraitIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
          }
        `;
        document.head.appendChild(style);
      }

      const copy = document.createElement("div");
      copy.className = "hero-portrait__copy";
      while (aside.firstChild) copy.appendChild(aside.firstChild);

      img.className = "hero-portrait__image";
      aside.classList.add("hero-portrait");
      aside.replaceChildren(img, copy);
    } catch (error) {
      console.warn("Retrato da home não pôde ser carregado; mantendo o card original.", error);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
