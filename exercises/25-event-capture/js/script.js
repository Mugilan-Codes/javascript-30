const sections = document.querySelectorAll('section');

const logText = function (e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // Stops Bubbling up
};

// document.body.addEventListener('click', logText);

// document.querySelector('main').addEventListener('click', logText);

sections.forEach(
  (section) =>
    //   section.addEventListener('click', logText, { capture: true }) // Comes from the top
    //   section.addEventListener('click', logText, { capture: false })
    section.addEventListener('click', logText, { capture: false, once: true }) // Once Unbinds after just running only once
);
