const STORAGE_THEME_KEY = 'yuderekyu.github.io.theme';
const DARK_THEME = 'dark';

const getTheme = () => {
  return window.localStorage.getItem(STORAGE_THEME_KEY);
};

const applyTheme = (currentTheme) => {
  const mainElement = document.querySelector('.main');
  mainElement.classList.add(currentTheme);
};

const removeTheme = (currentTheme) => {
  const mainElement = document.querySelector('.main');
  mainElement.classList.remove(currentTheme);
};

/**
 * Removes or adds dark mode to local storage and the dom.
 */
const handleThemeChange = () => {
  const currentTheme = getTheme();
  if (currentTheme === DARK_THEME) {
    window.localStorage.removeItem(STORAGE_THEME_KEY);
    removeTheme(DARK_THEME);
  } else {
    window.localStorage.setItem(STORAGE_THEME_KEY, DARK_THEME);
    applyTheme(DARK_THEME);
  }
};

/**
 * Ensures the saved theme is applied to the dom and attaches an event handler to the theme toggle.
 */
const initializeTheme = () => {
  const themeToggleInput = document.querySelector('input[name="theme-toggle-input"]');
  const currentTheme = getTheme();
  applyTheme(currentTheme);
  if (currentTheme === DARK_THEME) {
    themeToggleInput.defaultChecked = true;
  }

  themeToggleInput.addEventListener("click", handleThemeChange);
};

export default initializeTheme;
