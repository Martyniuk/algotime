/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// O(Nlogk)
// O(n + k)
const topKFrequent = function (nums, k) {
  const map = {};
  // loop thru nums in order to construct map with frequent values
  nums.forEach((v) => {
    map[v] = map[v] ? map[v] + 1 : 1;
  });
  // make tuples of it - thanks JS we have Object.entries
  const tuples = Object.entries(map);
  // initialize MaxHeap - be attentive to !!!constructor!!!
  const maxHeap = new MaxHeap(tuples);
  // initialize resulting array
  const mostFrequent = [];
  // until k is not zero we will retriew most frequent value from MaxHeap
  while (k !== 0) {
    const maxFrequent = maxHeap.delete();
    // push most Frequent into resulting array
    mostFrequent.push(parseInt(maxFrequent[0]));
    k--;
  }

  return mostFrequent;
};

// heapify - O(n); rest of operations - logN
class MaxHeap {
  constructor(data = []) {
    this._data = data;
    this._heapify(); // O(n);
  }
  _getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  _getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  _hasLeftChild(parentIndex) {
    return this._getLeftChildIndex(parentIndex) < this._data.length;
  }
  _hasRightChild(parentIndex) {
    return this._getRightChildIndex(parentIndex) < this._data.length;
  }
  delete() {
    if (this.isEmpty()) {
      return null;
    }

    this._swap(0, this._data.length - 1);

    const deleted = this._data.pop();

    this.sink(0);

    return deleted;
  }
  _swap(from, to) {
    let tmp = this._data[from];
    this._data[from] = this._data[to];
    this._data[to] = tmp;
  }
  sink(index) {
    while (this._hasLeftChild(index)) {
      let biggestElementIndex = this._getLeftChildIndex(index);

      if (
        this._hasRightChild(index) &&
        this._data[this._getRightChildIndex(index)][1] >
          this._data[this._getLeftChildIndex(index)][1]
      ) {
        biggestElementIndex = this._getRightChildIndex(index);
      }

      if (this._data[index][1] > this._data[biggestElementIndex][1]) {
        break;
      } else {
        this._swap(index, biggestElementIndex);
      }

      index = biggestElementIndex;
    }
  }
  _heapify() {
    for (let i = this._data.length - 1; i >= 0; i--) {
      this.sink(i);
    }
  }
  isEmpty() {
    return this._data.length === 0;
  }
}

const arr = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
const k = 3;

topKFrequent(arr, k); // -> [4,2,5];
