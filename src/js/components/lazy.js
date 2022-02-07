const lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length > 0) {
    lazyImages.forEach(lazyImage => {
        if (lazyImage.dataset.src || lazyImage.dataset.srcset) {
            lazyImagesPositions.push(lazyImage.getBoundingClientRect().top + pageYOffset);
            lazyImagesCheck();
        }
    });
}

window.addEventListener('scroll', lazyScroll);

function lazyScroll() {
    if (lazyImages.length > 0) {
        lazyImagesCheck();
    }
    /*if (!loadMapBlock.classList.contains('is-loaded')) {
        getMap;
    }*/
}

function lazyImagesCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => pageYOffset > item - windowHeight
    );
    if (imgIndex >= 0) {
        if (lazyImages[imgIndex].dataset.src) {
            lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
            lazyImages[imgIndex].removeAttribute('data-src');
        } else if (lazyImages[imgIndex].dataset.srcset) {
            console.log('1');
            lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
            lazyImages[imgIndex].removeAttribute('data-srcset');
        }
        delete lazyImagesPositions[imgIndex];
    }
}

const loadMapBlock = document.querySelector('.js-load-map');

function getMap() {
    const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
    if (pageYOffset > loadMapBlockPos - windowHeight) {
        const loadMapUrl = loadMapBlock.dataset.map;
        if (loadMapUrl) {
            loadMapBlock.insertAdjacentHTML(
                'beforeend',
                `<iframe src="${loadMapUrl}" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            );
            loadMapBlock.classList.add('is-loaded');
        }
    }
}