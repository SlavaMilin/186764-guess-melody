import {AbstractView} from "../abstract-view";

class ArtistView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this._currentGame = this.state.data[this.state.screen];
  }

  get template() {
    return `
    <section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this._currentGame.game[this._currentGame.currentMelody].src}"></audio>
            <button class="player-control" data-index="0"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
        ${Array(this._currentGame.game.length).fill().map((it, i) => (`
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${i}"/>
          <label class="main-answer" for="answer-${i}">
            <img class="main-answer-preview" src="${this._currentGame.game[i].image}"
                 alt="${this._currentGame.game[i].artist}" width="134" height="134">
            ${this._currentGame.game[i].artist}
          </label>
        </div>
        `)).join(``)}
        </form>
      </div>
    </section>
    `;
  }

  onArtistAnswerChange() {
  }

  audioSwitcher() {
  }

  bind() {
    const main = this.element.querySelector(`.main-list`);

    main.addEventListener(`change`, (evt) => {
      this.onArtistAnswerChange(evt);
    });
  }

}


export {ArtistView};

