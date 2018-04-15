import {assert} from 'chai';
import {countState} from "./countState";

const initialTestData = {
  screen: 0,
  answers: []
};

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
    assert.isObject(countState(true, 25, initialTestData));
  });
  it(`should increase number of screen by 1 after call`, () => {
    const current = countState(true, 25, testData);
    const currentTestScreen = current.screen;
    assert.equal(countState(true, 25, current).screen, currentTestScreen + 1);
  });
  it(`should return correct data on initial data`, () => {
    const current = countState(true, 25, initialTestData);
    assert.equal(current.screen, 1);
    assert.equal(current.answers.length, 1);
  });
});
