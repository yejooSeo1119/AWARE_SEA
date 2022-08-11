

//Initialize Swiper selection3

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,   
        controller: {
          inverse: true,
        },
        mousewheel: {
          invert: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
          hide : false,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });


  
AOS.init({
  duration: 1000 //aos 나타나는 속도
})

// mobile nav
$(document).ready(function(){

  $('.menu_open').click(function(){

      $('#m_gnb').show(300);
      $('.menu_open').hide();
  });

  $('.menu_close').click(function(){

      $('#m_gnb').hide(300);
      $('.menu_open').show();
  });

});

