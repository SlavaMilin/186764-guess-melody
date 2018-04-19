import {render, createDomElement} from "../core/util";
import {timer} from "./timer";
import {mistakes} from "./mistakes";
import validateMelody from '../core/validateMelody';
import {audioSwitcher} from "../core/audioSwitcher";

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

const checkAnswer = (data) => {
  let result = true;
  const answer = document.querySelectorAll(`input[name="answer"]:checked`);
  const correct = data.game[data.currentMelody].genre;
  for (let i = 0; i < answer.length; i++) {
    const current = data.game[+answer[i].value].genre;
    if (correct !== current) {
      result = false;
    }
  }
  return result;
};

const genreView = (state) => {

  render(genreTemplate(state.data[state.screen]));

  const main = document.querySelector(`.main`);
  const form = document.querySelector(`.genre`);

  main.insertAdjacentHTML(`afterbegin`, mistakes(state));
  main.insertAdjacentHTML(`afterbegin`, timer(state));

  audioSwitcher();
  validateMelody();

  form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
  });
};

const renderGenreScreen = (state) => {
  genreView(state);
};

export {renderGenreScreen};
