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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (!root) {
    return [];
  }

  let queue = [[root, 0]];
  let nodesList = [];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [node, col] = queue.pop();
      nodesList.push([node.val, col]);

      if (node.left) queue.unshift([node.left, col - 1]);
      if (node.right) queue.unshift([node.right, col + 1]);
    }
  }

  nodesList.sort((a, b) => a[1] - b[1]);

  const map = new Map();

  nodesList.forEach(([val, col]) => {
    if (!map.has(col)) map.set(col, []);

    map.get(col).push(val);
  });

  return [...map.values()];
};
