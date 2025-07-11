document.addEventListener('DOMContentLoaded', () => {
  const slideshowContainer = document.querySelector('.slideshow-container');
  const images = [
    'Photos/Header/hero image 1.jpeg',
    'Photos/Header/hero image 2.jpg',
    'Photos/Header/hero image 3.jpg',
    'Photos/Header/hero image 4.jpg'
  ];
  let currentIndex = 0;

  function showSlide(index) {
    slideshowContainer.style.backgroundImage = `url('${images[index]}')`;
    slideshowContainer.style.backgroundSize = 'cover'; // ensure image fills container
    slideshowContainer.style.backgroundPosition = 'center';
    slideshowContainer.style.transition = 'background-image 1s ease-in-out';
    slideshowContainer.style.animation = 'kenburns 20s ease-in-out infinite';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 4000);
});
