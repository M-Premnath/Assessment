// main.js

// Function to handle scroll event
function handleScroll() {
    var nav = document.getElementById('nav');
    if (window.scrollY > 0) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  
  // Add event listener to window scroll
  window.addEventListener('scroll', handleScroll);