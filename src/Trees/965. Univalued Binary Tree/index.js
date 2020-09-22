/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isUnivalueNode(node, value) {
  if (!node) {
    return true;
  }
  if (!node.left && !node.right && node.val === value) {
    return true;
  }

  return (
    isUnivalueNode(node.left, value) &&
    isUnivalueNode(node.right, value) &&
    node.val === value
  );
}

function isUnivalTree(root) {
  return isUnivalueNode(root, root.val);
}

// 2 - ne sam - recursion zapili
// var isUnivalTree = function (root) {
//     if (!root) {
//         return null;
//     }

//     if (root.left && root.left.val !== root.val) return false;
//     if (root.right && root.right.val !== root.val) return false;

//     return isUnivalTree(root.left) && isUnivalTree(root.right);
// }

// 1 - sam iterative solution
// var isUnivalTree = function(root) {
//     if (!root) return null

//     const stack = [root];
//     while (stack.length > 0) {
//         const node = stack.pop();

//         if (node.val !== root.val) {
//             return false;
//         }

//         if (node.left) stack.push(node.left);
//         if (node.right) stack.push(node.right);
//     }

//     return true;
// };
