/* Fade-in on scroll via IntersectionObserver, reaplicado a cada troca de rota.
 *
 * Elementos .reveal começam com opacity:0 — se o observer não disparar, o conteúdo
 * fica INVISÍVEL. Já houve um bug real disso no mobile: ao abrir uma categoria, a
 * página aparecia vazia até o usuário rolar. Duas causas somadas:
 *   1. threshold 0.12 + rootMargin negativo exigiam que uma boa fatia do elemento
 *      entrasse na tela — numa grid alta de celular, o topo dela não bastava;
 *   2. o scrollTo(0,0) da troca de rota ainda estava em curso (scroll-behavior:
 *      smooth) quando o observer era criado, então ele media a posição errada.
 *
 * Por isso a regra agora é: o que JÁ está na viewport é revelado na hora, de forma
 * síncrona, sem depender do observer. O observer cuida só do que está abaixo da
 * dobra. Assim uma falha do observer nunca esconde conteúdo — no pior caso, o
 * elemento só aparece sem a animação.
 */

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
  }, { threshold: 0, rootMargin: "0px 0px -40px 0px" });
  return revealObserver;
}

/* true se qualquer parte do elemento já está dentro da janela visível. */
function isInViewport(el) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.top < vh && r.bottom > 0;
}

function initRevealAnimations(root) {
  const observer = getRevealObserver();
  const targets = root.querySelectorAll(".reveal, .reveal-stagger");
  targets.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("is-visible"); // já visível: revela agora, sem observer
    } else {
      observer.observe(el);
    }
  });
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
  scrollToTopInstantly();
  appEl.classList.remove("route-leaving");
  appEl.classList.add("route-entering");
  void appEl.offsetWidth;

  await runWipe("wipe-out", 260);

  appEl.classList.remove("route-entering");
  appEl.classList.add("route-entered");
  initRevealAnimations(appEl);
}

/* O reset.css define html { scroll-behavior: smooth }, o que tornaria este salto
 * ao topo uma ROLAGEM ANIMADA — e o initRevealAnimations logo abaixo mediria a
 * viewport no meio dela, marcando como "fora da tela" elementos que já vão estar
 * visíveis. Força o salto a ser instantâneo e restaura o comportamento padrão. */
function scrollToTopInstantly() {
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
}
