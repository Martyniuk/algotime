/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  const stackCloned = [cloned];
  const stackOriginal = [original];

  while (stackOriginal.length) {
    let nodeC = stackCloned.pop();
    let nodeO = stackOriginal.pop();
    if (nodeO === target) {
      return nodeC;
    }

    if (nodeO.left) {
      stackOriginal.push(nodeO.left);
      stackCloned.push(nodeC.left);
    }

    if (nodeO.right) {
      stackOriginal.push(nodeO.right);
      stackCloned.push(nodeC.right);
    }
  }

  return null;
};
