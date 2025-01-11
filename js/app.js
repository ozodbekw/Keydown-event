const elBtnKey = document.querySelector("#keyElement");

document.addEventListener("keydown", function (event) {
  elBtnKey.textContent = event.key;
  const audio = new Audio("../assets/spacebar-click-keyboard-199448.mp3"); 
  audio.play();
});
