import {Application} from "../application";

class AbstractPresenter {
  playAgain() {
    this.model.restart();
    Application.chooseGame(this.model);
  }

  render() {
    const place = document.querySelector(`.main`);
    place.innerHTML = ``;
    place.appendChild(this.root);
  }

}

export {AbstractPresenter};
