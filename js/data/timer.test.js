import {assert} from 'chai';
import setTimer from './timer';

const time = 30;

describe(`return timer object`, () => {
  it(`should return object`, () => {
    assert.isObject(setTimer(time));
  });
  it(`should decrease time by 1 sec`, () => {
    const timeObj = setTimer(time);
    timeObj.tick();
    assert.equal(timeObj.restTime, 29);
  });
  it(`should toggle finish status`, () => {
    const timeObj = setTimer(1);
    timeObj.tick();
    timeObj.tick();
    assert.equal(timeObj.finish, true);
  });
});

