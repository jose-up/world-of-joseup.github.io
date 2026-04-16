// Browser-safe main script for the landing page.
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#subsections a");
  links.forEach((link) => {
    link.addEventListener("focus", () => link.classList.add("is-focused"));
    link.addEventListener("blur", () => link.classList.remove("is-focused"));
  });
});