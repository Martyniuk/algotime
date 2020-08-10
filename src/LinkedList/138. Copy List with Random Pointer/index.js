function getClonedNode(node, visited) {
  if (node !== null) {
    if (visited.get(node)) {
      return visited.get(node);
    } else {
      const newNode = new Node(node.val, null, null);
      visited.set(node, newNode);

      return visited.get(node);
    }
  }

  return null;
}

var copyRandomList = function (head) {
  if (!head) {
    return null;
  }

  let visited = new Map();
  let pointer = head;
  let newNode = new Node(pointer.val, null, null);
  visited.set(pointer, newNode);

  while (pointer !== null) {
    newNode.random = getClonedNode(pointer.random, visited);
    newNode.next = getClonedNode(pointer.next, visited);

    pointer = pointer.next;
    newNode = newNode.next;
  }

  return visited.get(head);
};
