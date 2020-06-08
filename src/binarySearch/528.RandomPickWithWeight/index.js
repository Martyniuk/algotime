/**
 * @param {number[]} w
 */

// Given an array with Weight

class Solution {
  constructor(w) {
    this.prefixSums = [];
    this.totalSum = 0;

    let prefixSum = 0;

    for (let i = 0; i < w.length; i++) {
      prefixSum += w[i];
      this.prefixSums[i] = prefixSum;
    }

    this.totalSum = prefixSum;
  }
  // O(logn)
  pickIndex() {
    let target = this.totalSum * Math.random();

    let lo = 0;
    let hi = this.prefixSums.length - 1;

    while (lo < hi) {
      let median = Math.floor((lo + hi) / 2);

      if (target > this.prefixSums[median]) {
        lo = median + 1;
      } else {
        hi = median;
      }
    }

    return lo;
  }

  //   // O(n)
  //   pickIndex() {
  //     let target = this.totalSum * Math.random();

  //     for (let i = 0; i < this.prefixSums.length; i++) {
  //       if (target < this.prefixSums[i]) {
  //         return i;
  //       }
  //     }
  //   }
}
