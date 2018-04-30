import AbstractPresenter from "./abstract-presenter";
import ResultLoseView from "./result-lose-view";

class ResultLosePresenter extends AbstractPresenter {
  constructor(model) {
    super();
    this.model = model;
    this.view = new ResultLoseView(this.model);
    this.view.playAgain = this.playAgain;
    this.root = this.view.element;
  }
}

export default ResultLosePresenter;
