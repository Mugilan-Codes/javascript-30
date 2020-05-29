const wrapper = document.querySelector('.wrapper');
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

const fixNav = () => {
  if (window.scrollY >= topOfNav) {
    wrapper.style.paddingTop = `${nav.offsetHeight}px`;
    wrapper.classList.add('fixed-nav');
  } else {
    wrapper.style.paddingTop = 0;
    wrapper.classList.remove('fixed-nav');
  }
};

window.addEventListener('scroll', fixNav);
