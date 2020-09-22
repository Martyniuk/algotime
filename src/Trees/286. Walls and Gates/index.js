/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

var wallsAndGates = function (rooms) {
  //          1 2 3 4
  const queue = []; // shift <- O======0 <- push
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const num = Math.pow(2, 31);
  for (let r = 0; r < rooms.length; r++) {
    for (let c = 0; c < rooms[0].length; c++) {
      if (rooms[r][c] === 0) {
        queue.push([r, c]);
      }
    }
  }

  while (queue.length !== 0) {
    const [row, col] = queue.shift();

    for (let dir of directions) {
      let r = row + dir[0];
      let c = col + dir[1];

      if (
        r < 0 ||
        r >= rooms.length ||
        c < 0 ||
        c >= rooms[0].length ||
        rooms[r][c] !== num
      ) {
        continue;
      }

      rooms[r][c] = rooms[row][col] + 1;
      queue.push([r, c]);
    }
  }
};

// DFS - huipizdadzigurda
// function dfs(rooms, r, c, count) {
//     if (r < 0 || r >= rooms.length || c < 0 || c >= rooms[0].length || rooms[r][c] < count) {
//         return;
//     }

//     rooms[r][c] = count;
//     dfs(rooms, r + 1, c, count + 1);
//     dfs(rooms, r - 1, c, count + 1);
//     dfs(rooms, r, c + 1, count + 1);
//     dfs(rooms, r, c - 1, count + 1);
// }

// var wallsAndGates = function(rooms) {
//     for (let r = 0; r < rooms.length; r++) {
//         for (let c = 0; c < rooms[0].length; c++) {
//             if (rooms[r][c] === 0) {
//                 dfs(rooms, r, c, 0);
//             }
//         }
//     }
// };
