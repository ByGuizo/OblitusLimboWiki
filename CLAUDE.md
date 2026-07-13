# Oblitus Limbo — Site Oficial

**Site oficial** do livro de dark fantasy "Oblitus Limbo" (ByGuizo) — não é uma wiki de fã. Trata o site como a fonte oficial: leitura completa do livro online + enciclopédia do universo. SPA em HTML/CSS/JS puro, sem build step, sem dependências instaladas — Font Awesome e Google Fonts são carregados via CDN direto no `index.html`.

Ao escrever textos de UI ou conteúdo, referir-se ao site como "site oficial" (não "wiki"), e ao material fonte como "o livro" (não "o texto"/"o manuscrito"). A classe CSS `wiki-link` é só um nome de seletor interno — não é texto visível e não precisa ser renomeada.

## Como rodar

Não há `npm start`. Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático simples (ex: `npx serve .`, ou um servidor Node/Python mínimo). O roteamento é 100% hash-based (`#/`, `#/categoria/:tipo`, `#/item/:slug`, `#/livro`, `#/livro/:slug`).

**Atenção**: as páginas do leitor de livro (`#/livro`, `#/livro/:slug`) fazem `fetch()` de `Livro/capitulos.json` e `texto.html` — isso **não funciona abrindo `index.html` via `file://`** (CORS bloqueia fetch de arquivo local). Para testar o leitor, é obrigatório servir a pasta com um servidor HTTP local.

## Arquitetura de arquivos

- `index.html` — shell único: header/nav, `<main id="app">` (mount point da SPA), footer, tags de `<script>` na ordem de dependência.
- `js/data.js` — **toda** a base de conteúdo do site, num objeto `ENTITIES` indexado por slug. Arquivo maior do projeto; é puro dado, sem lógica. O campo `Vínculos` de personagens é um **array** de `{ slug, nome, relacao }` (não string) — renderizado como lista objetiva pelo `vinculosList()` em `render.js`; use `slug: null` quando o vínculo não tem entidade própria (ex: "Layla", "o pai").
- `js/linkify.js` — motor de interlink. Resolve marcações manuais `[[slug|Texto]]` em `<a>` reais, e faz um segundo passe de auto-linkify casando nomes conhecidos no texto solto.
- `js/render.js` — funções puras que geram HTML (string) para cada tipo de página: Home, Categoria, Detalhe, índice/capítulo do leitor, e os modais/toolbar do leitor.
- `js/router.js` — hash router simples, decide qual função de `render.js` chamar. `resolveRenderFn` pode retornar closures `async` (usado pelas rotas do leitor) — `transitionRoute` sempre dá `await` no resultado, então funções de render síncronas e assíncronas coexistem sem problema. Após renderizar um capítulo, chama `initReaderCheckpoint` + `initReaderTools`; a cada troca de rota chama `teardownReaderTools` (limpa classes globais do modo foco).
- `js/checkpoint.js` — salva/restaura o parágrafo onde o usuário parou, por capítulo (localStorage). Ao salvar, dispara o modal de apoio (`openReaderModal(appEl, "support")`).
- `js/reader.js` — ferramentas de leitura do capítulo: deslize automático (com velocidade), zoom de fonte, modo foco (+ inversão), e os dois modais (boas-vindas/novidades e apoio). Ver seção "Ferramentas de leitura" abaixo.
- `js/animations.js` — `IntersectionObserver` para fade-in-on-scroll, e a transição de rota (wipe diagonal).
- `js/main.js` — bootstrap mínimo (menu mobile).
- `css/theme.css` — tokens: cores, tipografia, glassmorphism, motion.
- `css/layout.css` — header/nav, grids, layout de página de detalhe (infobox + corpo).
- `css/components.css` — cards, hero, badges, tabelas, citações, placeholders, leitor de livro (`.reader-*`).
- `css/animations.css` — keyframes e classes de animação.
- `Imagens/` — assets reais do livro (retratos de personagens, lugares, capa, logo). Nomes mapeados manualmente em `ENTITIES[slug].imagem`.
- `Ilustracoes/` — ilustrações de cena extraídas dos capítulos do livro (ver seção "Leitor de livro" abaixo). Separada de `Imagens/` de propósito.
- `Livro/` — dados do leitor de livro: `capitulos.json` (manifesto) + uma pasta por capítulo com `texto.html`. Publicada normalmente (não é `.gitignore`d), servida via `fetch()` pelo leitor.

## Direção estética (não mudar sem pedir)

Tema **preto + roxo** como base (dark fantasy do livro), **vermelho** como acento de destaque pontual — nunca dominante. Skin visual inspirada em **Persona 5** aplicada sobre uma estrutura de navegação prática de **wiki tipo Fandom**:

- Tipografia condensada (Bebas Neue para display, Oswald para headings/UI) com contorno grosso em títulos grandes.
- Recortes diagonais (`clip-path`) em badges, botões, cards e banners — não usar cantos totalmente retos nesses elementos.
- Bordas grossas pretas ("ink border") + contorno roxo fino interno nos cards, estilo página de menu de RPG.
- Página de detalhe = infobox lateral fixa (retrato + status + campos curtos) ao lado do corpo principal com as seções longas (Biografia, Feitos, etc.) — não voltar para um layout de "hero + tudo empilhado".
- Ícones **Font Awesome** em vez de emojis em toda a UI (nav, badges de status, cabeçalhos de campo).
- Animações "agressivas mas fluidas": wipe diagonal de 5 fatias na troca de rota, entradas com leve overshoot/rotação, microinterações de hover — mas sempre rápidas (~250ms por etapa) para não atrapalhar navegação repetida. A primeira renderização da página pula a transição de wipe (só dispara em trocas de rota subsequentes).

## Convenções de conteúdo (`js/data.js`)

Cada entidade em `ENTITIES` tem `type` (`personagem` | `lugar` | `lore` | `artefato`), `imagem` (caminho ou `null`), `campos` (objeto label → texto). Dentro de qualquer texto, use `[[slug]]` ou `[[slug|Texto exibido]]` para garantir um link para outra entidade.

**Regra crítica**: nunca use `linkify()` dentro de um elemento que já é ele mesmo um `<a>` clicável (ex: os cards de grid em `entityCard()`). HTML não permite `<a>` aninhado — o navegador conserta sozinho fechando a tag mais cedo, o que quebra a estrutura do card inteiro (texto vaza pra fora da imagem, alturas ficam erradas). Para esses contextos, use `plainText()` (resolve os `[[slug|Texto]]` para texto puro, sem gerar link). Isso já causou um bug real nesta base de código — não reintroduzir.

**Imagens paisagem**: todos os retratos são verticais (`aspect-ratio: 3/4` com `object-fit: cover`), exceto artes conceituais largas. Se uma imagem nova não for um retrato vertical, marque `imagemWide: true` na entidade para usar `object-fit: contain` na página de detalhe (senão a imagem é cortada).

## Armadilha de CSS já descoberta: `filter` em `@keyframes`

Se uma animação (`@keyframes`) define a propriedade `filter` em qualquer estágio, ela **sobrescreve totalmente** qualquer `filter` estático definido na regra normal do elemento enquanto a animação está aplicada — não existe merge entre os dois. Isso já causou um bug silencioso (um `invert()/contrast()` no CSS "normal" simplesmente não aparecia, sem erro nenhum, porque um `@keyframes` de entrada noutro arquivo também mexia em `filter` no mesmo elemento).

Se um elemento precisa de um filtro estático permanente (ex: logo com `invert(1) contrast(300%)`) **e** também tem uma animação de entrada que anima `filter` (ex: um `blur()` que vai a zero), inclua o filtro completo em **todos** os estágios do keyframe, não só a parte que muda.

## Leitor de livro (`#/livro`, `#/livro/:slug`)

O site tem um leitor de capítulos embutido, sem opção de download — é uma das funcionalidades principais (destacada na home logo abaixo do hero, seção `.reader-cta`), não um item secundário de menu.

### Estrutura de dados

`Livro/capitulos.json` é o manifesto público — um array de objetos `{ slug, pasta, numero, titulo, resumo }`, um por capítulo/seção, **na ordem em que devem aparecer no índice e no botão "Próximo"**. `pasta` aponta para `Livro/<Nome>/`, que contém um único `texto.html` com a transcrição completa daquela seção.

`texto.html` é HTML puro: parágrafos em `<p>`, diálogos com travessão (`—`) e itálico (`<em>`) preservados como no original. Onde uma ilustração deve aparecer, um comentário HTML `<!-- IMG:NomeDoArquivo.jpg -->` marca a posição exata — `renderCapitulo()` (`js/render.js`) resolve esses marcadores via regex, trocando cada um por uma tag `<img>` real apontando para `Ilustracoes/NomeDoArquivo.jpg`, com os atributos de proteção leve (`oncontextmenu="return false" draggable="false"`, mais `pointer-events`/`-webkit-user-drag`/`user-select` no CSS de `.reader-illustration img`).

### Fluxo de processamento de um capítulo (material fonte → site)

O material fonte de cada capítulo é uma pasta temporária com fotos/scans reais das páginas do manuscrito, **nunca commitada nem servida pelo site**:
- `Oblitus Limbo-Padrão_[N].jpg` (nota: nome real tem **espaço**, não underscore, apesar do padrão sugerir `Oblitus_Limbo-Padrão`) — página com texto a transcrever, em ordem de página física.
- `[NomeIlustração][N].jpg` (sem separador entre nome e número, ex: `KianaEViktor16.jpg`) — arte de cena sem texto, na posição de página `N`.

Passos ao processar um capítulo:
1. Ler as imagens `Oblitus Limbo-Padrão_*.jpg` em ordem numérica e transcrever para `texto.html`: cada parágrafo do livro vira um `<p>`; se uma página termina no meio de uma frase/fala, a próxima página continua o **mesmo** `<p>` (não quebrar por causa da virada de página física); ignorar cabeçalho/rodapé/decoração da página escaneada — não fazem parte do texto do livro; não incluir `<h1>`/título no `texto.html` (o título vem de `capitulos.json`).
2. Inserir `<!-- IMG:NomeIlustração[N].jpg -->` no ponto do texto correspondente à posição de página da ilustração.
3. Copiar (não mover ainda) as imagens de ilustração — só elas, nunca as `Padrão_*` — para `Ilustracoes/` na raiz do projeto.
4. **Deletar fisicamente** as imagens `Oblitus Limbo-Padrão_*.jpg` da pasta de origem — elas nunca são commitadas nem referenciadas pelo site. `Livro/` no repositório contém só `texto.html` por capítulo, nunca as páginas brutas.
5. Adicionar/atualizar a entrada correspondente em `Livro/capitulos.json`.

### Regras que já se aplicam aqui

- Cards do índice de capítulos (`capituloCard()` em `render.js`) seguem a mesma regra de `plainText()` vs `linkify()` do resto do site — o card inteiro é um `<a>`, então nunca usar `linkify()` no resumo/número.
- `renderLivroIndex()` e `renderCapitulo()` são `async` (fazem `fetch`) — isso só funciona porque `transitionRoute` em `js/animations.js` dá `await` no retorno de `renderFn()`. Qualquer nova função de render que precise de I/O assíncrono pode seguir o mesmo padrão sem alterar mais nada no router/animations.
- Ilustração de abertura de capítulo (a primeira imagem, geralmente correspondente à posição de página logo após a capa): o marcador `<!-- IMG:... -->` vai **antes do primeiro `<p>`** do `texto.html`, não inserido no meio do primeiro bloco de texto — mesmo que, no material fonte, a página física da ilustração apareça só depois de algumas páginas de texto já lidas. Já houve um caso real (Capítulo 8, `kiana189.jpg`) em que a imagem de abertura foi posicionada no meio do capítulo por engano; a posição correta é sempre o início.

### Status de transcrição

Todo o Volume 1 (Prólogo, Capítulos 1–9, Epílogo, Créditos) já foi transcrito e verificado integralmente, página a página, contra o material fonte original. Não há mais material bruto pendente de processamento — as pastas de scans (`Oblitus Limbo-Padrão_*.jpg`) usadas na verificação foram descartadas do disco após a conferência, conforme o passo 4 do fluxo acima.

### Ferramentas de leitura (`js/reader.js`)

A página de capítulo tem uma toolbar flutuante (`.reader-tools`, canto inferior esquerdo) montada por `readerToolbar()` em `render.js` e ligada por `initReaderTools(appEl, slug)` (chamada pelo router). Preferências persistem em `localStorage` sob `ol_reader_prefs` (`{ focus, invert, fontLevel }`); o modal de novidades usa a flag separada `ol_reader_welcome_seen`.

- **Responsividade da toolbar**: no **desktop** a toolbar fica sempre visível. No **mobile** — largura pequena (≤720px) **ou** paisagem de pouca altura (`(orientation: landscape) and (max-height: 500px)`) — ela começa recolhida (`opacity:0`/`pointer-events:none`) atrás de um FAB de engrenagem (`.reader-fab`); tocar o FAB alterna a classe `.is-expanded` no `.reader-tools` (os grupos sobem com stagger) e gira a engrenagem 135°. Só o CSS decide onde o FAB aparece — o HTML e o wiring JS são os mesmos nos dois casos. O handler de "clicar fora para fechar" é global (`document`), então é guardado em `readerOutsideClickHandler` e **removido em `teardownReaderTools()`** para não acumular um listener por capítulo visitado. O mesmo par de condições (retrato estreito **ou** paisagem baixa) também troca o header do site para o menu hambúrguer (ver `css/layout.css`), senão em landscape a nav completa comeria ~30% da altura.

- **Deslize automático**: `createAutoScroller()` avança uma **posição absoluta** (`targetY`) por `dt` real e chama `window.scrollTo`, **não** `scrollBy` relativo. Motivo (armadilha já resolvida): o reset.css define `html { scroll-behavior: smooth }`; com `scrollBy` incremental, cada passo dispara uma animação suave que compete com o próximo frame e deixa a velocidade errática. O scroller força `scroll-behavior: auto` no `<html>` enquanto roda (e restaura no `stop()`/`teardownReaderTools()`). **O deslize NÃO é interrompido por scroll manual** — de propósito: o usuário pode subir/descer com o dedo/roda e o scroller detecta a divergência entre `window.scrollY` e o último valor aplicado, re-sincroniza `targetY` e continua de onde ele soltou. Para desligar, só o botão de deslize.
- **Zoom de fonte** (estilo Kindle): níveis discretos em `READER_FONT_LEVELS` (0.88–1.5), aplicados como o multiplicador CSS var `--reader-font-scale` **inline no `.reader-body`**. **Regra crítica**: o scale só é aplicado a `font-size` de elementos de texto (`.reader-body p`, `.reader-legend p`) via `calc(base * var(--reader-font-scale))` — **nunca** às ilustrações (`.reader-illustration img` tem `width: 100%` fixo). Escalar a fonte não pode mudar o tamanho das imagens. Usar sempre `calc()` sobre a var, não reescrever a cadeia de herança. `em`/`strong` herdam o `font-size` do `p`, então não precisam de regra própria.
- **Modo foco (+ inversão)**: aplica as classes `reader-focus-mode` / `reader-focus-invert` no `<body>` (fundo preto+texto branco, ou fundo claro+texto preto). Por serem globais no `<body>`, `teardownReaderTools()` (chamado no início de `router()`) **precisa** removê-las ao sair da rota de capítulo, senão vazam para outras páginas. O botão **Inverter** só existe com o modo foco ligado (atributo `hidden`, alternado em `applyFocus`) e seu ícone/rótulo trocam conforme o estado: sol + "Fundo claro" (fundo escuro atual → clique clareia), lua + "Fundo escuro" (fundo claro atual → clique escurece). **Armadilha**: `.reader-tool-btn { display: inline-flex }` venceria o `display:none` implícito do atributo `[hidden]` — precisa da regra explícita `.reader-tool-btn[hidden] { display: none }`, senão o botão aparece mesmo escondido.

Modais (`.reader-modal-overlay`, estilo compartilhado): **leitor** — boas-vindas/novidades (uma vez por usuário) e apoio (ao salvar checkpoint, convida a seguir `@ByGuizo`); **home** — boas-vindas ao site (`data-modal="home-welcome"`, montado por `homeWelcomeModal()` no fim do `renderHome`, inicializado por `initHomeWelcome(appEl)` chamado no router quando `route.name === "home"`, só na primeira visita — flag `ol_home_welcome_seen`). Modais novos reutilizam as classes `.reader-modal-*` e as funções genéricas `wireModal`/`openReaderModal`/`closeReaderModal` de `reader.js`. **Armadilha de CSS já resolvida**: o card do modal usa `clip-path` diagonal; um `outline` (retangular) não segue o clip-path e vaza como uma barra fantasma na diagonal, que ainda pisca a cada repaint das animações internas. Usar `box-shadow: inset` para a moldura interna (segue o clip-path), **nunca** `outline`, em qualquer elemento com `clip-path`.

Status de personagem (`ENTITIES[slug].status`) é sempre uma de três chaves visíveis — `alive`/`dead`/`unknown` — com label objetivo ("Vivo"/"Morto"/"Desconhecido", sem detalhes). A cor vem de `--status-*` em `theme.css`: **`dead` é vermelho** (`--status-dead`), `alive` verde, `unknown` roxo. (A chave `destroyed` ainda existe no CSS/`STATUS_META` mas não é usada por nenhuma entidade.)

O botão de Instagram (`@ByGuizo` → `instagram.com/byguizo`) aparece em três lugares, todos com o mesmo gradiente da marca: seção "Sobre o autor" na home (botão + foto clicável com selo), e o modal de apoio do leitor.

## Verificação antes de considerar uma mudança visual pronta

Regressões de CSS/animação nesta base já passaram despercebidas por leitura de código sozinha (cascata e overrides de `@keyframes` são não-óbvios). Antes de dizer que uma mudança de estilo está pronta:

1. Rodar o site (servidor estático local) e inspecionar o **valor computado real** da propriedade no elemento afetado — não confiar só na leitura do CSS-fonte.
2. Tirar um screenshot real da página (ex: via Playwright) em vez de assumir pelo código.
3. Ao editar `entityCard()` ou qualquer lugar que gere `<a>` aninhado em potencial, checar que a contagem de `<a>` no HTML gerado bate com o esperado (não há dois `<a>` um dentro do outro).
