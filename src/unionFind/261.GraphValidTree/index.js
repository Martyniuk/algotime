// (N - 1 === edges.length), so in order to simplify analysis, we assume that E = N
// S: O(N), where N - is given n(number of elements)
// Time: O(N * a(N)) - coz we have path-compression
const validTree = function (n, edges) {
  if (n - 1 !== edges.length) {
    return false;
  }
  // initialise UF
  const uf = new UnionFind(n);
  // loop thru given edges
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    // check if elements are already connected
    const areConnected = uf.connected(a, b);
    // if connected - return false, if not - unify elements
    if (areConnected) {
      return false;
    } else {
      uf.union(a, b);
    }
  }

  // on each union numberOfComponents will be decreasing by 1 and in the end   //tree can have only 1 root element
  return uf.numberOfComponents() === 1;
};

class UnionFind {
  constructor(N) {
    this._ids = new Array(N).fill().map((_, i) => i);
    this._sizes = new Array(N).fill(1);
    this._numberOfComponents = N;
  }
  find(i) {
    let root = i;

    while (root !== this._ids[root]) {
      root = this._ids[root];
    }
    // path-compression - elegant way
    while (i !== root) {
      let oldRoot = this._ids[i];
      this._ids[i] = root;
      i = oldRoot;
    }

    return root;
  }
  // if P and Q are connected
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
  // union
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

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

const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 3],
  [1, 4],
];

validTree(n, edges); // --> false
