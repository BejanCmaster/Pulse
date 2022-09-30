import Swiper, {
  Navigation,

} from 'swiper';
Swiper.use([Navigation]);

const swiper = new Swiper('.carousel__swiper', {
  slidesPerView: "auto",
  loop: true,
});
