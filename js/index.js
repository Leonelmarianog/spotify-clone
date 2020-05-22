import {
  addActiveClass,
  slider,
  headerOpacity,
} from './ui.js';

document.querySelectorAll('.btn').forEach((btn) => {
  const button = btn;
  button.onclick = addActiveClass;
});

document.querySelector('#slide-up-btn').onclick = slider;
document.querySelector('#slide-down-btn').onclick = slider;
document.querySelector('#content').onscroll = headerOpacity;
