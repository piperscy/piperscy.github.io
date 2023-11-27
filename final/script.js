document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector('.footer');
  
    function updateFooterVisibility() {
      // Calculate the scroll position
      var scrollPosition = window.scrollY;
  
      // Calculate the maximum scroll position to trigger the footer
      var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
      // Toggle the class based on the scroll position
      footer.classList.toggle('footer-hidden', scrollPosition < maxScroll);
    }
  
    // Add an event listener for scroll events
    window.addEventListener('scroll', updateFooterVisibility);
  
    // Add an event listener for page resize events
    window.addEventListener('resize', updateFooterVisibility);
  
    // Initial check to handle page load scenarios
    updateFooterVisibility();
  });
  
  const lines = document.querySelectorAll('.line');
let currentIndex = 0;

function showNextLine() {
    const currentLine = lines[currentIndex];
    const nextIndex = (currentIndex + 1) % lines.length;
    const nextLine = lines[nextIndex];

    currentLine.style.opacity = 0;
    nextLine.style.opacity = 1;

    currentIndex = nextIndex;
}

// Show the first line initially
lines[currentIndex].style.opacity = 1;

setInterval(showNextLine, 3500);