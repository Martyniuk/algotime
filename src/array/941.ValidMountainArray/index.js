/**
 * @param {number[]} A
 * @return {boolean}
 */

const validMountainArray = function (A) {
  if (A.length < 3) {
    return false;
  }
  let start = 0;
  let end = A.length;

  // go up
  while (start < end && A[start] < A[start + 1]) {
    start++;
  }
  // check peak
  if (start === 0 || start === end - 1) return false;
  // go down
  while (start < end && A[start] > A[start + 1]) {
    start++;
  }

  // we reached the end
  return start === end - 1;
};

const array = [0, 3, 2, 1];
validMountainArray(array); // -> true
