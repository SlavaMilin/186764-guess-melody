import {assert} from 'chai';
import {countStatistic} from "./countStatistic";

const testData = {
  screen: 1,
  answers: [
    {
      correct: true,
      time: 25
    }
  ]
};

describe(`test statistic function`, () => {
  it(`should return object`, () => {
    assert.isObject(countStatistic(true, 25));
  });
  it(`should increase number of screen by 1 after call`, () => {
    const current = countStatistic(true, 25, testData);
    const currentTestScreen = current.screen;
    assert.equal(countStatistic(true, 25, current).screen, currentTestScreen + 1);
  });
  it(`should return basic parameters if func call without data`, () => {
    const current = countStatistic(true, 25);
    assert.equal(current.screen, 1);
    assert.equal(current.answers.length, 1);
  });
});
