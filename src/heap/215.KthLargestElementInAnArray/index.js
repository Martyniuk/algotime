/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// maxHeap -> heapify -> O(n)
// while k !== 0 -> maxHeap.getMax()/delete()
// return kthMax;
const findKthLargest = function (nums, k) {
  if (nums.length === 0 && k === 0) {
    return -1;
  }

  const maxHeap = new MaxHeap(nums);
  let max = null;

  while (k !== 0) {
    max = maxHeap.delete();
    k--;
  }

  return max;
};

class MaxHeap {
  constructor(data = []) {
    this._data = data;
    this._heapify();
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

  _heapify() {
    for (let i = this._data.length - 1; i >= 0; i--) {
      this.sink(i);
    }
  }
  // return index of Left Child
  _getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  // return index of Right Child
  _getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  // return boolean of leftChild index is in range of data array
  _hasLeftChild(parentIndex) {
    return this._getLeftChildIndex(parentIndex) < this._data.length;
  }
  _hasRightChild(parentIndex) {
    return this._getRightChildIndex(parentIndex) < this._data.length;
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
        this._data[this._getRightChildIndex(index)] >
          this._data[this._getLeftChildIndex(index)]
      ) {
        biggestElementIndex = this._getRightChildIndex(index);
      }

      if (this._data[index] > this._data[biggestElementIndex]) {
        break;
      } else {
        this._swap(index, biggestElementIndex);
      }

      index = biggestElementIndex;
    }
  }
  isEmpty() {
    return this._data.length === 0;
  }
}

// Sorting approach - O(nLogN)
// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => a - b);

//     return nums[nums.length - k];
// };

const arr1 = [];
const k1 = 0;

const arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k2 = 4;

findKthLargest(arr1, k1); // -> -1
findKthLargest(arr2, k2); // -> 4
