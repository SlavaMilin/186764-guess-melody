import {assert} from 'chai';
import Util from "./util";

const testResults = [
  {
    score: 3
  },
  {
    score: 5
  },
  {
    score: 7
  },
  {
    score: 9
  },
  {
    score: 15
  },
];

const testData = 9;

describe(`return game statistic`, () => {
  it(`should return correct answer`, () => {
    assert.equal(Util.printingResult(testResults, testData), `Вы заняли 4 место из 6 игроков. Это лучше, чем у 33% игроков`);
    assert.equal(Util.printingResult([], testData), `Вы заняли 1 место из 1 игроков. Это лучше, чем у 0% игроков`);
  });
});
