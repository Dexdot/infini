// Funcs
const show = () => {
  $.qs('.notify').classList.add('active');
};

const hide = () => {
  $.qs('.notify').classList.remove('active');
  $.qs('.notify').classList.remove('notify--error');
  $.qs('.notify').classList.remove('notify--success');
};

// Settings
let timer = 0;

window.notify = (success = true, text, delay = 3000) => {
  hide();

  if (text) {
    $.qs('.notify__title').textContent = text;
  }

  if (success) {
    $.qs('.notify').classList.add('notify--success');
  } else {
    $.qs('.notify').classList.add('notify--error');
  }

  // Show
  show();

  // Clear timer
  clearTimeout(timer);

  // Close on timeout
  timer = setTimeout(hide, delay);
};
