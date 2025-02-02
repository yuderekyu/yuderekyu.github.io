import animatePage from "/src/animate-page.js";
import setupThemeHandler from "/src/theme-handler.js";

const initialize = () => {
  setupThemeHandler();
  animatePage({ threshold: 0.45 });
};

if (document.readyState === "loading") {
  document.addEventListener("DomContentLoaded", initialize);
} else {
  initialize();
}
