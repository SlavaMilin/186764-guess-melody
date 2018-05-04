import AbstractView from "./abstract-view";

class MistakesView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
    this.state = this.model.state;
  }

  get template() {
    return `
    <div class="main-mistakes">
    ${Array(this.model.initialLives - this.state.lives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>`;
  }
}


export default MistakesView;
