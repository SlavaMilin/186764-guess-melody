import {WelcomeView} from "./game/welcome-view";
import {ArtistPresenter} from "./game/artist-presenter";
import {GenrePresenter} from "./game/genre-presenter";
import {MelodyModel} from "./data/melody-model";
import {ResultLoseView} from "./game/result-lose-view";

const place = document.querySelector(`.main`);

const render = (html) => {
  place.innerHTML = ``;
  place.appendChild(html);
};

class Application {

  static showWelcome() {
    const welcome = new WelcomeView();
    render(welcome.element);
  }

  static startGame() {
    const melodyModel = new MelodyModel();
    gameSelector[melodyModel.typeGame](melodyModel);
  }

  static chooseGame(model) {
    gameSelector[model.typeGame](model);
  }

  static showArtist(model) {
    const artistScreen = new ArtistPresenter(model);
    render(artistScreen.element);
  }

  static showGenre(model) {
    const genreScreen = new GenrePresenter(model);
    render(genreScreen.element);
  }

  static showLose(model) {
    const loseScreen = new ResultLoseView(model);
    loseScreen.newGame = Application.newGame;
    render(loseScreen.element);
  }

  static newGame() {
    this.model.restart();
    Application.chooseGame(this.model);
  }
}

const gameSelector = {
  'artist': Application.showArtist,
  'genre': Application.showGenre
};

export {Application};
