/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// R: O(n)
// S: O(1)
var rotateRight = function (head, k) {
  if (!head || k === 0) {
    return head;
  }

  let pointer = head;
  let length = 1;

  while (pointer.next !== null) {
    pointer = pointer.next;
    length++;
  }
  if (k % length === 0) {
    return head;
  }
  pointer.next = head;
  let steps = Math.abs(length - (k % length)) - 1;
  pointer = head;
  while (steps !== 0) {
    pointer = pointer.next;
    steps--;
  }

  head = pointer.next;
  pointer.next = null;

  return head;
};
