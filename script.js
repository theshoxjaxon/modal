const elBtn = document.querySelector(".show-modal");
const elModal = document.querySelector(".hidden");
const elCloseBtn = document.querySelector(".close-modal");
const elBgView = document.querySelector(".overlay");
elBtn.addEventListener("click", function () {
  elModal.classList.remove("hidden");
  elBgView.classList.remove("hidden");
});
elCloseBtn.addEventListener("click", function () {
  elModal.classList.add("hidden");
  elBgView.classList.add("hidden");
});
document.addEventListener("keydown", function (keyboard) {
  if (keyboard.keyCode === 27) {
    elModal.classList.add("hidden");
    elBgView.classList.add("hidden");
  }
});
