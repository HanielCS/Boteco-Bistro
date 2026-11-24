/**
 * Cardápio Digital Interativo com Busca, Filtro por Categoria e Simulador de Comanda
 */
document.addEventListener("DOMContentLoaded", () => {
  const data = window.BOTECO_DATA;
  if (!data) return;

  const categoriesContainer = document.getElementById("menuCategories");
  const pillsContainer = document.getElementById("categoryPills");
  const searchInput = document.getElementById("menuSearch");
  const orderList = document.getElementById("orderList");
  const orderTotalEl = document.getElementById("orderTotal");
  const orderCountEl = document.getElementById("orderCount");
  const sendOrderWhatsappBtn = document.getElementById("sendOrderWhatsapp");
  const clearOrderBtn = document.getElementById("clearOrder");

  let activeCategory = "all";
  let searchQuery = "";
  const cart = new Map();

  const formatBRL = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  // Cria mapa rápido de itens por ID
  const itemLookup = new Map();
  data.categories.forEach((cat) => {
    cat.items.forEach((item) => itemLookup.set(item.id, item));
  });

  // Renderiza abas de categorias
  function renderPills() {
    if (!pillsContainer) return;
    const allBtn = `<button type="button" class="pill-btn ${activeCategory === "all" ? "is-active" : ""}" data-cat="all">Todos os Itens</button>`;
    const catBtns = data.categories
      .map(
        (cat) =>
          `<button type="button" class="pill-btn ${activeCategory === cat.id ? "is-active" : ""}" data-cat="${cat.id}">${cat.name}</button>`
      )
      .join("");
    pillsContainer.innerHTML = allBtn + catBtns;
  }

  // Renderiza categorias e pratos filtrados
  function renderMenu() {
    if (!categoriesContainer) return;
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredCategories = data.categories
      .filter((cat) => activeCategory === "all" || cat.id === activeCategory)
      .map((cat) => {
        const matchedItems = cat.items.filter((item) => {
          if (!normalizedQuery) return true;
          return (
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
          );
        });
        return { ...cat, items: matchedItems };
      })
      .filter((cat) => cat.items.length > 0);

    if (filteredCategories.length === 0) {
      categoriesContainer.innerHTML = `
        <div class="aside-box" style="text-align:center; padding: 48px 24px;">
          <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; color: var(--brand-amber); margin-bottom: 12px;"></i>
          <h3>Nenhum item encontrado</h3>
          <p style="color: var(--text-secondary); margin-top: 6px;">Tente buscar por outro termo como "Camarão", "Carne do Sol", "Moqueca" ou "Roska".</p>
        </div>
      `;
      return;
    }

    categoriesContainer.innerHTML = filteredCategories
      .map(
        (cat) => `
        <section class="menu-category-block" aria-labelledby="cat-${cat.id}">
          <div class="menu-category-header">
            <h2 class="menu-category-title" id="cat-${cat.id}">${cat.name}</h2>
            <span class="menu-category-count">${cat.items.length} ${cat.items.length === 1 ? "opção" : "opções"}</span>
          </div>
          <div class="menu-items-grid">
            ${cat.items
              .map(
                (item) => `
              <article class="menu-item-card">
                <div>
                  <h3 class="menu-item-name">${item.name}</h3>
                  <p class="menu-item-desc">${item.description}</p>
                </div>
                <div class="menu-item-side">
                  <span class="menu-item-price">${formatBRL(item.price)}</span>
                  <button type="button" class="btn btn-outline btn-sm add-to-order" data-id="${item.id}" aria-label="Adicionar ${item.name} à comanda">
                    <i class="fa-solid fa-plus" aria-hidden="true"></i> Adicionar
                  </button>
                </div>
              </article>
            `
              )
              .join("")}
          </div>
        </section>
      `
      )
      .join("");
  }

  // Atualiza painel da comanda / simulador
  function renderOrder() {
    if (!orderList || !orderTotalEl || !orderCountEl) return;

    let totalQty = 0;
    let totalPrice = 0;

    if (cart.size === 0) {
      orderList.innerHTML = `<p class="order-empty">Adicione pratos ou bebidas do cardápio para calcular sua estimativa ou enviar pelo WhatsApp.</p>`;
      orderTotalEl.textContent = formatBRL(0);
      orderCountEl.textContent = "0";
      if (sendOrderWhatsappBtn) sendOrderWhatsappBtn.disabled = true;
      return;
    }

    const rows = [];
    cart.forEach((qty, id) => {
      const item = itemLookup.get(id);
      if (!item) return;
      totalQty += qty;
      totalPrice += item.price * qty;
      rows.push(`
        <div class="order-row">
          <div class="order-row-info">
            <strong>${item.name}</strong>
            <span>${qty}x ${formatBRL(item.price)}</span>
          </div>
          <div class="qty-controls">
            <button type="button" class="qty-btn" data-action="dec" data-id="${id}" aria-label="Diminuir quantidade">-</button>
            <span>${qty}</span>
            <button type="button" class="qty-btn" data-action="inc" data-id="${id}" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
      `);
    });

    orderList.innerHTML = rows.join("");
    orderTotalEl.textContent = formatBRL(totalPrice);
    orderCountEl.textContent = String(totalQty);
    if (sendOrderWhatsappBtn) sendOrderWhatsappBtn.disabled = false;
  }

  // Eventos de filtro e busca
  pillsContainer?.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderPills();
    renderMenu();
  });

  searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  // Eventos de adicionar / remover itens da comanda
  categoriesContainer?.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-order");
    if (!btn) return;
    const id = btn.dataset.id;
    cart.set(id, (cart.get(id) || 0) + 1);
    renderOrder();
    const item = itemLookup.get(id);
    if (item && window.showToast) {
      window.showToast(`"${item.name}" adicionado à sua comanda.`);
    }
  });

  orderList?.addEventListener("click", (e) => {
    const btn = e.target.closest(".qty-btn");
    if (!btn) return;
    const { id, action } = btn.dataset;
    const current = cart.get(id) || 0;
    if (action === "inc") {
      cart.set(id, current + 1);
    } else if (action === "dec") {
      if (current <= 1) cart.delete(id);
      else cart.set(id, current - 1);
    }
    renderOrder();
  });

  clearOrderBtn?.addEventListener("click", () => {
    cart.clear();
    renderOrder();
  });

  // Envio do pedido estimado via WhatsApp oficial
  sendOrderWhatsappBtn?.addEventListener("click", () => {
    if (cart.size === 0) return;
    let total = 0;
    const lines = ["*Olá, Boteco Bistrô! Gostaria de fazer o seguinte pedido:*", ""];

    cart.forEach((qty, id) => {
      const item = itemLookup.get(id);
      if (!item) return;
      const subtotal = item.price * qty;
      total += subtotal;
      lines.push(`• ${qty}x ${item.name} — ${formatBRL(subtotal)}`);
    });

    lines.push("", `*Total Estimado:* ${formatBRL(total)}`);
    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${data.restaurant.whatsappNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // Modal do Cardápio Original Impresso (imagens/cardapio.jpg)
  const flyerModal = document.getElementById("flyerModal");
  const openFlyerBtn = document.getElementById("openOriginalFlyer");
  const closeFlyerBtn = document.getElementById("closeFlyerModal");

  openFlyerBtn?.addEventListener("click", () => flyerModal?.classList.add("is-open"));
  closeFlyerBtn?.addEventListener("click", () => flyerModal?.classList.remove("is-open"));
  flyerModal?.addEventListener("click", (e) => {
    if (e.target === flyerModal) flyerModal.classList.remove("is-open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") flyerModal?.classList.remove("is-open");
  });

  renderPills();
  renderMenu();
  renderOrder();
});
