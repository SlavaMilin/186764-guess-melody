import {MELODY_DATA} from "./data/melody-data";
import {INITIAL_GAME} from "./data/melody";

const generateInitialState = () => {
  INITIAL_GAME.data = MELODY_DATA;
  return Object.assign({}, INITIAL_GAME);
};

export {generateInitialState};
