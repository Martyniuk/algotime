/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MaxHeap {
  constructor() {
    this._heap = []; // start from 0
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this._heap[0];
  }
  delete() {
    if (this.isEmpty()) {
      return null;
    }

    this._swap(0, this._heap.length - 1);

    const deleted = this._heap.pop();
    const index = 0;

    this.sink(index);

    return deleted;
  }
  insert(val) {
    this._heap.push(val);
    let lastIndex = this._heap.length - 1;

    this.swim(lastIndex);
  }
  _hasLeftChild(parentIndex) {
    return this._getLeftChildIndex(parentIndex) <= this._heap.length - 1;
  }
  _hasRightChild(parentIndex) {
    return this._getRightChildIndex(parentIndex) <= this._heap.length - 1;
  }
  _hasParent(childIndex) {
    return this._getParentIndex(childIndex) >= 0;
  }
  _getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  _getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  swim(index) {
    let parentIndex = this._getParentIndex(index);

    while (
      this._hasParent(index) &&
      this._heap[index] > this._heap[parentIndex]
    ) {
      this._swap(index, parentIndex);

      index = parentIndex;
      parentIndex = this._getParentIndex(parentIndex);
    }
  }
  sink(index) {
    while (this._hasLeftChild(index)) {
      let biggestChildIndex = this._getLeftChildIndex(index);

      if (
        this._hasRightChild(index) &&
        this._heap[this._getRightChildIndex(index)] >
          this._heap[this._getLeftChildIndex(index)]
      ) {
        biggestChildIndex = this._getRightChildIndex(index);
      }

      if (this._heap[index] > this._heap[biggestChildIndex]) {
        break;
      } else {
        this._swap(index, biggestChildIndex);
      }

      index = biggestChildIndex;
    }
  }
  isEmpty() {
    return this._heap.length === 0;
  }
  _getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  _swap(from, to) {
    let tmp = this._heap[from];
    this._heap[from] = this._heap[to];
    this._heap[to] = tmp;
  }
}

/*
1. create ListNode - node of a linkedList
2. create MaxHeap
3. loop thru lists 
3.1 get list and insert list.val into heap

4. while maxHeap is not empty 
4.1 delete element from maxHeap and add to resultinf linked list

5. return resulting linked list
*/
const mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  // initializing Heap
  const maxHeap = new MaxHeap();
  // iterating thru lists and add every node of list to Heap, mutating input data
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];

    while (list !== null) {
      maxHeap.insert(list.val);
      list = list.next;
    }
  }

  // if Heap if empty - we return null
  if (maxHeap.isEmpty()) {
    return null;
  }
  // create list where all values will be merged to, but on this approach we need to delete last node in the end
  let merged = new ListNode(null);
  // loop thru maxHeap until there are values, isEmpty or peek() === null
  while (!maxHeap.isEmpty()) {
    merged = new ListNode(maxHeap.delete(), merged);
  }
  // create interim list in order to delete last node
  let interim = merged;
  while (interim.next.next !== null) {
    interim = interim.next;
  }
  interim.next = null;

  return merged;
};
