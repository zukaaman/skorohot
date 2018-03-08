$(document).ready(function(){
  $('.pizza-slider').slick({
    slidesToShow: 4,
    dots: false,
    prevArrow: '<button class="pizza-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="pizza-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
