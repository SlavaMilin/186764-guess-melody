import {INITIAL_GAME, changeScreen, lose, tick, setAnswer} from "./melody";

class MelodyModel {
  constructor(data) {
    this.data = data;
    this.restart();
  }

  get state() {
    return this._state;
  }

  get getCurrentLevel() {
    return this.getLevel(this._state);
  }

  get typeGame() {
    return this.getLevel(this._state).type;
  }

  get isLose() {
    return this._state.lives <= 0;
  }

  get isTimeout() {
    return this._state.time <= 0;
  }

  get isFinish() {
    return this._state.screen >= this.data.length;
  }

  get canContinue() {
    return !this.isLose && !this.isFinish && !this.isTimeout;
  }

  get score() {
    const slowAnswers = this.state.answers.reduce((acc, it) => {
      if (it.correct && it.time > 30) {
        return +acc + 1;
      }
      return +acc;
    }, 0);
    const fastAnswers = this.state.answers.reduce((acc, it) => {
      if (it.correct && it.time < 30) {
        return +acc + 2;
      }
      return +acc;
    }, 0);

    return {
      answers: slowAnswers + fastAnswers,
      fastAnswers
    };
  }

  get getGamesStatistic() {
    return this._gamesStatistic;
  }

  set setAnswer(answer) {
    this._state = setAnswer(this._state, answer);
  }

  set gamesStatistic(statistic) {
    this._gamesStatistic = statistic;
  }

  set saveScore(score) {
    this._state.score = score;
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME);
  }

  getLevel(state) {
    return this.data[state.screen];
  }

  nextScreen() {
    this._state = changeScreen(this._state);
  }

  lose() {
    this._state = lose(this._state);
  }

  tick() {
    this._state = tick(this._state);
  }
}

export default MelodyModel;
