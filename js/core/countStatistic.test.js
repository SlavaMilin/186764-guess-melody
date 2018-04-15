import {assert} from 'chai';
import {countStatistic} from "./countStatistic";

const testData = {
  currentScreen: 4,
  answer: [

  ]
};

describe(`test statistic function`, () => {
  it(`should return array`, () => {
    assert.isArray(countStatistic());
  });
  it(`should increase length by 1 after call`, () => {
    const current = countStatistic.length;
    assert.equal(countStatistic().length, current + 1);
  });
});
