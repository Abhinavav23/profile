let timerRef;

function copyEmail() {
  navigator.clipboard.writeText("abhinavkumar.bcrec@gmail.com");
  document.getElementById("copyEmail").title = "Copied";
  timerRef = setTimeout(() => {
    document.getElementById("copyEmail").title = "Copy email";
  }, 3000);
}

function calculateYearsFraction(pastDate = "2018-04-24") {
  const past = new Date(pastDate);
  const current = new Date();

  // Difference in milliseconds
  const diffMilliseconds = current - past;

  // Convert milliseconds to years
  const yearsFraction = diffMilliseconds / (1000 * 60 * 60 * 24 * 365);
  return yearsFraction.toFixed(1); // Rounding to 1 decimal places
}

// EmailJS Configuration
const EMAILJS_PUBLIC_KEY = "JAyWos7b2lLRXunZW";
const EMAILJS_SERVICE_ID = "service_aik9adp";
const EMAILJS_TEMPLATE_ID = "template_6m66veo";

window.addEventListener("DOMContentLoaded", () => {
  // Calculate and display years of experience
  const totalExp = calculateYearsFraction();
  document.getElementById("yearOfExp").textContent = totalExp;

  // Initialize EmailJS
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const submitBtn = document.getElementById("submit-btn");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.value = "Sending...";

      // Hide previous messages
      formMessage.style.display = "none";

      try {
        // Send email using EmailJS
        const response = await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          contactForm,
        );

        // Show success message
        formMessage.className = "alert alert-success";
        formMessage.textContent =
          "Thank you! Your message has been sent successfully.";
        formMessage.style.display = "block";

        // Reset form
        contactForm.reset();

        // Scroll to message
        formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (error) {
        // Show error message
        formMessage.className = "alert alert-danger";
        formMessage.textContent =
          "Sorry, there was an error sending your message. Please try again later or email me directly at abhinavkumar.bcrec@gmail.com";
        formMessage.style.display = "block";

        // Scroll to message
        formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

        console.error("EmailJS Error:", error);
      } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.value = "Contact";
      }
    });
  }
});

window.addEventListener("beforeunload", () => {
  clearTimeout(timerRef);
});
