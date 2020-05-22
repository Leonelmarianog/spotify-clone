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

export function headerOpacity() {
  const scrollValue = document.querySelector('#content').scrollTop; // Devuelve la cantidad de pixeles que el contenido del elemento fue desplazado.
  const contentHeight = document.querySelector('#content').clientHeight;// Devuelve la altura del elemento.
  document.querySelector('#header').style.background = `rgba(4,4,4,${1 - (contentHeight - scrollValue) / contentHeight})`; // Matematicas hijo! --> obtenido de https://stackoverflow.com/questions/34831602/increase-element-opacity-when-user-scrolls-down-the-page
}

/*
¿ Porque 1 - (contentHeight - scrollValue) / contentHeight} ?
---------------------------------------------------------------

Cuando aun no se hizo scroll, (contentHeight - scrollValue) / contentHeight vale 1 ya que
scrollvalue vale 0 (no hubo scroll) entonces ContentHeight / ContentHeight = 1. Esto hace
que el header tenga un alpha de 1 y sea totalmente visible, yo quiero lo contrario, que
arranque con un alpha de 0, por eso agrego el 1 adelante.
*/
