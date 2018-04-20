// import {assert} from 'chai';
// import {score} from './score';
//
// const quickCorrectAnswers = Array(10).fill({
//   correct: true,
//   time: 25
// });
//
// const invalidAnswers = Array(10).fill({
//   correct: false,
//   time: 25
// });
//
// const slowAnswers = Array(10).fill({
//   correct: true,
//   time: 35
// });
//
// const notFinishGame = Array(8).fill({
//   correct: true,
//   time: 35
// });
//
// const differentAnswer = Array(10).fill({
//   correct: true,
//   time: 35
// }, 0, 5).fill({
//   correct: false,
//   time: 35
// }, 5, 8).fill({
//   correct: true,
//   time: 25
// }, 8, 10);
//

// describe(`Counting points`, () => {
//   it(`should score quick correct answers`, () => {
//     assert.equal(score(quickCorrectAnswers), 20);
//   });
//   it(`should score incorrect answers`, () => {
//     assert.equal(score(invalidAnswers), 0);
//   });
//   it(`should score slow answers`, () => {
//     assert.equal(score(slowAnswers), 10);
//   });
//   it(`should return -1 at not finish game`, () => {
//     assert.equal(score(notFinishGame), -1);
//   });
//   it(`should score different answers`, () => {
//     assert.equal(score(differentAnswer), 9);
//   });
// });
