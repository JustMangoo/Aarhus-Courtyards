const carouselItems = document.querySelectorAll(".carousel-item");
const navSections = document.querySelectorAll(
  ".carousel-navigation .nav-section"
);
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const carousel = document.querySelector(".carousel"); // Select the carousel element
let currentIndex = 0;
let itemWidth; // Store the width of a carousel item

function setItemWidth() {
  itemWidth = carouselItems[0].offsetWidth;
}

function showSlide(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index >= carouselItems.length) {
    index = 0;
  }

  carouselItems.forEach((item) => item.classList.remove("active"));
  navSections.forEach((section) => section.classList.remove("active"));

  carouselItems[index].classList.add("active");
  navSections[index].classList.add("active");
  currentIndex = index;

  // Calculate and apply the transform
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

window.addEventListener("resize", setItemWidth);
setItemWidth();
showSlide(currentIndex); // Initialize on load
