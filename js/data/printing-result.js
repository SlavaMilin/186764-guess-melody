const printingResult = (playersResult, gameResult) => {
  if (gameResult.restNotes) {
    return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
  }
  if (gameResult.restTime === 0) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  }
  playersResult.push(gameResult.score);
  playersResult.sort((a, b) => a - b);
  const position = playersResult.indexOf(gameResult.score) + 1;
  const numberPlayers = playersResult.length;
  const positionPercent = Math.floor(((numberPlayers - position) / numberPlayers) * 100);
  return `Вы заняли ${position} место из ${numberPlayers} игроков. Это лучше, чем у ${positionPercent}% игроков`;
};

export default printingResult;
