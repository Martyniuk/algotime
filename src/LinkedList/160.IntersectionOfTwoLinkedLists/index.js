/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// approach where you count length of each linkedList
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pointerA = headA;
  let listAlength = 0;
  while (pointerA !== null) {
    pointerA = pointerA.next;
    listAlength++;
  }

  let pointerB = headB;
  let listBlength = 0;
  while (pointerB !== null) {
    pointerB = pointerB.next;
    listBlength++;
  }

  let diff = null;
  if (listAlength > listBlength) {
    diff = listAlength - listBlength;

    pointerB = headB;

    while (diff !== 1) {
      pointerB = pointerB.next;
      diff--;
    }

    return pointerB;
  } else {
    diff = listBlength - listAlength;

    pointerA = headA;

    while (diff !== 0) {
      pointerA = pointerA.next;
      diff--;
    }

    return pointerA;
  }
};

// Extra memory approach
// var getIntersectionNode = function(headA, headB) {
//     if (!headA || !headB) {
//         return null;
//     }

//     if (headA === headB) {
//         return headA;
//     }

//     let pointerA = headA;
//     let pointerB = headB;
//     let set = new Set();

//     while(pointerA !== null) {
//         set.add(pointerA);

//         pointerA = pointerA.next;
//     }

//     while(pointerB !== null) {
//         if (set.has(pointerB)) {
//             return pointerB;
//         }

//         pointerB = pointerB.next;
//     }

//     return null
// };
