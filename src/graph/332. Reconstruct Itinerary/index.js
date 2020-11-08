/**
 * @param {string[][]} tickets
 * @return {string[]}
 */

// ne sam - i pizdec - backtraking + greedy algo... prosto zapishi i pomni
const ORIGIN = "JFK";

function buildGraph(tickets) {
  const graph = tickets.reduce((acc, [from, to]) => {
    acc[from] ? acc[from].push(to) : (acc[from] = [to]);
    return acc;
  }, {});

  // sort graph
  Object.values(graph).forEach((to) => to.sort());

  return graph;
}

function makeItinerary(from, graph, result) {
  const destinations = graph[from];

  while (destinations && destinations.length > 0) {
    makeItinerary(destinations.shift(), graph, result);
  }

  result.unshift(from); // < ---- backtraking || PostOrder traversal
}

var findItinerary = function (tickets) {
  const graph = buildGraph(tickets);
  const result = [];

  makeItinerary(ORIGIN, graph, result);

  return result;
};

var input = [
  ["MUC", "LHR"],
  ["JFK", "MUC"],
  ["SFO", "SJC"],
  ["LHR", "SFO"],
];

findItinerary(input); // ---> ["JFK", "MUC", "LHR", "SFO", "SJC"]
