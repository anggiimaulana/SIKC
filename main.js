document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".background img");
    let currentImage = 0;

    function changeImage() {
        images.forEach(img => img.style.opacity = 0);
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
    }

    setInterval(changeImage, 4000);
}); 

document.getElementById('polindraLogo').addEventListener('click', function() {
    window.location.href = 'https://polindra.ac.id';
});