/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    // push, pop, isEmpty, size - can be used
    this.stackA = [];
    this.stackB = [];
  }
  // 0=====0 <--push
  push(val) {
    this.stackB.push(val);
  }
  // <-- pop 0=====0
  pop() {
    while (this.stackB.length) {
      this.stackA.push(this.stackB.pop());
    }
    let deleted = this.stackA.pop();
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }

    return deleted;
  }
  peek() {
    return this.stackB[0];
  }

  empty() {
    return this.stackB.length === 0;
  }
}

// var MyQueue = function() {

// };

// /**
//  * Push element x to the back of queue.
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {

// };

// /**
//  * Removes the element from in front of queue and returns that element.
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {

// };

// /**
//  * Get the front element.
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {

// };

// /**
//  * Returns whether the queue is empty.
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {

// };

// /**
//  * Your MyQueue object will be instantiated and called as such:
//  * var obj = new MyQueue()
//  * obj.push(x)
//  * var param_2 = obj.pop()
//  * var param_3 = obj.peek()
//  * var param_4 = obj.empty()
//  */
