import {AbstractView} from "./abstract-view";

class ArtistView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.data = model.getCurrentLevel;
    this.currentMelody = this.data.game.findIndex((it) => it.result);
  }

  get template() {
    return `
    <section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this.data.game[this.currentMelody].src}"></audio>
            <button class="player-control" data-index="0"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
        ${Array(this.data.game.length).fill().map((it, i) => (`
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${i}"/>
          <label class="main-answer" for="answer-${i}">
            <img class="main-answer-preview" src="${this.data.game[i].image}"
                 alt="${this.data.game[i].artist}" width="134" height="134">
            ${this.data.game[i].artist}
          </label>
        </div>
        `)).join(``)}
        </form>
      </div>
    </section>
    `;
  }

  audioSwitcher() {
  }

  startTimer() {
  }

  bind() {
    const answersList = this.element.querySelector(`.main-list`);

    answersList.addEventListener(`change`, (evt) => {
      const answerIndex = +evt.target.value;
      const answer = this.data.game[answerIndex];

      if (answer) {
        this.onAnswer(answer);
      }
    });

    this.audioSwitcher();
    this.startTimer();
  }

}


export {ArtistView};

