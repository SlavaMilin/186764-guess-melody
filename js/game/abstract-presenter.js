import {Application} from "../application";

class AbstractPresenter {
  get element() {
  }

  playAgain() {
    this.model.restart();
    Application.chooseGame(this.model);
  }
}

export {AbstractPresenter};
