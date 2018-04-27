import {ArtistView} from "./artist-view";
import {AbstractPresenter} from "./abstract-presenter";
import {TimerView} from "./timer-view";
import {MistakesView} from "./mistakes-view";

class ArtistPresenter extends AbstractPresenter {
  constructor(model) {
    super();

    this.model = model;
    this.content = new ArtistView(this.model);
    this.content.onAnswer = this.onAnswer;

    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.root = this.content.element;
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  get element() {
    return this.root;
  }
}

export {ArtistPresenter};