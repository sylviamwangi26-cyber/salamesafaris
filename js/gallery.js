document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const total = items.length;
    const angle = 360 / total;
  
    items.forEach((item, index) => {
      item.style.transform = `
        rotateY(${index * angle}deg)
        translateZ(450px)
        translate(-50%, -50%)
      `;
    });
  
    // Pause rotation on hover (luxury feel)
    carousel.addEventListener("mouseenter", () => {
      carousel.style.animationPlayState = "paused";
    });
  
    carousel.addEventListener("mouseleave", () => {
      carousel.style.animationPlayState = "running";
    });
  });
  