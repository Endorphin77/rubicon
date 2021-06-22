$(document).ready(function(){
    $('.corusel__wrapper').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slick-prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slick-next.png" alt="next"></button>',
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                arrows: false,
                adaptiveHeight: false,
                dots: true,
                
              }
            }]
    });
 


    $('.corusel__wrapper-products').slick({
        speed: 800,
        prevArrow: '<button type="button" class="slick-prev"><i class="bi bi-caret-left-fill"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="bi bi-caret-right-fill"></i></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });
  

  

    function toggleSearch(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.search').eq(i).toggleClass('search_active');
          })
      });
  };

toggleSearch('.header__button');
toggleSearch('.search__close');
toggleSearch('.search__close-box');

function toggleMobileMenu(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.mobile-menu').eq(i).toggleClass('mobile-menu_active');
      })
  });
};

toggleMobileMenu('.hamburger');
toggleMobileMenu('.mobile-menu_a');

function toggleMobileMenuContent(item) {
  $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.mobile-menu__plus').eq(i).toggleClass('mobile-menu__plus_active');
          $('.mobile-menu__dropdown-content').eq(i).toggleClass('mobile-menu__dropdown-content_active');
      })
  });
};

toggleMobileMenuContent('.mobile-menu__plus');
var windowHeight = $(window).height();

$(window).scroll(function(){
  if($(this).scrollTop()>windowHeight){
      $('.header_main').addClass('header_fixed');
  }
  else if ($(this).scrollTop()<windowHeight){
      $('.header_main').removeClass('header_fixed');
  }
});

$(document).scroll(function(){
  var windowHeight80 = 80;
  if ($(window).scrollTop() > windowHeight80){
    $('.header__top-nav_main').addClass('active');
    $('.hamburger_main').addClass('hamburger_scroll');
    $('.tell_main').addClass('tell_scroll');
  }
  else{
    $('.header__top-nav_main').removeClass('active');
    $('.hamburger_main').removeClass('hamburger_scroll');
    $('.tell_main').removeClass('tell_scroll');
  }
});
});  

$(document).scroll(function(){
  if ($(window).scrollTop() > 80){
    $('.header__top-nav').addClass('active');
    $('.hamburger').addClass('hamburger_scroll');
    $('.tell').addClass('tell_scroll');
  }
  else{
    $('.header__top-nav').removeClass('active');
    $('.hamburger').removeClass('hamburger_scroll');
    $('.tell').removeClass('tell_scroll');
  }
});






    window.addEventListener('DOMContentLoaded', () => {
      const menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu_item'),
      hamburger = document.querySelector('.hamburger');

      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
      });

      menuItem.forEach(item => {
          item.addEventListener('click', () => {
              hamburger.classList.toggle('hamburger_active');
              menu.classList.toggle('menu_active');
          })
      })
  })

  
