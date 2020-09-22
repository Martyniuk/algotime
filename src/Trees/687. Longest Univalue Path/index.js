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
// bottom-up approach
var longestUnivaluePath = function (root) {
  let maxPath = 0;

  function dfs(node) {
    if (node === null) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    let pathLeft = 0;
    let pathRight = 0;

    if (node.left && node.left.val === node.val) {
      pathLeft += left + 1;
    }
    if (node.right && node.right.val === node.val) {
      pathRight += right + 1;
    }

    maxPath = Math.max(maxPath, pathLeft + pathRight);

    return Math.max(pathLeft, pathRight);
  }

  dfs(root);

  return maxPath;
};

// [1,2,2,2,2,2]
