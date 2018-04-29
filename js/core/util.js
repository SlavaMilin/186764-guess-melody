import {Application} from "../application";

class Util {
  static calculateMin(time) {
    const result = Math.floor(time / 60);
    return result < 10 ? `0` + result : result;
  }

  static calculateSec(time) {
    const result = Math.floor(time % 60);
    return result < 10 ? `0` + result : result;
  }

  static audioSwitcher() {
    const audio = this.element.querySelectorAll(`audio`);
    const audioControlBtn = this.element.querySelectorAll(`.player-control`);

    for (let i = 0; i < audioControlBtn.length; i++) {
      audioControlBtn[i].classList.remove(`player-control--pause`);

      audioControlBtn[i].addEventListener(`click`, (evt) => {
        if (evt.target.classList.contains(`player-control--pause`)) {
          evt.target.classList.remove(`player-control--pause`);
          audio[evt.target.dataset.index].pause();
          evt.target.dataset.active = false;
        } else {
          const activeMelody = document.querySelector(`.player-control[data-active="true"]`);

          if (activeMelody) {
            activeMelody.classList.remove(`player-control--pause`);
            audio[activeMelody.dataset.index].pause();
            activeMelody.dataset.active = false;
          }

          evt.target.dataset.active = `true`;
          evt.target.classList.add(`player-control--pause`);
          audio[evt.target.dataset.index].play();
        }
        evt.preventDefault();
      });
    }
  }

  static startTimer() {
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

  static stopTimer() {
    clearInterval(this._timer);
    return this._beginTime - this.model.state.time;
  }

  static updateTime() {
    const currentTime = this.model.state.time;
    const min = document.querySelector(`.timer-value-mins`);
    const sec = document.querySelector(`.timer-value-secs`);

    min.innerHTML = Util.calculateMin(currentTime);
    sec.innerHTML = Util.calculateSec(currentTime);
  }

  static onError(error) {
    const element = `<div style="position: absolute; text-align: center; left: 0; right: 0; top: 0; bottom: 0; padding-top: 53%; background-color: red; color: white; border-radius: 50%; font-size: 20px;">${error}</div>`;
    document.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, element);
  }
}

export {Util};
