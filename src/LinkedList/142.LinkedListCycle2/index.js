/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// R: O(N);
// S: O(N);
// var detectCycle = function(head) {
//     const visited = new Set();

//     let tmp = head;

//     while (tmp !== null) {
//         if (visited.has(tmp)) {
//             return tmp;
//         }

//         visited.add(tmp);
//         tmp = tmp.next;
//     }

//     return null;
// }
// hare and tortoise approach
// O(n)
function detectIntersect(head) {
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return slow;
    }
  }

  return null;
}
// O(n)
// whole task is R: O(N) and S: O(N)
var detectCycle = function (head) {
  if (!head || head.next === null) {
    return null;
  }

  let ptr2 = detectIntersect(head);
  if (ptr2 === null) {
    return null;
  }

  let ptr1 = head;

  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
};
