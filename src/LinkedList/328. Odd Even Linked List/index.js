/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) {
    return null;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};

// sam
// var oddEvenList = function(head) {
//     if (!head) {
//         return null;
//     }

//     let counter = 1;
//     let pointer = head;
//     let odd = new ListNode(0);
//     let even = new ListNode(0);
//     let oddP = odd;
//     let evenP = even;

//     while(pointer !== null) {
//         if (counter % 2 === 0) {
//             evenP.next = new ListNode(pointer.val);
//             evenP = evenP.next;
//         } else {
//             oddP.next = new ListNode(pointer.val);
//             oddP = oddP.next;
//         }
//         pointer = pointer.next;

//         counter++;
//     }

//     oddP.next = even.next;

//     return odd.next;
// }
