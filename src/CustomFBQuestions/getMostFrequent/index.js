// input: [[1,4], [3,5], [100, 102.5]]
// output: 3 or 4 or 3.5 or 3.1 or 3.3

// O(N)
// O(N*K)

// corner cases -
function getKeyOfMaxVal(obj) {
  let maxKey;
  let maxVal = -Infinity;

  for (let key in obj) {
    if (obj[key] >= maxVal) {
      maxKey = key;
      maxVal = obj[key];
    }
  }

  return maxKey;
}

function getMostFrequentNumber(nums) {
  // corner cases

  // 1 - map with potential candidates
  // 2 - fill in every num with frequency
  // 3 - get max frequently seen

  // 1
  const candidates = {};
  for (let num of nums) {
    const [a, b] = num;
    candidates[a] = 0;
    candidates[b] = 0;
  }
  // 2
  for (let key in candidates) {
    nums.forEach(([a, b]) => {
      if (key >= a && key <= b) {
        candidates[key]++;
      }
    });
  }
  // 3
  let max = getKeyOfMaxVal(candidates);
  //   let max = Math.max(...Object.values(candidates));

  //   for (let key in candidates) {
  //     if (candidates[key] === max) {
  //       return key;
  //     }
  //   }
  // cover implicit return
  return max;
}
var a = [
  [1, 4],
  [3, 5],
  [100, 102.58888888],
];
const res = getMostFrequentNumber(a);

console.log(res);
