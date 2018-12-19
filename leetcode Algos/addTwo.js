var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let cur = result;
  let c = 0;

  while (l1 || l2 || c) {
    // these ternary operators are placed to specifically solve for
    // lists with only one value
    // use a list {5} {5} for example
    // we must continue iterating until the 1 value is added to our result so it can return
    // the list pasted below in the end
    //  ListNode { val: 0, next: ListNode { val: 1, next: null } } 
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;
    const v = v1 + v2 + c;

    cur.next = new ListNode(v % 10);
    cur = cur.next;
    c = v >= 10 ? 1 : 0;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return result.next;
};

var addTwoNumbers = function (l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {

    if (l1 !== null) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum = sum + l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;

  }

  return List.next;
};
