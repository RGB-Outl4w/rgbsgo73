// Immediately apply the theme without transition on page load
(function() {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to 'dark' if no theme is saved
  if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
  }

  // Disable transition during initial theme application
  document.documentElement.classList.add('no-transition');
})();

window.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.theme-toggle');

  // Re-enable transitions after page load by removing the 'no-transition' class
  setTimeout(() => {
      document.documentElement.classList.remove('no-transition');
  }, 0);

  // Add event listener to toggle theme
  toggleButton.addEventListener('click', function() {
      const isLight = document.body.classList.contains('light-theme');
      if (isLight) {
          document.body.classList.remove('light-theme');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.add('light-theme');
          localStorage.setItem('theme', 'light');
      }
  });
});
