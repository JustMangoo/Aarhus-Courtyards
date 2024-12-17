const viewSwitchOptions = document.querySelectorAll(".view-switch p");

viewSwitchOptions.forEach((option) => {
  option.addEventListener("click", () => {
    viewSwitchOptions.forEach((otherOption) => {
      otherOption.classList.remove("active");
    });
    option.classList.add("active");

    if (option.textContent === "Grid") {
      document.getElementById("grid-view").style.display = "grid";
      document.getElementById("map-view").style.display = "none";
    } else if (option.textContent === "Map") {
      document.getElementById("grid-view").style.display = "none";
      document.getElementById("map-view").style.display = "flex";
    }
  });
});
