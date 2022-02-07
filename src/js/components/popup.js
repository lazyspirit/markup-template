import { scrollLock, scrollUnlock } from './functions.js';

const popup = document.querySelector('.popup');
const popupButtonsOpen = document.querySelectorAll('.popup-link');
const popupButtonClose = document.querySelectorAll('.popup-close');

let unlock = true;

if (popupButtonsOpen.length > 0) {
    popupButtonsOpen.forEach((button) => {
        button.addEventListener('click', (e) => {
            const popupName = button.getAttribute('href').replace('#', '');
            const popupCurent = document.getElementById(popupName);
            popupOpen(popupCurent);
            e.preventDefault();
        })
    });
}

function popupOpen(popupCurent) {
    if (popupCurent && unlock) {
        const popupActive = document.querySelector('.popup.is-open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            scrollLock();
        }
        popupCurent.classList.add('is-open');
        popupCurent.addEventListener('click', function(e){
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

if (popupButtonClose.length > 0) {
    popupButtonClose.forEach((button) => {
        button.addEventListener('click', (e) => {
            popupClose(button.closest('.popup'));
            e.preventDefault();
        })
    });
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('is-open');
        if ((doUnlock) && (!document.querySelector('.header__burger').classList.contains('is-active'))) {
            scrollUnlock();
        }
    }
}

document.addEventListener('keydown', function(e) {
    const popupActive = document.querySelector('.popup.is-open');
    if ((e.key === 'Escape' || e.key === 'Esc') && (popupActive)) {
        popupClose(popupActive);
    }
});