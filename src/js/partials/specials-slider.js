$(document).ready(function(){
  $('.specials-slider').slick({
    slidesToShow: 6,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<button class="specials-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="specials-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
