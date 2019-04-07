window.addEventListener('DOMContentLoaded', () => {
  const body = $.qs('body');
  const menu = $.qs('.menu');
  const hamburger = $.qs('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('menu-expanded');
  });
});
