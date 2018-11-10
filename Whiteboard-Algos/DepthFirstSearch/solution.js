/* Recursive implementation */
function recursiveDepthFirstForEach(node, cb) {
  cb(node.value);

  if (node.left) {
    recursiveDepthFirstForEach(node.left, cb);
  }

  if (node.right) {
    recursiveDepthFirstForEach(node.right, cb);
  }
}


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
/* Some console.log tests */
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = (x) => console.log(x);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89 
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89  
console.log();