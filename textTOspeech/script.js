const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');

speakButton.addEventListener('click', () => {
  const text = textInput.value;

  if (text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  } else {
    alert('Please enter some text to convert.');
  }
});
