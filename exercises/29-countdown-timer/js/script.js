let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');

const timer = (seconds) => {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      console.log('Finished');
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
};

const displayTimeLeft = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const display =
    hours < 1
      ? `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds
        }`
      : `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;

  timerDisplay.textContent = display;
  document.title = display;
};

const displayEndTime = (timestamp) => {
  const end = new Date(timestamp);

  const hour = end.getHours();
  const minute = end.getMinutes();
  const timeOfDay = hour < 12 ? 'am' : 'pm';

  const adjustedHour = hour === 0 ? 12 : hour;

  endTimeDisplay.textContent = `Be back at ${
    adjustedHour < 10 ? `0${adjustedHour}` : adjustedHour
  }:${minute < 10 ? `0${minute}` : minute} ${timeOfDay}`;
};

const startTimer = (e) => {
  //   const seconds = Number(e.target.dataset.time);
  const seconds = parseInt(e.target.dataset.time);

  timer(seconds);
};

buttons.forEach((btn) => btn.addEventListener('click', startTimer));

//* Works only when there is a 'name' attibute
document.customForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const mins = this.minutes.value;
  console.log(mins);

  timer(mins * 60);

  this.reset();
});
