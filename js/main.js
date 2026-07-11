/* Bootstrap: fecha o menu mobile ao navegar, pequenos utilitários globais. */

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("nav-open");
    });
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") nav.classList.remove("nav-open");
    });
  }
});
