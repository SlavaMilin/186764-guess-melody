/**
 *
 * @param getAnswer {boolean}
 * @param spendTime {int}
 * @param data {object}
 */

const countState = (getAnswer, spendTime, data) => {
  const result = {};
  result.screen = data.screen + 1;
  result.answers = [{
    correct: getAnswer,
    time: spendTime
  }, ...data.answers];

  return result;
};

export {countState};
