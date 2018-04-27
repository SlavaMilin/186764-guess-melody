import {Application} from "../application";

class AbstractPresenter {
  onAnswer(answer) {
    if (answer.result !== true) {
      this.model.lose();
    }

    if (this.model.isLose) {
      Application.showLose(this.model);
    }

    this.model.nextScreen();

    if (this.model.canContinue) {
      Application.chooseGame(this.model);
    }
  }
}

export {AbstractPresenter};
