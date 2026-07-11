/* Fade-in on scroll via IntersectionObserver, reaplicado a cada troca de rota. */

let revealObserver = null;

function getRevealObserver() {
  if (revealObserver) return revealObserver;
  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  return revealObserver;
}

function initRevealAnimations(root) {
  const observer = getRevealObserver();
  const targets = root.querySelectorAll(".reveal, .reveal-stagger");
  targets.forEach((el) => observer.observe(el));
}

/* Persona-style diagonal slice wipe covering the viewport during route change. */
function buildWipeSlices(mode) {
  const wipe = document.createElement("div");
  wipe.className = "route-wipe " + mode;
  for (let i = 0; i < 5; i++) {
    wipe.appendChild(document.createElement("span"));
  }
  return wipe;
}

function runWipe(mode, duration) {
  return new Promise((resolve) => {
    const wipe = buildWipeSlices(mode);
    document.body.appendChild(wipe);
    setTimeout(() => {
      wipe.remove();
      resolve();
    }, duration);
  });
}

let hasRoutedOnce = false;

/* Transição de rota: wipe cobre a tela, troca o conteúdo por baixo, wipe abre revelando a nova rota.
 * A primeira renderização (carregamento da página) pula o wipe para não atrasar o first paint. */
async function transitionRoute(appEl, renderFn) {
  if (!hasRoutedOnce) {
    hasRoutedOnce = true;
    appEl.innerHTML = await renderFn();
    appEl.classList.add("route-entered");
    initRevealAnimations(appEl);
    return;
  }

  appEl.classList.remove("route-entered");
  appEl.classList.add("route-leaving");

  await runWipe("wipe-in", 260);

  appEl.innerHTML = await renderFn();
  window.scrollTo(0, 0);
  appEl.classList.remove("route-leaving");
  appEl.classList.add("route-entering");
  void appEl.offsetWidth;

  await runWipe("wipe-out", 260);

  appEl.classList.remove("route-entering");
  appEl.classList.add("route-entered");
  initRevealAnimations(appEl);
}
