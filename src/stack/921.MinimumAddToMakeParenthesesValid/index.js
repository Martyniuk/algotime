/**
 * @param {string} S
 * @return {number}
 */
// 23.06 - sam, O(n), O(n)
// const minAddToMakeValid = (string) => {
//     if (string.length === 0) {
//         return 0;
//     }

//     const stack = [];
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];

//         if (char === ')' && stack[stack.length - 1] === '(') {
//             stack.pop();
//         } else {
//             stack.push(char);
//         }
//     }

//     return stack.length;
// }

// ne sam - T-O(n),S-O(1)
const minAddToMakeValid = (string) => {
  let open = 0;
  let closed = 0;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === ")") {
      if (open > 0) {
        open--;
      } else {
        closed++;
      }
    } else {
      open++;
    }
  }

  return open + closed;
};
