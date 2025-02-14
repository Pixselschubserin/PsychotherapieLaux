let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel img");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");
    const slideWidth = document.querySelector(".carousel-container").clientWidth; // Breite des Containers abrufen

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
setInterval(nextSlide, 3000);

// Falls sich die Fenstergröße ändert, die Position korrigieren
window.addEventListener("resize", () => showSlide(currentIndex));

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll("h3");

    faqItems.forEach((item) => {
    const question = item.querySelector("h3");

            question.addEventListener("click", () => {
                item.classList.toggle("active");
            });
        });
    });
