var burgerButton = document.querySelector('#burger_button');
var overlay = document.querySelector('#overlay');
var body = document.querySelector('body');
var mobileMenu = document.querySelector('#mobile_menu');

burgerButton.addEventListener('click', function(e) {
  e.preventDefault();

  this.classList.toggle('opened');
  overlay.classList.toggle('visible');
  body.classList.toggle('no_scroll');
  mobileMenu.classList.toggle('fixed');
}

);