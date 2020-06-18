/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// [10, 2, -5]
function collapse(num1, num2) {
  if (Math.abs(num1) > Math.abs(num2)) {
    return num1;
  } else if (Math.abs(num1) < Math.abs(num2)) {
    return num2;
  }

  return 0;
}
const asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    // get stone from asteroids array
    const stone = asteroids[i]; //

    // if stone is negative and stack is empty or last element in stack is negative -> we push stone to the stack
    if (stone < 0 && (stack.length === 0 || stack[stack.length - 1] < 0)) {
      stack.push(stone);
      // if stone is negative and last element in stack is positive - they collapse
    } else if (stone < 0) {
      let el = stack.pop(); // 1
      // check which one is stronger, return stronger
      let res = collapse(stone, el); // -2, 1

      // res is negative and stack contains positive -> we have to check which is stronger
      while (res < 0 && stack[stack.length - 1] > 0) {
        el = stack.pop();
        res = collapse(res, el);
      }
      // is equal
      if (res === 0) {
        continue;
      }

      stack.push(res);
    } else {
      stack.push(stone);
    }
  }

  return stack;
};

const asteroids = [-2, 2, 1, -2];
asteroidCollision(asteroids); // -> [-2]
