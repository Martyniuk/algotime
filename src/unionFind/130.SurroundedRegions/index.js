function helper(board, row, col) {
  if (
    row < 0 ||
    row > board.length - 1 ||
    col < 0 ||
    col > board[0].length - 1 ||
    board[row][col] !== "O"
  ) {
    return;
  }

  if (board[row][col] === "O") {
    board[row][col] = "#";
  }

  helper(board, row + 1, col);
  helper(board, row - 1, col);
  helper(board, row, col + 1);
  helper(board, row, col - 1);
}

const solve = function (board) {
  if (board.length === 0) {
    return board;
  }
  // change every cell connected to left and right borders from O to #
  for (let row = 0; row < board.length; row++) {
    helper(board, row, 0);
    helper(board, row, board[0].length - 1);
  }
  // change every cell connected to top and bottom borders from O to #
  for (let col = 1; col < board[0].length - 1; col++) {
    helper(board, 0, col);
    helper(board, board.length - 1, col);
  }
  // Loop thru board
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // change rest O to X
      if (board[row][col] === "O") board[row][col] = "X";
      // change all # back to O
      if (board[row][col] === "#") board[row][col] = "O";
    }
  }
};

const regions = [
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
];

solve(regions);

// const answer = [
//   ["X", "O", "X", "O", "X", "O"],
//   ["O", "X", "X", "X", "X", "X"],
//   ["X", "X", "X", "X", "X", "O"],
//   ["O", "X", "O", "X", "O", "X"],
// ];
