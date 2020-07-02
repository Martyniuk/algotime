const arr = [10, 20, 15, 30, 40];

class MaxHeap {
  constructor(data = []) {
    this._data = data;
    this._heapify();
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
  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  _hasParent(index) {
    return this._getParentIndex(index) >= 0;
  }
  swim(index) {
    let parentIndex = this._getParentIndex(index);
    while (
      this._hasParent(index) &&
      this._data[index] >= this._data[parentIndex]
    ) {
      this._swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this._getParentIndex(index);
    }
  }
  insert(val) {
    this._data.push(val);
    const lastIndex = this._data.length - 1;

    this.swim(lastIndex);
  }
  sink(parentIndex) {
    while (this._hasLeftChild(parentIndex)) {
      let biggestElementIndex = this._getLeftChildIndex(parentIndex);

      if (
        this._hasRightChild(parentIndex) &&
        this._data[this._getLeftChildIndex(parentIndex)] <
          this._data[this._getRightChildIndex(parentIndex)]
      ) {
        biggestElementIndex = this._getRightChildIndex(parentIndex);
      }

      if (this._data[parentIndex] > this._data[biggestElementIndex]) {
        break;
      } else {
        this._swap(parentIndex, biggestElementIndex);
      }

      parentIndex = biggestElementIndex;
    }
  }
  // remove biggest element
  delete() {
    if (this.isEmpty()) {
      return null;
    }
    // swap last element with the biggest one
    this._swap(0, this._data.length - 1);

    // remove last element that is already biggest
    const deleted = this._data.pop();
    // sink for 0 indexed element
    this.sink(0);
    // return biggest
    return deleted;
  }
  _heapify() {
    for (let i = this._data.length - 1; i >= 0; i--) {
      this.sink(i);
    }
  }
}

// ================ HEAP version 1 =============

// class Heap {
//   // Heap should be initialized from 1, so null should be at 0
//   constructor() {
//     this._heap = [null];
//   }
//   insert(val) {
//     // if Heap is Empty - just push
//     if (this.isEmpty()) {
//       this._heap.push(val);
//       return;
//     }
//     // basically you push el to the end - all the time!
//     this._heap.push(val);
//     // take index of this element
//     let index = this._heap.length - 1;

//     this.swim(index);
//   }
//   // bottom -> up O(logN)
//   swim(index) {
//     let parentIndex = Math.floor(index / 2);

//     while (parentIndex > 0 && this._heap[index] > this._heap[parentIndex]) {
//       this.swap(index, parentIndex);
//       // re-initialize index as parent one
//       index = parentIndex;
//       // and re-calculate parentIndex for current "New" index
//       parentIndex = Math.floor(parentIndex / 2);
//     }
//   }
//   // swap can be moved inside Heap
//   swap(from, to) {
//     let tmp = this._heap[from];
//     this._heap[from] = this._heap[to];
//     this._heap[to] = tmp;
//   }

//   delete() {
//     // deletion is all the time from Root, so index is 1
//     let index = 1;
//     // save deleted value for HeapSort in purpose
//     const deleted = this._heap[index];
//     // take last element, put it into root place
//     this._heap[index] = this._heap.pop();
//     // and call traverse to bottom from root to bottom
//     this.sink(index);

//     return deleted;
//   }
//   // Heap is empty and you are given array, you need to transform it into MaxHeap
//   heapify(array) {
//     // clone array into heap and traverse it, in order to create MaxHEap
//     this._heap = [null, ...array]; // clone input array
//     // going from bottom(last to 1);
//     for (let i = this._heap.length - 1; i >= 1; i--) {
//       // traverse from this Index to bottom, in order to give it proper place
//       this.sink(i);
//     }
//   }
//   // traverse from top to bottom heap and put correct values to its places
//   sink(index) {
//     // find index of left child node
//     let left = index * 2;
//     // find index of right child node
//     let right = index * 2 + 1;
//     // while you have left or right child - compare whose is boss
//     while (
//       (this._heap[left] || this._heap[right]) &&
//       (this._heap[left] >= this._heap[index] ||
//         this._heap[right] >= this._heap[index])
//     ) {
//       // if left child is bigger then right - swap with bigger
//       if (this._heap[left] >= this._heap[right]) {
//         this.swap(index, left);
//         index = left;
//       } else {
//         this.swap(index, right);
//         index = right;
//       }
//       // re-calculate indexes of left and right
//       left = index * 2;
//       right = index * 2 + 1;
//     }
//   }
//   // take root element and return
//   peek() {
//     return this._heap[1];
//   }
//   // return boolean if Heap is empty
//   isEmpty() {
//     return this._heap.length === 1;
//   }
// }

// var heap = new Heap();
//for(let i = 0; i < arr.length; i++) {
//heap.insert(arr[i]);
//}

//let a = heap.delete(); // 40
//console.log(a);
// console.log(heap);
