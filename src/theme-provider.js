/**
 * @TODO: Toggle themes, utilizing localize storage to store the current theme value.
 */
const handleThemeSwitch = () => {
  const mainElement = document.querySelector('.main');
  console.log("mainElement = ", mainElement);
  mainElement.classList.add('dark');
  window.localStorage.setItem(themeKey, 'dark');
};

const themeKey = 'yuderekyu.github.io.theme';
const checkTheme = () => {
  const theme = window.localStorage.getItem(themeKey);
  console.log("theme = ", theme);
};

export {
  checkTheme,
  handleThemeSwitch
}
