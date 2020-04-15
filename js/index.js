import addActiveClass from './ui.js';

document.querySelectorAll('.btn').forEach((btn) => {
  const button = btn;
  button.onclick = addActiveClass;
});
