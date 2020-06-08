/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// sam - O(n), where n is nums.length;
const merge = function (nums1, m, nums2, n) {
  // define last indexes of nums1 and nums2
  let first = m - 1;
  let second = n - 1;
  // whie there elements to compare - proceed
  while (second >= 0) {
    const index = first + second + 1;

    if (nums1[first] > nums2[second]) {
      nums1[index] = nums1[first];
      first--;
    } else {
      nums1[index] = nums2[second];
      second--;
    }
  }
};

// var merge = function(nums1, m, nums2, n) {

//     let first = m - 1;
//     let second = n - 1;

//     for(let i = m + n - 1; i >= 0; i--) {
//         if (second < 0)
//             break;

//         if (nums1[first] > nums2[second]) {
//             nums1[i] = nums1[first];
//             first--;
//         } else {
//             nums1[i] = nums2[second];
//             second--;
//         }
//     }
// }

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n); // -> [1,2,2,3,5,6]
