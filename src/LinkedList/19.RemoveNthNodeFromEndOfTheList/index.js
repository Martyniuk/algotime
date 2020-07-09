/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head === null) {
    return null;
  }
  //
  let pointer = head;
  let length = 0;
  while (pointer !== null) {
    pointer = pointer.next;
    length++;
  }

  let diff = length - n;
  let prev = null;
  pointer = head;

  while (diff !== 0 && pointer !== null) {
    prev = pointer;
    pointer = pointer.next;

    diff--;
  }

  if (prev === null) {
    head = head.next;
  } else {
    prev.next = pointer ? pointer.next : null;
  }

  return head;
};

// var removeNthFromEnd = function(head, n) {
//     if (head === null || head.next === null) {
//         return null;
//     }
//     let fast = head;
//     let slow = head;

//     for (let i = 0; i <= n; i++) {
//         if (fast === null) return head.next;
//         fast = fast.next;
//     }

//     while(fast !== null) {
//         slow = slow.next;
//         fast = fast.next;
//     }

//     slow.next = slow.next.next;

//     return head;
// };
