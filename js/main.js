// Hide/Show Navigation Menu
const showButton = document.querySelector('.show-button');
const navLinks = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');

showButton.addEventListener('click', () => {
  if (nav.classList.contains('close')) {
    nav.classList.remove('close');
    nav.classList.add('open');
    showButton.innerHTML = 'Hide';
  } else {
    nav.classList.remove('open');
    nav.classList.add('close');
    showButton.innerHTML = 'Show';
  }
});

navLinks.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    nav.classList.remove('open');
    nav.classList.add('close');
    showButton.innerHTML = 'Show';
  });
})