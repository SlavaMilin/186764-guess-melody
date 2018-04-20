import {render, createDomElement} from "../core/util";
import {timer} from "./timer";
import {mistakes} from "./mistakes";
import {audioSwitcher} from "../core/audioSwitcher";
import {screenSelecter} from "../screenSelecter";

const genreTemplate = (data) => createDomElement(`
<section class="main main--level main--level-genre">
  <div class="main-wrap">
    <h2 class="title">Выберите ${data.game[data.currentMelody].genre} треки</h2>
    <form class="genre">
    ${Array(data.game.length).fill().map((it, i) => (`
      <div class="genre-answer">
        <div class="player-wrapper">
          <div class="player">
            <audio src="${data.game[i].src}"></audio>
            <button class="player-control player-control--pause" data-index="${i}"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <input type="checkbox" name="answer" value="${i}" id="a-${i}">
        <label class="genre-answer-check" for="a-${i}"></label>
      </div>
    `)).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </div>
</section>
`);

const checkAnswer = (state) => {
  let result = true;
  const currentGame = state[state.screen];
  const answer = document.querySelectorAll(`input[name="answer"]:checked`);
  const correct = currentGame.game[currentGame.currentMelody].genre;
  for (let i = 0; i < answer.length; i++) {
    const value = +answer[i].value;
    const current = currentGame.game[value].genre;
    if (correct !== current) {
      result = false;
      state.lives -= 1;
      break;
    }
  }
  state.answers.push({
    correct: result,
    time: 25
  });
};

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

const genreView = (state) => {
  const currentGame = state.data[state.screen];

  render(genreTemplate(currentGame));

  const main = document.querySelector(`.main`);
  const form = document.querySelector(`.genre`);

  main.insertAdjacentHTML(`afterbegin`, mistakes(state));
  main.insertAdjacentHTML(`afterbegin`, timer(state));

  audioSwitcher();
  validateMelody();

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    checkAnswer(state);
    state.screen += 1;
    screenSelecter(state);
  });
};

export {genreView};
