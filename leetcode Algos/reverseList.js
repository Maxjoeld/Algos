const reverseList = (head) => {
  let prev = null;
  let cur = head;
  // Important to declare variable twice because It's advisable not to alter 
  // the existing data
  // cur.next needs to be iterated first before changing the value of tmp.next
  // bc with objects manipulation it can change the value of head
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
}, {
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