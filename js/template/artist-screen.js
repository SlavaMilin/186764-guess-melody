import {render, createDomElement} from "../core/util";
import {gameData} from "../gameData";
import {timer} from "./timer";
import {mistakes} from "./mistakes";
import {initialSettings} from "../data/initialSettings";
import {renderGenreScreen} from './genre-screen';
import {audioSwitcher} from "../core/audioSwitcher";


const artistTemplate = (data) => createDomElement(`
<section class="main main--level main--level-artist">
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src="${data.game[data.currentMelody].src}"></audio>
        <button class="player-control player-control--pause" data-index="0"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
    
${Array(data.game.length).fill().map((it, i) => (`
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${i}"/>
    <label class="main-answer" for="answer-${i}">
      <img class="main-answer-preview" src="${data.game[i].image}"
           alt="${data.game[i].artist}" width="134" height="134">
      ${data.game[i].artist}
    </label>
  </div>
`)).join(``)}
    
    </form>
  </div>
</section>
`);

const artistView = (state) => {

  render(artistTemplate(gameData[state.screen]));

  const main = document.querySelector(`.main`);
  const listArtist = document.querySelector(`.main-list`);


  main.insertAdjacentHTML(`afterbegin`, mistakes(state));
  main.insertAdjacentHTML(`afterbegin`, timer(state));

  listArtist.addEventListener(`click`, (evt) => {
    if (evt.target.name === `answer` && +evt.target.value === gameData[state.screen].currentMelody) {
      if (state.screen === initialSettings.artistScreen - 1) {
        state.screen += 1;
        renderGenreScreen(state);
      } else {
        state.screen += 1;
        artistView(state);
      }
    }
  });

  audioSwitcher();

};

const renderArtistScreen = (state) => {
  const btnPlay = document.querySelector(`.main-play`);

  btnPlay.addEventListener(`click`, () => {
    artistView(state);
  });
};

export {renderArtistScreen};

