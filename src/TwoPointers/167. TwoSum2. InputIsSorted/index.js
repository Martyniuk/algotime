/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// [1,2,3,5,11,15] 16 -> [1,6]
// O(n)
var twoSum = function (numbers, target) {
  let lo = 0;
  let hi = numbers.length - 1;

  while (lo < hi) {
    let tmp = numbers[hi] + numbers[lo];

    if (target === tmp) {
      return [lo + 1, hi + 1];
    } else if (target < tmp) {
      hi--;
    } else {
      lo++;
    }
  }
};
