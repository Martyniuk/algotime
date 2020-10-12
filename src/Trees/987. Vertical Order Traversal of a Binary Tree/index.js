/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// DFS is not giving proper sequence of nodes
// function dfs(node, level, levelValues) {
//     if (!node) return;

//     if (level in levelValues) {
//         levelValues[level].push(node.val);
//     } else {
//         levelValues[level] = [node.val];
//     }

//     dfs(node.left, level - 1, levelValues);
//     dfs(node.right, level + 1, levelValues);
// }
// var verticalTraversal = function(root) {
//     if (!root) {
//         return root;
//     }

//     let levelsValues = {};
//     let verticalLevel = 0;

//     dfs(root, verticalLevel, levelsValues);

//     let arr = Object.entries(levelsValues).sort((a, b) => a[0] - b[0]);

//     return arr.map(v => v[1]);
// };
// BFS <--
// S - O(N + H)
// R - O(nlogn)
// var verticalTraversal = function(root) {
//     if (!root) {
//         return root;
//     }
//     // node and VerticalLevel
//     const queue = [[root, 0, 0]]; // O(h)
//     const map = {}; // O(n)

//     while(queue.length) {
//         let size = queue.length;

//         for (let i = 0; i < size; i++) {
//             let [node, vertical, row] = queue.pop(); // --> unshift(val) |===| -> pop()

//             if (vertical in map) {
//                 map[vertical].push([node.val, row]);
//             } else {
//                 map[vertical] = [[node.val, row]];
//             }

//             if (node.left) queue.unshift([node.left, vertical - 1, row + 1]);
//             if (node.right) queue.unshift([node.right, vertical + 1, row + 1]);
//         }
//     }

//     const sortedArray = Object.entries(map).sort((a, b) => a[0] - b[0]);

//     return sortedArray.map(v => v[1].sort((a, b) => {
//         console.log('a', a)
//         if (a[1] === b[1]) {
//             return a[0] - b[0];
//         }
//     }));
// }

// var verticalTraversal = function(root) {
//     if (!root) {
//         return root;
//     }
//     // node and VerticalLevel
//     const queue = [[root, 0, 0]]; // O(h)
//     const nodeList = []; // O(n)

//     while(queue.length) {
//         let size = queue.length;

//         for (let i = 0; i < size; i++) {
//             let [node, vertical, row] = queue.pop(); // --> unshift(val) |===| -> pop()

//             nodeList.push([node.val, vertical, row]);

//             if (node.left) queue.unshift([node.left, vertical - 1, row + 1]);
//             if (node.right) queue.unshift([node.right, vertical + 1, row + 1]);
//         }
//     }

//     let sortedList = nodeList.sort((a, b) => {
//         if (a[1] === b[1]) {
//             if(a[2] === b[2]) {
//                 return a[0] - b[0];
//             }
//             return a[2] - b[2];
//         }

//         return a[1] - b[1];
//     });

//     let map = new Map();

//     sortedList.forEach(([val, vertical, row ]) => {
//         if (!map.has(vertical)) map.set(vertical, []);
//         map.get(vertical).push(val);
//     });

//     return [...map.values()];
// }
// function dfs(node, x, y, list) {
//     if (!node) return;

//     list.push([node.val, x, y]);

//     dfs(node.left, x - 1, y + 1, list);
//     dfs(node.right, x + 1, y + 1, list);
// }

// // DFS
// var verticalTraversal = function(root) {
//     if (!root) return [];
//     let nodesList = [];

//     dfs(root, 0, 0, nodesList);

//     nodesList.sort((a, b) => {
//         if (a[1] === b[1]) {
//             if (a[2] === b[2]) {
//                 return a[0] - b[0];
//             }

//             return a[2] - b[2];
//         }

//         return a[1] - b[1];
//     });

//     const nodesByColumn = new Map();
//     nodesList.forEach(([val, x, y]) => {
//         if (!nodesByColumn.has(x)) nodesByColumn.set(x, []);
//         nodesByColumn.get(x).push(val);
//     });

//     return [...nodesByColumn.values()];
// }

// R: O(nlogn)
// S: O(N) -> O(N + H)
var verticalTraversal = function (root) {
  if (!root) {
    return [];
  }

  let row = 0;
  let col = 0;
  let queue = [[root, row, col]];
  let nodeList = [];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [node, row, col] = queue.pop();
      nodeList.push([node.val, row, col]);

      if (node.left) queue.unshift([node.left, row + 1, col - 1]);
      if (node.right) queue.unshift([node.right, row + 1, col + 1]);
    }
  }

  // [val, row, col]
  nodeList.sort((a, b) => {
    if (a[2] === b[2]) {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }

      return a[1] - b[1];
    }
    return a[2] - b[2];
  });

  const nodesByLevel = new Map();

  nodeList.forEach(([val, row, col]) => {
    if (!nodesByLevel.has(col)) nodesByLevel.set(col, []);

    nodesByLevel.get(col).push(val);
  });

  return [...nodesByLevel.values()];
};

// [0,2,1,3,null,null,null,4,5,null,7,6,null,10,8,11,9]

// [0,5,1,9,null,2,null,null,null,null,3,4,8,6,null,null,null,7] -> [[9,7],[5,6],[0,2,4],[1,3],[8]]
