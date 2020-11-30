// // PROBLEM STATEMENT:
// //
// // Given a set of tasks, write a function to calculate the total time needed for a particular task to complete.
// // The total time means the time of the task plus the time of its dependencies.

// // ID time dependencies
// // 1  20   [2, 3]
// // 2  10   [4]
// // 3  5    []
// // 4  5    []
// //
// // Example: If we take Task with id 1:
// // task 1 = 20 + 10 + 5 + 5 = 40
// ///////////////////---------------------------///////////////////---------------------------///////////////////---------------------------

// // Working Solution:

// class Task {
//   constructor(id, time, dependencies) {
//     this.id = id;
//     this.time = time;
//     this.dependencies = dependencies;
//   }
// }

// const tasksGraph = {
//   1: new Task(1, 20, [2, 3]),
//   2: new Task(2, 10, [4]),
//   3: new Task(3, 5, []),
//   4: new Task(4, 5, []),
// };

// function getTotalTime(id, graph, totalTime = 0, visited = new Set()) {
//   // corner case
//   let currentTask = graph[id];
//   if (!visited.has(id)) {
//     totalTime += currentTask.time;
//     visited.add(id);
//   }

//   if (currentTask.dependencies.length !== 0) {
//     totalTime += currentTask.dependencies.reduce((acc, taskId) => {
//       acc += getTotalTime(taskId, graph, 0, visited);
//       return acc;
//     }, 0);
//   }

//   return totalTime;
// }
// const TT = getTotalTime(1, tasksGraph);

// console.log("<---", TT); // —> 40
