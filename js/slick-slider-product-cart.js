$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.slider-nav2',
    adaptiveHeight: false
});

$('.slider-nav2').slick({
    slidesToShow: 4.5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    // vertical: true,
});

Fancybox.bind('[data-fancybox="gallery"]', {
    compact: false,
    idle: false,

    animated: false,
    showClass: false,
    hideClass: false,

    dragToClose: false,

    Images: {
        // Disable animation from/to thumbnail on start/close
        zoom: false,
    },

    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ['close'],
        },
    },

    Thumbs: {
        type: 'classic',
        Carousel: {
            center: function () {
                return this.contentDim > this.viewportDim;
            },
        },
    },

    Carousel: {
        // Remove the navigation arrows
        Navigation: false,
    },
});