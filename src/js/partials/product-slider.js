$(document).ready(function(){
  $('.product-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.product-slider-nav',
    prevArrow: '<button class="product-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="product-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });

  $('.product-slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product-slider-for',
    centerMode: true,
    focusOnSelect: true,
    arrows: false
  });
});
