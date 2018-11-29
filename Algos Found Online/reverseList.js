const reverseList = (head) => {
  let prev = null;
  let cur = head;
  while (cur) {
    let tmp = cur;
    cur = cur.next;
    tmp.next = prev;
    prev = tmp;
  }
  return prev;
}



reverseList({
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
})