/**
 * @param {number[][]} M
 * @return {number}
 */

// Union Find DS
class UnionFind {
  constructor(N) {
    this._ids = new Array(N).fill(0).map((_, i) => i);
    // balancing
    this._sz = new Array(N).fill(1);
    this._componentsNumber = N;
  }

  // find root if i
  find(i) {
    while (i !== this._ids[i]) {
      // optimization - path-compressing
      this._ids[i] = this._ids[this._ids[i]];
      i = this._ids[i];
    }

    return i;
  }
  // unify p and q using balancing
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    // if root is the same === already united
    if (rootP === rootQ) {
      return;
    }
    // unite smallest to biggest
    if (this._sz[rootP] > this._sz[rootQ]) {
      this._ids[rootQ] = rootP;
      this._sz[rootP] += this._sz[rootQ];
    } else {
      this._ids[rootP] = rootQ;
      this._sz[rootQ] += this._sz[rootP];
    }
    // amount of not unified components
    this._componentsNumber--;
  }

  // return amount of unified components
  numberOfComponents() {
    return this._componentsNumber;
  }
}

const findCircleNum = function (M) {
  // initialize
  const uf = new UnionFind(M.length);
  // loop thru and
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; i < M[0].length; j++) {
      // check if there is a friend and unify them
      if (M[i][j] === 1) {
        uf.union(j, i);
      }
    }
  }

  return uf.numberOfComponents();
};

// test case
const M = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

findCircleNum(M); // --> output 2
