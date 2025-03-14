let currentIndex = 0;
const slides = document.querySelectorAll('.game-item');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const carouselItems = document.querySelector('.carousel-items');
    const offset = -currentIndex * 100; // Mover el carrusel para mostrar la imagen actual
    carouselItems.style.transform = `translateX(${offset}%)`;
}
