let menuBtn = $('.menu-box__btn');
let menu = $('.wrapper--menu');
let content = $('.content');
let container = $('.container');
let menuItem = $('.menu__item');
let menuLink = $('.menu__link');


$('.slider').slick({
  arrows: false,
  dots: true,
  slidesToShow:1,
  slidesToScroll:1,
});

menuItem.each(function(index, element){
  menuItem.eq(index).on('mouseover', function(){
    menuItem.eq(index).css('backgroundColor','#2F3CED');
    menuItem.eq(index).css({
      'backgroundColor': '#2F3CED',
      'borderRadius':'0px 12px 12px 0px',
    });
    menuLink.eq(index).css('color','#fff');
}) 
  menuItem.eq(index).on('mouseout', function(){
    menuItem.eq(index).attr('style',' ');
    menuLink.eq(index).attr('style',' ');
}) 
})

if (window.innerWidth >= 1024){
  menuBtn.hide();
}else{
  menu.css('height', container.css('height'));
}

menuBtn.on('click', function(){
  if (menu.css('left') == '-200px'){
    menu.animate({
      'left': '0px'
    }, 1200)
    menuBtn.css({
      'transition-duration': '1500ms',
      'transform': 'rotate(180deg)'
    })
  }else {
    menu.animate({
      'left': '-200px'
    }, 1200)
    menuBtn.css({
      'transition-duration': '1500ms',
      'transform': 'rotate(0deg)'
    })
  }

})