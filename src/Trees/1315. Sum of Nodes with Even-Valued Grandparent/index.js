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

function dfs(node, parent, grantparent, sum) {
  if (grantparent && grantparent.val % 2 === 0) {
    sum.val += node.val;
  }

  if (node.left) {
    dfs(node.left, node, parent, sum);
  }

  if (node.right) {
    dfs(node.right, node, parent, sum);
  }
}

var sumEvenGrandparent = function (root) {
  if (!root) {
    return 0;
  }

  const sum = { val: 0 };
  dfs(root, null, null, sum);

  return sum.val;
};

// not working, coz of duplicates =(
// function fillInMap(node, map) {
//     if (!node) {
//         return;
//     }

//     if (node.val % 2 === 0) {
//         if (node.right && node.right.right) {
//             map[node.right.right.val] = true;
//         }

//         if (node.right && node.right.left) {
//             map[node.right.left.val] = true;
//         }
//         if (node.left && node.left.left) {
//             map[node.left.left.val] = true;
//         }
//         if (node.left && node.left.right) {
//             map[node.left.right.val] = true;
//         }
//     }

//     fillInMap(node.right, map);
//     fillInMap(node.left, map);
// }

// function dfs(node, sum, map) {
//     if (!node) {
//         return;
//     }

//     if (map[node.val]) {
//         sum.val += node.val;
//     }

//     dfs(node.right, sum, map);
//     dfs(node.left, sum, map);
// }

// var sumEvenGrandparent = function(root) {
//     if (!root) {
//         return 0;
//     }
//     const map = {};

//     fillInMap(root, map);
//     console.log(map);
//     const sum = { val: 0 };
//     dfs(root, sum, map);

//     return sum.val;
// };
