// implement function range that should receive from and to and step
// return
function range(from = 0, to = Infinity, step = 1) {
  let numberOfIterations = 0;
  let nextIndex = from;

  return {
    next() {
      if (nextIndex < to) {
        numberOfIterations += 1;
        nextIndex += step;

        return {
          done: false,
          value: nextIndex,
        };
      }

      return { done: true, value: numberOfIterations };
    },
  };
}

var it = range(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 3 5 7 9 11
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);
