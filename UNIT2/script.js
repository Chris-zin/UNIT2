document.addEventListener("DOMContentLoaded", function() {
    const slideshowBtn = document.getElementById("slideshowBtn");
    const slideshowDiv = document.querySelector(".slideshow");
    const imagesDiv = document.querySelector(".images");
    const secondSlideShowDiv = document.querySelector(".SecondSlideShow");

    secondSlideShowDiv.style.display = "none";
    imagesDiv.style.display = "flex";

    slideshowBtn.addEventListener("click", function() {
        if (imagesDiv.style.display !== "none") {
            imagesDiv.style.display = "none";
            secondSlideShowDiv.style.display = "block";
        } else {
            imagesDiv.style.display = "flex";
            secondSlideShowDiv.style.display = "none";
        }
    });
    setInterval(nextSlide, 3000);
});

let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slides");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    const sliderContainer = document.querySelector(".slidersSec");
    sliderContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();
