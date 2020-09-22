230. Kth Smallest Element in a BST/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @param {number} k
* @return {number}
*/
var kthSmallest = function(root, k) {
   // create PriorityQueue - O(N) - heapify
   // add/remove operation gonna take O(logn);
   // traverse a BST O(N), addvalue to PQ 
   // return Kth element
   
   if (!root || !k) {
       return -1;
   }
   
   let minHeap = new MinHeap();
   let stack = [root];
   let smallest = -1;
   
   while (stack.length) {
       let node = stack.pop();
       
       minHeap.insert(node.val);

       if (node.left) {
           stack.push(node.left);
       }
       if (node.right) {
           stack.push(node.right);
       }
   }

   while (k !== 0) {
       smallest = minHeap.delete();
       k--;
   }
   
   return smallest;
};

class MinHeap {
   constructor() {
       this._heap = [];
       this._heapify();
   }
   // -------
   _getLeftChildIndex(parentIndex) {
       return parentIndex * 2 + 1;
   }
   _getRightChildIndex(parentIndex) {
       return parentIndex * 2 + 2;
   }
   _hasLeftChild(parentIndex) {
       return this._getLeftChildIndex(parentIndex) < this._heap.length;
   }
   _hasRightChild(parentIndex) {
       return this._getRightChildIndex(parentIndex) < this._heap.length;
   }
   _getParentIndex(index) {
       return Math.floor((index - 1) / 2);
   }
   _hasParent(index) {
       return this._getParentIndex(index) >= 0;
   }
   // ======
   
   _swim(index) {
       let parentIndex = this._getParentIndex(index);

       while(this._hasParent(index) && this._heap[index] < this._heap[parentIndex]) {
           this._swap(index, parentIndex);
           index = parentIndex;
           parentIndex = this._getParentIndex(index);
       }
   }
   _swap(from, to) {
       [this._heap[to], this._heap[from]] = [this._heap[from], this._heap[to]];
   }
   _sink(parentIndex) {
       while (this._hasLeftChild(parentIndex)) {
           let smallestElementIndex = this._getLeftChildIndex(parentIndex);
           
           if (this._hasRightChild(parentIndex) && this._heap[this._getLeftChildIndex(parentIndex)] > this._heap[this._getRightChildIndex(parentIndex)]) {
               smallestElementIndex = this._getRightChildIndex(parentIndex);
           }
           
           if (this._heap[parentIndex] < this._heap[smallestElementIndex]) {
               break;
           } else {
               this._swap(parentIndex, smallestElementIndex);
               parentIndex = smallestElementIndex;
           }
       }
   }
   _heapify() {
       for (let i = this._heap.length - 1; i >= 0; i--) {
           this._sink(i);
       }
   }
   insert(val) {
       this._heap.push(val);
       let lastIndex = this._heap.length - 1;
       this._swim(lastIndex);
   }
   delete() {
       this._swap(0, this._heap.length - 1);
       let deleted = this._heap.pop();
       
       this._sink(0);
       
       return deleted;
   }
}