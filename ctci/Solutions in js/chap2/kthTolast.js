var linkedList = function (value) {
  this.value = value;
  this.next = null;
};

function findKthToLast(list, targetIdx) {
  let head = list;
  let size = 0;
  let pointer = 0;

  while (head) {
    size++;
    head = head.next;
  }

  head = list;
  while (head) {
    if (pointer + targetIdx === size) {
      return head.data;
    }
    pointer++;
    head = head.next;
  }
}

console.log(findKthToLast({
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
}, 1));

// var a = new linkedList('1');
// var b = new linkedList('2');
// var c = new linkedList('3');
// var d = new linkedList('4');
// var e = new linkedList('5');
// var f = new linkedList('6');
// var g = new linkedList('7');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
// console.log(a)
// console.log(findKthToLast(a, 3));

// findKthToLast(10, a);

// findKthToLast(-1, a);

// findKthToLast(0, a);

// findKthToLast(1, a);
