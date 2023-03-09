import { Swiper, Navigation } from "swiper";

const swiper = new Swiper(".slider", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
