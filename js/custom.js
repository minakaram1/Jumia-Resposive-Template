$(document).ready(function () {

// Toggle Nav-bar, Overlay When The Icons is Clicked
  $('.mobile-btn').click(function () {
    $('.banner .banner-list').fadeToggle();
    $('.overlay').fadeToggle();
    $(this).toggleClass('close-sign');
  });

  // Hide Nav-bar and "X" Sign When The Website Width More Than 767
  $(window).resize(function () {
    if (window.innerWidth > 767) {
      $('.mobile-btn').removeClass('close-sign');
      $('header .top-bar nav').removeClass('show-nav');
    }
  })

  // Fixed Nav Bar and Show Go to Top Icon When Scrolling
  if ($(window).scrollTop() > 90) {
    $("header .search").addClass("fixed");
    $(".banner").addClass("fixed");
    $(".go-to-top").fadeIn();
  } else {
    $("header .search").removeClass("fixed");
    $(".banner").removeClass("fixed");
    $(".go-to-top").fadeOut();
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 90) {
      $("header .search").addClass("fixed");
      $(".banner").addClass("fixed");
      $(".go-to-top").fadeIn();
    } else {
      $("header .search").removeClass("fixed");
      $(".banner").removeClass("fixed");
      $(".go-to-top").fadeOut();
    }
  });
  
  // Show Icons Content
  $('.icon').click(function () {
    $(this).children('.icon-content').toggle().parent().siblings().children('.icon-content').hide();
    $(this).children('.small').toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    $(this).siblings().children('.small').addClass('fa-chevron-down');
    $(this).toggleClass('colored-icon').siblings().removeClass('colored-icon');
  })
  $('.icon:last-of-type').click(function () {
    $('.icon-content').hide();
    $('.icon').removeClass('colored-icon');
  })
  // Banner Swiper
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})