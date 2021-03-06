const set = () => {
  // Viewport height
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Header height
  const headerHeight = $.qs('.header').offsetHeight;
  document.documentElement.style.setProperty('--header', `${headerHeight}px`);

  // Header height
  const advText = $.qs(
    '.section[data-section="advantages"] .section-text__content'
  ).offsetHeight;
  document.documentElement.style.setProperty('--adv-text-h', `${advText}px`);
};

window.addEventListener('DOMContentLoaded', set);
window.addEventListener('resize', set);
