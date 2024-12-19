const form = document.getElementById("courtyard-form");
const popup = document.getElementById("popup");
const closeButton = popup.querySelector(".close-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  popup.style.display = "block";
  form.reset();
});

closeButton.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});
