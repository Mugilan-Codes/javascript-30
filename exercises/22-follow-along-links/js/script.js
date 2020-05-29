const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = function () {
  const linkCoords = this.getBoundingClientRect();

  let { width, height, left, top } = linkCoords;
  left += window.scrollX;
  top += window.scrollY;

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;
  highlight.style.transform = `translate(${left}px, ${top}px)`;
};

triggers.forEach((a) => a.addEventListener('mouseenter', highlightLink));
