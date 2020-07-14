/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (l1, l2) {
  let pointerL1 = l1;
  let pointerL2 = l2;
  let merged = new ListNode();
  let curr = merged;
  while (pointerL1 !== null && pointerL2 !== null) {
    if (pointerL1.val < pointerL2.val) {
      curr.next = pointerL1;
      pointerL1 = pointerL1.next;
    } else {
      curr.next = pointerL2;
      pointerL2 = pointerL2.next;
    }

    curr = curr.next;
  }

  // at this point only one of them gonna be null, and second will have one value left, we shoudl decide which
  if (pointerL2 !== null) {
    curr.next = pointerL2;
  } else {
    curr.next = pointerL1;
  }

  return merged.next;
};

// var mergeTwoLists = function(l1, l2) {
//     let dummyHead = new ListNode(0);
//     let head = dummyHead;
//     let fPointer = l1;
//     let sPointer = l2;

//     while (fPointer !== null && sPointer !== null) {
//         if (fPointer.val <= sPointer.val) {
//             dummyHead.next = fPointer;
//             fPointer = fPointer.next;
//         } else {
//             dummyHead.next = sPointer;
//             sPointer = sPointer.next;
//         }

//         dummyHead = dummyHead.next;
//     }

//     if (fPointer !== null) {
//         dummyHead.next = fPointer;
//     } else {
//         dummyHead.next = sPointer;
//     }

//    return head.next;
// };
// var mergeTwoLists = function(l1, l2) {
//     let dummyHead = new ListNode(0);
//     let fPointer = l1;
//     let sPointer = l2;
//     let current = null;

//     while(fPointer !== null && sPointer !== null) {
//         debugger;
//         if (fPointer.val < sPointer.val) {
//             dummyHead.next = new ListNode(fPointer.val);
//             fPointer = fPointer.next;
//             debugger;
//         } else {
//             dummyHead.next = new ListNode(sPointer.val);
//             sPointer = sPointer.next;
//         }

//         dummyHead = dummyHead.next;
//     }

//     console.log('<-- dummyHead', dummyHead);
//     return dummyHead.next;
// };
