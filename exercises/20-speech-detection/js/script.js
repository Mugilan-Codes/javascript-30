window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((res) => res.transcript)
    .join('');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }

  if (transcript.includes('my name')) {
    console.log('Mugilan');
  }

  if (transcript.includes('get the weather')) {
    console.log('Getting the Weather...');
  }

  console.log(transcript);
});

recognition.addEventListener('end', recognition.start);

recognition.start();
