/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneTree = function (root) {
  // BFS - queue
  // --> unshift |=====| pop -->

  if (!root) {
    return root;
  }

  const newRoot = new Node();

  return helper(root, newRoot);
};

function helper(node, newNode) {
  if (!node) return;

  newNode.val = node.val;

  for (let i = 0; i < node.children.length; i++) {
    let child = node.children[i];
    let newChild = new Node();

    newNode.children.push(helper(child, newChild));
  }

  return newNode;
}
