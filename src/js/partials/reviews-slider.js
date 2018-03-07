$(document).ready(function(){
  $('.reviews-slider').slick({
    slidesToShow: 3,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 6000,
    prevArrow: '<button class="reviews-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="reviews-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
