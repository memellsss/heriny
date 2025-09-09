document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');

    let currentSlideIndex = 0;

    const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${targetIndex * 100}%)`;
        currentSlideIndex = targetIndex;
    };

    nextButton.addEventListener('click', () => {
        const nextIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(nextIndex);
    });

    prevButton.addEventListener('click', () => {
        const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        moveToSlide(prevIndex);
    });
});