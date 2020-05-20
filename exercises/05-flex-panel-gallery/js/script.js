const panels = document.querySelectorAll('.panel');

// ! 'this' Keyword can only be used in this type of function
function toggleOpen() {
  this.classList.toggle('open');
}

// Used Desctructing on e
const toggleActive = ({ propertyName, target: { classList } }) => {
  if (propertyName.includes('flex')) {
    classList.toggle('open-active');
  }
};

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener('transitionend', toggleActive)
);
