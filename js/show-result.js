import render from './render';
import resultWin from './template/result-win';
import resultTimeout from './template/result-timeout';
import playAgain from './play-again';


const showResult = () => {
  const btnSubmit = document.querySelector(`.genre-answer-send`);
  const input = document.querySelectorAll(`input[name="answer"]`);
  const randomValue = Math.floor(Math.random() * 2);

  btnSubmit.disabled = true;
  input.forEach((item) => {
    item.addEventListener(`click`, () => {
      if (item.checked === true) {
        btnSubmit.disabled = false;
      }
    });
  });

  btnSubmit.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (randomValue) {
      render(resultWin);
      playAgain();
    } else {
      render(resultTimeout);
      playAgain();
    }
  });

};

export default showResult;
