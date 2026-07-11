/* Hash router: #/  |  #/categoria/:tipo  |  #/item/:slug  |  #/livro  |  #/livro/:slug */

function parseHash() {
  let hash = window.location.hash || "#/";
  hash = hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean);

  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "categoria" && parts[1]) return { name: "categoria", param: parts[1] };
  if (parts[0] === "item" && parts[1]) return { name: "item", param: parts[1] };
  if (parts[0] === "livro" && !parts[1]) return { name: "livro" };
  if (parts[0] === "livro" && parts[1]) return { name: "capitulo", param: parts[1] };
  return { name: "notfound" };
}

function resolveRenderFn(route) {
  switch (route.name) {
    case "home":
      return () => renderHome();
    case "categoria":
      return () => renderCategory(route.param);
    case "item":
      return () => renderDetail(route.param);
    case "livro":
      return () => renderLivroIndex();
    case "capitulo":
      return () => renderCapitulo(route.param);
    default:
      return () => renderNotFound();
  }
}

function updateActiveNavLink(route) {
  const links = document.querySelectorAll(".main-nav a[data-route]");
  links.forEach((link) => {
    const target = link.getAttribute("data-route");
    const isActive =
      (route.name === "home" && target === "home") ||
      (route.name === "categoria" && target === route.param) ||
      ((route.name === "livro" || route.name === "capitulo") && target === "livro");
    link.classList.toggle("active", isActive);
  });
}

async function router() {
  const appEl = document.getElementById("app");
  const route = parseHash();
  const renderFn = resolveRenderFn(route);
  updateActiveNavLink(route);
  await transitionRoute(appEl, renderFn);
  if (route.name === "capitulo") {
    initReaderCheckpoint(appEl, route.param);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
