(() => {
  const refs = {
    openMenuBtn: document.querySelectorAll('[data-menu-open]'),
    closeMenuBtn: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };
  refs.openMenuBtn.forEach(element => {
    element.addEventListener('click', toggleMenu);
  });
  refs.closeMenuBtn.forEach(element => {
    element.addEventListener('click', toggleMenu);
  });
  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  }
})();

function init() {
  let btn1 = document.getElementById('overlayBtn1');
  let btn2 = document.getElementById('overlayBtn2');
  let btn3 = document.getElementById('overlayBtn3');
  let btn4 = document.getElementById('overlayBtn4');
  let btn5 = document.getElementById('overlayBtn5');
  let btn6 = document.getElementById('overlayBtn6');

  btn1.addEventListener('click', function () {
    addOverlay('overlay', 'overlayContent');
  });

  btn2.addEventListener('click', function () {
    addOverlay('overlay2', 'overlayContent2');
  });

  btn3.addEventListener('click', function () {
    addOverlay('overlay3', 'overlayContent3');
  });

  btn4.addEventListener('click', function () {
    addOverlay('overlay4', 'overlayContent4');
  });

  btn5.addEventListener('click', function () {
    addOverlay('overlay5', 'overlayContent5');
  });

  btn6.addEventListener('click', function () {
    addOverlay('overlay6', 'overlayContent6');
  });
}

function addOverlay(overlayId) {
  var overlay = document.getElementById(overlayId);
  overlay.style.display = 'flex'; // Змінено на 'flex', щоб використовувати вирівнювання по центру
}
function removeOverlay(overlayId) {
  var overlay = document.getElementById(overlayId);
  overlay.style.display = 'none';
}

window.removeOverlay = removeOverlay;
window.onload = init;
