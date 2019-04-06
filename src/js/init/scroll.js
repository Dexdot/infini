import Scroll from '@/components/scroll';

const hideMenu = () => {
  const menu = $.qs('.menu');
  const hamburger = $.qs('.hamburger');
  const header = $.qs('.header');

  hamburger.classList.remove('active');
  menu.classList.remove('active');
  header.classList.remove('header--burger-only');
};

window.addEventListener('DOMContentLoaded', () => {
  const scroll = new Scroll();

  $.listen('.js-link', 'click', function onLinkClick() {
    const section = $.qs(`.section[data-section=${this.dataset.section}]`);
    scroll.showByIndex($.nodeIndex(section));

    if ($.qs('.menu').classList.contains('active')) {
      hideMenu();
    }
  });
});
