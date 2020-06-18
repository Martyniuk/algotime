/**
 * @param {number[]} T
 * @return {number[]}
 */

const dailyTemperatures = function (T) {
  const temperatures = [];
  const stack = [];

  for (let i = T.length - 1; i >= 0; i--) {
    const curr = [T[i], i];

    while (stack.length > 0 && stack[stack.length - 1][0] <= curr[0]) {
      stack.pop();
    }

    if (stack.length === 0) {
      temperatures.push(0);
      stack.push(curr);
      continue;
    }

    const warmDay = stack[stack.length - 1];
    temperatures.push(warmDay[1] - curr[1]);
    stack.push(curr);
  }

  return temperatures.reverse();
};

// - Stack - 2
// var dailyTemperatures = function(T) {
//     const result = new Array(T.length).fill(0);

//     const stack = [];
//     const length = T.length - 1;

//     for (let i = length; i >= 0; i--) {
//         let curr = T[i];
//         // let nextDay = stack[stack.length - 1][0];
//         while(stack.length && curr >= stack[stack.length - 1][0]) {
//             stack.pop();
//         }

//         if (stack.length && curr < stack[stack.length - 1][0]) {
//             let nextWarmDay = stack[stack.length - 1][1] - i;
//             result[i] = nextWarmDay;
//         }

//         stack.push([T[i], i]);
//     }

//     return result;
// }

// - Self - 1 - BF
// var dailyTemperatures = function(T) {
//     const result = new Array(T.length).fill(0);

//     for (let i = 0; i < T.length; i++) {
//         let counter = 0;

//         for (let j = i + 1; j < T.length; j++) {
//             if(T[j] > T[i]){
//                 counter++;
//                 result[i] = counter;

//                 break;

//                 }else{
//                     counter++;
//                 }
//         }
//     }

//     return result;
// };

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
dailyTemperatures(temperatures); // -> [1,1,4,2,1,1,0,0]
