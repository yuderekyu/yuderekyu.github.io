const STORAGE_THEME_KEY = 'yuderekyu.github.io.theme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

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
  const { documentElement } = document;
  if (getTheme() === LIGHT_THEME) {
    window.localStorage.setItem(STORAGE_THEME_KEY, DARK_THEME);

    removeTheme({
      theme: LIGHT_THEME,
      element: documentElement
    });

    applyTheme({
      theme: DARK_THEME,
      element: documentElement
    });
  } else {
    window.localStorage.setItem(STORAGE_THEME_KEY, LIGHT_THEME);
    removeTheme({
      theme: DARK_THEME,
      element: documentElement
    });

    applyTheme({
      theme: LIGHT_THEME,
      element: documentElement
    });
  }
};

/**
 * Ensures the saved theme is applied to the dom and attaches an event handler to the theme toggle.
 */
const initializeTheme = () => {
  const themeToggleInput = document.querySelector('input[name="theme-toggle-input"]');
  themeToggleInput.addEventListener("click", handleThemeChange);

  const currentTheme = getTheme();
  if (currentTheme === LIGHT_THEME) {
    themeToggleInput.defaultChecked = true;
  }
};

export default initializeTheme;
