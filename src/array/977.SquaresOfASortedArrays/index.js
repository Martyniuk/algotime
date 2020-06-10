/**
 * @param {number[]} A
 * @return {number[]}
 */

// R:O(nlogn)
// S: O(1)
// var sortedSquares = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = Math.pow(nums[i], 2);
//     }

//     return nums.sort((a, b) => a - b);
// }

const sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let squared = [];

  while (start <= end) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      squared.push(Math.pow(nums[start], 2));
      start++;
    } else {
      squared.push(Math.pow(nums[end], 2));
      end--;
    }
  }

  return squared.reverse();
};

// sam
// var sortedSquares = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let squares = [];

//     while(left <= right) {
//         // const leftEl = Math.abs(nums[left]);
//         // const rightEl = Math.abs(nums[right]);
//         const leftEl = Math.pow(nums[left], 2);
//         const rightEl = Math.pow(nums[right], 2);

//         if (leftEl > rightEl) {
//             squares.push(leftEl);
//             left++;
//         } else {
//             squares.push(rightEl);
//             right--;
//         }
//     }

//     return squares.reverse();
// }

// var sortedSquares = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let squared = [];
//     const size = nums.length >> 1;

//     while(nums.length !== squared.length) {
//         const leftSquared = Math.abs(nums[left]);
//         const rightSquared = Math.abs(nums[right]);

//         if (leftSquared > rightSquared) {
//             squared.push(Math.pow(leftSquared, 2));
//             left++;
//         } else {
//             squared.push(Math.pow(rightSquared, 2));
//             right--;
//         }
//     }

//     return squared.reverse();
// }

// var sortedSquares = function(nums) {
//     return nums.map(v => Math.pow(v, 2)).sort((a, b) => a - b)
// }

// var sortedSquares = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     const sortedSquaredNums = [];

//     while (sortedSquaredNums.length !== nums.length) {
//         if (Math.abs(nums[left]) > Math.abs(nums[right])) {
//             sortedSquaredNums.push(Math.pow(nums[left], 2));
//             left++;
//         } else {
//             sortedSquaredNums.push(Math.pow(nums[right], 2));
//             right--;
//         }
//     }

//     return sortedSquaredNums.reverse();
// }

// 2 - O(n logN)
// var sortedSquares = function(nums) {

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = Math.pow(nums[i], 2);
//     }

//     return nums.sort()
// }
// ----------------------------------------------------------------------------------------------

// 1 - sam - ne rabochii variant
// function getMinNonNegativeIndex(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0 || array[i] > 0) {
//             return i;
//         }
//     }

//     return array.length - 1;
// }

// var sortedSquares = function(nums) {
//     if (nums.length === 1) {
//         return [Math.pow(nums[0],2)];
//     }

//     const minNonNegative = getMinNonNegativeIndex(nums); // rethink - 0 minPozittiveNumber
//     const sortedSquaredNums = [Math.pow(nums[minNonNegative], 2)];
//     let leftPointer = minNonNegative - 1;
//     let rightPointer = minNonNegative + 1;

//     while (leftPointer >= 0 || rightPointer <= nums.length - 1) {

//         let leftElement = nums[leftPointer];
//         let rightElement = nums[rightPointer];

//         if (Math.abs(leftElement) <= Math.abs(rightElement)) {
//             let squaredNumber = Math.pow(leftElement, 2);
//             sortedSquaredNums.push(squaredNumber);
//             leftPointer--;
//         } else if (Math.abs(leftElement) > Math.abs(rightElement)) {

//             let squaredNumber = Math.pow(rightElement, 2);
//             sortedSquaredNums.push(squaredNumber);
//             rightPointer++;
//         } else {
//             break
//         }
//     }

//     return sortedSquaredNums;
// };

const arr = [-4, -1, 0, 3, 10];
sortedSquares(arr); // -> [0,1,9,16,100]
