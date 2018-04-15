import {render} from "../core/util";
import welcome from './template/welcome-sreen';

const playAgain = () => {
  const replayBtn = document.querySelector(`.main-replay`);
  replayBtn.addEventListener(`click`, () => {
    render(welcome);
  });
};

export default playAgain;
