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

/**
 * Show and hide navigation on scroll.
 */
let previousScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const navList = document.querySelector('.nav .list');
  if (currentScrollY > previousScrollY) {
    navList.classList.add('hide');
  } else {
    navList.classList.remove('hide');
  }

  previousScrollY = currentScrollY;
});
