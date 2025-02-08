let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel img').length;
    
    if (index >= totalSlides) {
        currentIndex = 0; // Zurück zum ersten Bild
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Zum letzten Bild springen
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optional: Automatisches Weiterscrollen alle 3 Sekunden
setInterval(nextSlide, 3000);
