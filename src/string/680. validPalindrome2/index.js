function helper(s, left, right, discrepancies) {
  if (left >= right) {
    return true;
  }

  if (s[left] !== s[right]) {
    if (discrepancies >= 1) {
      return false;
    }

    return (
      helper(s, left + 1, right, discrepancies + 1) ||
      helper(s, left, right - 1, discrepancies + 1)
    );
  }

  return helper(s, left + 1, right - 1, discrepancies);
}

// 24.07
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let discrepancies = 0;

  return helper(s, left, right, discrepancies);
};
