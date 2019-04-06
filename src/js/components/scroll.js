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

    this.index = 0;
    this.animating = false;

    this.setup();
  }

  setup() {
    // Set body class
    $.qs('body').classList.add(
      `page-${this.sections[this.index].el.dataset.section}`
    );

    // Show first section
    $.qs('.main-list').classList.add('stroke-visible')

    // Scroll handler
    this.scroll = new WheelIndicator({
      elem: $.qs('body'),
      callback: e => {
        this.onScroll(e);
      }
    });
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
    $.removeClassStartingWith($.qs('body'), 'page-');
    $.qs('body').classList.add(
      `page-${this.sections[this.index].el.dataset.section}`
    );
    this.show();
  }

  prev() {
    this.animating = true;
    this.hide(() => {
      this.afterHide(this.index - 1);
    });
  }

  next() {
    this.animating = true;
    this.hide(() => {
      this.afterHide(this.index + 1);
    });
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
      this.prev();
    }

    if (e.direction === 'down' && this.index !== this.DOM.sections.length - 1) {
      this.next();
    }
  }
}