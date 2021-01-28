let menuBtn = $('.menu-box__btn');
let menu = $('.wrapper--menu');
let content = $('.content');

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
  if (menu.css('left') == '-200px'){
    menu.animate({
      'left': '0px'
    }, 1200)
    menuBtn.css({
      'transition-duration': '1500ms',
      'transform': 'rotate(0deg)'
    })
  }else {
    menu.animate({
      'left': '-200px'
    }, 1200)
    menuBtn.css({
      'transition-duration': '1500ms',
      'transform': 'rotate(180deg)'
    })
  }

})