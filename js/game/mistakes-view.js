import AbstractView from "./abstract-view";

class MistakesView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
    <div class="main-mistakes">
    ${Array(3 - this.state.lives).fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`).join(``)}
    </div>`;
  }
}


export default MistakesView;
