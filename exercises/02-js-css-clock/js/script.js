const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital');

const calcDegree = (unit, fraction) => {
  return (unit / fraction) * 360 + 90;
};

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDeg = calcDegree(seconds, 60);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  if (secondsDeg === 444) {
    secondHand.classList.add('no-transition');
  } else if (secondsDeg === 96) {
    secondHand.classList.remove('no-transition');
  }

  const minutes = now.getMinutes();
  const minutesDeg = calcDegree(minutes, 60) + (seconds * 6) / 60;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = calcDegree(hours, 12) + (minutes * 30) / 60;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  digitalClock.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
};

setInterval(setDate, 500);

setDate();
