import {AbstractPresenter} from "./abstract-presenter";
import {ResultTimeoutView} from "./result-timeout-view";

class ResultTimeoutPresenter extends AbstractPresenter {
  constructor(model) {
    super();
    this.model = model;
    this.view = new ResultTimeoutView(this.model);
    this.view.playAgain = this.playAgain;
    this.root = this.view.element;
  }

  get element() {
    return this.root;
  }
}

export {ResultTimeoutPresenter};
