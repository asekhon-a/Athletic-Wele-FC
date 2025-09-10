// Smooth scroll with sticky header offset
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = document.getElementById('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

// Achievements Carousel
let carouselIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('next').addEventListener('click', () => {
  items[carouselIndex].classList.remove('active');
  carouselIndex = (carouselIndex + 1) % totalItems;
  items[carouselIndex].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  items[carouselIndex].classList.remove('active');
  carouselIndex = (carouselIndex - 1 + totalItems) % totalItems;
  items[carouselIndex].classList.add('active');
});

// Photo Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

document.querySelector('.photo-slider .next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});

document.querySelector('.photo-slider .prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

// Initialize first slide
showSlide(slideIndex);

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

