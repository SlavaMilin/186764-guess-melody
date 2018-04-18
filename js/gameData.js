import {data} from "./data/data";
import {shuffleData} from "./core/shuffleData";
import {initialSettings} from "./data/initialSettings";

const generateSound = (countSound) => {
  const array = shuffleData(data);
  return array.splice(0, countSound);
};


const generateGameData = (countScreen, countSound, gameType) => {
  return Array(countScreen).fill().map(() => (
    {
      typeGame: gameType,
      currentMelody: Math.floor(Math.random() * countSound),
      game: generateSound(countSound)
    }
  ));
};

const artist = generateGameData(initialSettings.artistScreen, initialSettings.artistSong, initialSettings.artistName);
const genre = generateGameData(initialSettings.genreScreen, initialSettings.genreSong, initialSettings.genreName);
const gameData = [...artist, ...genre];

export {gameData};
