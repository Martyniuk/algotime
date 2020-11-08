/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
// po4ti sam - no mnogo koda

function buildGraph(equations, values) {
  const graph = {};

  equations.forEach(([a, b], i) => {
    const weight = values[i];
    const backWeight = 1 / weight;

    a in graph ? graph[a].push([b, weight]) : (graph[a] = [[b, weight]]);

    b in graph
      ? graph[b].push([a, backWeight])
      : (graph[b] = [[a, backWeight]]);
  });

  return graph;
}

var calcEquation = function (equations, values, queries) {
  // corner cases - ?
  const graph = buildGraph(equations, values);
  // DFS - iterative
  function traverseGraph(a, b, visited = {}) {
    const stack = [{ node: a, quotient: 1 }];

    while (stack.length) {
      const { node, quotient } = stack.pop();

      visited[node] = true;

      for (let i = 0; i < graph[node].length; i++) {
        let [currEl, currVal] = graph[node][i];
        if (!visited[currEl]) {
          const newQuotient = quotient * currVal;
          if (currEl === b) {
            return newQuotient;
          }

          stack.push({ node: currEl, quotient: newQuotient });
        }
      }
    }

    return -1;
  }
  // Interim function that I believe increase readability
  function calcEvaluation(a, b) {
    if (a === b && (graph[a] || graph[b])) {
      return 1;
    } else if (!graph[a] || !graph[b]) {
      return -1;
    }

    return traverseGraph(a, b);
  }

  return queries.map(([a, b]) => calcEvaluation(a, b));
};

var equations = [
  ["a", "b"],
  ["b", "c"],
];
var values = [2.0, 3.0];
var queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"],
];

calcEquation(equations, values, queries); // --> [6.00000,0.50000,-1.00000,1.00000,-1.00000]
