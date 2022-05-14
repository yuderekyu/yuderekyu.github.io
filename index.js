window.onload = () => {
  /**
   * Toggle a css class based on visibility in viewport.
   * Inspiration: https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/
   */
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  };

  const animatePage = (observerCallback, observerOptions) => {
    const animationObserver = new IntersectionObserver(observerCallback, observerOptions);
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => animationObserver.observe(page));
  };

  animatePage(callback, { threshold: 0.45 });

  const themeKey = 'yuderekyu.github.io.theme';
  const handleThemeSwitch = () => {
    const mainElement = document.querySelector('.main');
    console.log("mainElement = ", mainElement);
    mainElement.classList.add('dark');
    window.localStorage.setItem(themeKey, 'dark');
  };

  handleThemeSwitch();
  const checkTheme = () => {
    const theme = window.localStorage.getItem(themeKey);
    console.log("theme = ", theme);
  };
  checkTheme();
};
