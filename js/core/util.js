const calculateMin = (time) => {
  const result = Math.floor(time) / 60;
  return result < 10 ? `0` + result : result;
};

const calculateSec = (time) => {
  const result = Math.floor(time) % 60;
  return result < 10 ? `0` + result : result;
};

export {calculateMin, calculateSec};
