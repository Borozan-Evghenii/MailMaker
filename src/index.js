import Swiper from "swiper";

const swiper = new Swiper(".testimonial-slider", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from(".card:first-child", {
  ScrollTrigger: ".card",
  opacity: 0,
  y: 70,
  duration: 0.5,
});
tl.from(".card:last-child", { opacity: 0, y: 70, duration: 0.5 }, "=+.1");
tl.from(".message", { scale: 0, y: 100, duration: 0.5 }, "=+.1");
tl.from(".gmail", { scale: 0, x: 100, duration: 0.5 }, "=+.1");

ScrollTrigger.create({
  animation: tl,
  trigger: ".compliant",
  start: "top top",
  end: "bottom bottom",
});
