const score = (answers) => {
  const slowAnswers = answers.reduce((acc, it) => {
    if (it.correct && it.time > 30) {
      return +acc + 1;
    }
    return +acc;
  }, 0);
  const fastAnswers = answers.reduce((acc, it) => {
    if (it.correct && it.time < 30) {
      return +acc + 2;
    }
    return +acc;
  }, 0);

  return [slowAnswers + fastAnswers, fastAnswers];
};

export {score};
