// Bookings Form Handler
document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const countryCode = document.getElementById("countryCode").value;
    const phone = document.getElementById("phone").value.trim();
    const packageSelected = document.getElementById("package").value;
    const message = document.getElementById("message").value.trim();
    const confirmationMethod = document.getElementById("confirmation").value;

    // Validate fields
    if (!name || !email || !phone || !packageSelected || !message || !confirmationMethod) {
        alert("Please fill in all fields.");
        return;
    }

    // Prepare message content
    const bookingMessage = `Booking Request from Salame Safari Tours Website:
Name: ${name}
Email: ${email}
Phone: ${countryCode} ${phone}
Safari Package: ${packageSelected}
Message: ${message}
Preferred Confirmation: ${confirmationMethod}`;

    // Open WhatsApp or email depending on selection
    if (confirmationMethod === "whatsapp") {
        const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // replace with your WhatsApp number with country code, e.g. 254700000000
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(bookingMessage)}`;
        window.open(whatsappURL, "_blank");
    } else if (confirmationMethod === "email") {
        const emailAddress = "YOUR_EMAIL@example.com"; // replace with your email
        const emailSubject = encodeURIComponent("New Safari Booking Request");
        const emailBody = encodeURIComponent(bookingMessage);
        window.location.href = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    }

    // Show confirmation message
    document.getElementById("confirmation-msg").style.display = "block";

    // Reset form
    document.getElementById("bookingForm").reset();
});
