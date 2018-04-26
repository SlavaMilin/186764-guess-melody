import {INITIAL_GAME, changeLevel, loose} from "./melody";
import {MELODY_DATA} from "./melody-data";

const getLevel = (state) => MELODY_DATA[state.screen];

class MelodyModel {
  constructor() {
    this.restart();
  }

  restart() {
    this._state = INITIAL_GAME;
  }

  get state() {
    return this._state;
  }

  nextLevel() {
    this._state = changeLevel(this._state, this._state.level + 1);
  }

  loose() {
    this._state = loose(this._state);
  }


  isDead() {
    return this._state.lives <= 0;
  }

  get getCurrentLevel() {
    return getLevel(this._state);
  }

}

export {MelodyModel};
