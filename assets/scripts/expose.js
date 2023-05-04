// expose.js

window.addEventListener('DOMContentLoaded', init);

const hornSelect = document.getElementById('horn-select');
const volumeSlider = document.getElementById('volume-slider');
const audio = document.querySelector('audio');
const playButton = document.querySelector('button');
const hornImage = document.querySelector('img');

function init() {
  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
}

function updateHorn() {
  const horn = hornSelect.value;
  const hornData = getHornData(horn);
  hornImage.src = hornData.image;
  audio.src = hornData.sound;
}

function getHornData(horn) {
  const horns = {
    airHorn: {
      image: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3'
    },
    carHorn: {
      image: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3'
    },
    partyHorn: {
      image: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3'
    }
  };
  return horns[horn];
}

function updateVolume() {
  const volume = volumeSlider.value;
  const volumeIcon = document.getElementById('volume-image');
  if (volume == 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
    playButton.disabled = true;
  } else {
    playButton.disabled = false;
    if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }
  audio.volume = volume / 100;
}

function playSound() {
  const horn = hornSelect.value;
  const hornData = getHornData(horn);
  audio.src = hornData.sound;
  audio.play();
  if (horn == 'partyHorn') {
    confetti.start();
  }
}
