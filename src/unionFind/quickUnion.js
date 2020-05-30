class QuickUnion {
  constructor(N) {
    this._id = new Array(N).fill(0).map((_, i) => i); // [0,1,2,3,4,5,6]
    // weightening
    this._sz = new Array(N).fill(1);
    // for find(i) that will return biggest in component
    // this._largest = new Array(N).fill(0).map((_, i) => i); // [0,1,2,3,4,5,6]
  }

  getRootOf(i) {
    while (i !== this._id[i]) {
      // path-compression
      this._id[i] = this._id[this._id[i]];
      i = this._id[i];
    }

    return i;
  }

  connected(p, q) {
    return this.getRootOf(p) === this.getRootOf(q);
  }

  // without weightening - left goes under right
  // union(p, q) {
  //   let rootP = this.getRootOf(p);
  //   let rootQ = this.getRootOf(q);

  //   this._id[rootP] = rootQ;
  // }
  // with Weightening - smaller root goes under bigger
  union(p, q) {
    let rootP = this.getRootOf(p);
    let rootQ = this.getRootOf(q);

    if (rootP === rootQ) {
      return;
    }

    let treePSize = this._sz[rootP];
    let treeQSize = this._sz[rootQ];
    if (treePSize < treeQSize) {
      this._id[rootP] = rootQ;
      this._sz[rootQ] = treeQSize + treePSize;
    } else {
      this._id[rootQ] = rootP;
      this._sz[rootP] = treePSize + treeQSize;
    }
  }

  // find(i) {
  //   return this._largest[i];
  // }
}

module.exports = QuickUnion;
