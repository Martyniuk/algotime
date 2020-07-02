/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
// O(nlogN)
const canAttendMeetings = function (intervals) {
  if (intervals.length === 0) {
    return true;
  }

  intervals.sort(compare);

  for (let i = 0; i < intervals.length - 1; i++) {
    let curr = intervals[i];
    let next = intervals[i + 1];

    if (curr[1] > next[0]) {
      return false;
    }
  }

  return true;
};

function compare(a, b) {
  if (a[0] > b[0]) {
    return 1;
  } else if (a[0] < b[0]) {
    return -1;
  }

  return 0;
}

const intervals = [
  [7, 10],
  [2, 4],
];
canAttendMeetings(intervals); // -> true
