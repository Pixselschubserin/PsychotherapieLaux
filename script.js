let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");
    const slideWidth = document.querySelector(".carousel-container").offsetWidth; // Breite des Karussells abrufen

    if (index >= totalSlides) {
        currentIndex = 0; // Zurück zum ersten Bild
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Zum letzten Bild springen
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatisches Weiterscrollen alle 4 Sekunden
setInterval(nextSlide, 4000);

// Anpassen, falls sich die Fenstergröße ändert
window.addEventListener("resize", () => showSlide(currentIndex));
