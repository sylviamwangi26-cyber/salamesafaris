// CONTACT FORM HANDLER (No backend, no email app)
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const status = document.getElementById("form-status");
  
    // Safety check
    if (!form || !status) return;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop page reload
  
      // Show success message
      status.textContent = "Thank you! Your message has been received. We’ll get back to you shortly.";
      status.style.color = "#1f7a4f"; // safari green
  
      // Simple animation feedback
      status.style.opacity = "0";
      setTimeout(() => {
        status.style.opacity = "1";
      }, 100);
  
      // Clear form fields
      form.reset();
    });
  
  });
  