/**
 * @param {string[]} tokens
 * @return {number}
 */
// initialize stack
// create map with operations
// create hepler function that does calculation
// 1 - loop thru tokens array
// 2 - get tokens[i]
// 3 - if tokens[i] is operation -> stack.pop() 2 times
// 4 - path as argument first poped and second poped into hepler -> calculate result (second / first)
// 5 - result push to stack
// 6 - returen stack.pop()

function helper(first, second, token) {
  switch (token) {
    case "+":
      return first + second;
    case "-":
      return second - first;
    case "*":
      return first * second;
    case "/": {
      return Math.trunc(second / first);
    }
    default:
      return 0;
  }
}
const evalRPN = function (tokens) {
  const stack = [];
  const operations = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/",
  };

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (operations[token]) {
      const first = stack.pop();
      const second = stack.pop();
      const result = helper(first, second, token);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack.pop();
};

const input = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

evalRPN(input); // -> 22
