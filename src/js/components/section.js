export default class Section {
  constructor({ el, show, hide }) {
    this.el = el;
    this.index = $.nodeIndex(el);

    this.show = resolve => {
      show(resolve);
      this.el.classList.add('active');
    };

    this.hide = showNext => {
      hide(showNext);
      this.el.classList.remove('active');
    };
  }
}
