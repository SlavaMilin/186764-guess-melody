import {assert} from 'chai';
import {initialSettings} from "./data/initialSettings";
import {gameData} from "./gameData";

describe(`test game data`, () => {
  it(`should return array`, () => {
    assert.isArray(gameData);
  });
  it(`should return array with correct count of items`, () => {
    assert.equal(gameData.length, initialSettings.artistScreen + initialSettings.genreScreen);
  });
});
