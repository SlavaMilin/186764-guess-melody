import {render, createDomElement} from "../core/util";
import {gameData} from "../gameData";
import {timer} from "./timer";
import {mistakes} from "./mistakes";
import renderGenreScreen from './genre-screen';
import {initialSettings} from "../data/initialSettings";


const artistTemplate = (state) => createDomElement(`
<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    ${timer(state)}
  </svg>
  ${mistakes(state)}

  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src="${gameData[state.screen].game[gameData[state.screen].currentMelody].src}"></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
    
${Array(initialSettings.artistSong).fill().map((it, i) => (`
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}"/>
    <label class="main-answer" for="answer-${i}">
      <img class="main-answer-preview" src="${gameData[state.screen].game[i].image}"
           alt="${gameData[state.screen].game[i].artist}" width="134" height="134">
      ${gameData[state.screen].game[i].artist}
    </label>
  </div>
`))}
    
    </form>
  </div>
</section>
`);

const renderArtistScreen = (state) => {
  const btnPlay = document.querySelector(`.main-play`);
  const onBtnPlayClick = (evt) => {
    evt.preventDefault();
    render(artistTemplate(state));
    renderGenreScreen();

    const audio = document.querySelector(`audio`);
    const audioControlBtn = document.querySelector(`.player-control`);

    audio.play();

    audioControlBtn.addEventListener(`click`, () => {
      if (audioControlBtn.classList.contains(`player-control--pause`)) {
        audio.pause();
        audioControlBtn.classList.remove(`player-control--pause`);
      } else {
        audio.play();
        audioControlBtn.classList.add(`player-control--pause`);
      }
    });
  };
  btnPlay.addEventListener(`click`, onBtnPlayClick);
};

export {renderArtistScreen};

