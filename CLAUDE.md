# Oblitus Limbo — Wiki Oficial

Wiki estática de fã/referência para o livro de dark fantasy "Oblitus Limbo" (ByGuizo). SPA em HTML/CSS/JS puro, sem build step, sem dependências instaladas — Font Awesome e Google Fonts são carregados via CDN direto no `index.html`.

## Como rodar

Não há `npm start`. Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático simples (ex: `npx serve .`, ou um servidor Node/Python mínimo). O roteamento é 100% hash-based (`#/`, `#/categoria/:tipo`, `#/item/:slug`), então funciona até em `file://`.

## Arquitetura de arquivos

- `index.html` — shell único: header/nav, `<main id="app">` (mount point da SPA), footer, tags de `<script>` na ordem de dependência.
- `js/data.js` — **toda** a base de conteúdo da wiki, num objeto `ENTITIES` indexado por slug. Arquivo maior do projeto; é puro dado, sem lógica.
- `js/linkify.js` — motor de interlink. Resolve marcações manuais `[[slug|Texto]]` em `<a>` reais, e faz um segundo passe de auto-linkify casando nomes conhecidos no texto solto.
- `js/render.js` — funções puras que geram HTML (string) para cada tipo de página: Home, Categoria, Detalhe.
- `js/router.js` — hash router simples, decide qual função de `render.js` chamar.
- `js/animations.js` — `IntersectionObserver` para fade-in-on-scroll, e a transição de rota (wipe diagonal).
- `js/main.js` — bootstrap mínimo (menu mobile).
- `css/theme.css` — tokens: cores, tipografia, glassmorphism, motion.
- `css/layout.css` — header/nav, grids, layout de página de detalhe (infobox + corpo).
- `css/components.css` — cards, hero, badges, tabelas, citações, placeholders.
- `css/animations.css` — keyframes e classes de animação.
- `Imagens/` — assets reais do livro (retratos de personagens, lugares, capa, logo). Nomes mapeados manualmente em `ENTITIES[slug].imagem`.

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

## Verificação antes de considerar uma mudança visual pronta

Regressões de CSS/animação nesta base já passaram despercebidas por leitura de código sozinha (cascata e overrides de `@keyframes` são não-óbvios). Antes de dizer que uma mudança de estilo está pronta:

1. Rodar o site (servidor estático local) e inspecionar o **valor computado real** da propriedade no elemento afetado — não confiar só na leitura do CSS-fonte.
2. Tirar um screenshot real da página (ex: via Playwright) em vez de assumir pelo código.
3. Ao editar `entityCard()` ou qualquer lugar que gere `<a>` aninhado em potencial, checar que a contagem de `<a>` no HTML gerado bate com o esperado (não há dois `<a>` um dentro do outro).
