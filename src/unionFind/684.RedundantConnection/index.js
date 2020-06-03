/**
 * @param {number[][]} edges
 * @return {number[]}
 */

class UnionFind {
  constructor(N) {
    this._ids = new Array(N).fill().map((_, i) => i);
    this._sizes = new Array(N).fill(1);
  }
  find(i) {
    let root = this._ids[i];
    while (root !== this._ids[root]) {
      root = this._ids[root];
    }
    // path-compression
    while (i !== root) {
      let oldRoot = this._ids[i];
      this._ids[i] = root;
      i = oldRoot;
    }

    return root;
    //         while( i !== this._ids[i]) {

    //             this._ids[i] = this._ids[this._ids[i]];
    //             i = this._ids[i];
    //         }

    //         return i;
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    if (rootP === rootQ) {
      return;
    }

    if (this._sizes[rootP] > this._sizes[rootQ]) {
      this._ids[rootQ] = this._ids[rootP];
      this._sizes[rootP] = this._sizes[rootQ];
    } else {
      this._ids[rootP] = this._ids[rootQ];
      this._sizes[rootQ] = this._sizes[rootP];
    }
  }
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
}
const findRedundantConnection = function (edges) {
  const uf = new UnionFind(edges.length);
  console.log(uf);
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    if (uf.connected(a - 1, b - 1)) {
      break;
    } else {
      uf.union(a - 1, b - 1);
    }
  }

  for (let i = edges.length - 1; i >= 0; i--) {
    const [a, b] = edges[i];
    console.log(uf);
    if (uf.connected(a - 1, b - 1)) {
      return edges[i];
    }
  }
};
