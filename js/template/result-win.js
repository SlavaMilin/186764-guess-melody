import {render, createDomElement} from "../core/util";
import {renderWelcomeScreen} from "./welcome-sreen";
import {score} from "../core/score";
import {calculateMin, calculateSec} from "../core/util";

const winTemplate = (state) => createDomElement(`
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;${calculateMin(300 - state.time)}&nbsp;минуты и ${calculateSec(300 - state.time)}&nbsp;секунд
    <br>вы&nbsp;набрали ${state.score[0]} баллов (${state.score[1]} быстрых)
    <br>совершив ${3 - state.lives} ошибки</div>
  <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>
`);

const renderWinScreen = (state) => {
  state.score = score(state.answers);

  render(winTemplate(state));
  const playAgainBtn = document.querySelector(`.main-replay`);

  playAgainBtn.addEventListener(`click`, () => {
    renderWelcomeScreen();
  });
};

export {renderWinScreen};
