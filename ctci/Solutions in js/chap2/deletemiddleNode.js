function deleteMiddleNode(head) {
  let node = head;
  let size = 0;
  let target = Math.round(size / 2); 
  while (node) {
    size++;
    node = node.next;
  }
  let prev;
  let count = 0;
  node = head; 
  while (node) {
    if (target === count) {
      prev = node.next.next;
    } 
    count++;
    prev = node;
    node = node.next;
  }
  return head;
}

console.log(deleteMiddleNode({
  "data": 1,
  "next": {
    "data": 2,
    "next": {
      "data": 3,
      "next": {
        "data": 4,
        "next": {
          "data": 5,
          "next": null
        }
      }
    }
  }
}));