import {render, createDomElement} from "../core/util";
import {generateInitialState} from "../generateInitialState";
import {screenSelecter} from "../screenSelecter";

const welcomeTemplate = () => createDomElement(`
<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>
`);
const renderWelcomeScreen = () => {
  render(welcomeTemplate());
  const state = generateInitialState();
  const btnPlay = document.querySelector(`.main-play`);

  btnPlay.addEventListener(`click`, () => {
    screenSelecter(state);
  });
};

export {renderWelcomeScreen};
