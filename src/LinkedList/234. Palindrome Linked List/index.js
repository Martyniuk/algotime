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
function reverseList(head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }

  return prev;
}

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;
  slow = reverseList(slow);

  while (slow !== null) {
    if (fast.val !== slow.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

// var reverseList = function(node) {
//     let prev = null
//     let curr = node
//     let next = null

//     while (curr !== null) {
//         next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }

//     return prev;
// }

// 1 - ne sam - not working solution
// var isPalindrome = function(head) {
//     let reversed = reverseList(head);

//     while (head !== null && reversed !== null) {

//         if (head.val !== reversed.val) {
//             debugger;
//             return false;
//         }
//         debugger;
//         head = head.next;
//         reversed = reversed.next;
//     }
//     debugger;
//     return true;
// };

// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;

//     while (curr !== null) {
//         let next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }

//     head = prev;

//     return head;
// };
