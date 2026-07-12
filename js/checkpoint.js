/* Sistema de checkpoint de leitura: salva/restaura o parágrafo onde o usuário parou, por capítulo. */

const CHECKPOINT_STORAGE_KEY = "ol_checkpoints";

function readCheckpointStore() {
  try {
    return JSON.parse(localStorage.getItem(CHECKPOINT_STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function writeCheckpointStore(store) {
  try {
    localStorage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(store));
  } catch (e) {
    /* localStorage indisponível (modo privado, quota) — checkpoint vira no-op silencioso. */
  }
}

function getCheckpoint(slug) {
  return readCheckpointStore()[slug];
}

function saveCheckpoint(slug, blockIndex) {
  const store = readCheckpointStore();
  store[slug] = blockIndex;
  writeCheckpointStore(store);
}

function clearCheckpoint(slug) {
  const store = readCheckpointStore();
  delete store[slug];
  writeCheckpointStore(store);
}

/* Bloco de nível superior do corpo do capítulo mais próximo do topo da viewport. */
function findTopmostVisibleBlock(blocks) {
  let closest = null;
  let closestDistance = Infinity;
  for (const block of blocks) {
    const rect = block.getBoundingClientRect();
    const distance = Math.abs(rect.top - 96);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = block;
    }
  }
  return closest;
}

function flashBlock(block) {
  block.classList.remove("checkpoint-flash");
  void block.offsetWidth;
  block.classList.add("checkpoint-flash");
}

function updateCheckpointButton(btn, hasCheckpoint) {
  btn.classList.toggle("has-checkpoint", hasCheckpoint);
  btn.setAttribute(
    "aria-label",
    hasCheckpoint ? "Checkpoint salvo — clique para atualizar" : "Salvar checkpoint de leitura"
  );
  btn.title = hasCheckpoint ? "Checkpoint salvo aqui — clique para atualizar" : "Marcar onde parei";
}

/* Chamada pelo router depois que a página do capítulo é inserida no DOM. */
function initReaderCheckpoint(appEl, slug) {
  const body = appEl.querySelector(".reader-body");
  const btn = appEl.querySelector(".checkpoint-btn");
  if (!body || !btn) return;

  const blocks = Array.from(body.children);
  blocks.forEach((block, i) => block.setAttribute("data-block", i));

  const saved = getCheckpoint(slug);
  updateCheckpointButton(btn, saved != null && !!blocks[saved]);

  if (saved != null && blocks[saved]) {
    requestAnimationFrame(() => {
      blocks[saved].scrollIntoView({ behavior: "instant", block: "start" });
      window.scrollBy(0, -88);
      flashBlock(blocks[saved]);
    });
  }

  btn.addEventListener("click", () => {
    const target = findTopmostVisibleBlock(blocks);
    if (!target) return;
    const index = Number(target.getAttribute("data-block"));
    saveCheckpoint(slug, index);
    updateCheckpointButton(btn, true);
    flashBlock(target);
    btn.classList.add("checkpoint-pulse");
    setTimeout(() => btn.classList.remove("checkpoint-pulse"), 500);
    // Convida o leitor a apoiar o projeto ao marcar onde parou.
    if (typeof openReaderModal === "function") {
      setTimeout(() => openReaderModal(appEl, "support"), 260);
    }
  });
}
