/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return null;
  }

  let curr = head;
  let next = null;

  while (curr.child || curr.next) {
    if (curr.child) {
      // if (curr.next) curr.next.prev = null;
      next = curr.next;
      curr.next = flatten(curr.child);
      curr.next.prev = curr;
      curr.child = null;
    }

    curr = curr.next;
  }
  if (next !== null) {
    curr.next = next;
    next.prev = curr;
  }

  return head;
};
