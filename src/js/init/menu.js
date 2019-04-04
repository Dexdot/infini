window.addEventListener('DOMContentLoaded', () => {
  const menu = $.qs('.menu');
  const hamburger = $.qs('.hamburger');
  const header = $.qs('.header');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    header.classList.toggle('header--burger-only');
  });
});
