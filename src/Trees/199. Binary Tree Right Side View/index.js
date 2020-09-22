/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 22.09 - sam iterative - recursive cool too
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const rightSide = [];

  const queue = [root];
  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.pop();

      if (i === 0) {
        rightSide.push(node.val);
      }

      if (node.right) queue.unshift(node.right);
      if (node.left) queue.unshift(node.left);
    }
  }

  return rightSide;
};

// // hz kogda
// var rightSideView = function(root) {
//     const result = [];
//     if (!root) return result;

//     recursion(root, result, 0);

//     return result;
// };

// var recursion = function(node, result, level) {
//     if(!result[level]) {
//         result.push(node.val);
//     }

//     if(node.right) {
//         recursion(node.right, result, level + 1);
//     }

//     if(node.left) {
//         recursion(node.left, result, level + 1);
//     }
// }
