import AbstractView from "./abstract-view";
import Util from "../core/util";

class ResultWinView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.state = model.state;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${Util.calculateMin(this.model.initialTime - this.state.time)}&nbsp;минуты и ${Util.calculateSec(this.model.initialTime - this.state.time)}&nbsp;секунд
        <br>вы&nbsp;набрали ${this.score.answers} баллов (${this.score.fastAnswers} быстрых)
        <br>совершив ${this.model.initialLives - this.state.lives} ошибки</div>
      <span class="main-comparison">${Util.printingResult(this.model.getGamesStatistic, this.score.answers)}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
    `;
  }

  bind() {
    const playAgainBtn = this.element.querySelector(`.main-replay`);

    playAgainBtn.addEventListener(`click`, () => {
      this.playAgain(this.model);
    });
  }
}

export default ResultWinView;
