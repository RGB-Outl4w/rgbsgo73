const body = document.querySelector('body');
const themeToggle = document.querySelector('.theme-toggle');

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.textContent = 'Затемнить';
  }
});

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLightTheme = body.classList.contains('light-theme');

  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
  themeToggle.textContent = isLightTheme ? 'Затемнить' : 'Осветить';
});
