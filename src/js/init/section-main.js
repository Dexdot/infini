import anime from 'animejs';
import Section from '@/components/section';

// Anime options
const options = {
  easing: 'easeInOutSine'
};

// Element
const el = $.qs('.section[data-section="main"]');
const list = $.qs('.main-list', el);

/* Show */
const show = resolve => {
  // Reset
  el.style = '';
  list.classList.remove('stroke-visible');

  // Timeline settings
  const tl = anime.timeline({
    ...options,
    complete: () => {
      list.classList.add('stroke-visible');
      resolve();
    }
  });

  // Timeline
  tl.add({
    targets: $.qsa('.cover', el),
    duration: 800,
    delay: anime.stagger(100),
    translateY: ['101%', '0%']
  })
    .add(
      {
        targets: $.qs('.about', el),
        duration: 800,
        translateY: ['101%', '0%']
      },
      '-=400'
    )
    .add(
      {
        targets: $.qsa('.main-list__content', list),
        duration: 400,
        delay: anime.stagger(50),
        opacity: [0, 1]
      },
      '-=400'
    );
};

/* Hide */
const hide = showNext => {
  anime({
    targets: el,
    duration: 800,
    easing: 'cubicBezier(.16,.84,.44,1)',
    translateY: '-100vh',
    complete: showNext
  });
};

// Section instance
const section = new Section({ el, show, hide });

export default section;
