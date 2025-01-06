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
mobileNav.style.transform = "translateX(0%)"; // Start off-screen to the right
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
  mobileNav.style.transform = "translateX(0%)"; // Move out of view to the right
  setTimeout(() => {
    mobileNav.style.visibility = "hidden"; // Delay visibility change to match transition
  }, 300); // Match this duration to the transition time
});

// Select the header and hero section
const header = document.querySelector('.sticky');
const heroSection = document.querySelector('.hero');

// Create the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If hero is visible at more than 50%, set header to absolute
        header.style.position = 'absolute';
      } else {
        // If hero is scrolled past 50%, set header to fixed
        header.style.position = 'fixed';
        header.style.backgroundColor = "rgb(240, 226, 229)";
        header.style.top = '0'; 
        header.style.left = "0";
        header.style.zIndex = '1000'; // Ensure it's on top
        header.style.transition = ".4s";
        header.style.animation =
           "500ms ease-in-out 0s normal none 1 running fadeInDown";

      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the hero section is visible
  }
);

// Observe the hero section
observer.observe(heroSection);






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







// Faq JS  

document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", () => {
    const currentFaq = question.parentNode; // Parent .faq element
    const allFaqs = document.querySelectorAll(".faq");

    // Close all other FAQs
    allFaqs.forEach((faq) => {
      if (faq !== currentFaq) {
        faq.classList.remove("active");
      }
    });

    // Toggle the current FAQ
    currentFaq.classList.toggle("active");
  });
});



 const accordionButtons = document.querySelectorAll(".accordion-button");

 accordionButtons.forEach((button) => {
   button.addEventListener("click", () => {
     const content = button.nextElementSibling; // The accordion content
     const icon = button.querySelector(".accordion-icon"); // The arrow icon

     // Toggle the 'show' class for the content and 'rotate' class for the icon
     content.classList.toggle("show");
     icon.classList.toggle("rotate");

     // Optional: Collapse other accordions when one is opened
     accordionButtons.forEach((otherButton) => {
       if (otherButton !== button) {
         const otherContent = otherButton.nextElementSibling;
         const otherIcon = otherButton.querySelector(".accordion-icon");
         otherContent?.classList.remove("show");
         otherIcon?.classList.remove("rotate");
       }
     });
   });
 });




 // Get the "Load More" button and all hidden accordion items
  const loadMoreButton = document.getElementById("load_more");
  const hiddenAccordions = document.querySelectorAll(".hidden_accordion");

  // Add click event listener to the "Load More" button
  loadMoreButton.addEventListener("click", () => {
    // Loop through hidden accordions and make them visible
    hiddenAccordions.forEach((accordion) => {
      accordion.classList.toggle("show");
    });

    // Hide the "Load More" button after revealing accordions
    loadMoreButton.style.display = "none";
  });



 // Select all Read More links
  const readMoreLinks = document.querySelectorAll('.read-more');

  // Loop through each Read More link and add a click event
  readMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Find the corresponding more-text span element
      const moreText = link.previousElementSibling; // The .more-text sibling
      const isTextVisible = moreText.style.display === 'inline';

      // Toggle the visibility of the extra text
      moreText.style.display = isTextVisible ? 'none' : 'inline';

      // Change the link text based on the state
      link.textContent = isTextVisible ? 'Read More' : 'Read Less';
    });
  });




  
//open modal
function openModal(modalId) {
  // document.body.style.overflow = "hidden";
  const backdrop = document.getElementById(`${modalId}-backdrop`);
  const container = document.getElementById(`${modalId}-container`);
  const modalWrapper = container.querySelector(".modal-wrapper");

  // Remove hiding class if present
  backdrop.classList.remove("hiding");
  container.classList.remove("hiding");

  // Show modal
  backdrop.classList.add("show");
  container.classList.add("show");

  // Add click event listener to the modal wrapper
  modalWrapper.addEventListener("click", (event) => {
    // If clicked element is the modal wrapper (the outer area)
    if (event.target === modalWrapper) {
      closeModal(modalId);
    }
  });
}

//close modal
function closeModal(modalId) {
  const backdrop = document.getElementById(`${modalId}-backdrop`);
  const container = document.getElementById(`${modalId}-container`);

  // Add hiding class for close animation
  backdrop.classList.add("hiding");
  container.classList.add("hiding");

  // Remove show class after animation
  setTimeout(() => {
    backdrop.classList.remove("show");
    container.classList.remove("show");
    backdrop.classList.remove("hiding");
    container.classList.remove("hiding");
    document.body.style.overflow = "unset";
  }, 300);
}




document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".courses_card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");

      // Filter cards
      cards.forEach((card) => {
        // Check if the card has the selected filter class
        if (filter === "*" || card.classList.contains(filter.substring(1))) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    });
  });

  // Trigger "All" filter on load
  document.querySelector(".filter.active").click();
});







