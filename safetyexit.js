document.addEventListener('DOMContentLoaded', () => {
  let escPresses = 0;
  let timer = null;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      escPresses++;
      console.log(`Escape pressed ${escPresses} times`);

      if (escPresses >= 1) {
        console.log("Redirecting to Google...");
        // Slight delay to allow logs to show + be more browser-friendly
        setTimeout(() => {
          window.location.href = "https://www.google.com";
        }, 100);
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        escPresses = 0;
      }, 1500);
    }
  });
});
