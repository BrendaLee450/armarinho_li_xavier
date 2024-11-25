function scrollCarousel(direction) {
    const carousel = document.querySelector('.card-carousel');
    const scrollAmount = direction * carousel.clientWidth * 0.8;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}