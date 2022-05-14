const THEME_KEY = 'yuderekyu.github.io.theme';

const getTheme = () => {
  return window.localStorage.getItem(THEME_KEY);
};

const applyTheme = (currentTheme) => {
  const mainElement = document.querySelector('.main');
  mainElement.classList.add(currentTheme);
};

const removeTheme = (currentTheme, element) => {
  const mainElement = document.querySelector('.main');
  mainElement.classList.remove(currentTheme);
};

/**
 * Removes or adds dark mode to local storage and the dom.
 */
const handleThemeChange = () => {
  const currentTheme = getTheme();
  if (currentTheme === 'dark') {
    window.localStorage.removeItem(THEME_KEY);
    removeTheme('dark');
  } else {
    window.localStorage.setItem(THEME_KEY, 'dark');
    applyTheme('dark');
  }
};

/**
 * Ensures the saved theme is applied to the dom and attaches an event handler to the theme toggle.
 */
const initializeTheme = () => {
  const themeToggleInput = document.querySelector('input[name="theme-toggle-input"]');
  const currentTheme = getTheme();
  applyTheme(currentTheme);
  if (currentTheme === 'dark') {
    themeToggleInput.defaultChecked = true;
  }

  themeToggleInput.addEventListener("click", handleThemeChange);
};

export default initializeTheme;
