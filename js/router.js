/* Hash router: #/  |  #/categoria/:tipo  |  #/item/:slug */

function parseHash() {
  let hash = window.location.hash || "#/";
  hash = hash.replace(/^#/, "");
  const parts = hash.split("/").filter(Boolean);

  if (parts.length === 0) return { name: "home" };
  if (parts[0] === "categoria" && parts[1]) return { name: "categoria", param: parts[1] };
  if (parts[0] === "item" && parts[1]) return { name: "item", param: parts[1] };
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
      (route.name === "categoria" && target === route.param);
    link.classList.toggle("active", isActive);
  });
}

async function router() {
  const appEl = document.getElementById("app");
  const route = parseHash();
  const renderFn = resolveRenderFn(route);
  updateActiveNavLink(route);
  await transitionRoute(appEl, renderFn);
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
