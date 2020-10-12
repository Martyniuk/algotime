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
// sam - 03.10.2020
// R: O(N)
// S: O(N)
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [root];
  let traversal = [];
  let rightToLeft = false;

  while (queue.length) {
    const size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (rightToLeft) {
      level.reverse();
      rightToLeft = false;
    } else {
      rightToLeft = true;
    }

    traversal.push(level);
  }

  return traversal;
};
// [3,9,10,12,null,13,11,20,null,null,15,7]
