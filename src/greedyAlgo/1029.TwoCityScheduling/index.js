/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  // key point in this task is to sort it by minimum expense
  // how - [a, b] -> there is tuple with cost for a trip and cost of b trip
  // sort it as arr.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let totalExpences = 0;

  // we have to summarize half of trips
  const halfLength = costs.length / 2;

  for (let i = 0; i < halfLength; i++) {
    // count A trip and B trip from half+i
    totalExpences += costs[i][0] + costs[halfLength + i][1];
  }

  return totalExpences;
};

const costsOfTrips = [
  [259, 770],
  [448, 54],
  [926, 667],
  [184, 139],
  [840, 118],
  [577, 469],
];

twoCitySchedCost(costsOfTrips); // -> 1859
