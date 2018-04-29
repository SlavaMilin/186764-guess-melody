import {AbstractPresenter} from "./abstract-presenter";
import {StartView} from "./start-view";

class StartPresenter extends AbstractPresenter {
  constructor() {
    super();
    this.view = new StartView();
    this.root = this.view.element;
  }
}

export {StartPresenter};
