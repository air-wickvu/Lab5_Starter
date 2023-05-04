// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO: Set up event listeners and fetch elements
  const hornSelect = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playButton = document.querySelector("button");
  const hornImage = document.querySelector("img");
  const audioElement = document.querySelector("audio");
  const volumeIcons = document.querySelectorAll("div > img");
  
  // Load audio files
  const airHornSound = new Audio("assets/audio/air-horn.mp3");
  const carHornSound = new Audio("assets/audio/car-horn.mp3");
  const partyHornSound = new Audio("assets/audio/party-horn.mp3");
  
  // Set volume icons
  const volumeIconArray = Array.from(volumeIcons);
  const volume0Icon = volumeIconArray[0];
  const volume1Icon = volumeIconArray[1];
  const volume2Icon = volumeIconArray[2];
  
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
  
  volumeSlider.addEventListener('input', () => {
    // Set the volume icon based on the volume level
    const volumeLevel = volumeSlider.value;
    if (volumeLevel == 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
      honkButton.disabled = true; // disable the honk button if volume is muted
    } else if (volumeLevel < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
      honkButton.disabled = false;
    } else if (volumeLevel < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
      honkButton.disabled = false;
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
      honkButton.disabled = false;
    }
      // Set the volume of the audio element
      audio.volume = volumeLevel / 100;
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
