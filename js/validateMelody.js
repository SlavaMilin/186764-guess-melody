import renderWinScreen from './template/result-win';
import renderTimeoutScreen from './template/result-timeout';
import renderAttemptsEndScreen from './template/result-attempts-end';

const validateMelody = () => {
  const btnSubmit = document.querySelector(`.genre-answer-send`);
  const form = document.querySelector(`.genre`);
  btnSubmit.disabled = true;
  form.addEventListener(`change`, (evt) => {
    if (evt.target.name === `answer`) {
      const checked = form.querySelectorAll(`input:checked`).length;
      btnSubmit.disabled = !checked;
    }
  });
  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    const randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
      case 0:
        renderWinScreen();
        break;
      case 1:
        renderTimeoutScreen();
        break;
      default:
        renderAttemptsEndScreen();
    }
  });
};

export default validateMelody;
