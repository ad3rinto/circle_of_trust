// Auto update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Basic form handling (demo)
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out. We’ll be in touch soon.");
  this.reset();
});
