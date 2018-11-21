class Node{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function removeDups(head) {
  const dups = {};
  let node = head;
  let prev;
  while (node) {
    if (!dups[node.val]) {
      dups[node.val] = true;
      prev = node;
    } else {
      prev.next = node.next;
    }
    node = node.next;
  }
  return dups;
}


console.log(removeDups({
  "data": 1,
  "next": {
    "data": 3,
    "next": {
      "data": 3,
      "next": {
        "data": 3,
        "next": {
          "data": 4,
          "next": null
        }
      }
    }
  }
}));

