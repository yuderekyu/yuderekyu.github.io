const STORAGE_THEME_KEY = 'yuderekyu.github.io.theme';
const LIGHT_THEME = 'light';

const removeTheme = ({ theme, element }) => {
  element.classList.remove(theme);
};

const applyTheme = ({ theme, element }) => {
  element.classList.add(theme);
};

const getTheme = () => {
  return window.localStorage.getItem(STORAGE_THEME_KEY);
};

/**
 * Removes or adds dark mode to local storage and the dom.
 */
const handleThemeChange = () => {
  const themeOptions = {
    theme: LIGHT_THEME,
    element: document.querySelector('.main')
  };

  if (getTheme() === LIGHT_THEME) {
    window.localStorage.removeItem(STORAGE_THEME_KEY);
    removeTheme(themeOptions);
  } else {
    window.localStorage.setItem(STORAGE_THEME_KEY, LIGHT_THEME);
    applyTheme(themeOptions);
  }
};

/**
 * Ensures the saved theme is applied to the dom and attaches an event handler to the theme toggle.
 */
const initializeTheme = () => {
  const themeToggleInput = document.querySelector('input[name="theme-toggle-input"]');
  themeToggleInput.addEventListener("click", handleThemeChange);

  const currentTheme = getTheme();
  applyTheme({
    theme: currentTheme,
    element: document.querySelector('.main')
  });

  if (currentTheme === LIGHT_THEME) {
    themeToggleInput.defaultChecked = true;
  }
};

export default initializeTheme;
