import {assert} from 'chai';
import score from './score';
import {quickCorrectAnswers, slowAnswers, differentAnswer, notFinishGame, invalidAnswers} from './test-data';

describe(`Counting points`, () => {
  it(`should score quick correct answers`, () => {
    assert.equal(score(quickCorrectAnswers, 10 - quickCorrectAnswers.length), 20);
  });
  it(`should score incorrect answers`, () => {
    assert.equal(score(invalidAnswers, 10 - invalidAnswers.length), 0);
  });
  it(`should score slow answers`, () => {
    assert.equal(score(slowAnswers, 10 - slowAnswers.length), 10);
  });
  it(`should return -1 at not finish game`, () => {
    assert.equal(score(notFinishGame, 10 - notFinishGame.length), -1);
  });
  it(`should score different answers`, () => {
    assert.equal(score(differentAnswer, 10 - differentAnswer.length), 11);
  });
});
