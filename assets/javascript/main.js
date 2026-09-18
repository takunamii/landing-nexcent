const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');

const MOBILE_BREAKPOINT = 1100;

function openMenu() {
    burger.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
    nav.classList.add('is-open');
}

function closeMenu() {
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    nav.classList.remove('is-open');
}

burger.addEventListener('click', () => {
    if (burger.classList.contains('is-open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        closeMenu();
    }
});

document.addEventListener('click', (event) => {
    if (!burger.classList.contains('is-open')) return;
    if (!event.target.closest('.header__nav') && !event.target.closest('.burger')) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && burger.classList.contains('is-open')) {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
    }
});

const track = document.querySelector('.hero__track');
const dots = Array.from(document.querySelectorAll('.hero__dot'));
const AUTOPLAY_DELAY = 5000;
const AUTOPLAY_ENABLED = false;

let currentSlide = 0;
let autoplayTimer = null;

function goToSlide(index) {
    currentSlide = (index + dots.length) % dots.length;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === currentSlide);
        dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
    });
}

function startAutoplay() {
    if (!AUTOPLAY_ENABLED || autoplayTimer !== null) return;
    autoplayTimer = setInterval(() => goToSlide(currentSlide + 1), AUTOPLAY_DELAY);
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index);
        stopAutoplay();
    });
});

const heroSlider = document.querySelector('.hero__slider');

heroSlider.addEventListener('mouseenter', stopAutoplay);
heroSlider.addEventListener('mouseleave', startAutoplay);

goToSlide(0);
startAutoplay();
