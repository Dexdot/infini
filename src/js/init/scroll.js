import Scroll from '@/components/scroll';

const hideMenu = () => {
  const menu = $.qs('.menu');
  const hamburger = $.qs('.hamburger');
  const body = $.qs('body');

  hamburger.classList.remove('active');
  menu.classList.remove('active');
  body.classList.remove('menu-expanded');
};

const goTo = (ctx, scroll) => {
  const section = $.qs(`.section[data-section=${ctx.dataset.section}]`);
  scroll.showByIndex($.nodeIndex(section));

  if ($.qs('.menu').classList.contains('active')) {
    hideMenu();
  }
};

const scrollTo = ctx => {
  const section = $.qs(`.section[data-section=${ctx.dataset.section}]`);

  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });

  if ($.qs('.menu').classList.contains('active')) {
    hideMenu();
  }
};

// Start
window.addEventListener('DOMContentLoaded', () => {
  // Init scroll component
  const scroll = new Scroll();

  // On button click
  $.listen('.js-link', 'click', function onLinkClick() {
    if (window.innerWidth > 1200) {
      goTo(this, scroll);
    } else {
      scrollTo(this);
    }
  });
});
