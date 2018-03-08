$(document).ready(function(){
  $('.sushi-slider').slick({
    slidesToShow: 4,
    dots: false,
    prevArrow: '<button class="sushi-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="sushi-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
