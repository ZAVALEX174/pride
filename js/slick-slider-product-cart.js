$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    asNavFor: '.slider-nav2',
    adaptiveHeight: true
});

$('.slider-nav2').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    focusOnSelect: true
});