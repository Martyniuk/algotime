/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// with Heap it can be done in O(nlogk) but there is question of how to compare minimum?
// 28.06 - O(nlogn) - po4ti sam - sorting is tricky
var topKFrequent = function (words, k) {
  let map = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    map[word] = map[word] ? map[word] + 1 : 1;
  }

  let sortedWords = Object.entries(map)
    .sort(compareFunc)
    .map((tuple) => tuple[0]); // map to be sorted;

  const frequent = [];
  for (let i = 0; i < k; i++) {
    frequent.push(sortedWords[i]);
  }

  return frequent;
};

function compareFunc(a, b) {
  function alphbeticalCompare(a, b) {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }

    return 0;
  }

  return a[1] === b[1] ? alphbeticalCompare(a, b) : b[1] - a[1];
}
