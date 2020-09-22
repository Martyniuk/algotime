// https://leetcode.com/problems/partition-labels/
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  if (!S) {
    return [];
  }

  const map = {};

  for (let i = 0; i < S.length; i++) {
    map[S[i]] = i;
  }

  const partitions = [];
  let partitionEnd = map[S[0]];
  let partitionStart = 0;

  for (let i = 0; i < S.length; i++) {
    let curr = S[i];

    if (map[curr] === i && map[curr] === partitionStart) {
      partitionEnd = map[curr];
      partitions.push(S.slice(partitionStart, partitionEnd + 1));
      partitionStart = partitionEnd + 1;
    } else if (i === partitionEnd) {
      partitions.push(S.slice(partitionStart, partitionEnd + 1));
      partitionStart = partitionEnd + 1;

      if (partitionStart === S.length - 1) {
        partitionEnd = partitionEnd + 1;
      }
    } else if (map[curr] > partitionEnd) {
      partitionEnd = map[curr];
    }
  }

  return partitions.map((v) => v.length);
};
// "eaaaaaaaabaaec"
// "caedbdedda"
// "vhaagbqkaq"
