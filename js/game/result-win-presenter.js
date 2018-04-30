import {AbstractPresenter} from "./abstract-presenter";
import {ResultWinView} from "./result-win-view";

class ResultWinPresenter extends AbstractPresenter {
  constructor(model) {
    super();
    this.model = model;
    this.view = new ResultWinView(this.model);
    this.view.score = model.score;
    this.model.saveScore({
      score: model.score[0]
    });
    this.view.playAgain = this.playAgain;
    this.root = this.view.element;
  }
}

export {ResultWinPresenter};
