// Add the current year to every footer.
document.addEventListener('DOMContentLoaded', function () {
    const year = document.querySelector('#current-year');
    if (year) year.textContent = new Date().getFullYear();

    // Open and close the small-screen menu.
    const menuButton = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');
    if (menuButton && mainNav) {
        menuButton.addEventListener('click', function () {
            const menuIsOpen = mainNav.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', menuIsOpen);
            menuButton.setAttribute('aria-label', menuIsOpen ? 'Close menu' : 'Open menu');
        });
    }
});

// Check the contact form before showing a message.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        const formMessage = document.querySelector('#form-error');

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please complete all fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you. Your enquiry is ready to be sent.';
            formMessage.style.color = 'green';
        }
    });
}

// Move the gallery photo automatically until a slide button is used.
const slides = document.querySelectorAll('.slide');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
let slideNumber = 0;
let slideshowRunning = true;

function showSlide(number) {
    slides.forEach(function (slide) { slide.classList.remove('active'); });
    if (slides.length > 0) slides[number].classList.add('active');
}

function moveSlide(step) {
    if (slides.length === 0) return;
    slideNumber = slideNumber + step;
    if (slideNumber >= slides.length) slideNumber = 0;
    if (slideNumber < 0) slideNumber = slides.length - 1;
    showSlide(slideNumber);
}

if (slides.length > 0) {
    setInterval(function () {
        if (slideshowRunning) moveSlide(1);
    }, 3500);
}

if (previousButton) {
    previousButton.addEventListener('click', function () {
        slideshowRunning = false;
        moveSlide(-1);
    });
}

if (nextButton) {
    nextButton.addEventListener('click', function () {
        slideshowRunning = false;
        moveSlide(1);
    });
}
