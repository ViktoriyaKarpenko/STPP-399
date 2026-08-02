import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

const gallerySwiper = new Swiper('[data-gallery-swiper]', {
  modules: [Autoplay, Navigation],

  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 8,

  navigation: {
    nextEl: '[data-gallery-next]',
    prevEl: '[data-gallery-prev]',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 48,
      centeredSlides: true,
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
