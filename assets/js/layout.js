/**
 * Comportamentos globais de navegação, aviso de primeira visita, acessibilidade, ano dinâmico e toast
 */
document.addEventListener("DOMContentLoaded", () => {
  // 0. Aviso institucional na 1ª visita ao projeto
  initFirstVisitDisclaimer();

  // 1. Menu Mobile (Hamburger)
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
        : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    });

    // Fecha menu ao clicar em um link no mobile
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
      });
    });
  }

  // 2. Scroll suave para âncora #contato sem quebrar caso não exista
  document.querySelectorAll('a[href="#contato"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.getElementById("contato");
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Atualiza ano do rodapé dinamicamente
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});

/**
 * Exibe modal informativo apenas no primeiro acesso ao site (persistido via localStorage)
 */
function initFirstVisitDisclaimer() {
  const STORAGE_KEY = "boteco_bistro_study_disclaimer_v1";

  let alreadyAccepted = false;
  try {
    alreadyAccepted = window.localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch (_) {
    alreadyAccepted = false;
  }

  if (alreadyAccepted) return;

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop is-open";
  backdrop.id = "studyDisclaimerModal";
  backdrop.setAttribute("role", "dialog");
  backdrop.setAttribute("aria-modal", "true");
  backdrop.setAttribute("aria-labelledby", "studyDisclaimerTitle");

  backdrop.innerHTML = `
    <div class="modal-dialog disclaimer-dialog">
      <div class="disclaimer-header">
        <span class="disclaimer-icon" aria-hidden="true">
          <i class="fa-solid fa-graduation-cap"></i>
        </span>
        <div>
          <span class="disclaimer-eyebrow">Aviso Institucional • Estudo Prático</span>
          <h2 class="disclaimer-title" id="studyDisclaimerTitle">Projeto Acadêmico e de Portfólio</h2>
        </div>
      </div>

      <div class="disclaimer-body">
        <p>
          Bem-vindo! Este website foi desenvolvido exclusivamente como um <strong>projeto de estudo prático e demonstração técnica</strong> em desenvolvimento front-end.
        </p>
        <div class="disclaimer-callout">
          <strong>Isenção de Vínculo:</strong> Esta aplicação <strong>não possui qualquer vínculo oficial, comercial ou representação institucional</strong> com o estabelecimento <em>Boteco Bistrô</em>. Os nomes, imagens, preços e informações apresentados são utilizados estritamente para fins educacionais e ilustrativos.
        </div>
      </div>

      <div class="disclaimer-footer">
        <button type="button" class="btn btn-primary" id="acceptStudyDisclaimer">
          <i class="fa-solid fa-check" aria-hidden="true"></i> Compreendi e acessar o projeto
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  const acceptBtn = document.getElementById("acceptStudyDisclaimer");
  acceptBtn?.focus();

  acceptBtn?.addEventListener("click", () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch (_) {
      // Ignora restrições de armazenamento em ambientes isolados
    }
    document.body.style.overflow = previousOverflow;
    backdrop.classList.remove("is-open");
    backdrop.remove();
  });
}

/**
 * Exibe notificação discreta (Toast) reutilizável em qualquer página
 */
window.showToast = function (message, iconClass = "fa-circle-check") {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid ${iconClass}" aria-hidden="true"></i><span>${message}</span>`;
  toast.classList.add("is-visible");

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3400);
};
