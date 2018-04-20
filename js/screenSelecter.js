import {artistView} from "./template/artist-screen";
import {genreView} from "./template/genre-screen";
import {renderAttemptsEndScreen} from "./template/result-attempts-end";
import {renderWinScreen} from "./template/result-win";
import {renderTimeoutScreen} from "./template/result-timeout";

const screenSelecter = (state) => {
  const currentGame = state.data[state.screen];

  if (!state.lives) {
    renderAttemptsEndScreen();
  } else if (state.screen === state.data.length) {
    renderWinScreen(state);
  } else if (!state.time) {
    renderTimeoutScreen();
  } else if (currentGame.typeGame === `artist`) {
    artistView(state);
  } else if (currentGame.typeGame === `genre`) {
    genreView(state);
  }
};

export {screenSelecter};
