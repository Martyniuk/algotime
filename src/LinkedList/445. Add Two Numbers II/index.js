/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function reverseLinkedList(head) {
  let pointer = head;
  let reversed = null; // Space: // O(n)

  while (pointer !== null) {
    let next = pointer.next;

    pointer.next = reversed;
    reversed = pointer;

    pointer = next;
  }

  return reversed;
}

function checkCarry(sum, carry) {
  if (sum > 9) {
    carry = 1;
    sum = sum - 10;
  } else {
    carry = 0;
  }

  return [sum, carry];
}
// Runtime: O(n)
// Space: O(n)
var addTwoNumbers = function (l1, l2) {
  const reversedL1 = reverseLinkedList(l1); // Runtime: O(n)
  const reversedL2 = reverseLinkedList(l2); // Runtime: O(n)

  const resultingSum = new ListNode(0); // SentinelNode
  let current = resultingSum;
  let pointerL1 = reversedL1;
  let pointerL2 = reversedL2;
  let carry = 0;

  // Runtime: O(n)
  while (pointerL1 !== null && pointerL2 !== null) {
    let sum = pointerL1.val + pointerL2.val + carry;

    [sum, carry] = checkCarry(sum, carry);

    current.next = new ListNode(sum);
    current = current.next;

    pointerL1 = pointerL1.next;
    pointerL2 = pointerL2.next;
  }

  if (pointerL1 !== null) {
    while (pointerL1 !== null) {
      let sum = pointerL1.val + carry;

      [sum, carry] = checkCarry(sum, carry);

      current.next = new ListNode(sum);
      current = current.next;
      pointerL1 = pointerL1.next;
    }
  } else {
    while (pointerL2 !== null) {
      let sum = pointerL2.val + carry;

      [sum, carry] = checkCarry(sum, carry);

      current.next = new ListNode(sum);
      current = current.next;
      pointerL2 = pointerL2.next;
    }
  }

  if (carry !== 0) {
    current.next = new ListNode(carry);
  }

  return reverseLinkedList(resultingSum.next);
};
