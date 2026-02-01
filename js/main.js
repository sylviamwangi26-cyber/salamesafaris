/* ===========================
   SALAME SAFARI TOURS - MAIN JS
   =========================== */

/* ---------- FADE-IN ON SCROLL ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(
    "section, .page-hero, .help-box, .contact-form, .contact-social"
  );

  const fadeInOnScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add("fade-in");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();
});

/* ---------- ACTIVE NAV LINK ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

/* ---------- CINEMATIC VIDEO SLIDER ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll('.bg-video');
  let current = 0;
  const showDuration = 8000; // 8 seconds per video

  // 1. Setup initial state
  if (videos.length > 0) {
    videos.forEach((video, index) => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      if (index === 0) {
        video.classList.add('active');
        video.style.opacity = "1";
      } else {
        video.classList.remove('active');
        video.style.opacity = "0";
      }
      
      // Start playing
      video.play().catch(() => console.log("Autoplay waiting for user interaction"));
    });
  }

  // 2. The transition function
  function showNextVideo() {
    // Hide current
    videos[current].classList.remove('active');
    videos[current].style.opacity = "0";

    // Move to next
    current = (current + 1) % videos.length;

    // Show next
    videos[current].classList.add('active');
    videos[current].style.opacity = "1";
  }

  // 3. Start the timer
  if (videos.length > 1) {
    setInterval(showNextVideo, showDuration);
  }
});

/* ---------- SIMPLE SMOOTH SCROLL ---------- */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});