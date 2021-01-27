let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');
let sliderItems = document.querySelectorAll('.slider__item');
let currentItem = 0;
// let sliderWrapper = document.querySelector('.slider__wrapper');

nextBtn.addEventListener('click', function(event){
  // sliderItems[0].classList.remove('active');
  // sliderItems[1].classList.add('active');
  // sliderItems[currentItem].classList.remove('show');
  if (sliderItems[currentItem].classList.contains('moveNext')){
    sliderItems[currentItem].classList.remove('moveNext');
  }
  currentItem = (currentItem+1)%sliderItems.length;
  // sliderItems[currentItem].classList.add('show');
  sliderItems[currentItem].classList.add('moveNext');
  // sliderItems[0].classList.add('active');
  // sliderItems[1].classList.add('active');
  // sliderItems.forEach((item,index)=>{
  //   if (item.classList.contains('active')){
  //     item.classList.remove('active');
  //     item.classList.add('inactive');
  //   }else if (item.classList.contains('inactive')){
  //     item.classList.remove('inactive');
  //     item[index+1].classList.add('active');
  //   }
  //   // else if (!item.classList.contains('active')){
  //   //   item.classList.add('active');
  //   // }
  // })
})
prevBtn.addEventListener('click', function(event){
  sliderItems[currentItem].classList.remove('show');
  currentItem = (currentItem-1)%sliderItems.length;
  sliderItems[currentItem].classList.add('show');
})