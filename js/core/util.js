class Util {
  static calculateMin(time) {
    const result = Math.floor(time) / 60;
    return result < 10 ? `0` + result : result;
  }

  static calculateSec(time) {
    const result = Math.floor(time) % 60;
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
          const activeMelody = this.element.querySelector(`.player-control[data-active="true"]`);

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
}

export {Util};
