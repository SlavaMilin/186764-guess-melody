import {renderWelcomeScreen} from '../template/welcome-sreen';

const playAgain = () => {
  const replayBtn = document.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    renderWelcomeScreen();
  });
};

export default playAgain;
