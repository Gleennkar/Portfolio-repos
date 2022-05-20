const navToggle = document.querySelector('#navToggle');
const navIcon = document.querySelectorAll('.navIcon');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});