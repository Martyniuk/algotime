// 30.11.2020
function veryHeavy(data) {
  console.log("data in veryHeavy", data);
}

function debounce(fn, delay) {
  let timeout = null;

  return function (...rest) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...rest);
    }, delay);
  };
}

const optimized = debounce(veryHeavy, 2000);

optimized();
