// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Thumbs} from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';

// init Swiper:
var heroThumbs = new Swiper(".hero-thumbs", {
  // configure Swiper to use modules
    direction: "vertical",
  slidesPerView: "auto",
  spaceBetween: 5,
  allowSlideNext: false,
  allowSlidePrev: false,
  threshold: 12,
  freeMode: true,
  watchSlidesProgress: true,
});
var heroCarousel = new Swiper(".hero-carousel", {
     // configure Swiper to use modules
  
  slidesPerView: "auto",
  spaceBetween: 6,
  pagination: {
    el: ".hero-carousel-pagination",
  },
  breakpoints: {
  	990: {
    	slidesPerView: 1,
  		spaceBetween: 0,
    },
  },
  thumbs: {
    swiper: heroThumbs,
  },
});

var testiSwiper = new Swiper(".all-testimonials", {
     // configure Swiper to use modules
     
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".testimonials-pagination",
  },
  navigation: {
  	prevEl: '.testimonials-sec .arrow-prev',
    nextEl: '.testimonials-sec .arrow-next'
  },
});

var genSwiper = new Swiper(".all-general-reviews", {
     // configure Swiper to use modules
    
  slidesPerView: 'auto',
  spaceBetween: 12,
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  navigation: {
    nextEl: '.general-reviews-next',
    prevEl: '.general-reviews-prev',
  },
  pagination: {
  	el: '.general-reviews-pagination'
  },
});

var uspSwiper = new Swiper(".all-manual-usps", {
    // configure Swiper to use modules
 
    slidesPerView: "auto",
    spaceBetween: 12,
    centerInsufficientSlides: true,
  });

  var howStepSwiper = new Swiper(".all-how-to-steps", {
     // configure Swiper to use modules
    
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".how-to-pagination",
    },
  });

  var prodSwiper = new Swiper(".all-more-products", {
     // configure Swiper to use modules
  
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".more-products-pagination",
    },
    navigation: {
        prevEl: '.more-products-sec .arrow-prev',
      nextEl: '.more-products-sec .arrow-next'
    },
  });

  var planSwiper = new Swiper(".all-plan-cards", {
     // configure Swiper to use modules
    
    slidesPerView: "auto",
    spaceBetween: 16,
    //centerInsufficientSlides: true,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
    pagination: {el: '.all-plan-pagination'}
  });

  var hiwSwiper = new Swiper(".all-hiw-science-cards", {
     // configure Swiper to use modules
  
    slidesPerView: "auto",
    spaceBetween: 20,
    centerInsufficientSlides: true,
    breakpoints: {
      // when window width is >= 768px
      768: {
        spaceBetween: 32,
      },
    },
    pagination: {
      el: ".hiw-swiper-pagination",
    },
  });

  // Success carousel
var successThumbs = new Swiper(".all-success-thumbs", {
    // configure Swiper to use modules
   
    slidesPerView: "auto",
    spaceBetween: 20,
    allowSlideNext: false,
    allowSlidePrev: false,
    threshold: 12,
    freeMode: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,
  });
  var successSwiper = new Swiper(".all-success-stories", {
    // configure Swiper to use modules
 
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
      swiper: successThumbs,
    },
  });
  
  var confidentSwiper = new Swiper(".confident-members-swiper", {
    // configure Swiper to use modules
    
    slidesPerView: "auto",
    spaceBetween: 20,
    centerInsufficientSlides: true,
    pagination: {
      el: ".confident-members-pagination",
    },
  });