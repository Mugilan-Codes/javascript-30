let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTimeDisplay = document.querySelector('.display__end-time');

const timer = (seconds) => {
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

  const display = `${hours < 10 ? `0${hours}` : hours}:${
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
