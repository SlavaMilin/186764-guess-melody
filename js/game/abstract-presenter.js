import Application from "../application";
import Util from "../core/util";

class AbstractPresenter {
  constructor(model) {
    this.model = model;
  }

  playAgain() {
    this.model.restart();
    Application.chooseGame(this.model);
  }

  startTimer() {
    this._beginTime = this.model.state.time;
    this._timer = setInterval(() => {
      if (this.model.state.time <= 0) {
        clearInterval(this._timer);
        Application.showTimeout(this.model);
      } else {
        this.model.tick();
        this.updateTime();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this._timer);
    return this._beginTime - this.model.state.time;
  }

  updateTime() {
    const WARNING_TIME = 30;
    const currentTime = this.model.state.time;
    const min = document.querySelector(`.timer-value-mins`);
    const sec = document.querySelector(`.timer-value-secs`);

    const minuteValue = Util.calculateMin(currentTime);
    const secondValue = Util.calculateSec(currentTime);

    min.innerHTML = minuteValue;
    sec.innerHTML = secondValue;

    if (secondValue < WARNING_TIME && secondValue % 2) {
      sec.style.color = `red`;
      min.style.color = `red`;
    } else {
      sec.style.color = ``;
      min.style.color = ``;
    }
  }

  render() {
    const place = document.querySelector(`.main`);
    place.innerHTML = ``;
    place.appendChild(this.root);
  }
}

export default AbstractPresenter;
