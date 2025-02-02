/**
 * Toggle a css class based on visibility in viewport.
 * Inspiration: https://github.blog/2021-01-29-making-githubs-new-homepage-fast-and-performant/
 */
const animatePageCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
};

const animatePage = (observerOptions) => {
  const animationObserver = new IntersectionObserver(
    animatePageCallback,
    observerOptions,
  );
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => animationObserver.observe(page));
};

export default animatePage;
