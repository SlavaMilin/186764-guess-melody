const INITIAL_GAME = {
  lives: 3,
  time: 300,
  screen: 0
};

const changeScreen = (game, screen) => {
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

export {INITIAL_GAME, changeScreen, lose};
