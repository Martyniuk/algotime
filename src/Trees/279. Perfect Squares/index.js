/**
 * @param {number} n
 * @return {number}
 */

// BFS
var numSquares = function (n) {
  const squareMaxIndex = Math.floor(Math.sqrt(n)) + 1;
  let squareNums = [];
  for (let i = 1; i < squareMaxIndex; i++) {
    squareNums.push(i ** 2);
  }
  const visited = new Set();
  // <--- shift 07=====0 <-- push
  let queue = [n];
  let level = 0;
  while (queue.length) {
    const size = queue.length;
    level++;
    for (let i = 0; i < size; i++) {
      const num = queue.shift();
      if (visited.has(num)) {
        continue;
      } else {
        visited.add(num);
      }

      for (let j = 0; j < squareNums.length; j++) {
        let res = num - squareNums[j];

        if (res < 0) continue;
        if (res === 0) {
          return level;
        }

        queue.push(res);
      }
    }
  }
};

// Greedy
// var numSquares = function(n) {
//     const squareNums = new Set();
//     const maxSquareIndex = Math.floor(Math.sqrt(n));

//     for (let i = 1; i < maxSquareIndex + 1; i++) {
//         squareNums.add(i ** 2);
//     }

//     function helper(n, count) {
//         if (count === 1) {
//             return squareNums.has(n);
//         }

//         for (let square of squareNums) {
//             if (helper(n - square, count - 1)) {
//                 return true;
//             }
//         }

//         return false;
//     }

//     let count = 1;
//     for (; count <= n; count++) {
//         if (helper(n, count)) {
//             return count;
//         }
//     }

//     return count;
// }

// DP - pipec

// Brute Force
// var numSquares = function(n) {
// //     const squareN = new Array(Math.sqrt(n) + 1).fill().map((_, i) => i + 1).map(v => v**2);

//     const squareNums = [];
//     for (let i = 1; i <= Math.sqrt(n) + 1; i++) {
//         squareNums.push(i**2);
//     }

//     function minimumNumSquares(k) {
//         let res = squareNums.find(v => v === k);
//         if (res) {
//             return 1;
//         }

//         let minNum = Infinity;

//         for (let num of squareNums) {
//             if (k < num) {
//                 break;
//             }
//             let newNum = minimumNumSquares(k - num) + 1;
//             minNum = Math.min(minNum, newNum);
//         }

//         return minNum;
//     }

//     return minimumNumSquares(n);
// }

// my try out
// function helper(i, n, sum, counter) {
//     if (sum === n) {
//         return counter;
//     }
// }

// var numSquares = function(n) {
//     if (n < 1) {
//         return 1;
//     }
//     const rootN = Math.floor(Math.sqrt(n));
//     let minPS = Infinity;

//     for (let i = 1; i < rootN + 1; i++) {
//         for (let j = 1; j < rootN + 1; j++) {

//         }
//     }

//     minPS = Math.min(minPS, helper(i, n, 0, 0));
//     return minPS;
// };
