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
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: '.about__bg',
        duration: 600,
        delay: anime.stagger(100),
        translateY: ['101%', '0%']
      },
      '-=600'
    )
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: '.about__content',
        duration: 400,
        delay: anime.stagger(100),
        translateY: ['3rem', '0rem'],
        opacity: [0, 1]
      },
      '-=500'
    );

  $.each('.main-list__content', (content, i) => {
    anime({
      easing: 'cubicBezier(.31,0,0,1.01)',
      targets: content.children,
      duration: 800,
      delay: anime.stagger(50, { start: 100 * (i + 1) }),
      opacity: [0, 1],
      translateY: ['40vh', '0vh']
    });
  });
};

/* Hide */
const hide = showNext => {
  list.classList.remove('stroke-visible');

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
