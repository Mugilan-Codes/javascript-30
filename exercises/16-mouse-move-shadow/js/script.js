const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walkLength = 100; // 100px

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
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 0, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(0, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(100, 100, 100, 0.7)
   `;
};

hero.addEventListener('mousemove', shadow);
