/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

// nice and laconic Implementation
var validateStackSequences = function (pushed, popped) {
  if (pushed.length !== popped.length) {
    return false;
  }

  const stack = [];
  let pushPointer = 0;
  let popPointer = 0;

  while (pushPointer <= pushed.length && popPointer <= popped.length) {
    if (stack[stack.length - 1] === popped[popPointer]) {
      stack.pop();
      popPointer++;
    } else {
      stack.push(pushed[pushPointer]);
      pushPointer++;
    }
  }

  return stack.length === 0;
};

// S: O(n)
// R: O(n)
// some kind of my impl

// var validateStackSequences = function(pushed, popped) {
//     if (pushed.length !== popped.length) {
//         return false;
//     }

//     const stack = [];
//     let pushPointer = 0;
//     let popPointer = 0;

//     while(pushPointer < pushed.length || stack.length) {
//         if (pushPointer >= pushed.length && stack[stack.length - 1] !== popped[popPointer]) {
//             return false;
//         }

//         if (stack[stack.length - 1] === popped[popPointer]) {
//             stack.pop();
//             popPointer++;
//         } else {
//             stack.push(pushed[pushPointer]);
//             pushPointer++;
//         }
//     }

//     return true;
// };
