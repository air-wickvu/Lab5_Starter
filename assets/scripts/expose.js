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
  
  // Set volume level and icon based on slider value
  volumeSlider.addEventListener("input", () => {
    const volumeValue = volumeSlider.value;
    if (volumeValue == 0) {
      volume0Icon.style.display = "inline-block";
      volume1Icon.style.display = "none";
      volume2Icon.style.display = "none";
    } else if (volumeValue < 33) {
      volume0Icon.style.display = "none";
      volume1Icon.style.display = "inline-block";
      volume2Icon.style.display = "none";
    } else if (volumeValue < 67) {
      volume0Icon.style.display = "none";
      volume1Icon.style.display = "none";
      volume2Icon.style.display = "inline-block";
    } else {
      volume0Icon.style.display = "none";
      volume1Icon.style.display = "none";
      volume2Icon.style.display = "inline-block";
    }
    audioElement.volume = volumeValue / 100;
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
