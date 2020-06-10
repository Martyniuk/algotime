/**
 * @param {number[]} nums
 * @return {number}
 */

// Sliding window - https://medium.com/@timpark0807/leetcode-is-easy-sliding-window-c44c11cc33e1
const findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let max = 0;
  let zeroes = 0;

  while (right < nums.length) {
    if (nums[right] === 0) zeroes++;

    while (zeroes === 2) {
      max = Math.max(max, right - left);

      if (nums[left] === 0) zeroes--;

      left++;
    }

    right++;
  }

  if (zeroes < 2) max = Math.max(max, right - left);

  return max;
};

findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]); // -> 4
