/**
 * @param {number[]} nums
 * @return {number}
 */

// берешь и экпереиментируешь с пойнтерами, slow = 0, fast = 1 || slow = 0, fast = 0

const removeDuplicates = function (nums) {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      slow++;
      nums[slow] = nums[fast];
      fast++;
    }
  }

  return slow + 1;
};

// var removeDuplicates = function(nums) {
//     var sP = 0;

//     for (var i = 1; i < nums.length; i++) {
//         if (nums[sP] !== nums[i]) {
//             sP++;
//             nums[sP] = nums[i];
//         }
//     }

//     return sP+1;
// };

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums); // - > 5
