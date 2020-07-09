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
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var deleteDuplicates = function(head) {
    if (!head) {
        return null;
    }
    
    let set = new Set();
    let sentinel = new ListNode(0, head);
    let prev = sentinel;
    let curr = head;
    
    while (curr !== null) {
        if (set.has(curr.val)) {
            prev.next = curr.next;
        } else {
            set.add(curr.val);

            prev = curr;
        }
        
        curr = curr.next;
    }
    
    return sentinel.next;
};