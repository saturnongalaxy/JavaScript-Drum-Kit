function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;

  audio.play();
  key.classList.add("playing");
}

function changeVolume() {
  const input = document.getElementById("vol");

  let curVol = document.getElementById("currentVolume");
  curVol.innerHTML = input.value;
  // console.log(input.value);
  const audioElements = document.querySelectorAll(".myAudio");
  audioElements.forEach((audio) => {
    audio.volume = input.value;
  });
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
