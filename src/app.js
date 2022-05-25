import animatePage from '/src/animate-page.js';
import setupThemeHandler from '/src/theme-handler.js';

window.onload = () => {
  setupThemeHandler();
  animatePage({ threshold: 0.45 });
};
