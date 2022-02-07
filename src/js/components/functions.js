function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
});


const body = document.querySelector('body');
const lockElement = document.querySelectorAll('.is-lock-padding');
const timeout = 100;

export function scrollLock() {
    let unlock = true;
    if (!body.classList.contains('is-lock-scroll')) {
        const scrollPadding = window.innerWidth - body.offsetWidth + 'px';

        lockElement.forEach((el) => {
            if (window.getComputedStyle(el).getPropertyValue('position') == 'fixed') {
                el.style.paddingRight = scrollPadding;
            }
        });

        body.style.paddingRight = scrollPadding;
        body.classList.add('is-lock-scroll');

        unlock = false;
        setTimeout(function() {
            unlock = true;
        }, timeout);
    }
}

export function scrollUnlock() {
    setTimeout(function() {

        lockElement.forEach((el) => {
            el.style.paddingRight = '0px';
        });

        body.style.paddingRight = '0px';
        body.classList.remove('is-lock-scroll');
    }, timeout);
}