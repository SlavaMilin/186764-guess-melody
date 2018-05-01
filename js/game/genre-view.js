import AbstractView from "./abstract-view";

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
        <h2 class="title">${this.data.question}</h2>
        <form class="genre">
        ${Array(this.data.answers.length).fill().map((it, i) => (`
          <div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio src="${this.data.answers[i].src}"></audio>
                <button class="player-control" data-index="${i}"></button>
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
    this.startTimer();
  }

  audioSwitcher() {
    const audio = this.element.querySelectorAll(`audio`);
    const audioControlBtn = this.element.querySelectorAll(`.player-control`);

    audioControlBtn.forEach((it) => {

      it.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        if (evt.target.classList.contains(`player-control--pause`)) {
          evt.target.classList.remove(`player-control--pause`);
          audio[evt.target.dataset.index].pause();
          evt.target.dataset.active = false;
        } else {
          const activeMelody = document.querySelector(`.player-control[data-active="true"]`);
          if (activeMelody) {
            activeMelody.classList.remove(`player-control--pause`);
            audio[activeMelody.dataset.index].pause();
            activeMelody.dataset.active = false;
          }
          evt.target.dataset.active = true;
          evt.target.classList.add(`player-control--pause`);
          audio[evt.target.dataset.index].play();
        }
      });
    });
  }

  startTimer() {
  }

  onAnswer() {
  }
}

export default GenreView;
