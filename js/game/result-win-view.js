import {AbstractView} from "../abstract-view";

class ResultWinView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${this.calculateMin(300 - this.state.time)}&nbsp;минуты и ${this.calculateSec(300 - this.state.time)}&nbsp;секунд
        <br>вы&nbsp;набрали ${this.state.score[0]} баллов (${this.state.score[1]} быстрых)
        <br>совершив ${3 - this.state.lives} ошибки</div>
      <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
    `;
  }

  newGame() {
  }

  calculateMin() {
  }

  calculateSec() {
  }

  bind() {
    const playAgainBtn = this.element.querySelector(`.main-replay`);

    playAgainBtn.addEventListener(`click`, () => {
      this.newGame();
    });
  }
}

export {ResultWinView};
