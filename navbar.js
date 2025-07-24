document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  // Flag background definitions
  const flagBackgrounds = [
    {
      name: "Trans",
      style: `
        linear-gradient(to right,
          #5BCEFA 0%, #5BCEFA 20%,
          #F5A9B8 20%, #F5A9B8 40%,
          #FFFFFF 40%, #FFFFFF 60%,
          #F5A9B8 60%, #F5A9B8 80%,
          #5BCEFA 80%, #5BCEFA 100%)
      `
    },
    {
      name: "Gay Rainbow",
      style: `
        linear-gradient(to right,
          #E40303 0%, #E40303 16.66%,
          #FF8C00 16.66%, #FF8C00 33.32%,
          #FFED00 33.32%, #FFED00 49.98%,
          #008026 49.98%, #008026 66.64%,
          #004DFF 66.64%, #004DFF 83.3%,
          #750787 83.3%, #750787 100%)
      `
    },
    {
      name: "Lesbian",
      style: `
        linear-gradient(to right,
          #D52D00 0%, #D52D00 20%,
          #EF7627 20%, #EF7627 40%,
          #FFFFFF 40%, #FFFFFF 60%,
          #D362A4 60%, #D362A4 80%,
          #B5006A 80%, #B5006A 100%)
      `
    },
    {
      name: "Bi",
      style: `
        linear-gradient(to right,
          #D60270 0%, #D60270 40%,
          #9B4F96 40%, #9B4F96 60%,
          #0038A8 60%, #0038A8 100%)
      `
    },
    {
      name: "Plural",
      style: `
        linear-gradient(to right,
          #2E3192 0%, #2E3192 25%,
          #00AEEF 25%, #00AEEF 50%,
          #F69ACD 50%, #F69ACD 75%,
          #9B59B6 75%, #9B59B6 100%)
      `
    }
  ];

  // Choose random flag background
  const chosen = flagBackgrounds[Math.floor(Math.random() * flagBackgrounds.length)];
  navbar.style.backgroundImage = chosen.style;

  // Set dark mode on load based on user system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  }

  // Toggle dark mode (non-persistent)
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
});
