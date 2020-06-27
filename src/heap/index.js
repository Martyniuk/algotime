const arr = [10, 20, 15, 30, 40];
// swap can be moved inside Heap
function swap(arr, from, to) {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}

class Heap {
  // Heap should be initialized from 1, so null should be at 0
  constructor() {
    this._heap = [null];
  }
  insert(val) {
    // if Heap is Empty - just push
    if (this.isEmpty()) {
      this._heap.push(val);
      return;
    }
    // basically you push el to the end - all the time!
    this._heap.push(val);
    // take index of this element
    let index = this._heap.length - 1;
    // calculate parent index
    let parentIndex = Math.floor(index / 2);
    // check that parent is not null at 0 position and You are bigger then parent
    while (parentIndex > 0 && this._heap[index] > this._heap[parentIndex]) {
      // you swap
      swap(this._heap, index, parentIndex);
      // re-initialize index as parent one
      index = parentIndex;
      // and re-calculate parent index
      parentIndex = Math.floor(parentIndex / 2);
    }
  }
  delete() {
    // deletion is all the time from Root, so index is 1
    let index = 1;
    // save deleted value for HeapSort in purpose
    const deleted = this._heap[index];
    // take last element, put it into root place
    this._heap[index] = this._heap.pop();
    // and call traverse to bottom from root to bottom
    this.traverse(index);

    return deleted;
  }
  // Heap is empty and you are given array, you need to transform it into MaxHeap
  heapify(array) {
    // clone array into heap and traverse it, in order to create MaxHEap
    this._heap = [null, ...array]; // clone input array
    // going from bottom(last to 1);
    for (let i = this._heap.length - 1; i >= 1; i--) {
      // traverse from this Index to bottom, in order to give it proper place
      this.traverse(i);
    }
  }
  // traverse from top to bottom heap and put correct values to its places
  traverse(index) {
    // find index of left child node
    let left = index * 2;
    // find index of right child node
    let right = index * 2 + 1;
    // while you have left or right child - compare whose is boss
    while (
      (this._heap[left] || this._heap[right]) &&
      (this._heap[left] >= this._heap[index] ||
        this._heap[right] >= this._heap[index])
    ) {
      // if left child is bigger then right - swap with bigger
      if (this._heap[left] >= this._heap[right]) {
        swap(this._heap, index, left);
        index = left;
      } else {
        swap(this._heap, index, right);
        index = right;
      }
      // re-calculate indexes of left and right
      left = index * 2;
      right = index * 2 + 1;
    }
  }
  // take root element and return
  peek() {
    return this._heap[1];
  }
  // return boolean if Heap is empty
  isEmpty() {
    return this._heap.length === 1;
  }
}

var heap = new Heap();
//for(let i = 0; i < arr.length; i++) {
//heap.insert(arr[i]);
//}

//let a = heap.delete(); // 40
//console.log(a);
console.log(heap);
