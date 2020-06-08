/**
 * @param {number[]} nums
 * @return {number}
 */
function helper(num) {
  return String(num).split("").length % 2 === 0;
}

const findNumbers = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (helper(nums[i])) {
      counter++;
    }
  }

  return counter;
};

const nums = [555, 901, 482, 1771];
findNumbers(nums); // -> 1
