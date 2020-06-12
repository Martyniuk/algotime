/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// general swap of 2 variables, using temporary variable
function swap(arr, from, to) {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}

// 1 - ne sam - 11.06 three pointer approach
const sortColors = function (nums) {
  // pointer for zeros
  let p0 = 0;
  // current pointer we are looking at every time
  let curr = 0;
  // pointer for twos
  let p2 = nums.length - 1;

  // loop until current pointer wouldnt met p2, what will mean that zeroes and ones are standing in proper place
  while (curr <= p2) {
    // if curr is zero, no matter where zero pointer is we swap them, increment p0, curr
    if (nums[curr] === 0) {
      swap(nums, p0, curr);
      p0++;
      curr++;
      // if curr is at two - we swap curr and p2, p2 decrementing
    } else if (nums[curr] === 2) {
      swap(nums, p2, curr);
      p2--;
      // if we are at one - just continue, coz zeroes and twos are handled with other pointers and we dont care
    } else if (nums[curr] === 1) {
      curr++;
    }
  }
};
// 1 - ne rabotaet
// var sortColors = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while(left < right) {
//         if (nums[left] !== 0 && nums[right] !== 2) {
//             swap(nums, left, right);
//             left++;
//             right--;
//         } else if (nums[left] === 0) {
//             left++;
//         } else if (nums[right] === 2) {
//             right--;
//         }
//     }
// }

// 1 - sam - works, but O(2N) -> can it be dont in one pass?
// var sortColors = function(nums) {
//     if (nums.length === 0) {
//         return;
//     }

//     let zeroes = 0;
//     let ones = 0;
//     let twos = 0;

//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];

//         if (num === 0) {
//             zeroes++;
//         } else if (num === 1) {
//             ones++;
//         } else if (num === 2) {
//             twos++;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (zeroes > 0) {
//             nums[i] = 0;
//             zeroes--;
//             continue;
//         }
//         if (ones > 0) {
//             nums[i] = 1;
//             ones--;
//             continue;
//         }
//         if (twos > 0) {
//             nums[i] = 2;
//             twos--;

//         }
//     }
// };

const colors = [0, 0, 1, 2, 1, 2, 0, 1, 2];
sortColors(colors); // -> [0,0,0,1,1,1,2,2,2]
