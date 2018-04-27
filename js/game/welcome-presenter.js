import {WelcomeView} from "./welcome-view";
import {AbstractPresenter} from "./abstract-presenter";
import {MelodyModel} from "../data/melody-model";
import {Application} from "../application";

class WelcomePresenter extends AbstractPresenter {
  constructor() {
    super();

    this.view = new WelcomeView();
    this.view.startGame = this.startGame;
    this.root = this.view.element;
  }

  get element() {
    return this.root;
  }

  startGame() {
    const model = new MelodyModel();
    Application.chooseGame(model);
  }
}

export {WelcomePresenter};
