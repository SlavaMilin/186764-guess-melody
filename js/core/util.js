class Util {
  static calculateMin(time) {
    const result = Math.floor(time / 60);
    return result < 10 ? `0` + result : result;
  }

  static calculateSec(time) {
    const result = Math.floor(time % 60);
    return result < 10 ? `0` + result : result;
  }

  static printingResult(playersResult = [], gameResult) {
    let score = [];

    for (let it of playersResult) {
      if (it.score) {
        score.push(it.score);
      }
    }

    score.push(gameResult);
    score.sort((a, b) => a - b);

    const position = score.indexOf(gameResult) + 1;
    const numberPlayers = score.length;
    const positionPercent = Math.floor(((numberPlayers - position) / numberPlayers) * 100);

    return `Вы заняли ${position} место из ${numberPlayers} игроков. Это лучше, чем у ${positionPercent}% игроков`;
  }

  static onError(error) {
    const element = `
<div style="
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 53%;
  background-color: red;
  color: white;
  border-radius: 50%;
  font-size: 20px;">
  ${error}
</div>`;
    document.querySelector(`.main`).insertAdjacentHTML(`afterbegin`, element);
  }
}

export default Util;
