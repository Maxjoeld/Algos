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


// console.log(removeDups({
//   "data": 1,
//   "next": {
//     "data": 3,
//     "next": {
//       "data": 3,
//       "next": {
//         "data": 3,
//         "next": {
//           "data": 4,
//           "next": null
//         }
//       }
//     }
//   }
// }));

function kthToLast(list, targetIdx) {
  if (list.next === null) {
    return list;
  }
  let head = list;
  let size = 0;
  while (head) {
    size++;
    head = head.next;
  }
  let pointer = 0;
  let newHead = list;
  while (newHead) {
    if (pointer + targetIdx === size) {
      return newHead.data;
    }
    pointer++;
    newHead = newHead.next;
  }
}

console.log(kthToLast({
  "data": 1,
  "next": {
    "data": 02,
    "next": {
      "data": 10,
      "next": {
        "data": 31,
        "next": {
          "data": 4,
          "next": null
        }
      }
    }
  }
}, 1));

