const countStatistic = (getAnswer, spendTime, data) => {
  if (!data) {
    data = {};
    data.answers = [];
    data.screen = 0;
  }
  const result = {};
  result.screen = data.screen + 1;
  result.answers = [{
    correct: getAnswer,
    time: spendTime
  }, ...data.answers];

  return result;
};

export {countStatistic};
