$(document).ready(function(){
  $('.with-this-slider').slick({
    slidesToShow: 4,
    dots: false,
    prevArrow: '<button class="with-this-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="with-this-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
