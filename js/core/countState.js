/**
 *
 * @param getAnswer {boolean}
 * @param spendTime {int}
 * @param data {object}
 */

const countState = (getAnswer, spendTime, data) => {
  return {
    currentScreen: data.screen,
    set screen(value) {
      this.currentScreen = value;
    },
    get screen() {
      return this.currentScreen;
    },
    answers: [{
      correct: getAnswer,
      time: spendTime
    }, ...data.answers]
  };
};

export {countState};
