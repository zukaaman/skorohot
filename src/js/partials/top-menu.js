$(document).ready(function(){
  $(function(){
    $(window).scroll(function() {
      if($(this).scrollTop() >= 100) {
        $('.bottom-nav').addClass('sticky'),
        $('.top').addClass('sticky-top');
      }
      else{
        $('.bottom-nav').removeClass('sticky'),
        $('.top').removeClass('sticky-top');

      }
    });
  });
});
