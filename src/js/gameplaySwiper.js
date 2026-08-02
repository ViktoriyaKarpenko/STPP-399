import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const gameplaySwiper = new Swiper('[data-gameplay-swiper]', {
  modules: [Autoplay],

  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 8,

  breakpoints: {
    1440: {
      enabled: false,
    },
  },

  on: {
    imagesReady: swiper => swiper.update(),
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
