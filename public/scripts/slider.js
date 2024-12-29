// HEADER SLIDER
var swiper = new Swiper(".header-slider", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  effect: "fade",
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  // simulateTouch: true,
  // touchRatio: 1,
  // touchAngle: 45,
  // grabCursor: true,
});


// Best-selling SLIDER
var swiper = new Swiper(".BestSelling", {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1260: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  speed: 1000,
  navigation: {
    nextEl: ".next-slide-best",
    prevEl: ".prev-slide-best",
  },
});
