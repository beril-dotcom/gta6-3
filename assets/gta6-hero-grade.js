(() => {
  const filterId = "gta6-hero-color-grade";
  const activeClass = "gta6-hero-direct-grade";

  const createColorGrade = () => {
    if (document.getElementById(filterId)) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "0");
    svg.setAttribute("height", "0");
    svg.style.position = "fixed";
    svg.style.pointerEvents = "none";

    svg.innerHTML = `
      <filter id="${filterId}" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="
          .2126 .7152 .0722 0 0
          .2126 .7152 .0722 0 0
          .2126 .7152 .0722 0 0
          0 0 0 1 0" />
        <feComponentTransfer>
          <feFuncR type="table" tableValues=".047 .063 .141 .294 1 1" />
          <feFuncG type="table" tableValues=".051 .082 .192 .184 .478 .678" />
          <feFuncB type="table" tableValues=".106 .157 .322 .329 .659 .212" />
        </feComponentTransfer>
      </filter>`;

    document.body.appendChild(svg);
  };

  const bindHero = () => {
    const hero = document.querySelector(".headerBlock");
    if (!hero) {
      requestAnimationFrame(bindHero);
      return;
    }

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        document.body.classList.toggle(activeClass, isVisible);
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    new ResizeObserver(update).observe(hero);
    update();
  };

  const start = () => {
    createColorGrade();
    bindHero();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
