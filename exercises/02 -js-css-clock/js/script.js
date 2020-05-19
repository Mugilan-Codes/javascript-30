const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

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

  // todo Minute Hand Glitch
  const minutes = now.getMinutes();
  const minutesDeg = (calcDegree(minutes, 60) + (secondsDeg - 90)) / 60;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  // if (minutesDeg === 9.9) {
  //   minuteHand.classList.add('no-transition');
  // } else if (minutesDeg === 4.1) {
  //   minuteHand.classList.remove('no-transition');
  // }

  // todo Hour Hand Glitch
  const hours = now.getHours();
  const hoursDeg = (calcDegree(hours, 12) + (minutesDeg - 90)) / 12;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;
  // console.log(hoursDeg);
};

setInterval(setDate, 1000);
