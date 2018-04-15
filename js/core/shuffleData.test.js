import {assert} from 'chai';
import {shuffleData} from "./shuffleData";

const array = [[1], [2], [3], [4], [5]];

describe(`test shuffle func`, () => {
  it(`should return array`, () => {
    assert.isArray(shuffleData(array));
  });
  it(`should return same length`, () => {
    assert.equal(shuffleData(array).length, array.length);
  });
  it(`should't change original array`, () => {
    const testArray = array.slice();
    shuffleData(array);
    assert.deepEqual(array, testArray);
  });
});
