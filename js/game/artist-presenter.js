import AbstractPresenter from "./abstract-presenter";
import ArtistView from "./artist-view";
import TimerView from "./timer-view";
import MistakesView from "./mistakes-view";
import Application from "../application";

class ArtistPresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new ArtistView(this.model);
    this.view.onAnswer = this.onAnswer.bind(this);

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.view.element;

    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  onAnswer(answer) {
    if (answer.isCorrect !== true) {
      this.model.lose();
    }

    const roundTime = this.stopTimer();

    if (this.model.isLose) {
      Application.showLose(this.model);
    } else {
      this.model.nextScreen();

      this.model.setAnswer = {
        correct: answer.isCorrect,
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

  autoPlay() {
    return document.querySelector(`audio`).play();
  }
}

export default ArtistPresenter;
