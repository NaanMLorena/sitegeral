let button = document.getElementById("menu-toggle");
let menu = document.querySelector(".menu-dropdown");

button.addEventListener("click", function() {
  menu.classList.toggle("active");
});