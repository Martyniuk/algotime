//
// function throttle(fn, time) {
//   let timeout = null;

//   return function (...rest) {
//     if (timeout) return;

//     const context = this;
//     const later = () => {
//       fn.call(context, ...rest);
//       timeout = null;
//     };

//     timeout = setTimeout(later, time);
//   };
// }
// 33.11.2020

function throttle(fn, delay) {
  let timeout = null;

  return function (...rest) {
    if (timeout) return;

    const inner = () => {
      clearTimeout(timeout);
      fn(...rest);
      timeout = null;
    };

    timeout = setTimeout(inner, delay);
  };
}

function veryHeavy(data) {
  console.log("veryHeavy", data);
}

const optimizedHeavy = throttle(veryHeavy, 10000);

optimizedHeavy("Data");
optimizedHeavy("Data");
optimizedHeavy("Data");
optimizedHeavy("Data");
optimizedHeavy("Data");
optimizedHeavy("Data");
