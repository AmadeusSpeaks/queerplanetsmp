document.addEventListener('DOMContentLoaded', () => {
  let escPresses = 0;
  let timer = null;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      escPresses++;

      if (escPresses === 1) {
        // Immediately clear timer to prevent race condition
        clearTimeout(timer);

        // Redirect safely
        window.location.assign('https://www.google.com');
        return;
      }

      // Reset count if timeout expires
      clearTimeout(timer);
      timer = setTimeout(() => {
        escPresses = 0;
      }, 1500);
    }
  });
});
