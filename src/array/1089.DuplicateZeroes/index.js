// O(n2)
const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      i++;
    }
  }
};

// 1 - sam
// O(n2)
// const duplicateZeros = function(arr) {
//     const size = arr.length;
// 	for (let i = 0; i < arr.length; i++) {
// 		const el = arr[i];
// 		if (el === 0) {
// 			arr.splice(i, 0, 0);
// arr.pop();
// 			i++;
// 		}
// 	}

//     arr.length = size;
// }

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]); // - > [1,0,0,2,3,0,0,4]
