/**
 * @TODO: Toggle themes, utilizing localize storage to store the current theme value.
 */
const getTheme = () => {
  const theme = window.localStorage.getItem(themeKey);
  console.log("theme = ", theme);
  return theme;
};

const handleThemeSwitch = () => {
  // get the toggle
  const mainElement = document.querySelector('.main');
  // get the current theme
  console.log("mainElement = ", mainElement);
  // if theme is dark, remove it

  // else, apply it
  mainElement.classList.add('dark');
  window.localStorage.setItem(themeKey, 'dark');
};

const themeKey = 'yuderekyu.github.io.theme';

export {
  checkTheme,
  handleThemeSwitch
}
