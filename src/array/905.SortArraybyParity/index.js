/**
 * @param {number[]} A
 * @return {number[]}
 */

// 1 - brute force - intuitive approach
// var sortArrayByParity = function(A) {
//     let result = [];

//     for (let i = 0; i < A.length; i++) {
//         const el = A[i];

//         if (el % 2 !== 0) {
//             result.push(el);
//         } else {
//             result.unshift(el);
//         }
//     }

//     return result;
// }

// 2 - sam
// helper function for swap
function swap(arr, from, to) {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}
// helper function for checking if number is even
function isEven(n) {
  return n % 2 === 0;
}
// S: O(1)
// T: O(n)
// two pointers approach, where we define start of array and end of array, also we know that even numbers shoud be at the start and odd should be at the end

const sortArrayByParity = function (A) {
  let start = 0;
  let end = A.length - 1;
  // loop thru until start is not collapsed with end
  while (start < end) {
    // we check if number in the end is Even and if number at the start is Odd, if yes -> swap them in place
    if (isEven(A[end]) && !isEven(A[start])) {
      swap(A, end, start);
      // if we define that number at the start is already even - just increment start pointer
    } else if (isEven(A[start])) {
      start++;
      // if we define that number at the end is already odd - just decrement end pointer
    } else if (!isEven(A[end])) {
      end--;
    }
  }
  // return can be void, due to in-place modification
  return A;
};

// 2 - ne sam
// var sortArrayByParity = function(A) {
//     let start = 0;
//     let end = A.length - 1;

//     while(start < end) {
//         if (A[start] % 2 > A[end] % 2) {
//             let tmp = A[start];
//             A[start] = A[end];
//             A[end] = tmp;
//         }

//         if (A[start] % 2 === 0) start++;
//         if (A[end] % 2 === 1) end--;
//     }

//     return A;
// };

// 1 - sam
// var sortArrayByParity = function(A) {
//     const result = [];

//     for (let i = 0; i < A.length; i++) {
//         const el = A[i];
//         elementCheck(el, result);
//     }

//     return result;
// };

// function elementCheck(el, result) {
//     if (el % 2 === 0) {
//         result.unshift(el);
//     } else {
//         result.push(el);
//     }
// }
const array = [1, 3, 4, 8, 9, 5];

sortArrayByParity(array); // -> [8,4,3,1,9,5] or [4,8,1,3,9,5]
