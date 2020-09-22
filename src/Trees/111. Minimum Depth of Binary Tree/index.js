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
 * @return {number}
 */

// R: O(n)
// S: O(n)
var minDepth = function (root) {
  if (!root) {
    return root;
  }
  // unshift --> 0===========0 --> pop
  const queue = [root]; // 9, 20
  let minLevel = 0;

  while (queue.length) {
    const size = queue.length; // 2

    minLevel++;
    for (let i = 0; i < size; i++) {
      const { left, right } = queue.pop();

      if (!left && !right) {
        return minLevel;
      }

      if (left) queue.unshift(left);
      if (right) queue.unshift(right);
    }
  }
};
