/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// memorized corner cases -- its hell 29.07
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const sumZero = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      const sum = nums[lo] + nums[i] + nums[hi];

      if (sum === 0) {
        sumZero.push([nums[lo], nums[i], nums[hi]]);

        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;

        lo++;
        hi--;
      } else if (sum < 0) {
        lo++;
      } else {
        hi--;
      }
    }
  }

  return sumZero;
};

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b); // O(nlogn);
//     let result = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         let lo = i + 1;
//         let hi = nums.length - 1;

//         while (lo < hi) {
//             let sum =  nums[i] + nums[lo] + nums[hi];
//             if (sum === 0) {
//                 result.push([nums[i], nums[lo], nums[hi]]);

//                 while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
//                 while(lo < hi && nums[hi] === nums[hi - 1]) hi--;

//                 lo++;
//                 hi--;
//             } else if (sum > 0) {
//                 hi--;
//             } else if (sum < 0) {
//                 lo++;
//             }
//         }
//     }

//     return result;
// };

// ---------------------------------------------------------------------------

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b);
//     const res = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i === 0 || (i > 0 && nums[i] === nums[i - 1])) {
//             continue;
//         }

//         let lo = i + 1;
//         let hi = nums.length - 1;
//         let sum = 0 - nums[i];

//         while (lo < hi) {
//             if (nums[lo] + nums[hi] === sum) {
//                 res.push([nums[i], nums[lo], nums[hi]]);
//                 while(lo < hi && nums[lo] === nums[lo + 1]) lo++;
//                 while(lo < hi && nums[hi] === nums[hi - 1]) hi--;

//                 lo++;
//                 hi--;
//             } else if (nums[lo] + nums[hi] > sum) {
//                 hi--;
//             } else {
//                 lo++;
//             }
//         }
//     }

//     return res;
// };
