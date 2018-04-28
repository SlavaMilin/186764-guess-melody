import {AbstractView} from "./abstract-view";

class GenreView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.data = model.getCurrentLevel;
  }

  get template() {
    return `
    <section class="main main--level main--level-genre">
      <div class="main-wrap">
        <h2 class="title">Выберите ${this.data.gameGenre} треки</h2>
        <form class="genre">
        ${Array(this.data.game.length).fill().map((it, i) => (`
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio src="${this.data.game[i].src}"></audio>
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

  onAnswer() {
  }

  audioSwitcher() {
  }

  bind() {
    const form = this.element.querySelector(`.genre`);
    const btnSubmit = this.element.querySelector(`.genre-answer-send`);

    btnSubmit.disabled = true;

    form.addEventListener(`submit`, (evt) => {
      evt.preventDefault();
      this.onAnswer();
    });

    form.addEventListener(`change`, (evt) => {
      if (evt.target.name === `answer`) {
        const checked = form.querySelectorAll(`input:checked`).length;
        btnSubmit.disabled = !checked;
      }
    });

    this.audioSwitcher();
  }
}

export {GenreView};
