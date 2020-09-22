/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */

// 14.08
// S: O(n)
// T: O(n)
var maxDepth = (root) => {
  if (!root) {
    return root;
  }

  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    const { length } = queue;
    depth++;
    for (let i = 0; i < length; i++) {
      let node = queue.pop();

      if (node.children) {
        for (let j = 0; j < node.children.length; j++) {
          queue.unshift(node.children[j]);
        }
      }
    }
  }

  return depth;
};

// BFS
// var maxDepth = (root) => {
//     if (!root) {
//         return 0;
//     }

//     let result = 0;
//     let queue = [root];

//     while(queue.length > 0) {
//         let size = queue.length;
//         result++;
//         for (let i = 0; i < size; i++) {
//             let node = queue.pop();

//             for(let j = 0; j < node.children.length; j++) {
//                 queue.unshift(node.children[j]);
//             }
//         }
//     }

//     return result;
// }
