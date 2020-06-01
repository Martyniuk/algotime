/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */

const kClosest = function (points, K) {
  // distance array
  let distance = [];
  let closestPoints = [];

  // Loop thru points list and calculate distance for points[i], push to distance array
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    distance.push(calcDistance(point));
  }
  // sort distance array
  distance.sort((a, b) => a - b);
  // take last possible distance for points
  let maxAvailableDistance = distance[K - 1];

  // Loop thru points and check that distance is less/equal to last possible
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

  // potentially we don't need to do sqrt, can be simplified to 'squareA + squareB'
  return Math.sqrt(squareA + squareB);
}

export { kClosest };
