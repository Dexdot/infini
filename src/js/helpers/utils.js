export const qs = (selector, ctx = document) => ctx.querySelector(selector);

export const qsa = (selector, ctx = document) =>
  Array.from(ctx.querySelectorAll(selector));

export const siblings = el =>
  [...el.parentElement.children].filter(c => c !== el);

export const nodeIndex = el => [...el.parentNode.children].indexOf(el);

export const listen = (selector, event, cb) => {
  qsa(selector).forEach(el => {
    el.addEventListener(event, cb);
  });
};

export const outerHeight = el => {
  let height = el.offsetHeight;
  const style = getComputedStyle(el);

  height +=
    window.parseFloat(style.marginTop) + window.parseFloat(style.marginBottom);

  return height;
};

export const each = (selector, cb) => {
  const elements = qsa(selector);

  if (elements.length <= 0) return false;

  elements.forEach((el, i) => {
    cb(el, i);
  });
};

export const removeClassStartingWith = (el, text) => {
  const match = (
    el.className.match(new RegExp(`\\S*${text}\\S*`, 'g')) || []
  ).join(' ');
  if (match) el.classList.remove(match);
};

export const serialize = form => {
  // Setup our serialized data
  const serialized = [];

  // Loop through each field in the form
  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i];

    // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
    if (
      !field.name ||
      field.disabled ||
      field.type === 'file' ||
      field.type === 'reset' ||
      field.type === 'submit' ||
      field.type === 'button'
    )
      continue;

    // If a multi-select, get all selections
    if (field.type === 'select-multiple') {
      for (let n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(
          `${encodeURIComponent(field.name)}=${encodeURIComponent(
            field.options[n].value
          )}`
        );
      }
    }

    // Convert field data to a query string
    else if (
      (field.type !== 'checkbox' && field.type !== 'radio') ||
      field.checked
    ) {
      serialized.push(
        `${encodeURIComponent(field.name)}=${encodeURIComponent(field.value)}`
      );
    }
  }

  return serialized.join('&');
};
