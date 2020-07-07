class ListNode {
  constructor(val = null, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (this.size === 0 || index < 0 || index > this.size - 1) {
      return -1;
    }
    let tmp = this.head;
    for (let i = 0; i < index; i++) {
      tmp = tmp.next;
    }

    return tmp.val;
  }

  addAtHead(val) {
    this.head = new ListNode(val, this.head);
    this.size++;
  }
  addAtTail(val) {
    let tmp = this.head;
    while (tmp.next !== null) {
      tmp = tmp.next;
    }
    tmp.next = new ListNode(val);
    this.size++;
  }
  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val);
      return;
    } else if (index > this.size) {
      return;
    }

    let prev = null;
    let tmp = this.head;

    for (let i = 0; i < index; i++) {
      prev = tmp;
      tmp = tmp.next;
    }

    let nodeAt = prev.next;
    let current = new ListNode(val, nodeAt);
    prev.next = current;
    this.size++;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let prev = null;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
    }
    if (curr) {
      prev.next = curr.next;
    } else {
      prev = null;
    }
    this.size--;
  }
}
