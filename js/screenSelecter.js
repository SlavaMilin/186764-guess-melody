import {WelcomeView} from "./template/welcome-view";
import {ArtistView} from "./template/artist-view";
import {GenreView} from "./template/genre-view";
import {TimerView} from "./template/timer-view";
import {MistakesView} from "./template/mistakes-view";
import {ResultLoseView} from "./template/result-lose-view";
import {ResultTimeoutView} from "./template/result-timeout-view";
import {ResultWinView} from "./template/result-win-view";
import {audioSwitcher} from "./core/audioSwitcher";
import {generateInitialState} from "./generateInitialState";
import {render, insertVidget, calculateMin, calculateSec} from "./core/util";
import {score} from "./core/score";


const screenSelecter = (state) => {

  if (!state) {

    state = generateInitialState();

    const welcomeScreen = new WelcomeView();
    render(welcomeScreen.element);

    welcomeScreen.onBtnPlayClick = () => {
      screenSelecter(state);
    };

  } else if (!state.firstPlay) {

    state = generateInitialState();
    screenSelecter(state);

  } else if (!state.lives) {

    const ResultLoseScreen = new ResultLoseView();

    ResultLoseScreen.newGame = () => {
      state.firstPlay = false;
      screenSelecter(state);
    };

    render(ResultLoseScreen.element);

  } else if (!state.time) {

    const ResultTimeoutScreen = new ResultTimeoutView();

    ResultTimeoutScreen.newGame = () => {
      state.firstPlay = false;
      screenSelecter(state);
    };

    render(ResultTimeoutScreen.element);

  } else if (state.screen === state.data.length) {
    state.score = score(state.answers);
    const ResultWinScreen = new ResultWinView(state);

    ResultWinScreen.calculateMin = calculateMin;
    ResultWinScreen.calculateSec = calculateSec;

    ResultWinScreen.newGame = () => {
      state.firstPlay = false;
      screenSelecter(state);
    };

    render(ResultWinScreen.element);

  } else if (state.data[state.screen].typeGame === `artist`) {

    const ArtistScreen = new ArtistView(state);
    const TimerScreen = new TimerView(state);
    const MistakesScreen = new MistakesView(state);

    TimerScreen.calculateMin = calculateMin;
    TimerScreen.calculateSec = calculateSec;

    ArtistScreen.audioSwitcher = audioSwitcher;

    ArtistScreen.onArtistAnswerChange = (evt) => {
      evt.preventDefault();
      if (evt.target.name === `answer`) {
        let result = true;

        if (+evt.target.value !== state.data[state.screen].currentMelody) {
          result = false;
          state.lives -= 1;
        }

        state.answers.push({
          correct: result,
          time: 25
        });

        state.screen += 1;

        screenSelecter(state);
      }
    };

    render(ArtistScreen.element);
    insertVidget(MistakesScreen.template);
    insertVidget(TimerScreen.template);
    ArtistScreen.audioSwitcher();

  } else if (state.data[state.screen].typeGame === `genre`) {

    const GenreScreen = new GenreView(state);
    const TimerScreen = new TimerView(state);
    const MistakesScreen = new MistakesView(state);

    TimerScreen.calculateMin = calculateMin;
    TimerScreen.calculateSec = calculateSec;

    GenreScreen.checkAnswer = () => {
      let result = true;
      const currentGame = state.data[state.screen];
      const answer = document.querySelectorAll(`input[name="answer"]:checked`);
      const correct = currentGame.game[currentGame.currentMelody].genre;
      for (let i = 0; i < answer.length; i++) {
        const value = +answer[i].value;
        const current = currentGame.game[value].genre;
        if (correct !== current) {
          result = false;
          state.lives -= 1;
          break;
        }
      }
      state.answers.push({
        correct: result,
        time: 25
      });
    };

    GenreScreen.validateMelody = () => {
      const btnSubmit = document.querySelector(`.genre-answer-send`);
      const form = document.querySelector(`.genre`);
      btnSubmit.disabled = true;
      form.addEventListener(`change`, (evt) => {
        if (evt.target.name === `answer`) {
          const checked = form.querySelectorAll(`input:checked`).length;
          btnSubmit.disabled = !checked;
        }
      });
    };

    GenreScreen.onFormSubmit = (evt) => {
      evt.preventDefault();
      GenreScreen.checkAnswer(state);
      state.screen += 1;
      screenSelecter(state);
    };

    GenreScreen.audioSwitcher = audioSwitcher;

    render(GenreScreen.element);
    insertVidget(MistakesScreen.template);
    insertVidget(TimerScreen.template);
    GenreScreen.validateMelody();
    GenreScreen.audioSwitcher();
  }
};

export {screenSelecter};
