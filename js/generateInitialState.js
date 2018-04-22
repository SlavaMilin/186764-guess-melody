import {data} from "./data/data";
import {initialState} from "./data/initialState";

const generateInitialState = () => {
  initialState.data = data;
  return Object.assign({}, initialState);
};

export {generateInitialState};
