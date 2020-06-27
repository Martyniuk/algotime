/**
 * @param {string} s
 * @return {string}
 */
// var minRemoveToMakeValid = function(s) {

// };

const minRemoveToMakeValid = (string) => {
  const stack = [];
  let set = new Set();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char === "(") {
      stack.push(i);
    } else if (char === ")") {
      if (stack.length === 0) {
        set.add(i);
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length > 0) {
    let index = stack.pop();
    set.add(index);
  }
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (!set.has(i)) {
      result.push(string[i]);
    }
  }
  console.log(set);
  return result.join("");
};
