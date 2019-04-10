import ScrollBooster from 'scrollbooster';

['DOMContentLoaded', 'resize'].forEach(event => {
  window.addEventListener(event, () => {
    const viewport = document.querySelector('.section[data-section="main"]');
    const content = viewport.querySelector('.main-list');

    const sb = new ScrollBooster({
      viewport,
      content,
      mode: 'x',
      bounce: false,
      onUpdate: data => {
        if (window.innerWidth <= 950) {
          content.style.transform = `translateX(${-data.position.x}px)`;
        }
      }
    });
  });
});
