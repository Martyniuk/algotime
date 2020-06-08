/**
 * @param {number[]} A
 * @return {number[]}
 */

const sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let squares = [];

  while (left <= right) {
    // const leftEl = Math.abs(nums[left]);
    // const rightEl = Math.abs(nums[right]);
    const leftEl = Math.pow(nums[left], 2);
    const rightEl = Math.pow(nums[right], 2);

    if (leftEl > rightEl) {
      squares.push(leftEl);
      left++;
    } else {
      squares.push(rightEl);
      right--;
    }
  }

  return squares.reverse();
};

sortedSquares([-2, 0, 1, 3]); // [0,1,4,9]
