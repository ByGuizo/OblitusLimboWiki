/* Funções de renderização de página. Cada uma retorna uma string HTML. */

function icon(cls) {
  return `<i class="${cls}" aria-hidden="true"></i>`;
}

function statusBadge(ent, opts) {
  if (!ent.status || !ent.statusLabel) return "";
  const meta = STATUS_META[ent.status] || STATUS_META.unknown;
  const content = (opts && opts.plain) ? plainText(ent.statusLabel) : linkify(ent.statusLabel);
  return `<span class="status-badge ${meta.cls}">${icon(meta.icon)}${content}</span>`;
}

function vinculosList(vinculos) {
  if (!vinculos || !vinculos.length) return "";
  const items = vinculos.map(v => {
    const nome = v.slug
      ? `<a href="#/item/${v.slug}" class="wiki-link" data-link="${v.slug}">${escapeHtml(v.nome)}</a>`
      : escapeHtml(v.nome);
    return `<li class="vinculo-item"><span class="vinculo-nome">${nome}</span><span class="vinculo-relacao">${escapeHtml(v.relacao)}</span></li>`;
  }).join("");
  return `<ul class="vinculos-list">${items}</ul>`;
}

function mediaBlock(ent, opts) {
  opts = opts || {};
  let sizeClass = opts.detail ? "detail-portrait" : "card-media";
  if (opts.detail && ent.imagemWide) sizeClass += " is-wide";
  if (ent.imagem) {
    return `<div class="${sizeClass}"><img src="${ent.imagem}" alt="${escapeHtml(ent.nome)}" loading="lazy"></div>`;
  }
  return `<div class="${sizeClass}"><div class="placeholder-art">${icon("fa-solid fa-xmark placeholder-glyph")}</div></div>`;
}

/* ---------------- HOME ---------------- */

function renderHome() {
  return `
    <section class="hero">
      <div class="hero-bg-image" style="background-image:url('Imagens/fundo.jpeg')"></div>
      <div class="hero-noise"></div>
      <div class="ink-splash purple"></div>
      <div class="ink-splash red"></div>
      <div class="hero-content">
        <span class="hero-kicker">${icon("fa-solid fa-scroll")} Site Oficial · Volume 1</span>
        <img src="Imagens/LogoOLsemfundo.png" alt="Oblitus Limbo" class="hero-logo">
        <p class="hero-subtitle">Um mundo onde sigilos despertam através da dor, onde impostores governam cidades inteiras, e onde o próprio abismo sente fome da parte que lhe falta.</p>
        <blockquote class="hero-quote">
          "Nós não somos definidos pelo que temos, mas pelo que nos falta.<br>
          E quando o próprio abismo sente fome de sua parte perdida,<br>
          não há lugar no mundo onde a luz possa se esconder."
        </blockquote>
        <a href="#/categoria/personagens" class="hero-cta">${icon("fa-solid fa-arrow-right-long")} Começar a explorar</a>
      </div>
    </section>

    <section class="reader-cta">
      <div class="container reader-cta-inner reveal">
        <div class="reader-cta-text">
          <span class="hero-kicker">${icon("fa-solid fa-fire")} Leitura completa</span>
          <h2>Leia Oblitus Limbo Online</h2>
          <p>Todo o Volume 1, capítulo por capítulo, direto no seu navegador — texto e ilustrações originais, sem downloads, sem PDF. É a história completa que deu origem a tudo que você encontra neste site.</p>
          <a href="#/livro" class="hero-cta reader-cta-btn">${icon("fa-solid fa-book-open")} Começar a ler</a>
        </div>
        <div class="reader-cta-icon">${icon("fa-solid fa-book-skull")}</div>
      </div>
    </section>

    <div class="container">
      <div class="section-heading reveal">
        <h1>Explore o Universo</h1>
        <p>Navegue pelo universo de Oblitus Limbo — de seus personagens fraturados aos lugares que os moldaram, dos sistemas de magia aos artefatos que carregam sua história.</p>
      </div>
      <div class="hub-grid reveal-stagger">
        ${hubCard("personagens", "fa-solid fa-user-ninja", "Personagens", "Oito almas arrastadas por uma mesma busca — e uma nona sombra, presente apenas em memória.")}
        ${hubCard("lugares", "fa-solid fa-map-location-dot", "Lugares", "De Vardun, a ferida aberta, a Hikari, a máscara de ordem que a esconde.")}
        ${hubCard("lore", "fa-solid fa-book-skull", "Lore & Magia", "Sigilos da Alma, o Ankiquilarke, e os mistérios que o Volume 1 deixa em aberto.")}
        ${hubCard("artefatos", "fa-solid fa-gem", "Artefatos", "Objetos, vozes e termos que tecem o mundo por baixo da trama principal.")}
      </div>
    </div>

    <section class="about-book">
      <div class="container about-book-grid">
        <div class="about-book-cover reveal">
          <img src="Imagens/livro.png" alt="Capa do livro Oblitus Limbo">
        </div>
        <div class="about-book-text reveal">
          <span class="eyebrow">${icon("fa-solid fa-dice-d20")} Sobre o livro</span>
          <h2>Uma jornada nascida em volta da mesa</h2>
          <p>O que começa com o rastro de um desaparecimento termina muito além do que a razão consegue explicar. Quando Viktor Vanshee, o mentor de Kiana, some sem deixar vestígios, ela e seus amigos se veem lançados em uma busca que rapidamente perde qualquer traço de normalidade. Em um mundo onde o Limbo não é apenas um conceito, mas uma sentença, eles precisarão enfrentar mistérios incompreendidos e perigos que distorcem a própria realidade.</p>
          <p>A jornada de Oblitus Limbo não nasceu no papel, mas ao redor de uma mesa, entre dados, risadas e a imaginação compartilhada de uma campanha de RPG. O que começou como uma aventura entre amigos evoluiu, ganhou camadas e se transformou neste universo de fantasia sombria.</p>
          <p class="about-book-tagline">Até onde você iria para resgatar quem te ensinou a sobreviver?</p>
        </div>
      </div>
    </section>

    <section class="about-author">
      <div class="container about-author-grid">
        <div class="about-author-text reveal">
          <span class="eyebrow">${icon("fa-solid fa-feather")} Sobre o autor</span>
          <h2>ByGuizo</h2>
          <p>Eu sou Guizo. Se você me perguntar o que eu faço, a resposta curta é: de tudo um pouco. Nasci no interior do RN e estudo no IFRN, onde me envolvi de cabeça na cultura Maker. Sou aquele cara que gosta de botar a mão na massa, seja programando, editando vídeos, fazendo design ou escrevendo histórias. E eu até tento desenhar também.</p>
          <p>Este livro é só mais um dos mundos da minha cabeça que decidi trazer à vida!</p>
          <p class="about-author-signature">— Abril, 2026</p>
          <a href="https://instagram.com/byguizo" target="_blank" rel="noopener noreferrer" class="author-insta-cta">
            ${icon("fa-brands fa-instagram")}
            <span>Siga <strong>@ByGuizo</strong> no Instagram</span>
            ${icon("fa-solid fa-arrow-right-long author-insta-arrow")}
          </a>
        </div>
        <a href="https://instagram.com/byguizo" target="_blank" rel="noopener noreferrer" class="about-author-photo reveal" aria-label="Instagram de ByGuizo">
          <img src="Imagens/ByGuizoAutor.jpeg" alt="Foto de ByGuizo, autor de Oblitus Limbo">
          <span class="about-author-photo-badge">${icon("fa-brands fa-instagram")}</span>
        </a>
      </div>
    </section>
  `;
}

function hubCard(route, iconCls, title, desc) {
  return `
    <a href="#/categoria/${route}" class="hub-card">
      <span class="hub-icon">${icon(iconCls)}</span>
      <h2>${title}</h2>
      <p>${desc}</p>
      <span class="hub-arrow">${icon("fa-solid fa-arrow-right")}</span>
    </a>
  `;
}

/* ---------------- CATEGORIA ---------------- */

function renderCategory(routeSlug) {
  const typeEntry = Object.entries(TYPE_META).find(([, meta]) => meta.route === routeSlug);
  if (!typeEntry) return renderNotFound();
  const [type, meta] = typeEntry;

  const items = Object.entries(ENTITIES)
    .filter(([, ent]) => ent.type === type)
    .sort((a, b) => a[1].nome.localeCompare(b[1].nome, "pt-BR"));

  if (type === "artefato") {
    const objetos = items.filter(([, e]) => e.subtype === "objeto");
    const termos = items.filter(([, e]) => e.subtype === "termo");
    return `
      <div class="container">
        <div class="section-heading reveal">
          <span class="hero-kicker">${icon(meta.icon)} Categoria</span>
          <h1>${meta.label}</h1>
          <p>Os objetos que os personagens carregam, e os termos que dão nome às forças que os cercam.</p>
        </div>
        <h2 class="subgroup-heading">${icon("fa-solid fa-box-archive")} Objetos</h2>
        <div class="category-grid reveal-stagger">
          ${objetos.map(([slug, ent]) => entityCard(slug, ent)).join("")}
        </div>
        <h2 class="subgroup-heading">${icon("fa-solid fa-spell-check")} Termos &amp; Conceitos</h2>
        <div class="category-grid reveal-stagger">
          ${termos.map(([slug, ent]) => entityCard(slug, ent)).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="container">
      <div class="section-heading reveal">
        <span class="hero-kicker">${icon(meta.icon)} Categoria</span>
        <h1>${meta.label}</h1>
      </div>
      <div class="category-grid reveal-stagger">
        ${items.map(([slug, ent]) => entityCard(slug, ent)).join("")}
      </div>
    </div>
  `;
}

function entityCard(slug, ent) {
  return `
    <a href="#/item/${slug}" class="entity-card">
      ${mediaBlock(ent)}
      <div class="card-body">
        <div class="card-text">
          <h3>${escapeHtml(ent.nome)}</h3>
          ${ent.epiteto ? `<span class="card-epithet">${plainText(ent.epiteto)}</span>` : ""}
          <p class="card-summary">${escapeHtml(ent.resumo || "")}</p>
        </div>
        ${ent.status ? statusBadge(ent, { plain: true }) : ""}
      </div>
    </a>
  `;
}

/* ---------------- DETALHE ---------------- */

function renderDetail(slug) {
  const ent = ENTITIES[slug];
  if (!ent) return renderNotFound();

  if (slug === "resumo-narrativo") return renderTimelinePage(slug, ent);

  const meta = TYPE_META[ent.type];
  const campos = ent.campos || {};

  /* Infobox lateral estilo Fandom: retrato + status + campos curtos (Vínculos/Aparência) */
  const infoboxRows = [];
  if (ent.epiteto) infoboxRows.push(["Título", plainText(ent.epiteto)]);
  if (campos["Vínculos"]) infoboxRows.push(["Vínculos", vinculosList(campos["Vínculos"])]);
  if (campos["Aparência"]) infoboxRows.push(["Aparência", linkify(campos["Aparência"], slug)]);
  if (campos["Sigilo manifestado"]) infoboxRows.push(["Sigilo", linkify(campos["Sigilo manifestado"], slug)]);

  const infobox = `
    <aside class="infobox reveal">
      ${mediaBlock(ent, { detail: true })}
      <div class="infobox-title">
        <h2>${escapeHtml(ent.nome)}</h2>
        ${ent.epiteto ? `<p class="infobox-epithet">${plainText(ent.epiteto)}</p>` : ""}
      </div>
      ${ent.status ? `<div class="infobox-status">${statusBadge(ent, { plain: true })}</div>` : ""}
      ${infoboxRows.map(([label, value]) => `
        <div class="infobox-row">
          <span class="infobox-label">${escapeHtml(label)}</span>
          <span class="infobox-value">${value}</span>
        </div>
      `).join("")}
    </aside>
  `;

  /* Corpo principal: só os campos que não foram para o infobox */
  const bodyFieldKeys = Object.keys(campos).filter(k => !["Vínculos", "Aparência", "Sigilo manifestado"].includes(k));
  const fieldsHtml = bodyFieldKeys
    .map(label => `
      <div class="field-section reveal">
        <h3>${icon(fieldIcon(label))} ${escapeHtml(label)}</h3>
        <p>${linkify(campos[label], slug)}</p>
      </div>
    `).join("");

  const tableHtml = ent.table ? renderLoreTable(ent.table, slug) : "";
  const table2Html = ent.table2 ? renderLoreTable(ent.table2, slug) : "";
  const calloutHtml = ent.callout ? `
    <div class="lore-quote reveal">
      <span class="quote-source">${icon("fa-solid fa-circle-question")} ${escapeHtml(ent.calloutTitle || "Nota")}</span>
      <p class="quote-text" style="font-style:normal;">${linkify(ent.callout, slug)}</p>
    </div>
  ` : "";

  const quotesHtml = (ent.quotes || []).map(q => `
    <div class="lore-quote reveal">
      <p class="quote-text">"${escapeHtml(q.text)}"</p>
      <span class="quote-source">— ${escapeHtml(q.source)}</span>
      ${q.context ? `<span class="quote-context">${escapeHtml(q.context)}</span>` : ""}
    </div>
  `).join("");

  const bannerBg = ent.imagem ? `<div class="detail-banner-bg" style="background-image:url('${ent.imagem}')"></div>` : "";

  return `
    <section class="detail-banner">
      ${bannerBg}
      <div class="detail-banner-scrim"></div>
      <div class="container">
        <div class="breadcrumb reveal">
          <a href="#/">Início</a> <span class="crumb-sep">${icon("fa-solid fa-angle-right")}</span> <a href="#/categoria/${meta.route}">${meta.label}</a> <span class="crumb-sep">${icon("fa-solid fa-angle-right")}</span> ${escapeHtml(ent.nome)}
        </div>
        <div class="detail-title reveal">
          <span class="eyebrow">${icon(meta.icon)} ${meta.singular}</span>
          <h1>${escapeHtml(ent.nome)}</h1>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="detail-layout">
        ${infobox}
        <div class="detail-body">
          ${fieldsHtml}
          ${tableHtml}
          ${table2Html}
          ${calloutHtml}
          ${quotesHtml ? `<div class="field-section reveal"><h3>${icon("fa-solid fa-quote-left")} Falas Marcantes</h3><div class="quote-stack">${quotesHtml}</div></div>` : ""}
        </div>
      </div>
    </div>
  `;
}

function fieldIcon(label) {
  const map = {
    "Biografia": "fa-solid fa-feather-pointed",
    "Feitos": "fa-solid fa-trophy",
    "Status atual": "fa-solid fa-heart-pulse",
    "Descrição": "fa-solid fa-feather-pointed",
    "Pontos de interesse": "fa-solid fa-map-pin",
    "Eventos notáveis": "fa-solid fa-bolt",
    "O segredo": "fa-solid fa-mask",
    "Ligações e influência": "fa-solid fa-link",
    "O loop espacial": "fa-solid fa-rotate",
    "O domínio interior": "fa-solid fa-dungeon",
    "Visão geral": "fa-solid fa-eye",
    "Instabilidade e ferramentas": "fa-solid fa-wand-sparkles",
    "Introdução": "fa-solid fa-book-open",
    "Natureza desconhecida": "fa-solid fa-circle-question",
    "O que o texto diz": "fa-solid fa-file-lines",
    "A pista da imagem — Gauss": "fa-solid fa-magnifying-glass"
  };
  return map[label] || "fa-solid fa-feather-pointed";
}

function renderLoreTable(table, slug) {
  return `
    <div class="field-section reveal">
      <h3>${icon("fa-solid fa-table-list")} ${escapeHtml(table.title)}</h3>
      <div class="table-scroll">
        <table class="lore-table">
          <thead><tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
          <tbody>
            ${table.rows.map(row => `<tr>${row.map(cell => `<td>${linkify(cell, slug)}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTimelinePage(slug, ent) {
  const meta = TYPE_META[ent.type];
  const posterHtml = ent.poster ? `
    <div class="narrative-poster reveal">
      <img src="${ent.poster}" alt="Pôster: Kiana x Krauser">
    </div>
  ` : "";

  const entriesHtml = ent.timeline.map(e => `
    <div class="timeline-entry reveal">
      <h3>${escapeHtml(e.title)}</h3>
      <p>${linkify(e.text, slug)}</p>
    </div>
  `).join("");

  return `
    <div class="container">
      <div class="breadcrumb reveal">
        <a href="#/">Início</a> <span class="crumb-sep">${icon("fa-solid fa-angle-right")}</span> <a href="#/categoria/${meta.route}">${meta.label}</a> <span class="crumb-sep">${icon("fa-solid fa-angle-right")}</span> ${escapeHtml(ent.nome)}
      </div>
      <div class="section-heading reveal">
        <span class="hero-kicker">${icon(meta.icon)} ${meta.singular}</span>
        <h1>${escapeHtml(ent.nome)}</h1>
        <p>${escapeHtml(ent.resumo)}</p>
      </div>
      ${posterHtml}
      <div class="detail-body">
        <div class="timeline">
          ${entriesHtml}
        </div>
      </div>
    </div>
  `;
}

/* ---------------- LIVRO (leitor online) ---------------- */

async function fetchCapitulos() {
  const res = await fetch("Livro/capitulos.json");
  if (!res.ok) throw new Error("capitulos.json não encontrado");
  return res.json();
}

function capituloCard(cap) {
  const media = cap.capa
    ? `<div class="card-media"><img src="Ilustracoes/${cap.capa}" alt="${escapeHtml(cap.titulo)}" loading="lazy"></div>`
    : `<div class="card-media"><div class="placeholder-art">${icon("fa-solid fa-book-open placeholder-glyph")}</div></div>`;
  return `
    <a href="#/livro/${cap.slug}" class="entity-card">
      ${media}
      <div class="card-body">
        <div class="card-text">
          <span class="card-epithet">${plainText(cap.numero)}</span>
          <h3>${escapeHtml(cap.titulo)}</h3>
          <p class="card-summary">${escapeHtml(cap.resumo || "")}</p>
        </div>
      </div>
    </a>
  `;
}

async function renderLivroIndex() {
  let capitulos;
  try {
    capitulos = await fetchCapitulos();
  } catch (e) {
    return renderNotFound();
  }

  return `
    <div class="container">
      <div class="breadcrumb reveal">
        <a href="#/">Início</a> <span class="crumb-sep">${icon("fa-solid fa-angle-right")}</span> Ler Online
      </div>
      <div class="section-heading reveal">
        <span class="hero-kicker">${icon("fa-solid fa-book-open")} Leitura Completa</span>
        <h1>Oblitus Limbo — Volume 1</h1>
        <p>Escolha um capítulo para começar a leitura. Todo o texto e as ilustrações originais do livro, direto aqui no site.</p>
      </div>
      <div class="category-grid reveal-stagger">
        ${capitulos.map(capituloCard).join("")}
      </div>
    </div>
  `;
}

async function renderCapitulo(slug) {
  let capitulos;
  try {
    capitulos = await fetchCapitulos();
  } catch (e) {
    return renderNotFound();
  }

  const index = capitulos.findIndex(c => c.slug === slug);
  if (index === -1) return renderNotFound();
  const cap = capitulos[index];
  const proximo = capitulos[index + 1];

  let textoHtml;
  try {
    const res = await fetch(`${cap.pasta}/texto.html`);
    if (!res.ok) throw new Error("texto.html não encontrado");
    textoHtml = await res.text();
  } catch (e) {
    return renderNotFound();
  }

  const corpoHtml = textoHtml.replace(/<!--\s*IMG:([^\s]+?)\s*-->/g, (match, filename) => {
    return `
      <div class="reader-illustration reveal">
        <img src="Ilustracoes/${filename}" alt="${escapeHtml(cap.titulo)}" oncontextmenu="return false" draggable="false">
      </div>
    `;
  });

  const proximoHtml = proximo ? `
    <a href="#/livro/${proximo.slug}" class="hero-cta reader-next-btn">
      Próximo: ${escapeHtml(proximo.titulo)} ${icon("fa-solid fa-arrow-right-long")}
    </a>
  ` : `
    <a href="#/livro" class="hero-cta reader-next-btn">
      ${icon("fa-solid fa-list")} Voltar ao índice
    </a>
  `;

  return `
    <div class="reader-topbar reveal">
      <a href="#/livro" class="reader-topbar-back">${icon("fa-solid fa-arrow-left")} Índice</a>
      <span class="reader-topbar-title">${plainText(cap.numero)} — ${escapeHtml(cap.titulo)}</span>
    </div>
    <div class="container reader-container">
      <div class="section-heading reveal">
        <span class="hero-kicker">${icon("fa-solid fa-book-open")} ${plainText(cap.numero)}</span>
        <h1>${escapeHtml(cap.titulo)}</h1>
      </div>
      <div class="reader-body">
        ${corpoHtml}
      </div>
      <div class="reader-next reveal">
        ${proximoHtml}
      </div>
    </div>
    ${readerToolbar()}
    ${readerWelcomeModal()}
    ${supportModal()}
    <button type="button" class="checkpoint-btn" aria-label="Salvar checkpoint de leitura">
      ${icon("fa-solid fa-bookmark")}
    </button>
  `;
}

/* Barra de ferramentas de leitura: deslize automático + modo foco. */
function readerToolbar() {
  return `
    <div class="reader-tools" role="toolbar" aria-label="Ferramentas de leitura">
      <div class="reader-tool-group">
        <button type="button" class="reader-tool-btn" data-tool="autoscroll" aria-pressed="false" title="Deslize automático">
          ${icon("fa-solid fa-arrows-down-to-line")}
          <span class="reader-tool-label">Deslize</span>
        </button>
        <div class="reader-speed" hidden>
          <button type="button" class="reader-speed-step" data-step="-1" aria-label="Diminuir velocidade">${icon("fa-solid fa-minus")}</button>
          <input type="range" class="reader-speed-range" min="1" max="10" step="1" value="4" aria-label="Velocidade do deslize">
          <button type="button" class="reader-speed-step" data-step="1" aria-label="Aumentar velocidade">${icon("fa-solid fa-plus")}</button>
          <span class="reader-speed-value" aria-hidden="true">4</span>
        </div>
      </div>
      <div class="reader-tool-group">
        <button type="button" class="reader-tool-btn" data-tool="fontsize" aria-expanded="false" title="Tamanho da fonte">
          ${icon("fa-solid fa-text-height")}
          <span class="reader-tool-label">Fonte</span>
        </button>
        <div class="reader-fontsize" hidden>
          <button type="button" class="reader-font-step" data-step="-1" aria-label="Diminuir fonte">${icon("fa-solid fa-minus")}</button>
          <span class="reader-font-preview" aria-hidden="true">A</span>
          <button type="button" class="reader-font-step" data-step="1" aria-label="Aumentar fonte">${icon("fa-solid fa-plus")}</button>
          <span class="reader-font-value" aria-hidden="true">100%</span>
        </div>
      </div>
      <div class="reader-tool-group">
        <button type="button" class="reader-tool-btn" data-tool="focus" aria-pressed="false" title="Modo foco">
          ${icon("fa-solid fa-circle-half-stroke")}
          <span class="reader-tool-label">Modo foco</span>
        </button>
        <button type="button" class="reader-tool-btn reader-invert-btn" data-tool="invert" aria-pressed="false" title="Inverter cores (fundo claro)" hidden>
          ${icon("fa-solid fa-adjust")}
          <span class="reader-tool-label">Inverter</span>
        </button>
      </div>
    </div>
  `;
}

/* Modal de boas-vindas: anuncia as novas funções de leitura. Só aparece uma vez por usuário. */
function readerWelcomeModal() {
  return `
    <div class="reader-modal-overlay" data-modal="welcome" hidden>
      <div class="reader-modal reader-modal-welcome" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title">
        <span class="reader-modal-accent" aria-hidden="true"></span>
        <button type="button" class="reader-modal-close" aria-label="Fechar">${icon("fa-solid fa-xmark")}</button>
        <span class="reader-modal-kicker">${icon("fa-solid fa-sparkles")} Novidades na leitura</span>
        <h2 id="welcome-modal-title">A leitura ficou melhor</h2>
        <ul class="reader-modal-features">
          <li>${icon("fa-solid fa-arrows-down-to-line")} <span><strong>Deslize automático</strong> — deixe a página rolar sozinha, com velocidade ajustável.</span></li>
          <li>${icon("fa-solid fa-text-height")} <span><strong>Tamanho da fonte</strong> — aumente ou diminua o texto, como num leitor de e-book.</span></li>
          <li>${icon("fa-solid fa-circle-half-stroke")} <span><strong>Modo foco</strong> — fundo liso e texto limpo, com opção de inverter (claro/escuro).</span></li>
        </ul>
        <p class="reader-modal-hint">Os controles ficam na barra flutuante no canto da tela. Boa leitura!</p>
        <button type="button" class="hero-cta reader-modal-cta" data-modal-dismiss="welcome">
          ${icon("fa-solid fa-book-open")} Começar a ler
        </button>
      </div>
    </div>
  `;
}

/* Modal de apoio: aparece ao salvar checkpoint, convidando a seguir @ByGuizo. */
function supportModal() {
  return `
    <div class="reader-modal-overlay" data-modal="support" hidden>
      <div class="reader-modal reader-modal-support" role="dialog" aria-modal="true" aria-labelledby="support-modal-title">
        <span class="reader-modal-accent" aria-hidden="true"></span>
        <button type="button" class="reader-modal-close" aria-label="Fechar">${icon("fa-solid fa-xmark")}</button>
        <div class="support-modal-seal">
          <span class="support-modal-ring" aria-hidden="true"></span>
          <span class="support-modal-glyph">${icon("fa-solid fa-heart")}</span>
        </div>
        <span class="reader-modal-kicker">${icon("fa-solid fa-bookmark")} Checkpoint salvo</span>
        <h2 id="support-modal-title">Espera, que tal apoiar o projeto?</h2>
        <p class="reader-modal-hint">Oblitus Limbo é um projeto independente feito com paixão. Seguir o autor no Instagram ajuda demais a manter tudo isso vivo e gratuito.</p>
        <a href="https://instagram.com/byguizo" target="_blank" rel="noopener noreferrer" class="support-modal-cta">
          ${icon("fa-brands fa-instagram")}
          <span class="support-modal-cta-text">Seguir <strong>@ByGuizo</strong></span>
          ${icon("fa-solid fa-arrow-right-long support-modal-cta-arrow")}
        </a>
        <button type="button" class="reader-modal-skip" data-modal-dismiss="support">Continuar lendo</button>
      </div>
    </div>
  `;
}

/* ---------------- 404 ---------------- */

function renderNotFound() {
  return `
    <div class="container">
      <div class="empty-state reveal">
        <h1>${icon("fa-solid fa-ghost")} Página perdida no Limbo</h1>
        <p>Este conteúdo não foi encontrado. <a href="#/" class="wiki-link">Voltar ao início</a>.</p>
      </div>
    </div>
  `;
}
