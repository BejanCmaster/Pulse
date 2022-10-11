import Swiper, {
  Navigation,

} from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.carousel-swiper', {
  slidesPerView: "auto",
  loop: true,
  navigation: {
    nextEl: ".carousel-button__next",
    prevEl: ".carousel-button__prev",
  }
});
