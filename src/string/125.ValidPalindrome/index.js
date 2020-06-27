/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(char) {
  let codePoint = char.codePointAt();
  // check alphabet and numbers
  return (
    (codePoint >= 97 && codePoint <= 122) ||
    (codePoint >= 48 && codePoint <= 57)
  );
}

var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    const startChar = s[start].toLowerCase();
    const endChar = s[end].toLowerCase();

    if (!isValid(startChar)) {
      start++;
      continue;
    }

    if (!isValid(endChar)) {
      end--;
      continue;
    }

    if (startChar !== endChar) {
      return false;
    }

    start++;
    end--;
  }

  return true;
};

// var isPalindrome = function(s) {
//     let pS = 0;
//     let pE = s.length - 1;

//     for (let i = 0; i < s.length; i++) {
//         let startChar = s.charAt(pS).toLowerCase();
//         let endChar = s.charAt(pE).toLowerCase();

//         if (!validChar(startChar)) {
//             pS++;
//             continue;
//         }

//         if (!validChar(endChar)) {
//             pE--;
//             continue;
//         }

//         if (startChar !== endChar) {
//             return false;
//         }

//         pS++;
//         pE--;
//     }

//     return true;
// };

// var validChar = function(char) {
//     let codePoint = char.codePointAt();

//     return (codePoint >= 97 && codePoint <= 122) || (codePoint >= 48 && codePoint <= 57);
// }
