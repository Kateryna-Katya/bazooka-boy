import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.section-swiper-one', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'section-swiper-slide',
        wrapperClass: 'section-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next-first',
            prevEl: '.custom-prev-first',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
    new Swiper('.section-swiper-second', {
        modules: [Navigation],
        breakpoints: {
            374: {
                slidesPerView: "auto",
                spaceBetween: 10,
                centeredSlides: false,

            },
            1439: {
                slidesPerView: "auto",
                spaceBetween: 20,
                centeredSlides: false,

            },
        },

        loop: true,
        slideClass: 'section-swiper-slide',
        wrapperClass: 'section-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next-second',
            prevEl: '.custom-prev-second',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
        },
    });
});