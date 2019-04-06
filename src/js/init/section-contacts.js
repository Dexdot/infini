import anime from 'animejs';
import Section from '@/components/section';

// Anime options
const options = {
  easing: 'easeInOutSine'
};

// Element
const el = $.qs('.section[data-section="contacts"]');

// Show
const show = resolve => {
  anime({
    targets: el,
    duration: 400,
    opacity: [0, 1],
    complete: resolve,
    ...options
  });
};

// Hide
const hide = showNext => {
  anime({
    targets: el,
    duration: 400,
    opacity: [1, 0],
    complete: showNext,
    ...options
  });
};

// Section instance
const section = new Section({ el, show, hide });

export default section;
