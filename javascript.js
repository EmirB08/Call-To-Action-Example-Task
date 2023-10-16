let currentImageIndex = 0;
let imageElements = document.querySelectorAll('.multipleimages');
let interval;

function changeImage() {
    imageElements[currentImageIndex].classList.remove('active');
    currentImageIndex++;
    if (currentImageIndex >= imageElements.length) {
        currentImageIndex = 0;
    }
    imageElements[currentImageIndex].classList.add('active');
}

function handleTransitions() {
    if (window.innerWidth > 768) {
        if (!interval) {
            interval = setInterval(changeImage, 12000);
        }
    } else {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }
}
handleTransitions();
window.addEventListener('resize', handleTransitions);