/**
 * @param {number[][]} logs
 * @param {number} N
 * @return {number}
 */
class UnionFind {
  constructor(N) {
    this._ids = new Array(N).fill().map((_, i) => i);
    this._sizes = new Array(N).fill(1);
    this._numberOfComponents = N;
  }
  find(i) {
    while (i !== this._ids[i]) {
      // path-compression
      this._ids[i] = this._ids[this._ids[i]];

      i = this._ids[i];
    }

    return i;
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

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

const earliestAcq = function (logs, N) {
  const uf = new UnionFind(N);
  logs.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < logs.length; i++) {
    const [timestamp, a, b] = logs[i];

    uf.union(a, b);

    if (uf.numberOfComponents() === 1) {
      return timestamp;
    }
  }

  return -1;
};

const logs = [
  [3, 0, 3],
  [4, 1, 2],
  [0, 2, 0],
  [2, 0, 2],
  [8, 0, 3],
  [1, 0, 1],
  [5, 1, 2],
  [7, 3, 1],
  [6, 1, 0],
  [9, 3, 0],
];
const people = 4;

earliestAcq(logs, people); // -> 3
