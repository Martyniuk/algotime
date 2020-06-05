function swap(arr, start, end) {
  let tmp = arr[start];
  arr[start] = arr[end];
  arr[end] = tmp;
}

const reverseString = function (s) {
  const size = s.length >> 1;

  for (let start = 0; start < size; start++) {
    let end = s.length - start - 1;

    swap(s, start, end);
  }
};

const string = ["h", "e", "l", "l", "o"];
reverseString(string); // --> ["o","l","l","e","h"]
