// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO: Set up event listeners and fetch elements
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playButton = document.querySelector("button");
  const hornImage = document.querySelector("img");
  const audioElement = document.querySelector("audio");
  const volumeIcon = document.querySelector("[src='assets/icons/volume-level-2.svg']");
  // Load audio files
  const airHornSound = new Audio("assets/audio/air-horn.mp3");
  const carHornSound = new Audio("assets/audio/car-horn.mp3");
  const partyHornSound = new Audio("assets/audio/party-horn.mp3");
  
  
  // Set horn image and audio based on selection
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;
    switch (selectedHorn) {
      case "air-horn":
        hornImage.src = "assets/images/air-horn.svg";
        audioElement.src = airHornSound.src;
        break;
      case "car-horn":
        hornImage.src = "assets/images/car-horn.svg";
        audioElement.src = carHornSound.src;
        break;
      case "party-horn":
        hornImage.src = "assets/images/party-horn.svg";
        audioElement.src = partyHornSound.src;
        break;
      default:
        break;
    }
  });
  
  // Set volume level and icon based on slider value
  volumeSlider.addEventListener("input", () => {
    const volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100;
    if (volumeValue == 0) {

      volumeIcon.src = "assets/icons/volume-level-0.svg";

    } else if (volumeValue < 33) {

      volumeIcon.src = "assets/icons/volume-level-1.svg";

    } else if (volumeValue < 67) {

      volumeIcon.src = "assets/icons/volume-level-2.svg";

    } else {

      volumeIcon.src = "assets/icons/volume-level-3.svg";

    }
    
  });
  
  
  // Play audio and display confetti if Party Horn is selected
  playButton.addEventListener("click", () => {
    audioElement.play();
    if (hornSelect.value === "party-horn") {
      confetti.start();
      setTimeout(() => {
        confetti.stop();
      }, 3000);
    }
  });
}