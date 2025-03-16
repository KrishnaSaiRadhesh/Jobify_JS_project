const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const imageWidth = images[0].clientWidth + 20; // Including margin
const totalImages = images.length / 2; // Since images are duplicated for infinite effect

// Function to move the carousel
function updateCarousel() {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

// Move to the next image
nextBtn.addEventListener('click', () => {
    if (index >= totalImages) {
        index = 0;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(0px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            index++;
            updateCarousel();
        }, 50);
    } else {
        index++;
        updateCarousel();
    }
});

// Move to the previous image
prevBtn.addEventListener('click', () => {
    if (index <= 0) {
        index = totalImages;
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(${-index * imageWidth}px)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            index--;
            updateCarousel();
        }, 50);
    } else {
        index--;
        updateCarousel();
    }
});

// Autoplay function
function autoplay() {
    setInterval(() => {
        nextBtn.click();
    }, 3000); // Change image every 3 seconds
}

autoplay();
