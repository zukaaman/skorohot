$(document).ready(function(){
  $('.action-slider').slick({
    slidesToShow: 4,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: '<button class="action-slider__button-left" type="button"><span class="visually-hidden">left</span></button>',
    nextArrow: '<button class="action-slider__button-right" type="button"><span class="visually-hidden">right</span></button>'
  });
});
