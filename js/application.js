import {WelcomeView} from "./game/welcome-view";
import {ArtistView} from "./game/artist-view";
import {GenreView} from "./game/genre-view";
import {ResultLoseView} from "./game/result-lose-view";
import {ResultTimeoutView} from "./game/result-timeout-view";
import {ResultWinView} from "./game/result-win-view";
import {ArtistScreen} from "./game/artist-screen";
import {MelodyModel} from "./data/melody-model";
import {render} from "./core/util";


class Application {
  static showWelcome() {
    const welcome = new WelcomeView();
    return render(welcome.element);
  }

  static showArtist() {
    const artistScreen = new ArtistScreen(new MelodyModel());
    render(artistScreen.element);
  }
}

export {Application};
