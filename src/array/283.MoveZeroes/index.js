/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// in order to do it in place we have to use Two pointers technique
// t: O(n)
// s: O(1)
// sam
function swap(arr, from, to) {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}
const moveZeroes = function (nums) {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] === 0 && nums[fast] !== 0) {
      swap(nums, slow, fast);
    } else if (nums[slow] === 0 && nums[fast] === 0) {
      fast++;
    } else {
      fast++;
      slow++;
    }
  }
};

// 2
// var moveZeroes = function(nums) {
//     let slow = 0
//     let fast = 0
//     // [0,1,0,3,12]
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[slow] !== 0) {
//             fast++
//             slow++
//         }

//         if (nums[slow] === 0 && nums[fast] !== 0 && fast < nums.length) {
//             swap(nums, slow, fast);
//             slow++
//         }

//         if (nums[slow] === 0 && nums[fast] === 0) {
//             fast++
//         }
//     }
// }

// function swap(n, from, to) {
//     let tmp = n[from]
//     n[from] = n[to]
//     n[to] = tmp
// }

// 1
// var moveZeroes = function(nums) {
//     let sP = 0;
//     let fP = 1;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[sP] !== 0) {
//             sP++;
//             fP++;
//         }
//         if (nums[sP] === 0 && nums[fP] !== 0 && fP < nums.length) {
//             swap(nums, sP, fP);
//             sP++;
//         }
//         if (nums[sP] === 0 && nums[fP] === 0) {
//             fP++;
//         }
//     }
// };

// var swap = function (n, from, to) {
//     let tmp = n[from];
//     n[from] = n[to];
//     n[to] = tmp;
// }
const arr = [0, 1, 0, 3, 12]; // you have to move zeroes, but save relative sequence
moveZeroes(arr); // --> [1,3,12,0,0];
