/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (matrix, r, c) => {
  let depth = 0;
  let queue = [[r, c]];

  while (queue.length) {
    const size = queue.length;
    depth++;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.pop();

      for (let d = 0; d < DIRECTIONS.length; d++) {
        let [x, y] = DIRECTIONS[d];

        let newRow = row + x;
        let newCol = col + y;

        if (
          newRow < 0 ||
          newRow > matrix.length - 1 ||
          newCol < 0 ||
          newCol > matrix[0].length - 1
        ) {
          continue;
        }
        if (matrix[newRow][newCol] === 0) {
          matrix[r][c] = depth;
          return;
        } else {
          queue.unshift([newRow, newCol]);
        }
      }
    }
  }
};
// 160 - 95.72, 45.8 - 69.90
var updateMatrix = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return matrix;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 1) {
        bfs(matrix, r, c);
      }
    }
  }

  return matrix;
};

// BFS -- not working - incorrect logic of BFS
// const DIRECTIONS = [
//     [1,0],
//     [0,1],
//     [-1,0],
//     [0,-1],
// ];

// var updateMatrix = function(matrix) {
//     if (!matrix.length || !matrix[0].length) {
//         return matrix;
//     }
//     let queue = [];

//     for (let r = 0; r < matrix.length; r++) {
//         for (let c = 0; c < matrix[0].length; c++) {
//             if (matrix[r][c] === 1) {
//                 queue.unshift([r,c,r,c,0]);
//             }
//         }
//     }

//     while(queue.length) {
//             let [r, c, originR, originC, count] = queue.pop();

//             if (r < 0 || r > matrix.length - 1 || c < 0 || c > matrix[0].length - 1) {
//                 continue;
//             }

//             if (matrix[r][c] === 0) {
//                 matrix[originR][originC] = count;
//             } else {
//                 DIRECTIONS.forEach(([x, y]) => queue.unshift([r + x, c + y, originR, originC, count + 1]));
//             }
//     }

//     return matrix;
// }

// const DIRECTIONS = [
//     [0, 1],
//     [1, 0],
//     [0, -1],
//     [-1, 0],
// ];
// // DFS is TLE
// function dfs(matrix, r, c, counter, originR, originC) {
//     if (r < 0 || r > matrix.length - 1 || c < 0 || c > matrix[0].length - 1 || matrix[r][c] > 1 || matrix[r][c] <= counter + 1) {
//         return;
//     }

//     if (matrix[r][c] === 0) {
//         matrix[originR][originC] = counter;
//         return;
//     }

//     dfs(matrix, )

//     DIRECTIONS.forEach(([x, y]) => {
//         dfs(matrix, r + x, c + y, counter + 1, originR, originC)
//     });
// }

// var updateMatrix = function(matrix) {

//     for (let r = 0; r < matrix.length; r++) {
//         for (let c = 0; c < matrix[0].length; c++) {
//             let cell = matrix[r][c];

//             if (cell) {
//                 console.log(`cell ${r} <-> ${c}`);
//                 dfs(matrix, r, c, 0, r, c);
//             }
//         }
//     }

//     return matrix;
// };
