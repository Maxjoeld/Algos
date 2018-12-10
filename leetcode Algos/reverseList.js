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

// paste this into jsplaygrounds
// we're able to iterate over an object like this 
// because as we continues redclerating 
// list we get further and further into the object
// so everytime we're doing = list = list.next
// we're techincally doing node.next.next.next = {}
// let node = new ListNode();
// let list = node;
// node
// list.next = {
//   data: 4,
//   next: null
// };
// node
// list = list.next;

// list.next = {
//   data: 6,
//   next: null
// };
// node




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