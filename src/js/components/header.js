import { scrollLock, scrollUnlock } from './functions.js';

const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

function openMenu() {
    scrollLock();
    headerMenu.classList.add('is-active');
    headerBurger.classList.add('is-active');
}

function closeMenu() {
    scrollUnlock();
    headerMenu.classList.remove('is-active');
    headerBurger.classList.remove('is-active');
}

headerBurger.addEventListener('click', () => {
	if (headerBurger.classList.contains('is-active')) {
		closeMenu();
	} else {
		openMenu();
	}
});

document.addEventListener('keydown', function(e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && (headerBurger.classList.contains('is-active'))) {
        scrollUnlock();
        closeMenu();
    }
});