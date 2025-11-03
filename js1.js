// Simple contact form validation & message simulation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "⚠️ Please fill in all fields!";
        status.style.color = "red";
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        status.textContent = "❌ Invalid email address!";
        status.style.color = "red";
        return;
      }

      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    });
  }
});
