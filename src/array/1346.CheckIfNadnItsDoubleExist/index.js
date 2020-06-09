/**
 * @param {number[]} arr
 * @return {boolean}
 */

const checkIfExist = function (arr) {
  const map = {};

  arr.forEach((v) => (map[v] = map[v] ? map[v] + 1 : 1));

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let doubled = element * 2;

    if (
      (element === 0 && map[element] >= 2) ||
      (element !== 0 && doubled in map)
    ) {
      console.log(`doubled ${doubled}---`, map[element]);
      return true;
    }
  }

  return false;
};

// sam - O(n^2)
// function doubledNumber(number) {
//     return number * 2;
// }

// var checkIfExist = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         for (let j = 0; j < arr.length; j++) {
//             if (el === doubledNumber(arr[j])) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };

let zeroes = [0, 0];
let withZero = [-1, -2, 4, 0, 10, 7];
checkIfExist(zeroes); // -> true
checkIfExist(withZero); // -> false
