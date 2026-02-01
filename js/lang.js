// LANGUAGE TOGGLE BUTTONS
const btnEN = document.getElementById("lang-en");
const btnIT = document.getElementById("lang-it");

// Headings, notes, and button text for translation
const headings = {
  "pickup-heading": {EN: "Pickup Information", IT: "Informazioni sul Ritiro"},
  "essentials-heading": {EN: "Essentials to Carry", IT: "Cosa Portare"},
  "dos-heading": {EN: "Dos & Don’ts", IT: "Cosa Fare e Non Fare"},
  "notes-heading": {EN: "Important Notes", IT: "Note Importanti"},
  "important-notes": {
    EN: "Salame Safari Tours is not responsible for personal belongings, injuries due to not following instructions, or unforeseen natural events. Guests are advised to have personal travel insurance.",
    IT: "Salame Safari Tours non è responsabile per effetti personali, infortuni dovuti al mancato rispetto delle istruzioni o eventi naturali imprevisti. Si consiglia ai clienti di avere un'assicurazione di viaggio personale."
  },
  "btn-download": {EN: "Download Brochure", IT: "Scarica Brochure"},
  "btn-book": {EN: "Book Now", IT: "Prenota Ora"},
  "btn-whatsapp": {EN: "Book via WhatsApp", IT: "Prenota via WhatsApp"}
};

// Function to switch language
function setLanguage(lang) {
  // Translate headings, notes, and buttons
  for (let id in headings) {
    const el = document.getElementById(id);
    if (el) el.textContent = headings[id][lang];
  }

  // Update package content dynamically from package-details.js
  if (typeof populatePackage === "function") {
    populatePackage(lang);
  }

  // Update active button style
  btnEN.classList.toggle("active", lang === "EN");
  btnIT.classList.toggle("active", lang === "IT");
}

// Event listeners for language toggle
btnEN.addEventListener("click", () => setLanguage("EN"));
btnIT.addEventListener("click", () => setLanguage("IT"));

// Initialize page in English by default
setLanguage("EN");
