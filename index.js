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

const animationObserver = new IntersectionObserver(callback, { threshold: 0.5 });
const bookCover = document.querySelector('.book-cover');
animationObserver.observe(bookCover);
const name = document.querySelector('.name');
animationObserver.observe(name);
