// explore.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  // Get the necessary elements from the DOM
  const selectVoice = document.querySelector('#voice-select');
  const textInput = document.querySelector('#text-to-speak');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  // Populate the "Select Voice" dropdown with available voices
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('value', i);
      selectVoice.appendChild(option);
    }
  }

  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  // Speak the text when the button is clicked
  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    utterance.voice = voices[selectVoice.value];
    synth.speak(utterance);

    // Change the face to open mouthed while speaking
    faceImage.setAttribute('src', 'assets/images/smiling-open.png');
    utterance.onend = () => {
      faceImage.setAttribute('src', 'assets/images/smiling.png');
    }
  });
}
