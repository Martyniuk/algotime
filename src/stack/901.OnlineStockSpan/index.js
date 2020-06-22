// var StockSpanner = function() {

// };

/**
 * @param {number} price
 * @return {number}
 */
// StockSpanner.prototype.next = function(price) {

// };

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// 22.06
class StockSpanner {
  constructor() {
    this._stack = [];
  }

  next(val) {
    if (this.isEmpty()) {
      this._stack.push([val, 1]);

      return 1;
    }

    if (val < this.getLast()[0]) {
      // this._stack.push([lastDayValue, price]);
      this._stack.push([val, 1]);

      return 1;
    }
    let counter = 1;
    if (val >= this.getLast()[0]) {
      while (!this.isEmpty() && val >= this.getLast()[0]) {
        let [v, price] = this._stack.pop();
        counter += price;
      }

      this._stack.push([val, counter]);

      return counter;
    }
  }

  getLast() {
    return this._stack[this._stack.length - 1];
  }

  isEmpty() {
    return this._stack.length === 0;
  }
}
