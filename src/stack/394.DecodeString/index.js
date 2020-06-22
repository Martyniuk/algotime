/**
 * @param {string} s
 * @return {string}
 */
// 22.06 19.04
var decodeString = function (s) {
  const stack = [];
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === "]") {
      let interim = "";
      let el = stack.pop();

      while (el !== "[") {
        interim = el + interim;
        el = stack.pop();
      }

      let quantity = "";
      el = stack[stack.length - 1];
      while (parseInt(el) === parseInt(el)) {
        quantity = stack.pop() + quantity;
        el = stack[stack.length - 1];
      }
      for (let j = 0; j < quantity; j++) {
        stack.push(interim);
      }
    } else {
      stack.push(curr);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    result.push(stack[i]);
  }

  return result.join("");
};
