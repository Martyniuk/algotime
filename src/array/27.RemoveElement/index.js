/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// эта техника совсем непрозрачна, пока ты ее не попробуешь применить
// на конкретном примере
const removeElement = function (nums, val) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    } else {
      fast++;
    }
  }

  return slow;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2); // -> [0,1,3,0,4] or [0,1,4,0,3]
