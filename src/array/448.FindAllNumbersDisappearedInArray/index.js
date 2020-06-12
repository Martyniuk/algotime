/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]) - 1;

    if (nums[num] > 0) {
      nums[num] = nums[num] * -1;
    }
  }

  const missing = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) missing.push(i);
  }

  return missing;
};

// 1 - Using Extra space - map - T: O(n), S: 0(n)
// var findDisappearedNumbers = function(nums) {
//     const map = {};
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];

//         map[num] = true;
//     }

//     let missing = [];
//     for (let i = 1; i <= nums.length; i++) {
//         if (!map[i]) {
//             missing.push(i);
//         }
//     }

//     return missing;
// }

// 1 - Brute Force solutions with O(n2)
// var findDisappearedNumbers = function(nums) {
//     let size = nums.length;
//     // const str = nums.join('');
//     let missing = [];
//     while (size > 0) {
//         if (nums.indexOf(size) === -1) {
//             missing.push(size);
//         }
//         size--;
//     }

//     return missing;
// };
const arr = [1, 1];

findDisappearedNumbers(arr); // -> [2]
