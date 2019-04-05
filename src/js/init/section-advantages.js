import anime from 'animejs';
import Section from '@/components/section';

// Anime options
const options = {
  easing: 'easeInOutSine'
};

// Element
const el = $.qs('.section[data-section="advantages"]');

// Show
const show = resolve => {
  resolve();
};

// Hide
const hide = (showNext) => {
  showNext();
};

// Section instance
const section = new Section({ el, show, hide });

export default section;
