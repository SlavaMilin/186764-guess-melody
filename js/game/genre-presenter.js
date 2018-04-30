import GenreView from "./genre-view";
import AbstractPresenter from "./abstract-presenter";
import TimerView from "./timer-view";
import MistakesView from "./mistakes-view";
import Application from "../application";

class GenrePresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new GenreView(this.model);
    this.view.startTimer = this.startTimer;
    this.view.stopTimer = this.stopTimer;
    this.view.updateTime = this.updateTime;
    this.view.onAnswer = this.onAnswer;

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.view.element;
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  onAnswer() {
    let result = true;

    const answers = document.querySelectorAll(`input[name="answer"]:checked`);

    for (let it of answers) {
      const getValue = +it.value;
      if (this.data.answers[getValue].genre !== this.data.genre) {
        result = false;
        this.model.lose();
        break;
      }
    }

    const roundTime = this.stopTimer();

    if (this.model.isLose) {
      Application.showLose(this.model);
    } else {
      this.model.nextScreen();

      this.model.setAnswer = {
        correct: result,
        time: roundTime
      };

      if (this.model.isFinish) {
        Application.showWin(this.model);
      }

      if (this.model.canContinue) {
        Application.chooseGame(this.model);
      }
    }
  }
}

export default GenrePresenter;
