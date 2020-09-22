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
var deepestLeavesSum = function (root) {
  if (!root) {
    return 0;
  }

  let queueLevel = [root];
  let sum = 0;
  let deepestLevel = 0;

  while (queueLevel.length) {
    const size = queueLevel.length;

    deepestLevel += 1;

    for (let i = 0; i < size; i++) {
      const node = queueLevel.pop();

      if (node.left) queueLevel.unshift(node.left);
      if (node.right) queueLevel.unshift(node.right);
    }
  }

  queueLevel = [root];
  while (queueLevel.length) {
    const size = queueLevel.length;
    deepestLevel -= 1;

    for (let i = 0; i < size; i++) {
      const node = queueLevel.pop();

      if (deepestLevel === 0) {
        sum += node.val;
      }

      if (node.left) queueLevel.unshift(node.left);
      if (node.right) queueLevel.unshift(node.right);
    }
  }

  return sum;
};
