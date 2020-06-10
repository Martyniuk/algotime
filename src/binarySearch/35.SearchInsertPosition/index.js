/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// TODO with - binary search

const searchInsert = function (nums, target) {
  let first = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];

    if (el > target || el === target) {
      return i;
    }
  }

  if (target < first) {
    return 0;
  } else {
    return nums.length;
  }
};

const arr = [1, 3, 5, 6];
const val = 5;
searchInsert(arr, val); // -> 2
