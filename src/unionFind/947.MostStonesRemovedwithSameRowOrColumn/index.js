/**
 * @param {number[][]} stones
 * @return {number}
 */
class UnionFind {
  constructor(N) {
    this._stones = new Array(N).fill().map((_, i) => i);
    this._sizes = new Array(N).fill(1);
    this._numberOfComponents = N;
  }
  find(i) {
    while (i !== this._stones[i]) {
      // path-compression - O(a(N)) ~~ O(1)
      this._stones[i] = this._stones[this._stones[i]];

      i = this._stones[i];
    }

    return i;
  }
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootQ === rootP) return;
    // balancing - smallest component is joined to biggest, raise of tree into wide, not makeing it tall
    if (this._sizes[rootP] > this._sizes[rootQ]) {
      this._stones[rootQ] = this._stones[rootP];
      this._sizes[rootP] += this._sizes[rootQ];
    } else {
      this._stones[rootP] = this._stones[rootQ];
      this._sizes[rootQ] += this._sizes[rootP];
    }

    this._numberOfComponents--;
  }
  numberOfComponents() {
    return this._numberOfComponents;
  }
}

const removeStones = function (stones) {
  if (stones.length === 1) {
    return 0;
  }
  const amountOfStones = stones.length;
  const uf = new UnionFind(amountOfStones);

  for (let i = 0; i < stones.length; i++) {
    // get current stone X and Y
    const [currX, currY] = stones[i];

    for (let j = i + 1; j < stones.length; j++) {
      // get next stone X and Y
      const [nextX, nextY] = stones[j];
      // if X or Y of curr and any of next stones collapse - union them
      if (currX === nextX || currY === nextY) {
        uf.union(i, j);
      }
    }
  }

  return amountOfStones - uf.numberOfComponents();
};

const example1 = [
  [0, 1],
  [1, 0],
];
const example2 = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 2],
  [2, 1],
  [2, 2],
];
removeStones(example1); // --> 0
removeStones(example2); // --> 5
