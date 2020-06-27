/**
 * @param {string} S
 * @return {string}
 */

// 24.06 - sam - 8Min
const removeDuplicates = function (S) {
  if (!S) {
    return S;
  }

  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];

    if (stack.length > 0 && char === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

const string = "abbaca";
const string2 = "abcbccbcaaa";
removeDuplicates(string); // -> ca
removeDuplicates(string2); // -> aba
