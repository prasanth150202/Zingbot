
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".marketing-tabs button");
  const contents = document.querySelectorAll(".features-content");
  const image = document.getElementById("tab-image");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          // Remove active class from all buttons
          buttons.forEach(btn => btn.classList.remove("gradientbutton"));
          this.classList.add("gradientbutton");

          // Hide all content sections
          contents.forEach(content => content.classList.remove("active"));

          // Show the corresponding content
          const tabId = this.getAttribute("data-tab");
          document.getElementById(tabId).classList.add("active");

          // Change the image based on the active tab
          const imageSource = this.getAttribute("data-image");
          image.src = imageSource;
      });
  });
});


const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.getElementById('navbarNav');
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});



$(document).ready(function(){
    $('.logo-slider').slick({
        slidesToShow: 5,   // Number of logos visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        infinite: true,
        speed: 4000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        cssEase: 'linear',
        variableWidth: true // Allows smooth transition without gaps
    });
});


function startCounterAnimation(counter) {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // Adjust speed here (Lower is faster)
    const step = target / speed;

    let count = 0;
    function updateCount() {
        if (count < target) {
            count += step;
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount); // Smooth animation
        } else {
            counter.innerText = target; // Ensure final exact value
        }
    }
    updateCount();
}

// Observer to trigger animation when visible
const counters = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounterAnimation(entry.target);
            observer.unobserve(entry.target); // Stop observing after animation starts
        }
    });
}, { threshold: 0.5 }); // 50% visibility to start

counters.forEach(counter => observer.observe(counter));


document.querySelectorAll(".click-animation").forEach((element) => {
    element.addEventListener("click", function (e) {
        let ripple = document.createElement("span");
        ripple.classList.add("ripple");

        let rect = element.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left - 50}px`;
        ripple.style.top = `${e.clientY - rect.top - 50}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
