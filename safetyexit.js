document.addEventListener('DOMContentLoaded', () => {
  console.log("Safety exit active."); // Confirm script loads

  let escPresses = 0;
  let timer = null;

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      escPresses++;
      console.log(`Escape pressed ${escPresses} time(s)`);

      if (escPresses >= 1) {
        console.log("Redirecting...");
        window.location.href = "https://www.google.com"; // Try href for max compatibility
      }

      clearTimeout(timer);
      timer = setTimeout(() => {
        escPresses = 0;
      }, 1500);
    }
  });
});
