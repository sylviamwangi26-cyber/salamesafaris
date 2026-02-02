const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// All images
const galleryImages = document.querySelectorAll(".gallery-grid img");

// Open lightbox on click
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close lightbox on click outside image
function closeLightbox() {
  lightbox.style.display = "none";
}
lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) closeLightbox();
});
