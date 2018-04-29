import {GenreView} from "./genre-view";
import {AbstractPresenter} from "./abstract-presenter";
import {TimerView} from "./timer-view";
import {MistakesView} from "./mistakes-view";
import {Util} from "../core/util";
import {Application} from "../application";

class GenrePresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new GenreView(this.model);
    this.view.startTimer = Util.startTimer;
    this.view.stopTimer = Util.stopTimer;
    this.view.updateTime = Util.updateTime;
    this.view.onAnswer = this.onAnswer;
    this.view.audioSwitcher = Util.audioSwitcher;

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.view.element;
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  onAnswer() {
    let result = true;

    const answers = document.querySelectorAll(`input[name="answer"]:checked`);

    for (let i = 0; i < answers.length; i++) {
      const getValue = +answers[i].value;
      if (!this.data.game[getValue].result) {
        result = false;
        this.model.lose();
        break;
      }
    }

    if (this.model.isLose) {
      Application.showLose(this.model);
    } else {
      this.model.nextScreen();

      const roundTime = this.stopTimer();

      this.model.setAnswer({
        correct: result,
        time: roundTime
      });

      if (this.model.isFinish) {
        Application.showWin(this.model);
      }

      if (this.model.canContinue) {
        Application.chooseGame(this.model);
      }
    }
  }
}

export {GenrePresenter};
