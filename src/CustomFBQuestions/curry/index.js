function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  const paramsLength = fn.length;
  const currLength = [];

  return function inner(...rest) {
    currLength.push(...rest);
    if (currLength.length < paramsLength) {
      return inner;
    }

    return fn(...currLength);
  };
}

curry(sum)(1)(2, 3, 4, 5); // 6
// curry(sum)(1,2,3);      // 6
// curry(sum)(1)(2)(3);    // 6
