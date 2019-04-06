import anime from 'animejs';
import Section from '@/components/section';

// Anime options
const options = {
  easing: 'easeInOutSine'
};

// Elements
const el = $.qs('.section[data-section="sweets"]');
const video = $.qs('.video', el);
const videoInner = $.qs('.video video', el);
const content = $.qs('.section-text__inner', el);

// Show
const show = resolve => {
  // Timeline settings
  const tl = anime.timeline({
    ...options,
    complete: resolve
  });

  tl.add({
    targets: video,
    duration: 700,
    translateY: ['101%', '0%']
  })
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: videoInner,
        duration: 600,
        translateY: ['20%', '0%'],
        opacity: [0, 1]
      },
      '-=200'
    )
    .add(
      {
        easing: 'cubicBezier(.31,0,0,1.01)',
        targets: content.children,
        delay: anime.stagger(75),
        duration: 600,
        translateY: ['64px', '0px'],
        opacity: [0, 1]
      },
      '-=850'
    );
};

// Hide
const hide = showNext => {
  // Timeline settings
  const tl = anime.timeline({
    ...options,
    complete: showNext
  });

  tl.add({
    targets: videoInner,
    duration: 300,
    opacity: [1, 0]
  })
    .add(
      {
        targets: video,
        duration: 600,
        translateY: ['0%', '-101%']
      },
      '-=300'
    )

    .add(
      {
        targets: content.children,
        delay: anime.stagger(75),
        duration: 400,
        opacity: [1, 0]
      },
      '-=700'
    );
};

// Section instance
const section = new Section({ el, show, hide });

export default section;
