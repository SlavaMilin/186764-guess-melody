const score = (answers, restNotes) => {
  if (restNotes) {
    return -1;
  }
  return answers.reduce((acc, current) => {
    if (current.correct && current.quick) {
      return +acc + +2;
    }
    if (current.correct) {
      return +acc + +1;
    }
    return +acc;
  }, 0);
};

export default score;
