/**
 * @param {number[]} arr
 * @return {number[]}
 */
// in-place - Space - O(1)
// runtime -  O(n)
const replaceElements = function (arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let curr = arr[i];
    arr[i] = max;
    max = max > curr ? max : curr;
  }

  return arr;
};

// sam - O(n^2)
// function greatestFromRight(arr, index) {
//     let max = -Infinity;

//     for (let i = index + 1; i < arr.length; i++) {
//         max = Math.max(max, arr[i]);
//     }

//     return max;
// }

// var replaceElements = function(arr) {
//     if (arr.length === 1) {
//         return [-1];
//     }
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const max = greatestFromRight(arr, i);
//         result[i] = max;
//     }

//     result[result.length - 1] = -1;

//     return result;
// }

// var replaceElements = function(arr) {
//     let result = [];
//     let max = -1;

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = arr.length - 1; j > i; j--) {
//             if (arr[j] > max) {
//                 max = arr[j];
//             }
//         }

//         result.push(max);
//         max = -1;
//     }

//     result[result.length - 1] = -1;

//     return result;
// };

replaceElements([17, 11]); // --> [11, -1]
