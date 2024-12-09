// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Function to update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    // Determine the current section in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove and add the active class
    navLinks.forEach((link) => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.parentElement.classList.add('active');
        }
    });
});

// Select the line element
const line = document.querySelector('.line2');

// Function to set a random animation duration between 3s and 5s
function randomizeAnimation() {
    const randomDuration = Math.random() * (5 - 3) + 3; // Random duration between 3 and 5 seconds
    const randomDelay = Math.random() * 2; // Random delay between 0 and 2 seconds
    line.style.animationDuration = `${randomDuration}s`;
    line.style.animationDelay = `${randomDelay}s`;
}

// Apply the randomization initially
randomizeAnimation();

// Select the link
const link = document.querySelector('.Dexscreener');

// Disable the link
link.classList.add('disabled');

// Re-enable the link (optional)
setTimeout(() => {
    link.classList.remove('disabled');
}, 100000000000);
