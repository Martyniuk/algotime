/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var removeElements = function (head, val) {
  if (!head) {
    return null;
  }

  let sentinel = new ListNode(0, head);
  let prev = sentinel;
  let curr = head;

  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return sentinel.next;
};

// var removeElements = function(head, val) {
//     if (!head) {
//         return null;
//     }

//     if (head.val === val) {
//         head.val = head.next.val;
//         head = head.next;
//     } else {
//         return head
//     }

//     return removeElements(head.next, val);
// };
