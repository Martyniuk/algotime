/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || head.next === null) {
    return false;
  }

  const map = {};
  let tmp = head;

  while (tmp !== null) {
    if (map[tmp]) {
      return true;
    } else {
      map[tmp] = tmp;
    }

    tmp = tmp.next;
  }

  return false;
};

// var hasCycle = function(head) {
//     if (!head || head.next === null) {
//         return false;
//     }

//     let slow = head;
//     let fast = head.next;

//     while (fast !== null && fast.next !== null) {
//         if (fast === slow) {
//             return true
//         }
//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return false;
// }

// var hasCycle = function(head) {
//     if (!head || head.next === null) {
//         return false;
//     }

//     let slow = head;
//     let fast = head;

//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;

//         if (slow === fast) {
//             return true;
//         }
//     }

//     return false;
// };

// 1 - my logic
// var hasCycle = function(head) {
//     if (!head || head.next === null) {
//         return false;
//     }

//     let slow = head;
//     let fast = head.next;

//     while (head !== null) {
//         if (slow === fast) {
//             return true;
//         }

//         slow = slow.next;
//         fast = fast && fast.next && fast.next.next;
//     }

//     return false;
// };
