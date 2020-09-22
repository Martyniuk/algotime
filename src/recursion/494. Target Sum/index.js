/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

// S - O(2^n)
// R - O(2^n)
function count(nums, index, sum, memo) {
  if (memo[index]) {
    return memo[index];
  }
  if (nums.length === index) {
    return sum === 0 ? 1 : 0;
  }

  return (
    count(nums, index + 1, sum - nums[index]) +
    count(nums, index + 1, sum + nums[index])
  );
}

var findTargetSumWays = function (nums, S) {
  const memo = {};
  return count(nums, 0, S, memo);
};
