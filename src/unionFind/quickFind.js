class QuickFind {
  constructor(N) {
    this.id = new Array(N).fill().map((_, i) => i);
  }

  connected(p, q) {
    return this.id[p] === this.id[q];
  }

  union(p, q) {
    let pid = this.id[p];
    let qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
  }

  find(p) {
    return this.id[p];
  }
}

module.exports = QuickFind;
