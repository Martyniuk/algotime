function helper(grid, r, c) {
  // check if element is land and is in given boundaries
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[0].length ||
    grid[r][c] === "0"
  ) {
    return;
  }

  // make land to be water
  grid[r][c] = "0";
  // check siblings if they are land
  helper(grid, r + 1, c);
  helper(grid, r - 1, c);
  helper(grid, r, c + 1);
  helper(grid, r, c - 1);
}

function numIslands(grid) {
  let numberOfIslands = 0;
  // loop thru Islands grid
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      // check if Land found, so grid[r][c] is 1
      if (grid[r][c] === "1") {
        // increment number of islands
        numberOfIslands++;
        // call helper in order 1 make to be 0 and check where land is over
        helper(grid, r, c);
      }
    }
  }

  return numberOfIslands;
}

// test case
const islands = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

numIslands(islands); // --> 1
