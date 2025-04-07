$(document).ready(() => {
  $(".ni-header__menu-trigger").on("click", function () {
    $(".ni-header__nav").slideToggle(300).toggleClass("ni-active-nav");
    $(this).toggleClass("ni-active");
  });

  $(".ni-submenu-trigger").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("ni-active");
    // $(this).siblings(".ni-nav__sub-menu").slideToggle(200);
    $(this).siblings(".ni-nav__sub-menu").toggleClass("active");
  });

  //   Hero Slider Activation
  $(".ni-hero__slider").slick({
    // dots: true,
    // infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".ni-hero .ni-slide-next"),
    prevArrow: $(".ni-hero .ni-slide-prev"),
  });
});
