const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walkLength = 250; // 250px

const shadow = function (e) {
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walkLength - walkLength / 2);
  const yWalk = Math.round((y / width) * walkLength - walkLength / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(200, 0, 0, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 200, 0, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0, 0, 200, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(200, 200, 0, 0.7),
    ${yWalk}px ${xWalk}px 0 rgba(0, 200, 200, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(200, 0, 200, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 0, 0, 0.7),
    ${yWalk * -1}px ${xWalk * -1}px 0 rgba(200, 200, 200, 0.7)
   `;
};

hero.addEventListener('mousemove', shadow);
