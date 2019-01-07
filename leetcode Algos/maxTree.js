var maxDepth = function (root) {
  // iterative (BFS)
  // http://stackoverflow.com/questions/1590247/how-do-you-implement-a-stack-and-a-queue-in-javascript 
  // algo book pdf p616
  var queue = [];
  queue.push(root);
  var cur = {}; // tree node, object
  var count = 0,
    size, i;
  if (root !== null && root !== undefined) { // when root is null/undefined, return 0
    while (queue.length > 0) {
      // loop through all adjacent nodes of cur (binary tree, at most 2) --- from book
      // let's record the size of queue for now, and after looping through all same-level nodes, count++
      // this meets if there is only 1 root node as well
      size = queue.length;
      for (i = size; i > 0; i--) {
        // dequeue, get the head of the node in queue out(FIFO)
        cur = queue.shift();
        if (cur.left !== null && cur.left !== undefined) {
          queue.push(cur.left);
        }
        if (cur.right !== null && cur.right !== undefined) {
          queue.push(cur.right);
        }
      }
      count++; // same-level nodes all looped, count++
    }
  }
  return count;
};