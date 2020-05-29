const msg = new SpeechSynthesisUtterance();
let voices = [];

const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;
console.log(msg);

const populateVoices = function () {
  voices = this.getVoices();
  // filter for english voices only
  const voiceOptions = voices
    .filter((voice) => voice.lang.includes('en'))
    .map(
      ({ name, lang }) => `<option value="${name}">${name} (${lang})</option>`
    )
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
};

// 'e.target.value' is renamed as 'name'
const setVoice = ({ target: { value: name } }) => {
  console.log(`Changing Voice to ${name}`);
  msg.voice = voices.find((voice) => voice.name === name);
  toggle();
};

const toggle = (startOver = true) => {
  speechSynthesis.cancel();
  startOver && speechSynthesis.speak(msg);
};

const setOption = ({ target: { name, value } }) => {
  console.log(name, value);
  msg[name] = value;
  toggle();
};

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach((option) => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);

// stopButton.addEventListener('click', toggle.bind(null, false));
stopButton.addEventListener('click', () => toggle(false));
