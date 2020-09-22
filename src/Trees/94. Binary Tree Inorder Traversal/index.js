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

// iterative approach
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }
  let inorder = [];
  let stack = [];
  let current = root; // 1

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    inorder.push(current.val);

    current = current.right;
  }
  return inorder;
};

// recursive approach
// function traversal(node, res) {

//     if (node.left) {
//         traversal(node.left, res);
//     }
//     res.push(node.val);
//     if (node.right) {
//         traversal(node.right, res);
//     }
// }

// var inorderTraversal = function(root) {
//     if (!root)
//         return root;

//     let res = [];
//     traversal(root, res);
//     return res;
// }

// var inorderTraversal = function(root) {
//     if (!root) return [];

//     let result = [];
//     recursion(root, result);

//     return result;
// };

// var recursion = function(node, result) {

//     if (node.left) {
//         recursion(node.left, result);
//     }
//     result.push(node.val);
//     if (node.right) {
//         recursion(node.right, result);
//     }

//     // if (node !== null) {
//     //     if(node.left) {
//     //     recursion(node.left, result);
//     //     // result.push(node.val);
//     // };
//     // result.push(node.val);
//     // if(node.right) {
//     //     recursion(node.right, result);
//     //     // result.push(node.val);
//     // };
//     // }

// }
