const startRecordingButton = document.getElementById('start-recording');
const transcriptionElement = document.getElementById('transcription');

let recognition;

function startSpeechRecognition() {
  if (!('SpeechRecognition' in window)) {
    alert('Speech recognition is not supported by your browser.');
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = 'en-US'; // Change to your preferred language code
  recognition.interimResults = true; // Display interim results

  recognition.onstart = () => {
    startRecordingButton.textContent = 'Stop Recording';
    transcriptionElement.textContent = ''; // Clear previous transcription
  };

  recognition.onresult = event => {
    const transcript = Array.from(event.results)
      .map(result => result[0].transcript)
      .join('');
    transcriptionElement.textContent = transcript;
  };

  recognition.onerror = error => {
    console.error('Error:', error);
    alert('An error occurred during speech recognition.');
  };

  recognition.onend = () => {
    startRecordingButton.textContent = 'Start Recording';
  };

  recognition.start();
}

startRecordingButton.addEventListener('click', startSpeechRecognition);
