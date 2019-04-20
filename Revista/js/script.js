var menu = document.querySelector(".modal_open");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal_close");

menu.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal_show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal_show")) {
      popup.classList.remove("modal_show");
    }
  }
});
