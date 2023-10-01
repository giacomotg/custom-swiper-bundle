// Import necessary components and modules
import Swiper, { Default } from 'swiper';

// Register the modules
Swiper.use([Navigation, Pagination, Thumbs]);

import 'swiper/swiper-bundle.css'

// 3. Swiper configurations

// Initialize heroThumbs Swiper first
const heroThumbsSwiper = initSwiper(".hero-thumbs", {
  direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 5,
  allowSlideNext: false,
  allowSlidePrev: false,
  threshold: 12,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".hero-thumbs-next",
    prevEl: ".hero-thumbs-prev",
  },
  pagination: {
    el: ".hero-thumbs-pagination",
  },
});

// Initialize heroCarousel Swiper with reference to heroThumbsSwiper
const heroCarouselSwiper = initSwiper(".hero-carousel", {
  slidesPerView: "auto",
  spaceBetween: 6,
  pagination: {
    el: ".hero-carousel-pagination",
  },
  navigation: {
    nextEl: ".hero-carousel-next",
    prevEl: ".hero-carousel-prev",
  },
  breakpoints: {
    990: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  thumbs: {
    swiper: heroThumbsSwiper,
  },
});

// testiSwiper
const testiSwiper = initSwiper(".all-testimonials", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".testimonials-pagination",
  },
  navigation: {
    prevEl: ".testimonials-sec .arrow-prev",
    nextEl: ".testimonials-sec .arrow-next",
  },
});

// genSwiper
const genSwiper = initSwiper(".all-general-reviews", {
  slidesPerView: "auto",
  spaceBetween: 12,
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  navigation: {
    nextEl: ".general-reviews-next",
    prevEl: ".general-reviews-prev",
  },
  pagination: {
    el: ".general-reviews-pagination",
  },
});

// uspSwiper
const uspSwiper = initSwiper(".all-manual-usps", {
  slidesPerView: "auto",
  spaceBetween: 12,
  centerInsufficientSlides: true,
});

// howStepSwiper
const howStepSwiper = initSwiper(".all-how-to-steps", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".how-to-pagination",
  },
});

// prodSwiper
const prodSwiper = initSwiper(".all-more-products", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".more-products-pagination",
  },
  navigation: {
    prevEl: ".more-products-sec .arrow-prev",
    nextEl: ".more-products-sec .arrow-next",
  },
});

// planSwiper
const planSwiper = initSwiper(".all-plan-cards", {
  slidesPerView: "auto",
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".all-plan-pagination",
  },
});

// hiwSwiper
const hiwSwiper = initSwiper(".all-hiw-science-cards", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centerInsufficientSlides: true,
  breakpoints: {
    768: {
      spaceBetween: 32,
    },
  },
  pagination: {
    el: ".hiw-swiper-pagination",
  },
});

// successThumbs
const successThumbsSwiper = initSwiper(".all-success-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 20,
  allowSlideNext: false,
  allowSlidePrev: false,
  threshold: 12,
  freeMode: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
});

// successSwiper
const successSwiper = initSwiper(".all-success-stories", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    770: {
      slidesPerView: "auto",
      spaceBetween: 60,
      centerInsufficientSlides: true,
    },
  },
  thumbs: {
    swiper: successThumbsSwiper,
  },
});

// confidentSwiper
const confidentSwiper = initSwiper(".confident-members-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centerInsufficientSlides: true,
  pagination: {
    el: ".confident-members-pagination",
  },
});
