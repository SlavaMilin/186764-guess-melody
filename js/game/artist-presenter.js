import {ArtistView} from "./artist-view";
import {AbstractPresenter} from "./abstract-presenter";
import {TimerView} from "./timer-view";
import {MistakesView} from "./mistakes-view";
import {Application} from "../application";

class ArtistPresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new ArtistView(this.model);
    this.view.onAnswer = this.onAnswer;

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.view.element;
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  get element() {
    return this.root;
  }

  onAnswer(answer) {
    if (answer.result !== true) {
      this.model.lose();
    }

    if (this.model.isLose) {
      Application.showLose(this.model);
    }

    if (this.model.isTimeout) {
      Application.showTimeout(this.model);
    }

    if (this.model.canContinue) {
      this.model.nextScreen();
      this.model.setAnswer({
        correct: answer.result,
        time: 25
      });
      Application.chooseGame(this.model);
    }
  }
}

export {ArtistPresenter};
