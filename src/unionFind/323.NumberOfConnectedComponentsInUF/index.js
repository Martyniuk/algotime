class UnionFind {
  constructor(N) {
    // initialization
    this._ids = new Array(N).fill().map((_, i) => i);
    // balancing - we need to know how many elements there are in components
    this._sizes = new Array(N).fill(1);
    // number of components in UF
    this._numberOfComponents = N;
  }

  // find root of element in UF
  find(i) {
    while (i !== this._ids[i]) {
      // plain path-compression, can be written in more elegant way
      this._ids[i] = this._ids[this._ids[i]];

      i = this._ids[i];
    }

    return i;
  }

  // unify P and Q
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);

    //
    // ! - very important NOT to forget to check wherether roots are equal
    //
    if (rootP === rootQ) {
      return;
    }
    // balancing - smaller will join biggest
    if (this._sizes[rootP] > this._sizes[rootQ]) {
      // set bigger component root to smaller
      this._ids[rootQ] = this._ids[rootP];
      // amount elements in bigger component += amount of elements in smaller component
      this._sizes[rootP] += this._sizes[rootQ];
    } else {
      // Same as 40 -> set bigger component root to smaller
      this._ids[rootP] = this._ids[rootQ];
      // Same as 42 ->  -==-
      this._sizes[rootQ] += this._sizes[rootP];
    }
    // decrease number of components in UF
    this._numberOfComponents--;
  }

  // return number of components in UF
  numberOfComponents() {
    return this._numberOfComponents;
  }
}

const countComponents = function (n, edges) {
  // initialize
  const uf = new UnionFind(n);
  // loop thru edges
  for (let i = 0; i < edges.length; i++) {
    // destructuring tuple of elements and unify them
    const [a, b] = edges[i];
    uf.union(a, b);
  }

  return uf.numberOfComponents();
};

const n = 5;
const edges = [
  [0, 1],
  [1, 2],
  [3, 4],
];

countComponents(n, edges);
