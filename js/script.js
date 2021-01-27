// console.log(window.screen.height);
// console.log(window.screen.width);
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    // nextArrow: '<button type="button" class="slick-next"></button>',
    // prevArrow: '<button type="button" class="slick-prev"></button>',
    slidesToShow:1,
    slidesToScroll:1,
    // infinite: true,
  });
});