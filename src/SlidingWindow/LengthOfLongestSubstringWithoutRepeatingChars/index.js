/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  // corner cases
  let fast = 0;
  let slow = 0;
  let map = {};
  let max = 0;

  while (fast < s.length) {
    let sChar = s[slow];
    let fChar = s[fast];

    if (map[fChar]) {
      delete map[sChar];
      slow++;
    } else {
      map[fChar] = 1;
      fast++;

      max = Math.max(max, Object.keys(map).length);
    }
  }

  return max;
};

// Brute Force - Out of Timelimit Boundaries (ON^2) -
// var lengthOfLongestSubstring = function(s) {
//     let set = new Set();
//     let max = 0;

//     for (let i = 0; i < s.length; i++) {
//         set.add(s[i]);
//         for (let j = i + 1; j < s.length; j++) {
//             let char = s[j];
//             if (set.has(char)) {
//                 max = Math.max(max, set.size);
//                 set = new Set();
//                 break;
//             } else {
//                 set.add(char);
//             }
//         }
//     }
//     max = Math.max(max, set.size);

//     return max;
// }

// var lengthOfLongestSubstring = function(s) {
//     let slow = 0;
//     let fast = 0;
//     let max  = 0;

//     let map = {};

//     while (fast < s.length) {
//         const fastEl = s[fast];
//         const slowEl = s[slow];
//         if (map[fastEl]) {
//             delete map[slowEl];
//             slow++;
//         } else {
//             map[fastEl] = true;
//             fast++;

//             max = Math.max(max, Object.keys(map).length);
//         }
//     }

//     return max;
// }

// 1 - Sliding window
// var lengthOfLongestSubstring = function(s) {
//     let fastP = 0
//     let slowP = 0
//     let max = 0
//     let uniqueChars = {}

//     while (fastP < s.length) {
//         if (!uniqueChars[s[fastP]]) {
//             uniqueChars[s[fastP]] = s[fastP]
//             fastP++
//             max = Math.max(max, Object.keys(uniqueChars).length)
//         } else {
//             delete uniqueChars[s[slowP]]
//             slowP++
//         }
//     }

//     return max
// };

// var lengthOfLongestSubstring = function(s) {
//     let fastP = 0
//     let slowP = 0
//     let max = 0
//     let uniqueChars = new Map()

//     while (fastP < s.length) {
//         if (!uniqueChars.has(s[fastP])) {
//             uniqueChars.set(s[fastP])
//             fastP++
//             max = Math.max(max, uniqueChars.size)
//         } else {
//             uniqueChars.delete(s[slowP])
//             slowP++
//         }
//     }

//     return max
// };
