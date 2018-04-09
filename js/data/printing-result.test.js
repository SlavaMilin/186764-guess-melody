import {assert} from 'chai';
import printingResult from './printing-result';

const testResults = [3, 5, 7, 9, 15];
const timeOutData = {
  score: 0,
  restNotes: 0,
  restTime: 0
};
const restNoteData = {
  score: 0,
  restNotes: 3,
  restTime: 0
};
const testData = {
  score: 9,
  restNotes: 0,
  restTime: 30000
};

describe(`return game statistic`, () => {
  it(`should return description if timeout`, () => {
    assert.equal(printingResult(testResults, timeOutData), `«Время вышло! Вы не успели отгадать все мелодии»`);
  });
  it(`should return description if there is no other try`, () => {
    assert.equal(printingResult(testResults, restNoteData), `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`);
  });
  it(`should return correct answer`, () => {
    assert.equal(printingResult(testResults, testData), `Вы заняли 4 место из 6 игроков. Это лучше, чем у 33% игроков`);
    assert.equal(printingResult(testResults, testData), `Вы заняли 4 место из 7 игроков. Это лучше, чем у 42% игроков`);
    assert.equal(printingResult(testResults, testData), `Вы заняли 4 место из 8 игроков. Это лучше, чем у 50% игроков`);
  });
  it(`should increase array length by 1 `, () => {
    const arrayLength = testResults.length;
    printingResult(testResults, testData);
    const secondArrayLength = testResults.length;
    assert.equal(arrayLength, secondArrayLength - 1);
  });
});
