/**
 * @param {number[]} nums
 * @return {number}
 */

// sam
const findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let interim = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      interim++;
    } else {
      max = Math.max(max, interim);
      interim = 0;
    }
  }

  return Math.max(max, interim);
};

const ones = [1, 0, 1, 1, 0, 1];

findMaxConsecutiveOnes(ones); // -> 2
