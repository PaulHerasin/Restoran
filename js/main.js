$(document).ready(function () {
    $('.slider-header').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });

    $('.slider-testimonials').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false
    });
});


$('.js-button-campaign').click(function () {
    $(".js-popup-campaign").fadeToggle(100);
});

$('.js-close-campaign').click(function () {
    $('.js-popup-campaign').fadeOut();
});



$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.top-header').addClass('scroll');
    }
    else {
        $('.top-header').removeClass('scroll')
    }
});