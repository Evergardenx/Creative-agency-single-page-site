// Javascript for openning an closing of mobile menu

var menu = document.querySelector('.menu');
var menuToggle = document.querySelector('#mobile-navigation');
var hamburgerIcon = document.querySelector('.hamburger-menu');


hamburgerIcon.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    
    menu.classList.remove('open');
    menuToggle.classList.remove('fade-in'); // class for animation - in abstracts/animations.scss
    menuToggle.classList.add('fade-out'); // class for animation
   
  } else {
    menu.classList.add('open');
    menuToggle.classList.remove('fade-out'); // class for animation
    menuToggle.classList.add('fade-in'); // class for animation
  
  }
});
