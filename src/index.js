// Import necessary components and modules
import Swiper, { Default } from 'swiper';

// Register the modules
Swiper.use([Navigation, Pagination, Thumbs]);

// Define common styles to inject
const commonStylesToInject = `
 /* ... your styles here ... */
 :host .all-manual-usps,
 :host .all-testimonials,
 :host .all-how-to-steps,
 :host .all-more-products,
 :host .all-general-reviews,
 :host .all-plan-cards,
 :host .confident-members-swiper {
   width: 100%;
   overflow: visible;
 }

 :host .hero-carousel .swiper-pagination-bullet,
 :host .all-testimonials .swiper-pagination-bullet,
 :host .all-how-to-steps .swiper-pagination-bullet,
 :host .all-more-products .swiper-pagination-bullet,
 :host .confident-members-swiper .swiper-pagination-bullet,
 :host .all-general-reviews .swiper-pagination-bullet {
   opacity: 1;
   background: transparent;
   border: 1px solid #0B3B3C;
 }

 :host .hero-carousel .swiper-pagination-bullet.swiper-pagination-bullet-active,
 :host .all-testimonials .swiper-pagination-bullet.swiper-pagination-bullet-active,
 :host .all-how-to-steps .swiper-pagination-bullet.swiper-pagination-bullet-active,
 :host .all-more-products .swiper-pagination-bullet.swiper-pagination-bullet-active,
 :host .confident-members-swiper .swiper-pagination-bullet.swiper-pagination-bullet-active,
 :host .all-general-reviews .swiper-pagination-bullet.swiper-pagination-bullet-active {
   background: #0B3B3C;
 }

 :host .hero-thumbs .swiper-slide-thumb-active {
   border: 3px solid #0b3b3c;
 }

 :host .hero-carousel-pagination {
   bottom: 0 !important;
 }

 :host .all-success-thumbs .swiper-slide-thumb-active {
   border: 3px solid #ffffff;
   opacity: 1;
 }
`;

// Function to inject styles into the document
function injectStyles(css) {
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    // This is for IE
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(style);
}

// Call the function to inject the styles
injectStyles(commonStylesToInject);

// 2. Initialize each Swiper instance without common styles (since they're globally injected)
function initSwiper(selector, params) {
  return new Swiper(selector, params);
}


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
