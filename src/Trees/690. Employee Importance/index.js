/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
// BFS
// var GetImportance = function(employees, id) {
//     let map = {};
//     let boss = {};
//     let importanceNum = 0;

//     for (let i = 0; i < employees.length; i++) {
//         map[employees[i].id] = employees[i];
//         if (employees[i].id === id) {
//             boss = employees[i];
//         }
//     }

//     let queue = [boss];

//     while (queue.length !== 0) {
//         const size = queue.length;

//         for (let i = 0; i < size; i++) {
//             const { importance, subordinates } = queue.pop();
//             importanceNum += importance;

//             for (let j = 0; j < subordinates.length; j++) {
//                 queue.unshift(map[subordinates[j]]);
//             }
//         }
//     }

//     return importanceNum;
// };

// function dfs(id, map, totalImportance) {
//     const { importance, subordinates } = map[id];
//     subordinates.forEach(e => {
//         totalImportance += dfs(e.id, map, totalImportance + e.importance);
//     })

//     return totalImportance;
// }

// DFS
var GetImportance = function (employees, id) {
  let map = {};
  for (let i = 0; i < employees.length; i++) {
    map[employees[i].id] = employees[i];
  }

  function dfs(id) {
    const { importance, subordinates } = map[id];
    let result = importance;
    subordinates.forEach((e) => (result += dfs(e)));

    return result;
  }

  return dfs(id);
};
