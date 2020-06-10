/**
 * @param {number[]} nums
 * @return {number}
 */
function numbersQuantity(arr) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;
  }

  return Object.keys(map).length;
}

var thirdMax = function (nums) {
  // TODO: use as Set
  if (nums.length < 3 || numbersQuantity(nums) < 3) {
    return Math.max(...nums);
  }

  // mention as poor programming practice, so find out how to check min and max in Set in JS and re-implement
  let max = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (el > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = el;

      continue;
    } else if (el > secondMax && el < max) {
      thirdMax = secondMax;
      secondMax = el;

      continue;
    } else if (el > thirdMax && el < secondMax) {
      thirdMax = el;
    }
  }

  return thirdMax;
};
