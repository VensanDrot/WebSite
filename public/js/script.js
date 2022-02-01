$(document).ready(function() {
    $('.dslider').slick({
        prevArrow: '<button type="button" class="slick-prev"><span><i class="fas fa-angle-left"></i></span></button>',
        nextArrow: '<button type="button" class="slick-next"><span><i class="fas fa-angle-right"></i></span></button>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        centerMode: true,
        variableWidth: true
    });
});