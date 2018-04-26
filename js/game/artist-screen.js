import {TimerView} from "./timer-view";
import {MistakesView} from "./mistakes-view";
import {ArtistView} from "./artist-view";

class ArtistScreen {
  constructor(model) {
    this.model = model;
    this.timer = new TimerView(this.model.state);
    this.mistakes = new MistakesView(this.model.state);
    this.content = new ArtistView(this.model.getCurrentLevel);

    this.root = this.content.element;
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.timer.template);
    this.root.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, this.mistakes.template);
  }

  get element() {
    return this.root;
  }
}

export {ArtistScreen};
