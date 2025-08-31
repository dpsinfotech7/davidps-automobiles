
const nav = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");

function toggleNav() {
  nav.classList.toggle("show");
}

hamburger.addEventListener("click", toggleNav);
