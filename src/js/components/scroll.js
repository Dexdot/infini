import WheelIndicator from 'wheel-indicator';

import main from '@/init/section-main';
import sweets from '@/init/section-sweets';
import toys from '@/init/section-toys';
import showcases from '@/init/section-showcases';
import advantages from '@/init/section-advantages';
import clients from '@/init/section-clients';
import contacts from '@/init/section-contacts';

export default class Scroll {
  constructor() {
    this.DOM = {};
    this.DOM.sections = $.qsa('.section');

    // Section instances
    this.sections = [
      main,
      sweets,
      toys,
      showcases,
      advantages,
      clients,
      contacts
    ];

    this.animating = false;
    this.inited = false;

    this.setup();
  }

  setup() {
    const width = window.innerWidth;

    window.addEventListener('load', () => {
      if (window.innerWidth <= 1200) return false;

      this.init();
    });

    window.addEventListener('resize', () => {
      if (width <= 1200 && window.innerWidth > 1200) {
        this.init();
      }
    });

    // Scroll handler
    this.scroll = new WheelIndicator({
      elem: $.qs('body'),
      callback: e => {
        if (window.innerWidth > 1200) this.onScroll(e);
      }
    });
  }

  init() {
    if (this.inited) return false;

    this.inited = true;

    const { hash } = window.location;

    // Show section in hash
    if (hash) {
      const index = this.DOM.sections.indexOf(
        $.qs(`.section[data-section=${hash.slice(1)}]`)
      );

      this.afterHide(index);
    } else {
      this.afterHide(0);
    }
  }

  hide(showNext) {
    // Hide current section and start to showing next
    this.sections[this.index].hide(showNext.bind(this));
  }

  show() {
    // Show active section
    this.sections[this.index].show(this.resolve.bind(this));
  }

  afterHide(i) {
    this.index = i;

    const sectionName = this.sections[this.index].el.dataset.section;

    // Body class
    $.removeClassStartingWith($.qs('body'), 'page-');
    $.qs('body').classList.add(`page-${sectionName}`);

    // Link hash
    window.history.pushState(null, null, `#${sectionName}`);

    // Active nav
    const activeNavLink = $.qs('.nav button.active');
    if (activeNavLink) activeNavLink.classList.remove('active');
    $.qs(`.nav button[data-section="${sectionName}"]`).classList.add('active');

    this.show();
  }

  showByIndex(i) {
    this.animating = true;
    this.hide(() => {
      this.afterHide(i);
    });
  }

  resolve() {
    this.animating = false;
  }

  onScroll(e) {
    const map = $.qs('.js-map');
    const path = e.path || (e.composedPath && e.composedPath());

    if (path.indexOf(map) > 0 || this.animating) return false;

    if (e.direction === 'up' && this.index > 0) {
      this.showByIndex(this.index - 1);
    }

    if (e.direction === 'down' && this.index !== this.DOM.sections.length - 1) {
      this.showByIndex(this.index + 1);
    }
  }
}
