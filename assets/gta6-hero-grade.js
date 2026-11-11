(() => {
  const activeClass = "gta6-hero-image-active";

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
    bindHero();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
