$(document).ready(function(){
  $(function(){
    $(window).scroll(function() {
      if($(this).scrollTop() >= 100) {
        $('.bottom-nav').addClass('sticky'),
        $('.top').addClass('sticky-top'),
        $('.breadcrumbs').addClass('sticky-top'),
        $('.bottom-nav__tel').removeClass('visually-hidden');
      }
      else{
        $('.bottom-nav').removeClass('sticky'),
        $('.top').removeClass('sticky-top'),
        $('.breadcrumbs').removeClass('sticky-top'),
        $('.bottom-nav__tel').addClass('visually-hidden');
      }
    });
  });
});
