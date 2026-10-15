// Interações leves do MVP. O conteúdo dos projetos será refinado nas próximas etapas.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector("#image-lightbox");

  if (!lightbox) return;

  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll("[data-lightbox]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const image = link.querySelector("img");
      if (!image) return;

      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
      closeButton.focus();
    });
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
});
