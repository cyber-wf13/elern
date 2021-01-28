let menuBtn = $('.menu-box__btn');
let menu = $('.wrapper--menu');

$('.slider').slick({
  arrows: false,
  dots: true,
  slidesToShow:1,
  slidesToScroll:1,
});


if (window.innerWidth >= 1024){
  menuBtn.hide();
}

menuBtn.on('click', function(){
  if (menu.css('left') == '-250px'){
    menu.animate({
      'left': '0px'
    }, 1500)
  }else {
    menu.animate({
      'left': '-250px'
    }, 1500)
  }
})