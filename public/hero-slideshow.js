document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide-image');

  function showSlides() {
    slides.forEach((slide, index) => {
      slide.style.opacity = '0';
      slide.style.zIndex = '0';
    });
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.opacity = '1';
    slides[slideIndex - 1].style.zIndex = '1';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
  }

  if (slides.length > 0) {
    showSlides();
  }
});
