var switcher = document.querySelector(".form-switch");
var popup = document.querySelector(".search-form");

switcher.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search-form-on");
});
