import WelcomeView from "./welcome-view";
import AbstractPresenter from "./abstract-presenter";
import Application from "../application";

class WelcomePresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.view = new WelcomeView(this.model);
    this.view.startGame = this.startGame;
    this.view.startTimer = this.startTimer;
    this.root = this.view.element;
  }

  get element() {
    return this.root;
  }

  startGame() {
    Application.chooseGame(this.model);
  }
}

export default WelcomePresenter;
