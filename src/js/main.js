import 'jquery';
import 'slick-carousel';

// scss
import '../scss/main.scss';



$(document).ready(function() {
    
    // slick carousel
    $('.explore--bg').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/arrow_right.png"></button>',
        // autoplay: true,
        autoplaySpeed: 5000,
        speed: 1500,
        dots: true
    });
});