import renderWinScreen from '../template/result-win';
import renderTimeoutScreen from '../template/result-timeout';
import renderAttemptsEndScreen from '../template/result-attempts-end';

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
};

export default validateMelody;
