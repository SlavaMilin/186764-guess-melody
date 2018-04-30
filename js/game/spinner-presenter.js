import {AbstractPresenter} from "./abstract-presenter";
import {SpinnerView} from "./spinner-view";

class SpinnerPresenter extends AbstractPresenter {
  constructor() {
    super();
    this.view = new SpinnerView();
    this.root = this.view.element;
  }
}

export {SpinnerPresenter};
