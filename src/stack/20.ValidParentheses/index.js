/**
 * @param {string} s
 * @return {boolean}
 */
function isClosing(bracket) {
  return bracket === ")" || bracket === "}" || bracket === "]";
}

// T: O(n)
// S: O(n)
// sam
const isValid = function (s) {
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i]; // ')'

    if (isClosing(bracket)) {
      let prev = stack.pop(); // '('

      if (prev !== brackets[bracket]) {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
};

// this one seems more logical
// var isValid = function(s) {
//     if (s.length === 0) return true;

//     let stack = [];
//     let openingBrackets = {
//         '[': ']',
//         '(': ')',
//         '{': '}',
//     };

//     for (let i = 0; i < s.length; i++) {
//         const bracket = s[i]; // ]

//         if(bracket in openingBrackets) {
//             stack.push(bracket);
//         } else {
//             const prev = stack.pop(); // [

//             if (bracket !== openingBrackets[prev]) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

const string = "{[";
isValid(string); // -> false;
