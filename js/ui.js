function removeAllActive() {
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

export function slider(e) {
  if (e.currentTarget.id === 'slide-up-btn') {
    document.querySelector('#slider').className = 'slide-up';
    document.querySelector('#track-info').className = 'slide-left';
  }
  if (e.currentTarget.id === 'slide-down-btn') {
    document.querySelector('#slider').className = 'slide-down';
    document.querySelector('#track-info').className = 'slide-right';
  }
}
