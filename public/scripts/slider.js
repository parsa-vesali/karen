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
});