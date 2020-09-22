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

function isUnivalue(node, value) {
  if (!node) {
    return true;
  }

  if (!node.left && !node.right && node.val === value) {
    return true;
  }

  return (
    node.val === value &&
    isUnivalue(node.left, value) &&
    isUnivalue(node.right, value)
  );
}

var countUnivalSubtrees = function (root) {
  if (!root) {
    return 0;
  }

  let count = 0;

  function dfs(node) {
    if (!node) {
      return count;
    }

    if (isUnivalue(node, node.val)) {
      count += 1;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return count;
};
