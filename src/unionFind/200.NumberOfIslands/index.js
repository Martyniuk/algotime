// UnionFind solution
function numIslands(grid) {
  if (grid.length === 0) {
    return 0;
  }
  const height = grid.length;
  const width = grid[0].length;
  const uf = new UnionFind(grid);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const el = grid[row][col];
      const nextLeft = grid[row][col + 1];
      const nextBottom = grid[row + 1] && grid[row + 1][col];

      if (el === "1" && nextLeft === "1") {
        uf.union(width * row + col, width * row + col + 1);
      }

      if (el === "1" && nextBottom === "1") {
        uf.union(width * (row + 1) + col, width * row + col);
      }
    }
  }

  return uf.numberOfComponents();
}

class UnionFind {
  constructor(grid) {
    this._numberOfComponents = 0;
    const height = grid.length;
    const width = grid[0].length;
    this._ids = [];
    this._sizes = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        this._ids[width * row + col] = width * row + col;
        this._sizes[width * row + col] = 1;

        if (grid[row][col] === "1") {
          this._numberOfComponents++;
        }
      }
    }
  }

  find(i) {
    while (i !== this._ids[i]) {
      // todo: path-compression - optimization
      i = this._ids[i];
    }

    return i;
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    // balancing
    if (this._sizes[rootP] > this._sizes[rootQ]) {
      this._ids[rootQ] = this._ids[rootP];
      this._sizes[rootP] += this._sizes[rootQ];
    } else {
      this._ids[rootP] = this._ids[rootQ];
      this._sizes[rootQ] += this._sizes[rootP];
    }

    this._numberOfComponents--;
  }

  numberOfComponents() {
    return this._numberOfComponents;
  }
}

// --------------------------------------------------------------------------------
// DFS solution
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
