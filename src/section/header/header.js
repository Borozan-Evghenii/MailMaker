const burger = document.querySelector("[data-burger]");
const nav = document.querySelector("[data-menu]");
const navItem = document.querySelector("[data-menu-item]");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
  document.body.classList.toggle("scroll--none");
});

visualViewport.addEventListener("resize", (e) => {
  if (e.target.width > 1024) {
    burger.classList.remove("burger--active");
    nav.classList.remove("nav--visible");
    document.body.classList.remove("scroll--none");
  }
});
