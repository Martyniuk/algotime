/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function dfs(node, arr) {
  if (!node) {
    arr.push("X");
    return;
  }
  arr.push(node.val);

  dfs(node.left, arr);
  dfs(node.right, arr);
}
var serialize = function (root) {
  let preorder = [];
  dfs(root, preorder);

  return preorder;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

var deserialize = function (data) {
  let val = data.shift();
  if (val === "X") return null;
  let node = new TreeNode(val);

  node.left = deserialize(data);
  node.right = deserialize(data);

  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
