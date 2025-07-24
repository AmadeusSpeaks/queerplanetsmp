// safetyExit.js

document.addEventListener('DOMContentLoaded', () => {
  let escPresses = 0;
  let timer = null;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      escPresses++;

      if (escPresses === 3) {
        window.location.href = 'https://www.google.com';
      }

      // Reset after 1.5 seconds if not pressed three times
      clearTimeout(timer);
      timer = setTimeout(() => {
        escPresses = 0;
      }, 1500);
    }
  });
});
