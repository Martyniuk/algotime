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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  if (root.left === null && root.right === null) {
    return [];
  }

  // let lonelyRoot = root.left === null || root.right === null;

  const stack = [[root, false]];
  const lonelyNodes = [];

  while (stack.length) {
    const node = stack.pop();

    let isLonely = node[0].left === null || node[0].right === null;

    if (node[1]) {
      lonelyNodes.push(node[0].val);
    }

    if (node[0].left) stack.push([node[0].left, isLonely]);
    if (node[0].right) stack.push([node[0].right, isLonely]);
  }

  return lonelyNodes;
};

// [1,84,null,80,61]
// [197] = []
// [1,84,null,80,61] = [84]
// [31,null,78,null,28] = [78,28]

// root is always notLonely
