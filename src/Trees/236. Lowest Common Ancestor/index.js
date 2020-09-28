/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// recursive
// R: O(N)
// S: O(N) - recursion stack
var lowestCommonAncestor = function (root, p, q) {
  if (!root) {
    return null;
  }

  if (p.val === root.val || q.val === root.val) {
    return root;
  }

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  if (left !== null && right !== null) return root;
  if (left === null && right === null) return null;

  return left !== null ? left : right;
};
