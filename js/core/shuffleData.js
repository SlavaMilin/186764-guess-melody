const shuffleData = (arr) => {
  const a = arr.slice();
  let j = a.length;
  let i;

  while (j) {
    i = Math.floor(Math.random() * j--);
    [a[j], a[i]] = [a[i], a[j]];
  }

  return a;
};

export {shuffleData};
