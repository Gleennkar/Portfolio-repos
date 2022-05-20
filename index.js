const navToggle = document.querySelector('#navToggle');
const navIcon = document.querySelectorAll('.navIcon');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});



const email = document.getElementById('email');
const form = document.getElementById('input');
const displayMsg = document.getElementById('form-message-error');
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-message');
    displayMsg.textContent = 'Your email address should be in lowercase';
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});

