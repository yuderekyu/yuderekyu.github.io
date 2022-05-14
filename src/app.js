import animatePage from '/src/animate-page.js';
import initializeTheme from '/src/initialize-theme.js';

window.onload = () => {
  initializeTheme();
  animatePage({ threshold: 0.45 });
};
