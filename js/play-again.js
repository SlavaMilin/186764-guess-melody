import render from './render';
import welcome from './template/welcome';

const playAgain = () => {
  const replayBtn = document.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    render(welcome);
  });
};

export default playAgain;
