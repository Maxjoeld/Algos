/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function(root) {
//   if (root === null) {
//       return 0;
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

function maxDepth(root) {
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
}

var maxDepth = function (root) {
  // You are starting with a default depth of 0
  let max = 0;

  // Since we are looking for the depth we'll be using a depth first search
  // The initial values are set to the root and the max fot simplicity
  const DFS = (node = root, depth = max) => {
    // Condition to check if the node doesn't have children
    if (node === null) {
      // set max to the maximum value of either max or depth
      max = Math.max(max, depth);
      return;
    }
    // Check each left and right. The next recursive call will check to see if it is null
    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  }
  // Call the Depth First Search
  DFS();
  return max;
};