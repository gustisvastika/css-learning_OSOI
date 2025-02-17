$(document).ready(function () {
  function initSwiper(selector, revealClass) {
    return new Swiper(selector, {
      loop: true,
      autoplay: { delay: 3000, disableOnInteraction: false },
      speed: 1000,
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: { crossFade: false },
      on: {
        init: function () {
          let firstSlide = $(`${selector} .swiper-slide-active img`);
          firstSlide.addClass("slider__zoom");
          setTimeout(() => firstSlide.removeClass("slider__zoom"), 4000);
        },
        slideChangeTransitionStart: function () {
          let activeSlide = $(`${selector} .swiper-slide-active img`);
          activeSlide.addClass(revealClass);
          setTimeout(() => activeSlide.removeClass(revealClass), 1000);
        },
        slideChangeTransitionEnd: function () {
          let activeSlide = $(`${selector} .swiper-slide-active img`);
          activeSlide.addClass("slider__zoom");
          setTimeout(() => activeSlide.removeClass("slider__zoom"), 4000);
        },
      },
    });
  }

  initSwiper(".slider__left", "slider__slideReveal");
  initSwiper(".slider__right", "slider__slideRevealReverse");
});
