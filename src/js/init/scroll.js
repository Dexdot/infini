import Scroll from '@/components/scroll';

const hideMenu = () => {
  const menu = $.qs('.menu');
  const hamburger = $.qs('.hamburger');
  const body = $.qs('body');

  hamburger.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('menu-expanded');
};

// Start
window.addEventListener('DOMContentLoaded', () => {
  // Init scroll component
  const scroll = new Scroll();

  // On button click
  $.listen('.js-link', 'click', function onLinkClick() {
    const section = $.qs(`.section[data-section=${this.dataset.section}]`);
    scroll.showByIndex($.nodeIndex(section));

    if ($.qs('.menu').classList.contains('active')) {
      hideMenu();
    }
  });
});
