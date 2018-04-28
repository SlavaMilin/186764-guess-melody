import {AbstractPresenter} from "./abstract-presenter";
import {ArtistView} from "./artist-view";
import {TimerView} from "./timer-view";
import {MistakesView} from "./mistakes-view";
import {Application} from "../application";
import {Util} from "../core/util";

class ArtistPresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new ArtistView(this.model);
    this.view.startTimer = Util.startTimer;
    this.view.stopTimer = Util.stopTimer;
    this.view.updateTime = Util.updateTime;
    this.view.audioSwitcher = Util.audioSwitcher;
    this.view.onAnswer = this.onAnswer;

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.view.element;

    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  onAnswer(answer) {
    if (answer.result !== true) {
      this.model.lose();
    }

    if (this.model.isLose) {
      Application.showLose(this.model);
    } else {
      this.model.nextScreen();

      const roundTime = this.stopTimer();

      this.model.setAnswer({
        correct: answer.result,
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

export {ArtistPresenter};
