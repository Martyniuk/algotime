/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 23.09.2020 - sam, commented code is mine, 29 line is taken
// R - O(n)
// S - O(n)
// very interesting solution for SPACE - O(1), but its very tricky and recursive, so ommited due to other priorities
var connect = function (root) {
  if (!root) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    // let level = [];
    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (i < size - 1) {
        node.next = queue[0];
      }

      // level.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    // if (size === 1) {
    //     level.length = 0;
    //     continue;
    // } else {
    //     let to = level.pop();
    //     while(level.length) {
    //         let from = level.pop();
    //         from.next = to;
    //         to = from;
    //     }
    // }
  }

  return root;
};
