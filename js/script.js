// SHOW HEADER MENU
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
}
showMenu("nav-menu", "nav-toggle");

// REMOVE SHOW HEADER MENU WHEN WE CLICK NAV-LINK
const navLink = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");
function linkAction() {
  // link active
  navLink.forEach((e) => e.classList.remove("active"));
  this.classList.add("active");

  // remove header menu
  navMenu.classList.remove("show-menu");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));

// ANIMATION SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: "2000",
});

// Navbar Animation
sr.reveal(".nav__logo");
sr.reveal(".nav__item", { interval: 200 });
sr.reveal(".nav__button, .nav__toggle", { delay: 200 });

// Home Animation
sr.reveal(".home__welcome");
sr.reveal(".home__title", { delay: 200 });
sr.reveal(".home__text", { delay: 400 });
sr.reveal(".home__button", { delay: 600 });
sr.reveal(".home__img", { origin: "right", delay: 400 });
