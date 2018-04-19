import {initialSettings} from "../data/initialState";

const score = (answers) => {
  if (answers.length < 10) {
    return -1;
  }
  return answers.reduce((acc, current) => {
    if (current.correct && current.time < initialSettings.fastAnswer) {
      return +acc + +2;
    }
    if (current.correct) {
      return +acc + +1;
    }
    return +acc;
  }, 0);
};

export {score};
