/**
 * initialize your data structure here.
 */

class MinStack {
  constructor() {
    this._stack = [];
    this._minStack = [];
  }
  isEmpty() {
    return this._stack.length === 0;
  }
  // void
  push(val) {
    // if stack is empty - definately val is minimum possible number
    if (this.isEmpty()) {
      this._stack.push(val);
      this._minStack.push([val, 1]);
    } else {
      if (val < this._minStack[this._minStack.length - 1][0]) {
        this._minStack.push([val, 1]);
      } else if (val === this._minStack[this._minStack.length - 1][0]) {
        this._minStack[this._minStack.length - 1][1]++;
      }

      this._stack.push(val);
    }
  }
  // void
  pop() {
    const poped = this._stack.pop();

    if (
      poped === this._minStack[this._minStack.length - 1][0] &&
      this._minStack[this._minStack.length - 1][1] === 1
    ) {
      this._minStack.pop();
    } else if (
      poped === this._minStack[this._minStack.length - 1][0] &&
      this._minStack[this._minStack.length - 1][1] > 1
    ) {
      this._minStack[this._minStack.length - 1][1]--;
    }
  }
  // number
  top() {
    const lastIndex = this._stack.length - 1;

    return this._stack[lastIndex];
  }
  // void
  getMin() {
    const lastIndex = this._minStack.length - 1;

    return this._minStack[lastIndex][0];
  }
}

// var MinStack = function() {

// };

/**
 * @param {number} x
 * @return {void}
 */
// MinStack.prototype.push = function(x) {

// };

/**
 * @return {void}
 */
// MinStack.prototype.pop = function() {

// };

/**
 * @return {number}
 */
// MinStack.prototype.top = function() {

// };

/**
 * @return {number}
 */
// MinStack.prototype.getMin = function() {

// };

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
