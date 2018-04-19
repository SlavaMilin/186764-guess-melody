import {render, createDomElement} from "../core/util";
import {renderWelcomeScreen} from './welcome-sreen';

const attemptsEndTemplate = () => createDomElement(`
<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

  <h2 class="title">Какая жалость!</h2>
  <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>
`);

const renderAttemptsEndScreen = () => {
  render(attemptsEndTemplate());
  const playAgainBtn = document.querySelector(`.main-replay`);
  playAgainBtn.addEventListener(`click`, () => {
    renderWelcomeScreen();
  });
};

export {renderAttemptsEndScreen};
