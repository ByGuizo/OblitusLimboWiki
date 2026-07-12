/*
 * Ferramentas de leitura do capítulo: deslize automático, modo foco (+ inversão),
 * modal de boas-vindas (novidades) e modal de apoio ao salvar checkpoint.
 *
 * Inicializado pelo router via initReaderTools(appEl, slug) depois que a página
 * do capítulo entra no DOM. Coexiste com initReaderCheckpoint (checkpoint.js).
 */

const READER_WELCOME_KEY = "ol_reader_welcome_seen";
const READER_PREFS_KEY = "ol_reader_prefs";

/*
 * Níveis discretos de tamanho de fonte (estilo Kindle). Escala aplicada como um
 * multiplicador via CSS var --reader-font-scale no .reader-body; passos discretos
 * evitam valores estranhos e quebras de linha ruins. Índice padrão = 2 (100%).
 */
const READER_FONT_LEVELS = [0.88, 0.94, 1.0, 1.1, 1.22, 1.36, 1.5];
const READER_FONT_DEFAULT = 2;

/* Handler de "clicar fora para fechar o FAB" — guardado para remoção no teardown. */
let readerOutsideClickHandler = null;

/* Preferências persistidas (modo foco / inversão) — sobrevivem entre capítulos. */
function readReaderPrefs() {
  try {
    return JSON.parse(localStorage.getItem(READER_PREFS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function writeReaderPrefs(prefs) {
  try {
    localStorage.setItem(READER_PREFS_KEY, JSON.stringify(prefs));
  } catch (e) {
    /* localStorage indisponível — preferências viram sessão-only, sem erro. */
  }
}

/* ---------------- Deslize automático ---------------- */

/*
 * Converte o valor do slider (1..10) em pixels por segundo. Escala linear e
 * previsível — cada passo é sempre mais rápido que o anterior, na mesma medida.
 */
function speedToPixelsPerSecond(step) {
  const s = Math.max(1, Math.min(10, step));
  return 16 + (s - 1) * 20; // 1 => 16px/s ... 10 => 196px/s
}

/*
 * Deslize automático baseado em POSIÇÃO ABSOLUTA (targetY), não em scrollBy
 * relativo. Motivo: com `scroll-behavior: smooth` (definido no reset.css),
 * cada scrollBy incremental dispararia uma animação suave que compete com o
 * próximo frame — o que deixava a velocidade errática ("às vezes rápido, às
 * vezes não"). Aqui forçamos scroll instantâneo (scroll-behavior: auto) durante
 * o deslize e avançamos targetY por dt real, então a velocidade é exata.
 *
 * Rolagem manual convive com o deslize: se o usuário rolar (dedo/roda/teclas),
 * window.scrollY diverge do nosso último scrollTo; detectamos essa diferença e
 * re-sincronizamos targetY com a posição do usuário — ele pode subir/descer à
 * vontade e o deslize continua de onde ele soltou, sem desativar.
 */
function createAutoScroller() {
  let rafId = null;
  let lastTs = 0;
  let pxPerSec = speedToPixelsPerSecond(4);
  let targetY = 0;       // posição-alvo em ponto flutuante
  let lastAppliedY = 0;  // último valor que nós aplicamos via scrollTo
  let onStop = null;
  const rootStyle = document.documentElement.style;

  function maxScroll() {
    return document.documentElement.scrollHeight - window.innerHeight;
  }

  function atBottom() {
    return window.scrollY >= maxScroll() - 1;
  }

  function tick(ts) {
    if (!lastTs) lastTs = ts;
    let dt = (ts - lastTs) / 1000;
    lastTs = ts;
    // clampa dt para evitar salto gigante após o navegador congelar o rAF
    // (aba em segundo plano, etc.) — senão a página "pularia" ao voltar.
    if (dt > 0.1) dt = 0.1;

    // Se o usuário rolou manualmente, window.scrollY difere do que aplicamos:
    // adota a posição dele como novo ponto de partida.
    if (Math.abs(window.scrollY - lastAppliedY) > 2) {
      targetY = window.scrollY;
    }

    targetY += pxPerSec * dt;
    const clamped = Math.min(targetY, maxScroll());
    window.scrollTo(0, clamped);
    lastAppliedY = window.scrollY; // valor real após o scroll (inteiro)

    if (atBottom()) {
      stop();
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId != null) return;
    lastTs = 0;
    targetY = window.scrollY;
    lastAppliedY = window.scrollY;
    rootStyle.scrollBehavior = "auto"; // neutraliza o smooth do reset.css
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    rootStyle.scrollBehavior = ""; // restaura o smooth padrão
    if (typeof onStop === "function") onStop();
  }

  return {
    start,
    stop,
    isRunning: () => rafId != null,
    setSpeed: (step) => { pxPerSec = speedToPixelsPerSecond(step); },
    set onStop(fn) { onStop = fn; }
  };
}

/* ---------------- Modais ---------------- */

function openReaderModal(appEl, name) {
  const overlay = appEl.querySelector(`.reader-modal-overlay[data-modal="${name}"]`);
  if (!overlay) return;
  overlay.hidden = false;
  // força reflow antes de aplicar a classe para a transição de entrada disparar
  void overlay.offsetWidth;
  overlay.classList.add("is-open");
}

function closeReaderModal(overlay) {
  overlay.classList.remove("is-open");
  const done = () => {
    overlay.hidden = true;
    overlay.removeEventListener("transitionend", done);
  };
  overlay.addEventListener("transitionend", done);
  // fallback caso transitionend não dispare
  setTimeout(() => { if (!overlay.classList.contains("is-open")) overlay.hidden = true; }, 400);
}

function wireModal(appEl, name) {
  const overlay = appEl.querySelector(`.reader-modal-overlay[data-modal="${name}"]`);
  if (!overlay) return;

  overlay.querySelectorAll(`[data-modal-dismiss="${name}"], .reader-modal-close`).forEach((el) => {
    el.addEventListener("click", () => closeReaderModal(overlay));
  });

  // clicar fora do card (no overlay) fecha
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeReaderModal(overlay);
  });
}

/* ---------------- Init ---------------- */

function initReaderTools(appEl, slug) {
  const tools = appEl.querySelector(".reader-tools");
  if (!tools) return;

  const prefs = readReaderPrefs();

  /* --- Modais --- */
  wireModal(appEl, "welcome");
  wireModal(appEl, "support");

  // Modal de boas-vindas: só na primeira vez que o usuário abre um capítulo.
  let welcomeSeen = false;
  try { welcomeSeen = localStorage.getItem(READER_WELCOME_KEY) === "1"; } catch (e) { /* no-op */ }
  if (!welcomeSeen) {
    setTimeout(() => openReaderModal(appEl, "welcome"), 450);
    try { localStorage.setItem(READER_WELCOME_KEY, "1"); } catch (e) { /* no-op */ }
  }

  /* --- FAB de configurações (só ativo no mobile via CSS) --- */
  const fab = appEl.querySelector(".reader-fab");
  if (fab) {
    function setExpanded(open) {
      tools.classList.toggle("is-expanded", open);
      fab.classList.toggle("is-open", open);
      fab.setAttribute("aria-expanded", String(open));
    }
    fab.addEventListener("click", (e) => {
      e.stopPropagation();
      setExpanded(!tools.classList.contains("is-expanded"));
    });
    // Toca fora do painel/FAB fecha (só relevante quando expandido no mobile).
    // Guardado em variável de módulo para poder remover no teardown (evita
    // acumular um listener por capítulo visitado).
    readerOutsideClickHandler = (e) => {
      if (!tools.classList.contains("is-expanded")) return;
      if (tools.contains(e.target) || fab.contains(e.target)) return;
      setExpanded(false);
    };
    document.addEventListener("click", readerOutsideClickHandler);
  }

  /* --- Deslize automático --- */
  const autoBtn = tools.querySelector('[data-tool="autoscroll"]');
  const speedWrap = tools.querySelector(".reader-speed");
  const range = tools.querySelector(".reader-speed-range");
  const speedValue = tools.querySelector(".reader-speed-value");
  const scroller = createAutoScroller();

  function setSpeedFromRange() {
    const step = Number(range.value);
    scroller.setSpeed(step);
    if (speedValue) speedValue.textContent = String(step);
  }
  setSpeedFromRange();

  function stopAuto() {
    scroller.stop();
    autoBtn.classList.remove("is-active");
    autoBtn.setAttribute("aria-pressed", "false");
    if (speedWrap) speedWrap.hidden = true;
  }

  function startAuto() {
    scroller.start();
    autoBtn.classList.add("is-active");
    autoBtn.setAttribute("aria-pressed", "true");
    if (speedWrap) speedWrap.hidden = false;
  }

  scroller.onStop = () => {
    // chamado quando chega ao fim; sincroniza o estado do botão
    autoBtn.classList.remove("is-active");
    autoBtn.setAttribute("aria-pressed", "false");
  };

  autoBtn.addEventListener("click", () => {
    if (scroller.isRunning()) stopAuto(); else startAuto();
  });

  range.addEventListener("input", setSpeedFromRange);

  tools.querySelectorAll(".reader-speed-step").forEach((btn) => {
    btn.addEventListener("click", () => {
      const step = Number(btn.getAttribute("data-step"));
      range.value = String(Math.max(1, Math.min(10, Number(range.value) + step)));
      setSpeedFromRange();
    });
  });

  // Nota: NÃO paramos o deslize em wheel/touch/teclas. O usuário pode rolar
  // manualmente (subir/descer) enquanto o deslize está ativo — o scroller
  // detecta a rolagem manual e re-sincroniza a partir da nova posição. Para
  // desligar, é só tocar o botão de deslize de novo.

  /* --- Tamanho da fonte (zoom estilo Kindle) --- */
  const fontBtn = tools.querySelector('[data-tool="fontsize"]');
  const fontWrap = tools.querySelector(".reader-fontsize");
  const fontValue = tools.querySelector(".reader-font-value");
  const readerBody = appEl.querySelector(".reader-body");

  let fontLevel = Number.isInteger(prefs.fontLevel) ? prefs.fontLevel : READER_FONT_DEFAULT;
  fontLevel = Math.max(0, Math.min(READER_FONT_LEVELS.length - 1, fontLevel));

  function applyFontLevel() {
    const scale = READER_FONT_LEVELS[fontLevel];
    if (readerBody) readerBody.style.setProperty("--reader-font-scale", String(scale));
    if (fontValue) fontValue.textContent = Math.round(scale * 100) + "%";
    if (fontBtn) {
      // marca ativo quando difere do padrão, para dar feedback visual
      fontBtn.classList.toggle("is-active", fontLevel !== READER_FONT_DEFAULT);
    }
    // desabilita botões nos extremos
    tools.querySelectorAll(".reader-font-step").forEach((b) => {
      const step = Number(b.getAttribute("data-step"));
      const next = fontLevel + step;
      b.disabled = next < 0 || next > READER_FONT_LEVELS.length - 1;
    });
  }

  function changeFontLevel(delta) {
    const next = Math.max(0, Math.min(READER_FONT_LEVELS.length - 1, fontLevel + delta));
    if (next === fontLevel) return;
    fontLevel = next;
    applyFontLevel();
    const p = readReaderPrefs();
    p.fontLevel = fontLevel;
    writeReaderPrefs(p);
  }

  applyFontLevel(); // aplica pref salva imediatamente ao abrir o capítulo

  if (fontBtn) {
    fontBtn.addEventListener("click", () => {
      const open = fontWrap.hidden;
      fontWrap.hidden = !open;
      fontBtn.setAttribute("aria-expanded", String(open));
    });
  }

  tools.querySelectorAll(".reader-font-step").forEach((btn) => {
    btn.addEventListener("click", () => changeFontLevel(Number(btn.getAttribute("data-step"))));
  });

  /* --- Modo foco + inversão --- */
  const focusBtn = tools.querySelector('[data-tool="focus"]');
  const invertBtn = tools.querySelector('[data-tool="invert"]');
  const invertIcon = invertBtn ? invertBtn.querySelector(".reader-invert-icon") : null;
  const invertLabel = invertBtn ? invertBtn.querySelector(".reader-tool-label") : null;
  const body = document.body;

  function applyFocus(on) {
    body.classList.toggle("reader-focus-mode", on);
    focusBtn.classList.toggle("is-active", on);
    focusBtn.setAttribute("aria-pressed", String(on));
    // Botão de inverter só existe/aparece com o modo foco ligado.
    if (invertBtn) invertBtn.hidden = !on;
    if (!on) applyInvert(false, /*persistOnly*/ true); // some inversão junto, mas mantém preferência salva
  }

  function applyInvert(on, persistOnly) {
    body.classList.toggle("reader-focus-invert", on);
    if (invertBtn) {
      invertBtn.classList.toggle("is-active", on);
      invertBtn.setAttribute("aria-pressed", String(on));
      // Ícone/rótulo indicam PARA ONDE o clique leva: sol = clarear, lua = escurecer.
      if (invertIcon) {
        invertIcon.classList.toggle("fa-sun", !on);
        invertIcon.classList.toggle("fa-moon", on);
      }
      if (invertLabel) invertLabel.textContent = on ? "Fundo escuro" : "Fundo claro";
    }
    if (!persistOnly) {
      const p = readReaderPrefs();
      p.invert = on;
      writeReaderPrefs(p);
    }
  }

  focusBtn.addEventListener("click", () => {
    const on = !body.classList.contains("reader-focus-mode");
    applyFocus(on);
    const p = readReaderPrefs();
    p.focus = on;
    writeReaderPrefs(p);
    // ao ligar o foco, reaplica a inversão salva
    if (on && p.invert) applyInvert(true, true);
  });

  if (invertBtn) {
    invertBtn.addEventListener("click", () => {
      applyInvert(!body.classList.contains("reader-focus-invert"), false);
    });
  }

  // Restaura preferências salvas ao abrir o capítulo.
  if (prefs.focus) {
    applyFocus(true);
    if (prefs.invert) applyInvert(true, true);
  }
}

/* Chamada ao SAIR da rota de capítulo — limpa estado global que não deve vazar. */
function teardownReaderTools() {
  document.body.classList.remove("reader-focus-mode", "reader-focus-invert");
  // se o deslize estava ativo, o scroll-behavior foi forçado para auto — restaura.
  document.documentElement.style.scrollBehavior = "";
  if (readerOutsideClickHandler) {
    document.removeEventListener("click", readerOutsideClickHandler);
    readerOutsideClickHandler = null;
  }
}
