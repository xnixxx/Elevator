const burger = document.querySelector('.burger-menu');
const overlay = document.querySelector('.side-nav');

burger.addEventListener('click', () => {
    overlay.classList.toggle('active');
});

// Close the side navigation when a link is clicked
const navLinks = document.querySelectorAll('.sNav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});