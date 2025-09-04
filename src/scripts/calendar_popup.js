document
  .querySelector("#popup-close-btn")
  .addEventListener("click", () => {
    var overlay = document.querySelector("#popup");
    overlay.classList.add("hidden");
  });
