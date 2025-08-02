// script.js untuk Web Randy 22

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  // Tombol buka/tutup menu
  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // Tutup menu otomatis saat klik link
  const links = menu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("show");
    });
  });
});