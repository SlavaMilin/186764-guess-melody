import AbstractView from "./abstract-view";

class ArtistView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.data = model.getCurrentLevel;
  }

  get template() {
    return `
    <section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this.data.src}"></audio>
            <button class="player-control player-control--pause" data-index="0"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
        ${Array(this.data.answers.length).fill().map((it, i) => (`
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${i}"/>
          <label class="main-answer" for="answer-${i}">
            <img class="main-answer-preview" src="${this.data.answers[i].image.url}"
                 alt="${this.data.answers[i].title}" width="134" height="134">
            ${this.data.answers[i].title}
          </label>
        </div>
        `)).join(``)}
        </form>
      </div>
    </section>
    `;
  }

  bind() {
    const answersList = this.element.querySelector(`.main-list`);
    const audioControlBtn = this.element.querySelector(`.player-control`);
    const audio = this.element.querySelector(`audio`);

    console.log(this.data.answers.findIndex((it) => it.isCorrect));

    answersList.addEventListener(`change`, (evt) => {
      const answerIndex = +evt.target.value;
      const answer = this.data.answers[answerIndex];

      if (answer) {
        this.onAnswer(answer);
      }
    });

    audioControlBtn.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`player-control--pause`)) {
        evt.target.classList.remove(`player-control--pause`);
        audio.pause();
      } else {
        evt.target.classList.add(`player-control--pause`);
        audio.play();
      }
    });
  }

}


export default ArtistView;

