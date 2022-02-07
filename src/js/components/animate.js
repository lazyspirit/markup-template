const animateElements = document.querySelectorAll('.is-animate');
if (animateElements.length > 0) {
    window.addEventListener('scroll', animateScroll);
    function animateScroll() {
        animateElements.forEach((animateElement) => {
            const animateElementHeight = animateElement.offsetHeight;
            const animateElementOffset = offset(animateElement).top;
            const amimateStart = 4;
            let animateElementPoint = window.innerHeight - animateElementHeight / amimateStart;
            if (animateElementHeight > window.innerHeight) {
                animateElementPoint = window.innerHeight - window.innerHeight / amimateStart;
            }
            if ((pageYOffset > animateElementOffset - animateElementPoint) && pageYOffset < (animateElementOffset + animateElementHeight)) {
                animateElement.classList.add('is-active');
            } else {
                if (animateElement.classList.contains('is-once')) {
                 animateElement.classList.remove('is-active');
                }
            }
        });
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animateScroll();
}