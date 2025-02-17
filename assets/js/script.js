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

  initSwiper(".slider__left", "slider__slide-reveal");
  initSwiper(".slider__right", "slider__slide-reveal-reverse");

  let sectionOffset = $("#section-product").offset().top;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= sectionOffset) {
      $(".nav").addClass("nav--fixed");
    } else {
      $(".nav").removeClass("nav--fixed");
    }

    let scrollPos = $(window).scrollTop();
    let gentleLady = $("#gentle-lady").offset().top;
    let cultureGirl = $("#culture-girl").offset().top;
    let windowHeight = $(window).height();
    if (scrollPos + windowHeight / 2 >= gentleLady && scrollPos + windowHeight / 2 < cultureGirl) {
      $('#nav-item-1').text('(ㅤGentle Ladyㅤ)');
      $('#nav-item-2').text('Culture Girl');
    } else if (scrollPos + windowHeight / 2 >= cultureGirl) {
      $('#nav-item-1').text('Handsome Lady');
      $('#nav-item-2').text('(ㅤGentle Ladyㅤ)');
    }
  });
});
