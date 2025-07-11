document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.feedback-slide');
  const navButtonsContainer = document.querySelector('.nav-buttons');
  let currentIndex = 0;
  const slideCount = slides.length;
  const intervalTime = 5000; // 5 seconds
  let slideInterval;

  // Dynamically create nav buttons based on slides
  function createNavButtons() {
    navButtonsContainer.innerHTML = '';
    for (let i = 0; i < slideCount; i++) {
      const btn = document.createElement('button');
      btn.classList.add('nav-btn');
      if (i === 0) btn.classList.add('active');
      btn.setAttribute('data-index', i);
      btn.setAttribute('aria-label', `Slide ${i + 1}`);
      navButtonsContainer.appendChild(btn);
    }
  }

  function showSlide(index) {
    console.log('Showing slide:', index); // Debug log
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      // Debugging: Log active slide content to verify display
      if (i === index) {
        console.log(`Active slide content for index ${i}:`, slide.innerHTML);
      }
    });
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      console.log(`Nav button ${i} active:`, btn.classList.contains('active')); // Debug log
    });
    currentIndex = index;
  }

  function nextSlide() {
    let nextIndex = (currentIndex + 1) % slideCount;
    showSlide(nextIndex);
  }

  function setupNavButtons() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        console.log('Nav button clicked:', btn.getAttribute('data-index')); // Debug log
        clearInterval(slideInterval);
        const index = parseInt(btn.getAttribute('data-index'));
        showSlide(index);
        // Restart slideshow interval after manual navigation
        slideInterval = setInterval(nextSlide, intervalTime);
      });
    });
  }

  createNavButtons();
  setupNavButtons();
  showSlide(currentIndex); // Display the initial slide
  slideInterval = setInterval(nextSlide, intervalTime);
});
