/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  const sorted = [...heights].sort((a, b) => a - b);
  let numberMovedStudents = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sorted[i]) numberMovedStudents++;
  }

  return numberMovedStudents;
};

const heights = [5, 1, 2, 3, 4];
heightChecker(heights); // -> 5
