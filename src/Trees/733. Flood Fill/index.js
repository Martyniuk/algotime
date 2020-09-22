/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

const DIRECTIONS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

var floodFill = function (image, sr, sc, newColor) {
  let oldColor = image[sr][sc];

  if (oldColor === newColor) {
    return image;
  }

  image[sr][sc] = newColor;

  for (let d = 0; d < DIRECTIONS.length; d++) {
    const [x, y] = DIRECTIONS[d];
    dfs(image, sr + x, sc + y, oldColor, newColor);
  }

  return image;
};

function dfs(image, r, c, oldColor, newColor) {
  if (
    r < 0 ||
    r > image.length - 1 ||
    c < 0 ||
    c > image[0].length - 1 ||
    image[r][c] !== oldColor
  ) {
    return;
  }

  image[r][c] = newColor;

  for (let d = 0; d < DIRECTIONS.length; d++) {
    const [x, y] = DIRECTIONS[d];
    dfs(image, r + x, c + y, oldColor, newColor);
  }
}

// function imageTraversal(image, r, c, oldColor, newColor) {
//     if (r < 0 || r > image.length - 1 || c < 0 || c > image[0].length - 1 || oldColor !== image[r][c]) {
//         return ;
//     }

//     image[r][c] = newColor;

//     imageTraversal(image, r + 1, c, oldColor, newColor);
//     imageTraversal(image, r - 1, c, oldColor, newColor);
//     imageTraversal(image, r, c + 1, oldColor, newColor);
//     imageTraversal(image, r, c - 1, oldColor, newColor);

// }

// var floodFill = function(image, sr, sc, newColor) {
//     const pixelColor = image[sr][sc]; // 1

//     if (pixelColor === newColor) {
//         return image;
//     }

//     imageTraversal(image, sr, sc, pixelColor, newColor);

//     return image;
// };
