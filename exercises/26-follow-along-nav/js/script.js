const nav = document.querySelector('.top');
const background = document.querySelector('.dropdownBackground');
const triggers = document.querySelectorAll('.cool > li');

const handleEnter = function () {
  this.classList.add('trigger-enter');

  setTimeout(
    () =>
      this.classList.contains('trigger-enter') &&
      this.classList.add('trigger-enter-active'),
    150
  );

  background.classList.add('open');

  const navCoords = nav.getBoundingClientRect();
  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    left: dropdownCoords.left - navCoords.left,
    top: dropdownCoords.top - navCoords.top,
  };

  const { width, height, left, top } = coords;

  background.style.setProperty('width', `${width}px`);
  background.style.setProperty('height', `${height}px`);
  background.style.setProperty('transform', `translate(${left}px, ${top}px)`);
};

const handleLeave = function () {
  this.classList.remove('trigger-enter', 'trigger-enter-active');

  background.classList.remove('open');
};

triggers.forEach((trigger) => {
  trigger.addEventListener('mouseenter', handleEnter);
  trigger.addEventListener('mouseleave', handleLeave);
});
