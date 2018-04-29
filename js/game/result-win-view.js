import {AbstractView} from "./abstract-view";
import {Util} from "../core/util";

class ResultWinView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.state = model.state;
    this.score = model.score;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${Util.calculateMin(300 - this.state.time)}&nbsp;минуты и ${Util.calculateSec(300 - this.state.time)}&nbsp;секунд
        <br>вы&nbsp;набрали ${this.score[0]} баллов (${this.score[1]} быстрых)
        <br>совершив ${3 - this.state.lives} ошибки</div>
      <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
    `;
  }

  newGame() {
  }


  bind() {
    const playAgainBtn = this.element.querySelector(`.main-replay`);

    playAgainBtn.addEventListener(`click`, () => {
      this.playAgain(this.model);
    });
  }
}

export {ResultWinView};
