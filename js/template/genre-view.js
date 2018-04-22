import {AbstractView} from "../abstract-view";

class GenreView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this._currentGame = this.state.data[this.state.screen];
  }

  get template() {
    return `
    <section class="main main--level main--level-genre">
      <div class="main-wrap">
        <h2 class="title">Выберите ${this._currentGame.game[this._currentGame.currentMelody].genre} треки</h2>
        <form class="genre">
        ${Array(this._currentGame.game.length).fill().map((it, i) => (`
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio src="${this._currentGame.game[i].src}"></audio>
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
    `;
  }

  checkAnswer() {
  }

  validateMelody() {
  }

  onFormSubmit() {
  }

  audioSwitcher() {
  }

  bind() {
    const form = this.element.querySelector(`.genre`);
    form.addEventListener(`submit`, (evt) => {
      this.onFormSubmit(evt);
    });
  }
}

export {GenreView};
