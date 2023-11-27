//first significant feature: footer popping up when you reach the bottom of the page

document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector('.footer');
  
    function updateFooterVisibility() {
      var scrollPosition = window.scrollY;
  
      var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
      footer.classList.toggle('footer-hidden', scrollPosition < maxScroll);
    }
  
    window.addEventListener('scroll', updateFooterVisibility);
    window.addEventListener('resize', updateFooterVisibility);
  
    updateFooterVisibility();
  });
  
  const lines = document.querySelectorAll('.line');
let currentIndex = 0;

//second significant feature: "piper is a" rotation code

function showNextLine() {
    const currentLine = lines[currentIndex];
    const nextIndex = (currentIndex + 1) % lines.length;
    const nextLine = lines[nextIndex];

    currentLine.style.opacity = 0;
    nextLine.style.opacity = 1;

    currentIndex = nextIndex;
}

lines[currentIndex].style.opacity = 1;

setInterval(showNextLine, 3500);