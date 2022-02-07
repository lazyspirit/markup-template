import Swiper from 'swiper/bundle';

new Swiper('.image-slider', {
    //preloadImages: false,
    //lazy: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    hashNavigation: {
        watchState: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    }
});