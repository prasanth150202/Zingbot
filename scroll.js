gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');
let totalWidth = horizontalSection.scrollWidth;

// Adjust end position to stop when the last card is centered
gsap.to('.horizontal', {
    x: () => -(totalWidth - window.innerWidth /1.2), // Stop when last card is in center
    ease: "none",
    scrollTrigger: {
        trigger: '.horizontal-scoll-wrapper',
        start: 'top top',
        end: () => "+=" + (totalWidth - window.innerWidth / 1.5), // Stop sooner so footer appears
        pin: '.horizontal-scoll-wrapper',
        scrub: 1,  // Smooth scrolling
        markers: false, // Hide debugging markers
        invalidateOnRefresh: true,
    }
});
