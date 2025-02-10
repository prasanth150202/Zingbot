gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');
let totalWidth = horizontalSection.scrollWidth;

function getXValue() {
    if (window.innerWidth <= 768) { 
        return -(totalWidth - window.innerWidth / 1.1); // Adjust for mobile
    } else {
        return -(totalWidth - window.innerWidth / 1.5); // Default for larger screens
    }
}

gsap.to('.horizontal', {
    x: getXValue,
    ease: "none",
    scrollTrigger: {
        trigger: '.horizontal-scoll-wrapper',
        start: 'top 25%',
        end: () => "+=" + (totalWidth - window.innerWidth / (window.innerWidth <= 768 ? 1 : 1.2)), 
        pin: '.horizontal-scoll-wrapper',
        scrub: 1, 
        markers: false,
        invalidateOnRefresh: true,
    }
});


const toggleButton = document.getElementById('navbar-toggler');
const navbarMenu = document.getElementById('navbarNav');

toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});
