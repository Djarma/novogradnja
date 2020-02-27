import 'jquery';
import 'slick-carousel';
import gsap from 'gsap';
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

// scss
import '../scss/main.scss';



$(document).ready(function() {
    
    // slick carousel
    $('.explore__bg').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right.png"></button>',
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 2000,
        dots: true
    });


    // nav menu
    $('.nav__menu__mobile__btn').on('click', function() {
              
        if($('.nav__menu__mobile__navbar').hasClass('collapsed')) {
            gsap.to(('.nav__menu__mobile__navbar'), 1, {y: 0});
            $('.nav__menu__mobile__navbar').removeClass('collapsed');
        } else {
            gsap.to(('.nav__menu__mobile__navbar'), 1, {y: -400});
            $('.nav__menu__mobile__navbar').addClass('collapsed');
        }

    });



    $('.pricing__plan__box__content__payment--btn').on('click', function(){
        $(this).toggleClass('active');
        $('.pricing__plan__box__content__payment--yearly').addClass('active');
        $('.pricing__plan__box__content__payment--monthly').removeClass('active');

        if(!$(this).hasClass('active')){
            $('.pricing__plan__box__content__payment--yearly').removeClass('active');
            $('.pricing__plan__box__content__payment--monthly').addClass('active');
        }
    });


    ScrollMagicPluginGsap(ScrollMagic, gsap);

    // homepage transitions

    var homepageTitle = $('.explore__content--title');
    var homepageForm = $('.explore__content--form');

    var tl = gsap.timeline();
        tl.fromTo(homepageTitle, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .8)
        tl.fromTo(homepageForm, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1.1)


    var controller = new ScrollMagic.Controller();


    // about

    var aboutTitle = $('.about__content--title');
    var aboutInfo = $('.about__content--info');
    var aboutBtn = $('.about__content--more');

    var aboutTween = gsap.timeline();
        aboutTween.fromTo(aboutTitle, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .8),
        aboutTween.fromTo(aboutInfo, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1),
        aboutTween.fromTo(aboutBtn, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1.3)

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.about',
        offset: 150,
        triggerHook: 0.8
    })
    .setTween(aboutTween)
    .addTo(controller)


    // advertise

    var advertiseTitle = $('.advertise__content__item--title');
    var advertiseInfo = $('.advertise__content__item--info');
    var advertiseText = $('.advertise__content__item--text');
    var advertiseBtn = $('.advertise__content__item--btn');
    var advertiseImg = $('.advertise__content__img--item');

    var advertiseTween = gsap.timeline();
        advertiseTween.fromTo(advertiseTitle, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, .8),
        advertiseTween.fromTo(advertiseInfo, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1),
        advertiseTween.fromTo(advertiseText, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1.3),
        advertiseTween.fromTo(advertiseBtn, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1.5),
        advertiseTween.fromTo(advertiseImg, 2, {opacity: 0}, {opacity: 1}, 2)

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: '.advertise',
        offset: 150,
        triggerHook: 0.8
    })
    .setTween(advertiseTween)
    .addTo(controller)


    // Pricing page

    var pricingTitle = $('.pricing__title__items--info');
    var pricingImg = $('.pricing__title__items__img img');
    var pricingText = $('.pricing__title--text');

    var pricingTween = gsap.timeline();
        pricingTween.fromTo(pricingTitle, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1),
        pricingTween.fromTo(pricingImg, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1),
        pricingTween.fromTo(pricingText, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0}, 1.4)

    var pricingScene = new ScrollMagic.Scene({
        triggerElement: '.pricing__title',
        triggerHook: 0.8
    })
    .setTween(pricingTween)
    .addTo(controller)
});