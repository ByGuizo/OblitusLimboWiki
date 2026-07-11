/*
 * Motor de interlinking.
 * 1) Resolve marcações manuais [[slug]] / [[slug|Texto]] em <a data-link="slug">.
 * 2) Faz um segundo passe automático sobre o texto restante, procurando por
 *    nomes conhecidos de outras entidades e convertendo-os em links também,
 *    para pegar menções não marcadas manualmente.
 */

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* Lista de {slug, nome} ordenada do nome mais longo para o mais curto,
 * para que o auto-linkify prefira o casamento mais específico primeiro
 * (ex: "Viktor Vanshee" antes de "Viktor"). */
function buildAutoLinkIndex() {
  const entries = [];
  for (const slug in ENTITIES) {
    const ent = ENTITIES[slug];
    if (!ent.nome) continue;
    entries.push({ slug, text: ent.nome });
  }
  entries.sort((a, b) => b.text.length - a.text.length);
  return entries;
}

let AUTO_LINK_INDEX = null;
function getAutoLinkIndex() {
  if (!AUTO_LINK_INDEX) AUTO_LINK_INDEX = buildAutoLinkIndex();
  return AUTO_LINK_INDEX;
}

const MANUAL_LINK_RE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/gi;

/**
 * Resolve marcações [[slug|Texto]] para texto puro (sem <a>), escapado para HTML.
 * Usado em contextos onde o texto já está dentro de outro elemento clicável
 * (ex: card inteiro é um <a>), onde links aninhados seriam HTML inválido.
 */
function plainText(raw) {
  if (!raw) return "";
  const resolved = String(raw).replace(MANUAL_LINK_RE, (match, slug, label) => {
    return label || (ENTITIES[slug] ? ENTITIES[slug].nome : slug);
  });
  return escapeHtml(resolved);
}

/**
 * Converte um texto bruto (com possíveis marcações [[slug|Texto]]) em HTML
 * seguro, com links reais para outras entidades.
 * @param {string} raw
 * @param {string} [currentSlug] - slug da entidade sendo renderizada, para não auto-linkar a si mesma
 */
function linkify(raw, currentSlug) {
  if (!raw) return "";

  // Passo 1: separa o texto em pedaços de manual-link e texto puro,
  // escapando o texto puro e resolvendo os links manuais.
  const segments = [];
  let lastIndex = 0;
  let match;
  MANUAL_LINK_RE.lastIndex = 0;
  while ((match = MANUAL_LINK_RE.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: raw.slice(lastIndex, match.index) });
    }
    const slug = match[1];
    const label = match[2] || (ENTITIES[slug] ? ENTITIES[slug].nome : slug);
    segments.push({ type: "link", slug, label });
    lastIndex = MANUAL_LINK_RE.lastIndex;
  }
  if (lastIndex < raw.length) {
    segments.push({ type: "text", value: raw.slice(lastIndex) });
  }

  // Passo 2: para cada segmento de texto puro, roda auto-linkify por nome conhecido.
  const index = getAutoLinkIndex();
  let html = "";
  for (const seg of segments) {
    if (seg.type === "link") {
      const exists = !!ENTITIES[seg.slug];
      if (exists) {
        html += `<a href="#/item/${seg.slug}" class="wiki-link" data-link="${seg.slug}">${escapeHtml(seg.label)}</a>`;
      } else {
        html += escapeHtml(seg.label);
      }
      continue;
    }
    html += autoLinkPlainText(seg.value, index, currentSlug);
  }
  return html;
}

function autoLinkPlainText(text, index, currentSlug) {
  // Escapa tudo primeiro, depois insere links por substituição de nomes exatos
  // trabalhando sobre o texto original (não escapado) para achar posições,
  // e escapando cada pedaço não-linkado individualmente.
  let result = "";
  let cursor = 0;
  const lowerText = text.toLowerCase();

  while (cursor < text.length) {
    let bestMatch = null;
    for (const entry of index) {
      if (entry.slug === currentSlug) continue;
      const lowerName = entry.text.toLowerCase();
      const pos = lowerText.indexOf(lowerName, cursor);
      if (pos === -1) continue;
      // checa limites de palavra
      const before = pos === 0 ? " " : text[pos - 1];
      const afterPos = pos + lowerName.length;
      const after = afterPos >= text.length ? " " : text[afterPos];
      const isWordChar = c => /[a-zA-ZÀ-ÿ0-9]/.test(c);
      if (isWordChar(before) || isWordChar(after)) continue;
      if (!bestMatch || pos < bestMatch.pos || (pos === bestMatch.pos && lowerName.length > bestMatch.len)) {
        bestMatch = { pos, len: lowerName.length, slug: entry.slug };
      }
    }
    if (!bestMatch) {
      result += escapeHtml(text.slice(cursor));
      break;
    }
    if (bestMatch.pos > cursor) {
      result += escapeHtml(text.slice(cursor, bestMatch.pos));
    }
    const original = text.slice(bestMatch.pos, bestMatch.pos + bestMatch.len);
    result += `<a href="#/item/${bestMatch.slug}" class="wiki-link" data-link="${bestMatch.slug}">${escapeHtml(original)}</a>`;
    cursor = bestMatch.pos + bestMatch.len;
  }
  return result;
}
