import anime from 'animejs';
import Section from '@/components/section';

// Anime options
const options = {
  easing: 'easeInOutSine'
};

// Elements
const el = $.qs('.section[data-section="advantages"]');
const content = $.qs('.section-text__inner', el);
const cells = $.qsa('.cell', el);
const cellsContainer = $.qs('.cells', el);
const img = $.qs('.img', el);
const imgInner = $.qs('.img__i', el);

// Show
const show = resolve => {
  $.qs('.header').classList.add('header--dark');

  // Timeline settings
  const tl = anime.timeline({
    ...options,
    complete: resolve
  });

  tl.add({
    easing: 'cubicBezier(.31,0,0,1.01)',
    targets: img,
    duration: 800,
    translateX: ['-101%', '0%']
  })
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: imgInner,
        duration: 800,
        scale: [1.5, 1]
      },
      '-=800'
    )
    .add(
      {
        targets: cells,
        duration: 500,
        delay: anime.stagger(50),
        opacity: [0, 1],
        begin: () => {
          cellsContainer.classList.add('visible');
        }
      },
      '-=500'
    )
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: content.children,
        delay: anime.stagger(75),
        duration: 500,
        translateY: ['64px', '0px'],
        opacity: [0, 1]
      },
      '-=500'
    );
};

// Hide
const hide = showNext => {
  $.qs('.header').classList.remove('header--dark');
  cellsContainer.classList.remove('visible');

  // Timeline settings
  const tl = anime.timeline({
    ...options,
    complete: () => {
      showNext();
    }
  });

  tl.add({
    easing: 'cubicBezier(.31,0,0,1.01)',
    targets: img,
    duration: 600,
    translateX: ['0%', '-101%']
  })
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: imgInner,
        duration: 600,
        scale: [1, 2]
      },
      '-=600'
    )
    .add(
      {
        targets: cells,
        duration: 300,
        delay: anime.stagger(50),
        opacity: [1, 0]
      },
      '-=500'
    )
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: content.children,
        delay: anime.stagger(75),
        duration: 400,
        opacity: [1, 0]
      },
      '-=300'
    );
};

// Section instance
const section = new Section({ el, show, hide });

export default section;
