import { addActiveClass } from './ui';

document.querySelectorAll('.btn').forEach((btn) => {
  const button = btn;
  button.onclick = addActiveClass;
});
