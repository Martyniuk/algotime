/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

const kClosest = function (points, K) {
  // distance array
  let distance = [];
  let closestPoints = [];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    // to impl
    distance.push(calcDistance(point));
  }

  distance.sort((a, b) => a - b);
  let maxAvailableDistance = distance[K - 1];

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (calcDistance(point) <= maxAvailableDistance) {
      closestPoints.push(point);
    }
  }

  return closestPoints;
};

// helper function - calculate distance from Point using Piphagors Formula
function calcDistance(point) {
  const [a, b] = point;

  const squareA = Math.pow(a, 2);
  const squareB = Math.pow(b, 2);

  // potentially we dont need to do sqrt, can be omitted
  return Math.sqrt(squareA + squareB);
}

export { kClosest };
