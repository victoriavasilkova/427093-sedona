var button = document.querySelector(".button-booking");
var popup = document.querySelector(".modal");
var entrancedate = popup.querySelector("[name=entrancedate]");
var departuredate = popup.querySelector("[name=departuredate]");

var form = document.querySelector("form");




button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  entrancedate.focus();
});


form.addEventListener("submit", function(evt) {
  if (!entrancedate.value || !departuredate.value) {
    evt.preventDefault();
    popup.classList.add("modal-error")
  }
});
