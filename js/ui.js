export function removeAllActive() {
  document.querySelectorAll('.btn').forEach((btn) => {
    btn.classList.remove('active-bg');
    btn.classList.remove('active-no-bg');
  });
}

export function addActiveClass(e) {
  removeAllActive();
  if (e.currentTarget.parentNode.parentNode.id === 'menu-1' || e.currentTarget.parentNode.id === 'instalar-app') {
    e.currentTarget.classList.add('active-bg');
  } else {
    e.currentTarget.classList.add('active-no-bg');
  }
}
