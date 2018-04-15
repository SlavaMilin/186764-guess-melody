import {render, createDomElement} from "../core/util";
import {data} from "../data/data";
import {timer} from "./timer";
import {mistakes} from "./mistakes";
import renderGenreScreen from './genre-screen';
import {initialSettings} from "../data/initialSettings";

const artistTemplate = createDomElement(`
<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    ${timer}
  </svg>
  ${mistakes}

  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio></audio>
        <button class="player-control player-control--pause"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
    
${
  Array(initialSettings.artistSong).fill().map((it, i) => (`
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
    <label class="main-answer" for="answer-${i + 1}">
      <img class="main-answer-preview" src="http://placehold.it/134x134"
           alt="Пелагея" width="134" height="134">
      Пелагея
    </label>
  </div>
  `))
}
    
    </form>
  </div>
</section>
`);

const renderArtistScreen = () => {
  const btnPlay = document.querySelector(`.main-play`);
  const onBtnPlayClick = (evt) => {
    evt.preventDefault();
    render(artistTemplate);
    renderGenreScreen();
  };
  btnPlay.addEventListener(`click`, onBtnPlayClick);
};

export default renderArtistScreen;

