/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// [3,2,4] 6 -> [1,2]
// [3, 3] 6 => [0,1]
// corner cases - no nums, no target
// time: O(n)
// space: O(n)
// Ope Pass hashtable
// 20.07
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let tmp = target - nums[i];

    if (tmp in map) {
      return [i, map[tmp]];
    } else {
      map[nums[i]] = i;
    }
  }
};
// 1 - BruteForce - O(n^2)
// var twoSum = function(nums, target) {
//     if (nums.length === 0) {
//         throw new Error('No nums provided.');
//     } else if (!target && target !== 0) {
//         throw new Error('No target provided');
//     }

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] === target - nums[i]) {
//                 return [i, j];
//             }
//         }
//     }
// };

// time: O(N) - Two pass hashTable
// space: O(N);
// var twoSum = function(nums, target) {
//     if (nums.length === 0) {
//         throw new Error('No nums provided.');
//     } else if (!target && target !== 0) {
//         throw new Error('No target provided');
//     }

//     const map = {};
//     // O(n)
//     nums.forEach((n, i) => map[n] = i);
//     // O(n)
//     for (let i = 0; i < nums.length; i++) {
//         let tmp = target - nums[i];

//         if (tmp in map && map[tmp] !== i) {
//             return [i, map[tmp]];
//         }
//     }

// wrong way of implementing similar logic
//     for (let key in map) {
//         let tmp = target - key;

//         if (map[tmp] && map[tmp] !== map[key]) {
//             return [map[key], map[tmp]];
//         }
//     }
// }

//     throw new Error('No two Sum available');
//     // return [];
// };
