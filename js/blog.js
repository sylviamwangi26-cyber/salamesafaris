/* =============================
   SALAME SAFARI TOURS - BLOG JS
   ============================= */

/* ---------- TOGGLE STORY PARAGRAPHS ---------- */
function initializeStoryToggle() {
    document.querySelectorAll(".blog-post h2").forEach(title => {
      title.addEventListener("click", () => {
        const paragraphs = title.parentElement.querySelectorAll("p");
        paragraphs.forEach(p => {
          if (p.style.display === "block") {
            p.style.display = "none";
          } else {
            p.style.display = "block";
          }
        });
      });
    });
  }
  
  /* ---------- ADD NEW STORY ---------- */
  function addStory() {
    const title = document.getElementById("storyTitle").value;
    const text = document.getElementById("storyText").value;
  
    if (!title || !text) {
      alert("Please fill in both fields.");
      return;
    }
  
    const article = document.createElement("article");
    article.className = "blog-post";
  
    article.innerHTML = `
      <h2>${title}</h2>
      <p style="display:none;">${text}</p>
    `;
  
    document.querySelector(".blog-container").appendChild(article);
  
    // Reset input fields
    document.getElementById("storyTitle").value = "";
    document.getElementById("storyText").value = "";
  
    // Reinitialize toggle for the new story
    initializeStoryToggle();
  }
  
  /* ---------- INITIALIZE ON PAGE LOAD ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    // Hide all story paragraphs initially
    document.querySelectorAll(".blog-post p").forEach(p => p.style.display = "none");
  
    // Add toggle functionality
    initializeStoryToggle();
  });
  