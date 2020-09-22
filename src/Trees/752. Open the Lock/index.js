/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const START = "0000";
function updateQueueWithPossibleCandidates(current, memory, queue) {
  const directions = [1, -1];
  let arr = current.split("");
  for (let d = 0; d < directions.length; d++) {
    for (let i = 0; i < 4; i++) {
      arr[i] = parseInt(arr[i]) + directions[d];

      if (arr[i] > 9) {
        arr[i] = 0;
      } else if (arr[i] < 0) {
        arr[i] = 9;
      }

      let candidate = arr.join("");

      if (!memory.has(candidate)) {
        queue.push(candidate);
      }

      arr = current.split("");
    }
  }
}
// corner cases are - string, without bc, numbers from 0-9,string is 4chars length
var openLock = function (deadends, target) {
  const memory = new Set(deadends);

  if (!target || memory.has(START)) {
    return -1;
  } else if (target === START) {
    return 0;
  }

  let level = 0;
  let queue = [START];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      let current = queue.shift(); // '0001'

      if (memory.has(current)) {
        continue;
      }

      if (current === target) {
        return level;
      }

      memory.add(current);
      updateQueueWithPossibleCandidates(current, memory, queue);
    }

    level++;
  }

  return -1;
};
