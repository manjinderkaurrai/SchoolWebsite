
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

// Open and close mobile menu
menuBtn.addEventListener("click", () => {
  const isOpen = navbar.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after selecting a section
navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  });
});

// Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Demo admission form
document.getElementById("admissionForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const parentName =
      document.getElementById("parentName").value.trim();
    const studentName =
      document.getElementById("studentName").value.trim();
    const className =
      document.getElementById("className").value;
    const phone =
      document.getElementById("phone").value.trim();
    const message = document.getElementById("formMessage");

    if (!parentName || !studentName || !className ||
        !/^[0-9]{10}$/.test(phone)) {
      message.textContent =
        "Please enter all details and a valid 10-digit phone number.";
      return;
    }

    message.textContent =
      "Demo only: your form has not been sent or saved. " +
      "Connect a backend to receive admission enquiries.";

    event.target.reset();
  });
