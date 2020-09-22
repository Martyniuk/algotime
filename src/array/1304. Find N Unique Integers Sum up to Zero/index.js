/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (n === 1) {
    return [0];
  }

  let res = [];
  let to = Math.floor(n / 2);

  for (let i = 1; i <= to; i++) {
    res.push(i);
    res.push(i * -1);
  }

  if (n % 2 !== 0) {
    res.push(0);
  }

  return res;
};
