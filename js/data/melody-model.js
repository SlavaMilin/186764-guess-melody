import {INITIAL_GAME, changeScreen, lose} from "./melody";
import {MELODY_DATA} from "./melody-data";

const getLevel = (state) => MELODY_DATA[state.screen];

class MelodyModel {
  constructor() {
    this.restart();
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME);
  }

  get state() {
    return this._state;
  }

  get getCurrentLevel() {
    return getLevel(this._state);
  }

  get typeGame() {
    return getLevel(this._state).typeGame;
  }

  get isLose() {
    return this._state.lives <= 0 || this._state.time <= 0;
  }

  get isFinish() {
    return this._state.screen >= MELODY_DATA.length;
  }

  get canContinue() {
    return !this.isLose && !this.isFinish;
  }

  nextScreen() {
    this._state = changeScreen(this._state, this._state.screen + 1);
  }

  lose() {
    this._state = lose(this._state);
  }
}

export {MelodyModel};
