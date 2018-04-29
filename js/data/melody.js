const INITIAL_GAME = {
  lives: 3,
  time: 300,
  screen: 0,
  answers: []
};

const changeScreen = (game) => {
  const screen = game.screen + 1;
  return Object.assign({}, game, {
    screen
  });
};

const lose = (game) => {
  const lives = game.lives - 1;
  return Object.assign({}, game, {
    lives
  });
};

const tick = (game) => {
  const time = game.time - 1;
  return Object.assign({}, game, {
    time
  });
};

const setAnswer = (game, answer) => {
  const answers = [...game.answers];
  answers.push(answer);
  return Object.assign({}, game, {
    answers
  });
};

export {INITIAL_GAME, changeScreen, lose, tick, setAnswer};
