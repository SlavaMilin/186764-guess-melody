const INITIAL_GAME = {
  lives: 3,
  time: 300,
  screen: 0
};

const changeLevel = (game, level) => {
  return Object.assign({}, game, {
    level
  });
};

const loose = (game) => {
  const lives = game.lives - 1;
  return Object.assign({}, game, {
    lives
  });
};

export {INITIAL_GAME, changeLevel, loose};
