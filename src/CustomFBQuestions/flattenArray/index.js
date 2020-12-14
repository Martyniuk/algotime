var a = [1, 2, 3, [4, 5, 6, [7, [8, [9, 10]]]]];
var b = [1, 2, 3, [4, 5, 6, [7, [8, [9, 10]]]]];

// reduce ES6
function flattenArray(arr) {
  return arr.reduce((acc, v) => {
    if (Array.isArray(v)) {
      return acc.concat(flattenArray(v));
    }
    return [...acc, v];
  }, []);
}

// iterative
function flattenIterative(array = []) {
  const flatten = [];

  while (array.length) {
    const curr = array.shift();
    if (Array.isArray(curr)) {
      array = curr.concat(array);
    } else {
      flatten.push(curr);
    }
  }

  return flatten;
}

var res = flattenArray(a);
var res1 = flattenIterative(b);
console.log("flattened - res ", res);
console.log("flattened - a ", a);
console.log("flattened iterative - res", res1);
console.log("flattened iterative - b", res1);
