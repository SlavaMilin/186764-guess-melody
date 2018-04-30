import {ArtistPresenter} from "./game/artist-presenter";
import {GenrePresenter} from "./game/genre-presenter";
import {WelcomePresenter} from "./game/welcome-presenter";
import {ResultLosePresenter} from "./game/result-lose-presenter";
import {ResultTimeoutPresenter} from "./game/result-timeout-presenter";
import {ResultWinPresenter} from "./game/result-win-presenter";
import {SpinnerPresenter} from "./game/spinner-presenter";
import {MelodyModel} from "./data/melody-model";
import {Load} from "./load";
import {Util} from "./core/util";

class Application {
  static showWelcome() {
    const spinnerScreen = new SpinnerPresenter();
    spinnerScreen.render();
    Load.loadData().then((data) => {
      const model = new MelodyModel(data);
      const welcome = new WelcomePresenter(model);
      welcome.render();
    }).catch(Util.onError);
  }

  static chooseGame(model) {
    gameSelector[model.typeGame](model);
  }

  static showArtist(model) {
    const artistScreen = new ArtistPresenter(model);
    artistScreen.render();
    artistScreen.autoPlay().then(artistScreen.startTimer());
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
    Load.downloadStatistic().then((statistic) => {
      model.gamesStatistic(statistic);
      const winScreen = new ResultWinPresenter(model);
      winScreen.render();
    }).then(() => {
      Load.uploadStatistic(model.state.score);
    }).catch(Util.onError);
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
