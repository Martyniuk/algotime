var reverseList = function (head) {
  if (!head) {
    return head;
  }

  let pointer = head; // 1 -> 2 -> 3 -> 4 -> 5 -> null
  let reversed = null; // null

  while (pointer !== null) {
    const next = pointer.next; // 3 -> 4 -> 5 -> null

    pointer.next = reversed; // 2 -> 1 -> null

    reversed = pointer; // 2 -> 1 -> null

    pointer = next; // 3 -> 4 -> 5 -> null
  }

  return reversed; // 5 -> 4 -> 3 -> 2 -> 1 -> null
};
