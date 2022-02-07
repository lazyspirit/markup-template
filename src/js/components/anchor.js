import anime from 'animejs';

const scrollLinks = document.querySelectorAll('.js-to-anchor');
if (scrollLinks.length > 0) {
    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', scrollToAnchor);
    });

    function scrollToAnchor(e) {
        const scrollLink = e.target;
        const scrollAnchor = document.getElementById(scrollLink.getAttribute('href').replace('#', ''));
        const scrollAnchorValue = scrollAnchor.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        const scrollElement = window.document.scrollingElement || window.document.body || window.document.documentElement;
        anime({
            targets: scrollElement,
            scrollTop: scrollAnchorValue,
            duration: 400,
            easing: 'easeInOutCubic'
        });
        e.preventDefault();
    }
}