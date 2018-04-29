import {ArtistPresenter} from "./game/artist-presenter";
import {GenrePresenter} from "./game/genre-presenter";
import {WelcomePresenter} from "./game/welcome-presenter";
import {ResultLosePresenter} from "./game/result-lose-presenter";
import {ResultTimeoutPresenter} from "./game/result-timeout-presenter";
import {ResultWinPresenter} from "./game/result-win-presenter";
import {MelodyModel} from "./data/melody-model";

class Application {

  static showWelcome() {
    const model = new MelodyModel();
    const welcome = new WelcomePresenter(model);
    welcome.render();
  }

  static chooseGame(model) {
    gameSelector[model.typeGame](model);
  }

  static showArtist(model) {
    const artistScreen = new ArtistPresenter(model);
    artistScreen.render();
  }

  static showGenre(model) {
    const genreScreen = new GenrePresenter(model);
    genreScreen.render();
  }

  static showLose(model) {
    const loseScreen = new ResultLosePresenter(model);
    loseScreen.render();
  }

  static showWin(model) {
    const winScreen = new ResultWinPresenter(model);
    winScreen.render();
  }

  static showTimeout(model) {
    const timeoutScreen = new ResultTimeoutPresenter(model);
    timeoutScreen.render();
  }
}

const gameSelector = {
  'artist': Application.showArtist,
  'genre': Application.showGenre
};

export {Application};
