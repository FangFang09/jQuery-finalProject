$(document).ready(function () {
  //選單收合
  $('.nav>li>a').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings('.dropdown').slideToggle();
    $(this).parent().siblings().find('.dropdown').slideUp();
    $(this).parent().siblings().find('a').removeClass('active');
  });

  //swiper輪播
const swiper = new Swiper('.swiper', {
  // Optional parameters參數
  direction: 'horizontal',
  speed:1500,
  loop: true,
  autoplay:{  //自動輪播秒數設定
  delay: 800,
 },
  effect:'slide',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//燈箱效果
lightbox.option({
  'resizeDuration': 800,
  'wrapAround': false,
});

//top效果
 $('.top').click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },1000);
 });

});
