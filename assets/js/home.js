/**
 * Carrossel acessível de promoções + Grid de destaques com Lightbox na Home
 */
document.addEventListener("DOMContentLoaded", () => {
  const promos = window.BOTECO_DATA?.promos || [];
  const stage = document.getElementById("carouselStage");
  const dotsContainer = document.getElementById("carouselDots");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const promoGrid = document.getElementById("promoGrid");

  let currentIndex = 0;
  let intervalId = null;

  if (stage && dotsContainer && promos.length > 0) {
    promos.forEach((promo, idx) => {
      const slide = document.createElement("article");
      slide.className = `carousel-slide${idx === 0 ? " is-active" : ""}`;
      slide.setAttribute("aria-hidden", idx === 0 ? "false" : "true");
      slide.innerHTML = `
        <img src="${promo.image}" alt="${promo.alt}" loading="${idx === 0 ? "eager" : "lazy"}">
        <div class="carousel-caption">
          <span class="carousel-badge">${promo.badge}</span>
          <h3>${promo.title}</h3>
        </div>
      `;
      stage.appendChild(slide);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `carousel-dot${idx === 0 ? " is-active" : ""}`;
      dot.setAttribute("aria-label", `Ir para promoção ${idx + 1}: ${promo.title}`);
      dot.addEventListener("click", () => {
        goToSlide(idx);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    const slides = stage.querySelectorAll(".carousel-slide");
    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    function goToSlide(nextIdx) {
      slides[currentIndex].classList.remove("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "true");
      dots[currentIndex].classList.remove("is-active");

      currentIndex = (nextIdx + slides.length) % slides.length;

      slides[currentIndex].classList.add("is-active");
      slides[currentIndex].setAttribute("aria-hidden", "false");
      dots[currentIndex].classList.add("is-active");
    }

    function startAutoplay() {
      intervalId = setInterval(() => goToSlide(currentIndex + 1), 5000);
    }

    function restartAutoplay() {
      clearInterval(intervalId);
      startAutoplay();
    }

    prevBtn?.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
      restartAutoplay();
    });

    nextBtn?.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
      restartAutoplay();
    });

    stage.addEventListener("mouseenter", () => clearInterval(intervalId));
    stage.addEventListener("mouseleave", startAutoplay);

    startAutoplay();
  }

  // Renderiza cards completos das 4 promoções
  if (promoGrid && promos.length > 0) {
    promoGrid.innerHTML = promos
      .map(
        (promo) => `
      <article class="promo-card">
        <div class="promo-thumb" data-img="${promo.image}" data-title="${promo.title}" role="button" tabindex="0" aria-label="Ampliar cartaz ${promo.title}">
          <img src="${promo.image}" alt="${promo.alt}" loading="lazy">
        </div>
        <div class="promo-body">
          <span class="promo-tag">${promo.badge}</span>
          <h3 class="promo-title">${promo.title}</h3>
          <p class="promo-text">${promo.description}</p>
          <a href="reserva.html" class="btn btn-outline btn-sm">Reservar para aproveitar</a>
        </div>
      </article>
    `
      )
      .join("");
  }

  // Modal de ampliação de imagem promocional
  const modal = document.getElementById("posterModal");
  const modalImg = document.getElementById("posterModalImg");
  const modalTitle = document.getElementById("posterModalTitle");
  const closeModalBtn = document.getElementById("closePosterModal");

  function openPoster(imgSrc, title) {
    if (!modal || !modalImg || !modalTitle) return;
    modalImg.src = imgSrc;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modal.classList.add("is-open");
  }

  document.addEventListener("click", (e) => {
    const thumb = e.target.closest(".promo-thumb");
    if (thumb) {
      openPoster(thumb.dataset.img, thumb.dataset.title);
    }
    if (e.target === modal) {
      modal.classList.remove("is-open");
    }
  });

  closeModalBtn?.addEventListener("click", () => modal?.classList.remove("is-open"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal?.classList.remove("is-open");
  });
});
