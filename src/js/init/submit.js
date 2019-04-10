import axios from 'axios';
import Inputmask from 'inputmask';

// Mask
const im = new Inputmask('+9(999)999-99-99');
im.mask('.js-mask');

window.addEventListener('DOMContentLoaded', () => {
  const form = $.qs('.contacts__form');

  const isValidPhone = () =>
    im.unmaskedvalue($.qs('.js-mask').value).length > 10;
  const isValid = () =>
    $.qsa('input:not(.js-mask)', form).every(el => el.validity.valid);

  const reset = () => form.reset();

  const submit = () => {
    const data = $.serialize(form);

    axios
      .post(form.action, data)
      .then(() => {
        window.notify(true, 'Заявка отправлена');
        reset();
      })
      .catch(() => {
        window.notify(
          false,
          'Ошибка. Пожалуйста, попробуйте еще раз или позвоните нам.'
        );
      });
  };

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (isValid() && isValidPhone()) {
      submit();
    } else {
      window.notify(false, 'Пожалуйста, заполните все поля');
    }
  });
});
