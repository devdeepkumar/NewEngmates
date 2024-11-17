window.addEventListener("load", () => {
  const preloader = document.querySelector("#back__preloader");
  preloader.style.display = "none";
});



// Select the required elements
const menue = document.querySelector(".menue");
const mobileNav = document.querySelector(".mobile_nav");
const closeBtn = document.querySelector(".close_btn");

// Initialize transition properties
mobileNav.style.transition = "opacity 0.3s ease, transform 0.3s ease";
mobileNav.style.opacity = "0";
mobileNav.style.transform = "translateX(100%)"; // Start off-screen to the right
mobileNav.style.visibility = "hidden"; // Prevent interaction initially

// Function to show the mobile navigation
menue.addEventListener("click", () => {
  mobileNav.style.opacity = "1";
  mobileNav.style.transform = "translateX(0)"; // Move into view
  mobileNav.style.visibility = "visible"; // Allow interaction
});

// Function to hide the mobile navigation
closeBtn.addEventListener("click", () => {
  mobileNav.style.opacity = "0";
  mobileNav.style.transform = "translateX(100%)"; // Move out of view to the right
  setTimeout(() => {
    mobileNav.style.visibility = "hidden"; // Delay visibility change to match transition
  }, 300); // Match this duration to the transition time
});

// // Select the header and hero section
// const header = document.querySelector('.sticky');
// const heroSection = document.querySelector('.hero');

// // Create the Intersection Observer
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         // If hero is visible at more than 50%, set header to absolute
//         header.style.position = 'absolute';
//       } else {
//         // If hero is scrolled past 50%, set header to fixed
//         header.style.position = 'fixed';
//         header.style.top = '0';
//         header.style.zIndex = '1000'; // Ensure it's on top
//         header.style.transition = ".4s";
//          header.style.animation =
//            "400ms ease-in-out 0s normal none 1 running fadeInDown";

//       }
//     });
//   },
//   {
//     threshold: 0.5, // Trigger when 50% of the hero section is visible
//   }
// );

// // Observe the hero section
// observer.observe(heroSection);

// Testimonial JavaScript Started here

const container = document.querySelector(".testimonial-container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let currentIndex = 0;

// Function to update slider position
function updateSlider() {
  const cardWidth = document.querySelector(".testimonial-card").clientWidth;
  const gap = 20; // Gap between cards
  container.style.transform = `translateX(-${
    (cardWidth + gap) * currentIndex
  }px)`;
}

// Right arrow click event
rightArrow.addEventListener("click", () => {
  const totalCards = document.querySelectorAll(".testimonial-card").length;
  const visibleCards = window.innerWidth > 768 ? 2 : 1;

  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSlider();
  }
});

// Left arrow click event
leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Ensure slider updates on window resize
window.addEventListener("resize", () => {
  updateSlider();
});

// Initial setup
updateSlider();
