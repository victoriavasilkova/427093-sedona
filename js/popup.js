var button = document.querySelector(".button-booking");
var popup = document.querySelector(".modal");
var entrancedate = popup.querySelector("[name=entrancedate]");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  entrancedate.focus();
});
