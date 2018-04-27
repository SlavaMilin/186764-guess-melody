import {ArtistPresenter} from "./game/artist-presenter";
import {GenrePresenter} from "./game/genre-presenter";
import {WelcomePresenter} from "./game/welcome-presenter";
import {ResultLosePresenter} from "./game/result-lose-presenter";
import {ResultTimeoutPresenter} from "./game/result-timeout-presenter";

const render = (html) => {
  const place = document.querySelector(`.main`);
  place.innerHTML = ``;
  place.appendChild(html);
};

class Application {

  static showWelcome() {
    const welcome = new WelcomePresenter();
    render(welcome.element);
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
    const loseScreen = new ResultLosePresenter(model);
    render(loseScreen.element);
  }

  static showTimeout(model) {
    const timeoutScreen = new ResultTimeoutPresenter(model);
    render(timeoutScreen.element);
  }
}

const gameSelector = {
  'artist': Application.showArtist,
  'genre': Application.showGenre
};

export {Application};
