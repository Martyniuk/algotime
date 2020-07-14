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
var addTwoNumbers = function (l1, l2) {
  const resList = new ListNode(0);
  let head = resList;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    l1 = l1 || new ListNode(0);
    l2 = l2 || new ListNode(0);

    let sum = l1.val + l2.val + carry;

    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }

    let node = new ListNode(sum);
    head.next = node;
    head = node;

    l1 = l1.next;
    l2 = l2.next;
  }

  if (carry !== 0) {
    head.next = new ListNode(carry);
  }

  return resList.next;
};

// var addTwoNumbers = function(l1, l2) {
//     let resultingNode = new ListNode(0);
//     let head = resultingNode;
//     let carry = 0;

//     while (l1 || l2) {
//         l1 = l1 || new ListNode(0);
//         l2 = l2 || new ListNode(0);

//         let sum = l1.val + l2.val + carry;

//         if (sum > 9) {
//             carry = 1;
//             sum = sum - 10;
//         } else {
//             carry = 0;
//         }

//         let node = new ListNode(sum);
//         head.next = node;
//         head = node;

//         l1 = l1.next;
//         l2 = l2.next;
//     }

//     if(carry !== 0) {
//         head.next = new ListNode(carry);
//     }

//     return resultingNode.next;
// }

// var reverseInteger = function(num) {
//     let result = 0;
//     let reminder = 0;
//     let interim = Math.abs(num);

//     while (interim !== 0) {
//         reminder = interim % 10;
//         result *= 10;
//         result += reminder;
//         interim = Math.floor(interim / 10);
//     }

//     return num < 0 ? -result : result;
// }

// ----------------- 1 ------------------
// var addTwoNumbers = function(l1, l2) {
//     let lNode1 = l1;
//     let lNode2 = l2;
//     let num1 = '';
//     let num2 = '';
//     let sum = 0;
//     let resultingNode = new ListNode(0);
//     let head = resultingNode;

//         debugger;
//     while(lNode1.next !== null) {
//         num1 += lNode1.val;
//         lNode1 = lNode1.next;
//     }
//     num1 += lNode1.val;

//     while(lNode2.next !== null) {
//         num2 += lNode2.val;
//         lNode2 = lNode2.next;
//     }
//     num2 += lNode2.val;

//     num1 = reverseInteger(num1);
//     num2 = reverseInteger(num2);

//     sum = num1 + num2; // 807
//     // let reversedSum = reverseInteger(sum);
//     let reminder = 0;

//     while(sum !== 0) {
//         reminder = sum % 10; // 7

//         head.next = new ListNode(reminder);
//         head = head.next;

//         sum = Math.floor(sum / 10);
//     }

//     return resultingNode.next;
// };

// var reverseInteger = function(num) {
//     let result = 0;
//     let reminder = 0;
//     let interim = Math.abs(num);

//     while (interim !== 0) {
//         reminder = interim % 10;
//         result *= 10;
//         result += reminder;
//         interim = Math.floor(interim / 10);
//     }

//     return num < 0 ? -result : result;
// }
